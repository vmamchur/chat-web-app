import { httpClient } from '../http/httpClient';

function getAllUsers() {
  return httpClient.get('/users');
}

export const usersService = {
  getAllUsers,
};
