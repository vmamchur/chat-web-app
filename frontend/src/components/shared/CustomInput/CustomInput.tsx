import { FC } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid #ced4da;
  color: #ced4da;
  font-size: 20px;
  background-color: #272935;
  transition: border-color 0.2s;
  outline: none;
  
  &:focus {
    border-color: #3db16b;
  }
`;

interface Props {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  type: string
  placeholder?: string
}

const CustomInput: FC<Props> = ({
  value,
  onChange,
  type,
  placeholder,
}) => {
  return (
    <Input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default CustomInput;
