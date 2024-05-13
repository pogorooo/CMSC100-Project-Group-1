import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import Root from './pages/Root';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import HomePage from './pages/Home';
import About from './pages/About.js';
import Shop from './pages/Shop.js';

const router = createBrowserRouter([
  { path: '/', element: <Root />, children: [
    { path: '/', element: <HomePage /> },
    { path: 'sign-in', element: <SignIn/> },
    { path: 'about', element: <About/>},
    { path: 'shop', element: <Shop/>},
    { path: 'sign-up', element: <SignUp/> },
    {}
  ]}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />    
  </React.StrictMode>
);
