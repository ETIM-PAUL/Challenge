import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './styles/general.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import ContactUs from 'Pages/ContactUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: < NotFoundPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
