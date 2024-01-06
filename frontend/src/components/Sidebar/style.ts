import styled from 'styled-components';

export const SidebarStyled = styled.div`
  height: 100%;
  width: 380px;
  border-radius: 6px;
  background-color: #464852;
`;

export const SidebarHeader = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const SidebarTitle = styled.div`
  display: flex;
  align-self: flex-start;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
