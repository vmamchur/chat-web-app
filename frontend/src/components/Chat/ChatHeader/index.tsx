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

const ChatHeader = () => {
  return (
    <Root>
      <ChatHeaderUser>
        <ChatHeaderUserAvatar>
          <FaUser size={32} color="#ffffff" />
        </ChatHeaderUserAvatar>
        <div>
          <ChatHeaderDisplayName>
            displayname
          </ChatHeaderDisplayName>
          <ChatHeaderUserName>
            (@username)
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
