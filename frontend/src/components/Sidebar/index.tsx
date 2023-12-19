import { FC, useEffect } from 'react';

import { SidebarStyled } from './style';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getAllUsers } from '../../redux/slices/usersSlice';
import { Loader } from '../shared/Loader/style';
import UsersList from './UsersList';

const Sidebar: FC = () => {
  const dispatch = useAppDispatch();
  const { users, isLoading } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <SidebarStyled isLoading={isLoading}>
      {isLoading ? <Loader /> : <UsersList users={users} />}
    </SidebarStyled>
  );
};

export default Sidebar;
