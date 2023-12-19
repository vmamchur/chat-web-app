import { FC } from 'react';

import { User } from '../../../types/User';
import { UsersListStyled } from './style';
import { useAppDispatch } from '../../../redux/hooks';
import UsersItem from './UsersItem';
import { selectUser } from '../../../redux/slices/usersSlice';

interface Props {
  users: User[];
}

const UsersList: FC<Props> = ({ users }) => {
  const dispatch = useAppDispatch();

  const handleUserClick = (user: User) => {
    dispatch(selectUser(user));
  };

  return (
    <UsersListStyled>
      {users.map((user) => (
        <UsersItem key={user.id} data={user} onClick={handleUserClick} />
      ))}      
    </UsersListStyled>
  );
};

export default UsersList;
