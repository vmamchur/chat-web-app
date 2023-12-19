import { FC } from 'react';

import { Content, Root } from './style';
import Chat from '../../components/Chat';
import Navigation from '../../components/Navigation';
import ProfileEditModal from '../../modals/ProfileEdit';
import Sidebar from '../../components/Sidebar';

const MainPage: FC = () => {
  return (
    <Root>
      <Navigation />
      <Content>
        <Sidebar />
        <Chat />
      </Content>
      <ProfileEditModal />
    </Root>
  );
};

export default MainPage;
