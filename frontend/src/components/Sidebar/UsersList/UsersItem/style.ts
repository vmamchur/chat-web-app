import styled from 'styled-components';

export const UsersItemStyled = styled.li<{ isActive: boolean }>`
  padding: 10px 20px;
  display: flex;
  position: relative;
  gap: 10px;
  cursor: pointer;
  
  ${({ isActive }) => isActive && `
    &::after {
      content: '';
      position: absolute;
      display: block;
      width: 5px;
      background-color: #3db16b;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 10;
    }`}
`;

export const UsersItemBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UsersItemName = styled.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 16px;
  color: #ffffff;
`;

export const UsersItemLastSeen = styled.span<{ isOnline?: boolean }>`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);

  ${({ isOnline }) => isOnline && `
    color: #3db16b;
    font-weight: bold;
  `}
`;