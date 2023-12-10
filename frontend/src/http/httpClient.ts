import { createClient } from './index';
import {
  getAuthData,
  saveAuthData,
} from '../helpers/authStorage';
import { API_URL } from '../constants/main';

export const httpClient = createClient();

httpClient.interceptors.request.use(
  (config) => {
    const customConfig = { ...config };
    const { accessToken } = getAuthData();

    if (accessToken) {
      customConfig.headers.Authorization = `JWT ${accessToken}`;
    }

    return customConfig;
  },
  (error) => {
    Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const { refreshToken } = getAuthData();

      if (!refreshToken) {
        return Promise.reject(error);
      }

      return fetch(`${API_URL}/refresh`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          refreshToken,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.accessToken) {
            saveAuthData(res.accessToken, res.refreshToken);
            httpClient.defaults.headers.common.Authorization =
              `JWT ${getAuthData().accessToken}`;

            return httpClient(originalRequest);
          }
          
          return Promise.reject(res);
        });
    }

    return Promise.reject(error);
  }
);
