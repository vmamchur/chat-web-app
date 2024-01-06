import { FC, useEffect, useState } from 'react';

import {
  SidebarHeader,
  SidebarStyled,
  SidebarTitle
} from './style';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getUsers } from '../../redux/slices/usersSlice';
import { LoaderWrapper, Loader } from '../shared/Loader/style';
import UsersList from './UsersList';
import CustomInput from '../shared/CustomInput/CustomInput';
import useDebounce from '../../hooks/useDebounce';

const Sidebar: FC = () => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  const { users, isLoading } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers(debouncedSearch));
  }, [debouncedSearch, dispatch]);

  return (
    <SidebarStyled>
      <SidebarHeader>
        <SidebarTitle>Chats</SidebarTitle>
        <CustomInput
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder='Search chat'
        />
      </SidebarHeader>
      {isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <UsersList users={users} />
      )}
    </SidebarStyled >
  );
};

export default Sidebar;
