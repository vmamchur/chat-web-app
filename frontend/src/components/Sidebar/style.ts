import styled from 'styled-components';

export const SidebarStyled = styled.div<{ isLoading?: boolean }>`
  height: 100%;
  width: 330px;
  border-radius: 6px;
  background-color: #464852;

  ${({ isLoading }) => isLoading && `
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;
