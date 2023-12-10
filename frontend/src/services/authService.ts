import { httpClient } from '../http/httpClient';
import { loginUserData, UserData } from '../types/UserData';

function register(userData: UserData) {
  return httpClient.post('/register', userData);
}

function login(userData: loginUserData) {
  return httpClient.post('/login', userData);
}

function refresh(refreshToken: string) {
  return httpClient.post('/refresh', { refreshToken });
}

export const authService = {
  register,
  login,
  refresh,
};
