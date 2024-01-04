import styled from 'styled-components';

export const ChatMessageStyled = styled.div<{ isMine: boolean }>`
  max-width: 75%;
  width: fit-content;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  margin-left: ${({ isMine }) => isMine ? 'auto' : '0'};
  gap: 4px;
  word-break: break-word;
`;

export const ChatMessageContent = styled.div<{ isMine: boolean }>`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-radius: 6px;
  background-color: ${({ isMine }) => isMine ?
    'rgba(61, 177, 107, 0.3)' :'#464852'};
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
