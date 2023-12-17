import { useEffect } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import { useAppDispatch } from './redux/hooks';
import { checkAuth } from './redux/slices/authSlice';
import { getAuthData } from './helpers/authStorage';
import RequireAuth from './containers/RequireAuth';
import RegistrationPage from './pages/Registration';
import MainPage from './pages/Main';
import LoginPage from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/registration',
    element: <RegistrationPage />,
  },
  {
    path: '/',
    element: (
      <RequireAuth>
        <MainPage />
      </RequireAuth>
    ),
  },
]);

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const { refreshToken } = getAuthData();

    dispatch(checkAuth(refreshToken));
  }, [dispatch]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
