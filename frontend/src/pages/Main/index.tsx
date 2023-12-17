import { FC } from 'react';

import { Content, Root, Sidebar } from './style';
import Chat from '../../components/Chat';
import Navigation from '../../components/Navigation';
import ProfileEditModal from '../../modals/ProfileEdit';

const MainPage: FC = () => {
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
