import { FaPaperPlane } from 'react-icons/fa';

import {
  ChatFooterForm,
  ChatFooterFormInput,
  ChatFooterFormSubmit,
  Root,
} from './style';

const ChatFooter = () => {
  return (
    <Root>
      <ChatFooterForm>
        <ChatFooterFormInput />
        <ChatFooterFormSubmit type="button">
          <FaPaperPlane size={16} color="#ffffff" />
        </ChatFooterFormSubmit>
      </ChatFooterForm>
    </Root>
  );
};

export default ChatFooter;
