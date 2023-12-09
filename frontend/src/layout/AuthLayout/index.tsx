import { FC, ReactNode } from 'react';

import { Root } from './style';

interface Props {
  children: ReactNode;
}

const AuthLayout: FC<Props> = ({ children }) => {
  return (
    <Root>
      {children}
    </Root>
  );
};

export default AuthLayout;
