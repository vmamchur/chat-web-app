import styled from 'styled-components';

import { NavigationItemProps } from './types';

export const Root = styled.div`
  height: 100vh;
  width: 70px;
  background-color: #464852;
`;

export const Logo = styled.div`
  height: 70px;
  width: 100%;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3db16b;
`;

export const NavigationList = styled.ul`
  height: calc(100vh - 70px - 16px);
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const NavigationItem = styled.li<NavigationItemProps>`
  width: 100%;
  display: flex;
  flex-grow: ${({ flexGrow }) => flexGrow || 0};
  align-items: flex-start;
  justify-content: center;
`;

export const NavigationItemLink = styled.a`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #3b3c46;
  }
`;
