import { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router';

import { useAppSelector } from '../redux/hooks';

interface Props {
  children: ReactNode;
};

const RequireAuth: FC<Props> = ({ children }) => {
  const { currentUser, isChecked } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  if (isChecked && !currentUser) {
    navigate('/login');
  }

  return children;
};

export default RequireAuth;
