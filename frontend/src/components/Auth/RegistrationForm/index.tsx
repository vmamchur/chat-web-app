import { Link } from 'react-router-dom';

import { AuthForm, AuthPrompt, Dash } from '../style';
import { ButtonVariant } from '../../../types/Button';
import CustomButton from '../../shared/CustomButton/CustomButton';
import CustomInput from '../../shared/CustomInput/CustomInput';

const RegistrationForm = () => {
  return (
    <AuthForm>
      <CustomInput
        value={''}
        onChange={() => { }}
        type="text"
        placeholder="Username"
      />

      <CustomInput
        value={''}
        onChange={() => { }}
        type="text"
        placeholder="Display Name"
      />

      <CustomInput
        value={''}
        onChange={() => { }}
        type="text"
        placeholder="Email"
      />

      <CustomInput
        value={''}
        onChange={() => { }}
        type="password"
        placeholder="Password"
      />

      <CustomInput
        value={''}
        onChange={() => { }}
        type="password"
        placeholder="Password Confirm"
      />

      <CustomButton variant={ButtonVariant.primary}>Sign up</CustomButton>
      <Dash />
      <AuthPrompt>
        Already have an account?
        <Link to="/login">Sign in!</Link>
      </AuthPrompt>
    </AuthForm>
  );
};

export default RegistrationForm;
