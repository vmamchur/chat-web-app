import { FC } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';

import { useAppSelector } from '../../../redux/hooks';
import { ProfileForm } from './style';
import CustomInput from '../../../components/shared/CustomInput/CustomInput';
import AvatarField from './AvatarField';

const validationSchema = Yup.object().shape({
  displayName: Yup.string()
    .required('Display Name is required')
    .min(3, 'Display Name must be at least 3 characters'),
});

const Profile: FC = () => {
  const { currentUser } = useAppSelector((state) => state.auth);

  const initialValues = {
    displayName: currentUser?.displayName
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        // handleSubmit,
      }) => (
        <ProfileForm >
          <CustomInput
            value={values.displayName || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.displayName ? errors.displayName : undefined}
            label="Display Name"
            name="displayName"
            type="text"
            backgroundColor='#5a5c66'
          />
          <AvatarField />
        </ProfileForm>
      )}
    </Formik>
  );
};

export default Profile;
