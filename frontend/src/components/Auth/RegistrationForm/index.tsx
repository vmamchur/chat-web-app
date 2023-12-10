import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { useAppDispatch } from '../../../redux/hooks';
import { register } from '../../../redux/slices/authSlice';
import { AuthForm, AuthPrompt, AuthTitle, Dash } from '../style';
import { ButtonVariant } from '../../../types/Button';
import CustomButton from '../../shared/CustomButton/CustomButton';
import CustomInput from '../../shared/CustomInput/CustomInput';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters'),
  displayName: Yup.string()
    .required('Display Name is required')
    .min(3, 'Display Name must be at least 3 characters'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Password confirmation is required'),
});

const RegistrationForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialValues = {
    username: '',
    displayName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch(register({
          username: values.username,
          displayName: values.displayName,
          email: values.email,
          password: values.password,
        }));
        navigate('/');
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
          <AuthTitle>Sign up</AuthTitle>
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
            value={values.displayName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.displayName ? errors.displayName : undefined}
            type="text"
            placeholder="Display Name"
            name="displayName"
          />

          <CustomInput
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email ? errors.email : undefined}
            type="text"
            placeholder="Email"
            name="email"
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

          <CustomInput
            value={values.passwordConfirm}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.passwordConfirm ? errors.passwordConfirm : undefined}
            type="password"
            placeholder="Password Confirm"
            name="passwordConfirm"
          />

          <CustomButton variant={ButtonVariant.primary} type="submit">
            Sign up
          </CustomButton>
          <Dash />
          <AuthPrompt>
            Already have an account?{' '}
            <Link to="/login">Sign in!</Link>
          </AuthPrompt>
        </AuthForm>
      )}
    </Formik>
  );
};

export default RegistrationForm;
