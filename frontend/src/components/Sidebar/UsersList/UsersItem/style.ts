import styled from 'styled-components';

export const UsersItemStyled = styled.li`
  display: flex;
  gap: 10px;
  cursor: pointer;
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

export const UsersItemLastSeen = styled.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
`;