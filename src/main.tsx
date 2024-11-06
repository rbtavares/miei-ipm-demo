import '@/index.css';
import { getPath } from '@/lib/utils.ts';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import NotFoundPage from '@/pages/NotFoundPage';
import ProfilePage from '@/pages/ProfilePage';
import CoursePage from './pages/CoursePage.tsx';
import SchedulePage from '@/pages/SchedulePage';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
    path: getPath('/course'),
    element: <CoursePage />
  },
  {
    path: getPath('/schedule'),
    element: <SchedulePage />
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