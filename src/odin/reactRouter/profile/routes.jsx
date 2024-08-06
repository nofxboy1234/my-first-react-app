import App from './odin/reactRouter/profile/App';
import Profile from './odin/reactRouter/profile/Profile';
import ErrorPage from './odin/reactRouter/profile/ErrorPage';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'profile/:name',
    element: <Profile />,
  },
];

export default routes;
