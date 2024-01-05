import { FC } from 'react';

import { Message } from '../../../../types/Message';
import { useAppSelector } from '../../../../redux/hooks';
import { 
  ChatMessageAction, 
  ChatMessageContent, 
  ChatMessageStyled, 
  ChatMessageTimestamp,
} from './style';
import formatDate from '../../../../helpers/formatDate';

interface Props {
  message: Message;
}

const ChatMessage: FC<Props> = ({ message }) => {
  const { currentUser } = useAppSelector((state) => state.auth);

  const isMine = currentUser?.id === message.sender.id;
  const formattedCreatedAt = formatDate(message.createdAt);

  return (
    <ChatMessageStyled key={message.id} isMine={isMine}>
      <ChatMessageContent isMine={isMine}>
        {message.text}
      </ChatMessageContent>
      <ChatMessageAction>
        <ChatMessageTimestamp>
          {formattedCreatedAt}
        </ChatMessageTimestamp>
      </ChatMessageAction>
    </ChatMessageStyled>
  );
};

export default ChatMessage;
