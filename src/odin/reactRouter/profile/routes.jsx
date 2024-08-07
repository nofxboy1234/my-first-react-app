import App from './App';
import Profile from './Profile';
import ErrorPage from './ErrorPage';
import SignUp from './SignUp';
import Register from './Register';
const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <SignUp />,
  },
  {
    path: 'profile/:name',
    element: <Profile />,
  },
  {
    path: 'register',
    element: <Register />,
  },
];

export default routes;
