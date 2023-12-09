import { FC } from 'react';

import AuthLayout from '../../layout/AuthLayout';
import LoginForm from '../../components/Auth/LoginForm';

const LoginPage: FC = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
