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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
