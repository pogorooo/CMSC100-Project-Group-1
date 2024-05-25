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
import MerchantPage from './pages/admin_view/MerchantPage.js';
import ProductListingsPage from './pages/admin_view/ProductListingsPage.js';
import SalesReportPage from './pages/admin_view/SalesReportPage.js';
import ViewRegisteredUsersPage from './pages/admin_view/ViewRegisteredUsersPage.js';
import ConfirmOrderPage from './pages/admin_view/ConfirmOrderPage.js';

const router = createBrowserRouter([
  { path: '/', element: <Root />, children: [
    { path: '/', element: <HomePage /> },
    { path: 'sign-in', element: <SignIn/> },
    { path: 'about', element: <About/>},
    { path: 'shop', element: <Shop/>},
    { path: 'sign-up', element: <SignUp/> },
    { path: 'merchant-page', element: <MerchantPage />, children: [
      { path: 'merchant-page', element: <MerchantPage /> },
      { path: 'product-listing', element: <ProductListingsPage/> },
      { path: 'confirm-order', element: <ConfirmOrderPage/>},
      { path: 'sales-report', element: <SalesReportPage/>},
      { path: 'view-registered-users', element: <ViewRegisteredUsersPage/> },
    ]}
  ]}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />    
  </React.StrictMode>
);
