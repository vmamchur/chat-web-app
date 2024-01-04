import { useState, useCallback } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

import {
  ChatFooterForm,
  ChatFooterFormInput,
  ChatFooterFormSubmit,
  Root,
} from './style';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { postMessage } from '../../../redux/slices/messagesSlice';
import scrollChatToBottom from '../../../helpers/scrollChatToBottom';

const ChatFooter = () => {
  const [messageText, setMessageText] = useState('');
  const { selectedUser } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  const handleSendMessage = useCallback(() => {
    if (!selectedUser || !messageText.trim()) {
      return;
    }

    dispatch(postMessage({
      userId: selectedUser.id,
      text: messageText,
    }));

    setMessageText('');
    scrollChatToBottom();
  }, [dispatch, messageText, selectedUser]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      handleSendMessage();
    }
  }, [handleSendMessage]);

  return (
    <Root>
      <ChatFooterForm>
        <ChatFooterFormInput
          value={messageText}
          onChange={(event) => setMessageText(event.target.value)}
          onKeyDown={handleKeyDown}
          rows={2}
          spellCheck={false}
        />
        <ChatFooterFormSubmit onClick={handleSendMessage} type="button">
          <FaPaperPlane size={16} color="#ffffff" />
        </ChatFooterFormSubmit>
      </ChatFooterForm>
    </Root>
  );
};

export default ChatFooter;
