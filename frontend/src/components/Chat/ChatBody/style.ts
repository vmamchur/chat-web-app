import styled from 'styled-components';

export const Root = styled.div`
  height: calc(100vh - 70px - 60px - 82px - 40px);
  width: 100%;
  margin: 20px 0;
`;

export const ChatMessages = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
`;

export const ChatMessage = styled.div<{ isMine: boolean }>`
  max-width: 75%;
  width: fit-content;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  margin-left: ${({ isMine }) => isMine ? 'auto' : '0'};
  gap: 4px;
  word-break: break-word;
`;

export const ChatMessageContent = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-radius: 6px;
  background-color: rgba(61, 177, 107, 0.3);
  color: #fff;
`;

export const ChatMessageAction = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ChatMessageTimestamp = styled.span`
  color: #828282;
`;