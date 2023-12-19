import styled from 'styled-components';

export const ChatStyled = styled.div<{ noChatSelected?: boolean }>`
  width: 100%;

  ${({ noChatSelected }) => noChatSelected && `
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;
