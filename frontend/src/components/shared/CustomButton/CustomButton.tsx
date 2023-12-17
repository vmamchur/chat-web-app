import { FC, ReactNode } from 'react';
import styled from 'styled-components';

import { ButtonVariant } from '../../../types/Button';

const Button = styled.button`
  height: 40px;
  width: 100%;
  padding: 0 16px;
  border-radius: 6px;
  border: none;
  color: #ffffff;
  font-size: 16px;
  transition: background-color 0.2s;
  cursor: pointer;
`;

const PrimaryButton = styled(Button)`
  background-color: #3db16b;

  &:hover {
    background-color: #329b5c;
  }
`;

const SecondaryButton = styled(Button)`
`;

interface Props {
  children: ReactNode;
  variant: ButtonVariant;
  [x: string]: unknown;
}

const buttonTypes: Record<Props['variant'], typeof Button> = {
  primary: PrimaryButton,
  secondary: SecondaryButton,
};

const CustomButton: FC<Props> = ({
  children,
  variant,
  ...rest
}) => {
  const ButtonComponent = buttonTypes[variant];

  return (
    <ButtonComponent {...rest}>
      {children}
    </ButtonComponent>
  );
};

export default CustomButton;
