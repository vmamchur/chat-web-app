import styled from 'styled-components';

export const AvatarStyled = styled.div<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #3db16b;
`;
