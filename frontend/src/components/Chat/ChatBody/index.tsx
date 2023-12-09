import { 
  ChatMessage,
  ChatMessageAction,
  ChatMessageContent,
  ChatMessageTimestamp,
  ChatMessages,
  Root,
} from './style';

const ChatBody = () => {
  return (
    <Root>
      <ChatMessages>
        <ChatMessage isMine>
          <ChatMessageContent>
            1111
          </ChatMessageContent>
          <ChatMessageAction>
            <ChatMessageTimestamp>
              10 second(s) ago
            </ChatMessageTimestamp>
          </ChatMessageAction>
        </ChatMessage>
      </ChatMessages>
    </Root>
  );
};

export default ChatBody;
