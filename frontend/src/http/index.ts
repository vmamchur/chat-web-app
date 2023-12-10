import axios from 'axios';

import { API_URL } from '../constants/main';

export function createClient() {
  return axios.create({
    baseURL: API_URL,
    withCredentials: true,
    timeout: 10000,
  });
}
