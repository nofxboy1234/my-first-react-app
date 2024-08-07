import App from './App';
import Profile from './Profile';
import ErrorPage from './ErrorPage';
import SignUp from './SignUp';

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
];

export default routes;
