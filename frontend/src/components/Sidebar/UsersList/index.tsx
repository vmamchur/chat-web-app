import { FC } from 'react';

import { User } from '../../../types/User';
import { UsersListStyled } from './style';
import UsersItem from './UsersItem';

interface Props {
  users: User[];
}

const UsersList: FC<Props> = ({ users }) => {
  return (
    <UsersListStyled>
      {users.map((user) => (
        <UsersItem key={user.id} data={user} />
      ))}      
    </UsersListStyled>
  );
};

export default UsersList;
