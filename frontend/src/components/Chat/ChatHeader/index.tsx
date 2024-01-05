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
import formatDate from '../../../helpers/formatDate';

interface Props {
  user: User;
}

const ChatHeader: FC<Props> = ({ user }) => {
  const formattedLastSeen = formatDate(user.lastSeen);

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
          {user.isOnline ? (
            <ChatHeaderStatus isOnline>
              Online
            </ChatHeaderStatus>
          ) : (
            <ChatHeaderStatus>
              {formattedLastSeen}
            </ChatHeaderStatus>
          )}
        </div>
      </ChatHeaderUser>
      <ChatHeaderActionsButton>
        <MdMoreHoriz size={32} color="#ffffff" />
      </ChatHeaderActionsButton>
    </Root>
  );
};

export default ChatHeader;
