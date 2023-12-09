import { FC } from 'react';

import AuthLayout from '../../layout/AuthLayout';
import RegistrationForm from '../../components/Auth/RegistrationForm';

const RegistrationPage: FC = () => {
  return (
    <AuthLayout>
      <RegistrationForm />
    </AuthLayout>
  );
};

export default RegistrationPage;
