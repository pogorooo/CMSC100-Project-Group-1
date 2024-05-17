import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import Root from './pages/Root';
import SignIn from './pages/SignIn';
import HomePage from './pages/Home';
import About from './pages/About.js';
import Shop from './pages/Shop.js';
import Cart from './pages/Cart.js';

const router = createBrowserRouter([
   { path: '/', element: <Root />, children: [
    { path: '/', element: <HomePage /> },
    { path: 'sign-in', element: <SignIn/> },
    { path: 'about', element: <About/>},
    { path: 'shop', element: <Shop/>},
    { path: 'cart', element: <Cart/>}
  ]}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />    
  </React.StrictMode>
);
