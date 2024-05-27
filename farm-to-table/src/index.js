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
import Cart from './pages/Cart.js';
import Order from './pages/Order.js';
import MerchantPage from './pages/admin_view/MerchantPage.js';
import ProductListings from './pages/admin_view/ProductListings.js';
import SalesReport from './pages/admin_view/SalesReport.js';
import ViewRegisteredUsers from './pages/admin_view/ViewRegisteredUsers.js';
import ConfirmOrder from './pages/admin_view/ConfirmOrder.js';

const router = createBrowserRouter([
  { path: '/', element: <Root />, children: [
    { path: '/', element: <HomePage /> },
    { path: 'sign-in', element: <SignIn/> },
    { path: 'about', element: <About/>},
    { path: 'shop', element: <Shop/>},
    { path: 'sign-up', element: <SignUp/> },
    { path: 'cart', element: <Cart/>},
    { path: 'orders', element: <Order/>},
    { path: 'merchant-page', element: <MerchantPage /> },
    { path: 'product-listing', element: <ProductListings/> },
    { path: 'confirm-order', element: <ConfirmOrder/>},
    { path: 'sales-report', element: <SalesReport/>},
    { path: 'view-registered-users', element: <ViewRegisteredUsers/> },
    
  ]}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />    
  </React.StrictMode>
)
