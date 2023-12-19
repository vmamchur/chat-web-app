import { TbMessagesOff } from 'react-icons/tb';

import { ChatEmptyStyled } from './style';

const ChatEmpty = () => {
  return (
    <ChatEmptyStyled>
      <TbMessagesOff size={160} />
      Select a chat to read and write messages
    </ChatEmptyStyled>
  );
};

export default ChatEmpty;
