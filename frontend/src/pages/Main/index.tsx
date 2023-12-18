import { FC, useEffect } from 'react';

import { Content, Root, Sidebar } from './style';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Chat from '../../components/Chat';
import Navigation from '../../components/Navigation';
import ProfileEditModal from '../../modals/ProfileEdit';
import { getAllUsers } from '../../redux/slices/usersSlice';

const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  console.log(users);

  return (
    <Root>
      <Navigation />
      <Content>
        <Sidebar>

        </Sidebar>
        <Chat />
      </Content>
      <ProfileEditModal />
    </Root>
  );
};

export default MainPage;
