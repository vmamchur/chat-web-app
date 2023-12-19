import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  width: 60px;
  height: 60px;
  border: 16px solid #ffffff;
  border-top: 16px solid #3db16b;
  border-radius: 50%;
  animation: ${spin} 2s linear infinite;
`;
