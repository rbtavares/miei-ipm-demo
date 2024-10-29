import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LoginPage from './pages/LoginPage.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: import.meta.env.BASE_URL,
    element: <LoginPage />,
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
