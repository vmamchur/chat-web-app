import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { AuthForm, AuthPrompt, Dash } from '../style';
import { ButtonVariant } from '../../../types/Button';
import CustomInput from '../../shared/CustomInput/CustomInput';
import CustomButton from '../../shared/CustomButton/CustomButton';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

const LoginForm = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <AuthForm onSubmit={handleSubmit}>
          <CustomInput
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.username ? errors.username : undefined}
            type="text"
            placeholder="Username"
            name="username"
          />

          <CustomInput
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password ? errors.password : undefined}
            type="password"
            placeholder="Password"
            name="password"
          />

          <CustomButton variant={ButtonVariant.primary} type="submit">
            Sign in
          </CustomButton>
          <Dash />
          <AuthPrompt>
            Already have an account?{' '}
            <Link to="/registration">Sign up!</Link>
          </AuthPrompt>
        </AuthForm>)}
    </Formik>
  );
};

export default LoginForm;