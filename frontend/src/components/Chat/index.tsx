import { ChatStyled } from './style';
import { useAppSelector } from '../../redux/hooks';
import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import ChatEmpty from './ChatEmpty';

const Chat = () => {
  const { selectedUser } = useAppSelector((state) => state.users);

  return (
    <ChatStyled noChatSelected={!selectedUser}>
      {!selectedUser ? (
        <ChatEmpty />
      ) : (
        <>
          <ChatHeader user={selectedUser} />
          <ChatBody />
          <ChatFooter />
        </>
      )}
    </ChatStyled>
  );
};

export default Chat;
