import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './odin/reactRouter/profile/App';
import Profile from './odin/reactRouter/profile/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'profile/:name',
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
