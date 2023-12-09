import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

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
    element: <MainPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
