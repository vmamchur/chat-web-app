import { Link } from 'react-router-dom';

import { AuthForm, AuthPrompt, Dash } from '../style';
import { ButtonVariant } from '../../../types/Button';
import CustomInput from '../../shared/CustomInput/CustomInput';
import CustomButton from '../../shared/CustomButton/CustomButton';

const LoginForm = () => {
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
        type="password"
        placeholder="Password"
      />

      <CustomButton variant={ButtonVariant.primary}>Sign in</CustomButton>
      <Dash />
      <AuthPrompt>
        Already have an account?
        <Link to="/registration">Sign up!</Link>
      </AuthPrompt>
    </AuthForm>
  );
};

export default LoginForm;