import { FC } from 'react';

import { Content, Root, Sidebar } from './style';
import Chat from '../../components/Chat';
import Navigation from '../../components/Navigation';

const MainPage: FC = () => {
  return (
    <Root>
      <Navigation />
      <Content>
        <Sidebar>

        </Sidebar>

        <Chat />
      </Content>
    </Root>
  );
};

export default MainPage;
