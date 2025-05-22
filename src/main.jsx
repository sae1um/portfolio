import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import ErrorElement from './pages/ErrorElement.jsx';
import Test from './components/Test.jsx';

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/contact",
        Component: Contact
      },
      {
        path: "/test",
        Component: Test
      }
    ],
    errorElement: <ErrorElement />,
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
