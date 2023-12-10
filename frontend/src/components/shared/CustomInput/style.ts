import styled from 'styled-components';

export const Input = styled.input<{ error: boolean }>`
  width: 100%;
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid ${({ error }) => error ? '#ff6b6b' : '#ced4da'};
  color: #ced4da;
  font-size: 20px;
  background-color: #272935;
  transition: border-color 0.2s;
  outline: none;
  
  &:focus {
    border-color: ${({ error }) => error ? '#ff6b6b' : '#3db16b'};
  }
`;

export const InputError = styled.p`
  margin: 0;
  padding-top: 4px;
  font-size: 12px;
  color: #ff6b6b;
`;