import { FC } from 'react';

import { MdMoreHoriz } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';

import {
  ChatHeaderActionsButton,
  ChatHeaderDisplayName,
  ChatHeaderStatus,
  ChatHeaderUser,
  ChatHeaderUserAvatar,
  ChatHeaderUserName,
  Root,
} from './style';
import { User } from '../../../types/User';

interface Props {
  user: User;
}

const ChatHeader: FC<Props> = ({ user }) => {
  return (
    <Root>
      <ChatHeaderUser>
        <ChatHeaderUserAvatar>
          <FaUser size={32} color="#ffffff" />
        </ChatHeaderUserAvatar>
        <div>
          <ChatHeaderDisplayName>
            {user.displayName}
          </ChatHeaderDisplayName>
          <ChatHeaderUserName>
            (@{user.username})
          </ChatHeaderUserName>
          <ChatHeaderStatus>
            Online
          </ChatHeaderStatus>
        </div>
      </ChatHeaderUser>
      <ChatHeaderActionsButton>
        <MdMoreHoriz size={32} color="#ffffff" />
      </ChatHeaderActionsButton>
    </Root>
  );
};

export default ChatHeader;
