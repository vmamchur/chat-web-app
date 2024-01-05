import styled from 'styled-components';

export const ChatBodyStyled = styled.div`
  height: calc(100vh - 70px - 60px - 82px - 40px);
  width: 100%;
  margin: 20px 0;
`;

export const ChatMessages = styled.div<{ isLoading?: boolean }>`
  height: 100%;
  width: 100%;
  padding-right: 20px;
  overflow-y: auto;

  ${({ isLoading }) => isLoading && `
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
