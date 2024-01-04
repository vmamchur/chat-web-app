import { FC } from 'react';
import { formatDistanceToNow } from 'date-fns';

import { Message } from '../../../../types/Message';
import { useAppSelector } from '../../../../redux/hooks';
import { 
  ChatMessageAction, 
  ChatMessageContent, 
  ChatMessageStyled, 
  ChatMessageTimestamp,
} from './style';

interface Props {
  message: Message;
}

const ChatMessage: FC<Props> = ({ message }) => {
  const { currentUser } = useAppSelector((state) => state.auth);

  const isMine = currentUser?.id === message.sender.id;
  const formattedDate = formatDistanceToNow(
    new Date(message.createdAt),
    { addSuffix: true }
  );

  return (
    <ChatMessageStyled key={message.id} isMine={isMine}>
      <ChatMessageContent isMine={isMine}>
        {message.text}
      </ChatMessageContent>
      <ChatMessageAction>
        <ChatMessageTimestamp>
          {formattedDate}
        </ChatMessageTimestamp>
      </ChatMessageAction>
    </ChatMessageStyled>
  );
};

export default ChatMessage;
