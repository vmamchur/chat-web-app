import styled from 'styled-components';

export const TabsStyled = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;
  list-style: none;
  border-bottom: 1px solid #5a5c66;
`;

export const TabItem = styled.li<{ isActive?: boolean }>`
  margin-bottom: -1px;
  padding: 8px 16px;
  color: rgba(255, 255, 255, 0.7);
  border: 1px solid transparent;
  border-radius: 4px 4px 0 0;
  font-size: 14px;
  cursor: pointer;

  ${({ isActive }) => isActive && (
    ` 
      position: relative;
      border-color: #5a5c66;

      &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        right: 0;
        height: 4px;
        background-color: #464852;
      }
    `
  )}
`;