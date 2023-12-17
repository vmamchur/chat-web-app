import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { login } from '../../../redux/slices/authSlice';
import { AuthForm, AuthPrompt, AuthTitle, Dash } from '../style';
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
  const { currentUser, isChecked } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialValues = {
    username: '',
    password: '',
  };

  useEffect(() => {
    if (isChecked && currentUser) {
      navigate('/');
    }
  }, [currentUser, isChecked, navigate]);

  const handleSubmit = (values: typeof initialValues) => {
    dispatch(login({
      username: values.username,
      password: values.password,
    }));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
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
          <AuthTitle>Sign in</AuthTitle>
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