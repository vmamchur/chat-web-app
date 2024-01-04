import { useEffect } from 'react';

import { ChatMessages, ChatBodyStyled } from './style';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
  addMessage,
  getAllMessages
} from '../../../redux/slices/messagesSlice';
import { Message } from '../../../types/Message';
import scrollChatToBottom from '../../../helpers/scrollChatToBottom';
import ChatMessage from './ChatMessage';

const ChatBody = () => {
  const { messages } = useAppSelector((state) => state.messages);
  const { selectedUser } = useAppSelector((state) => state.users);
  const { socketInstance } = useAppSelector((state) => state.socket);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!selectedUser) {
      return;
    }

    dispatch(getAllMessages(selectedUser.id));
  }, [dispatch, selectedUser]);

  useEffect(() => {
    if (!socketInstance) {
      return;
    }

    const handleNewMessage = (message: Message) => {
      dispatch(addMessage(message));
      scrollChatToBottom();
    };

    socketInstance.on('message', handleNewMessage);

    return () => {
      socketInstance.off('message', handleNewMessage);
    };
  }, [dispatch, socketInstance]);

  return (
    <ChatBodyStyled>
      <ChatMessages id="chat">
        {messages.map(message => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </ChatMessages>
    </ChatBodyStyled>
  );
};

export default ChatBody;
