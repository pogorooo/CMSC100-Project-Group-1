import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import { store } from './pages/State/store.js';
import { Provider } from 'react-redux';
import Root from './pages/Root.js';
import SignIn from './pages/SignIn.js';
import SignUp from './pages/SignUp.js';
import HomePage from './pages/Home.js';
import Shop from './pages/customer_view/Shop.js';
import Cart from './pages/customer_view/Cart.js';
import Order from './pages/customer_view/Order.js';
import ProductListings from './pages/admin_view/ProductListings.js';
import SalesReport from './pages/admin_view/SalesReport.js';
import ViewRegisteredUsers from './pages/admin_view/ViewRegisteredUsers.js';
import ConfirmOrder from './pages/admin_view/ConfirmOrder.js';

//routes of the app
const router = createBrowserRouter([
  { path: '/', element: <Root />, children: [
    { path: '/', element: <HomePage /> },
    { path: 'sign-in', element: <SignIn/> },
    { path: 'shop', element: <Shop/>},
    { path: 'sign-up', element: <SignUp/> },
    { path: 'cart', element: <Cart/>},
    { path: 'orders', element: <Order/>},
    { path: 'product-listing', element: <ProductListings/> },
    { path: 'confirm-order', element: <ConfirmOrder/>},
    { path: 'sales-report', element: <SalesReport/>},
    { path: 'view-registered-users', element: <ViewRegisteredUsers/> },
    
  ]}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
//router provider inside provider
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />  
    </Provider> 
  </React.StrictMode>
)
