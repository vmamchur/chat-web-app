import styled from 'styled-components';

export const Root = styled.header`
  height: 70px;
  width: 100%;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #32343e;
`;

export const ChatHeaderUser = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ChatHeaderUserAvatar = styled.div`
  height: 64px;
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #3db16b;
`;

export const ChatHeaderDisplayName = styled.div`
  display: inline;
  margin-right: 4px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

export const ChatHeaderUserName = styled.div`
  display: inline;
  color: #fff;
  font-size: 12px;
`;

export const ChatHeaderStatus = styled.div<{ isOnline?: boolean }>`
  display: block;
  color: #fff;
  font-size: 12px;

  ${({ isOnline }) => isOnline && `
    color: #3db16b;
    font-weight: bold;
  `}
`;
