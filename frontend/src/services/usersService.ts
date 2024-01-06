import { httpClient } from '../http/httpClient';

function getUsers(searchValue: string) {
  return httpClient.get('/users', {
    params: {
      searchValue,
    },
  });
}

export const usersService = {
  getUsers,
};
