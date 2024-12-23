import '@/index.css';
import { getPath } from '@/lib/utils.ts';
import HomePage from '@/pages/home/HomePage.tsx';
import LoginPage from '@/pages/login/LoginPage.tsx';
import NotFoundPage from '@/pages/notfound/NotFoundPage.tsx';
import ProfilePage from '@/pages/profile/ProfilePage.tsx';
import CoursePage from './pages/course/CoursePage.tsx';
import SchedulePage from '@/pages/schedule/SchedulePage.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from 'sonner';

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
    path: getPath('/course/:name'),
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
    <Toaster />
    <RouterProvider router={router} />
  </StrictMode>,
);