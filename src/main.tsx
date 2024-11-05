import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import { getPath } from './lib/utils.ts';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import ProfilePage from './pages/ProfilePage.tsx';

const router = createBrowserRouter([
  {
    path: getPath('/'),
    element: <LoginPage />,
  },
  {
    path: getPath('/home'),
    element: <HomePage />,
  },
  {
    path: getPath('/profile'),
    element: <ProfilePage />
  },
  {
    path: '*',
    element: <NotFoundPage />, // Wildcard route for 404 page
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);