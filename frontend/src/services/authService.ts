import { httpClient } from '../http/httpClient';
import { LoginUserData, RegisterUserData } from '../types/UserData';

function register(userData: RegisterUserData) {
  return httpClient.post('/register', userData);
}

function login(userData: LoginUserData) {
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
