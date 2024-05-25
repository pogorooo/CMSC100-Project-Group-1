import { Outlet, Link } from 'react-router-dom';

import './merchantPages.css';

export default function MerchantPage() {
    return (
      <>
        <div class = "dashboard">
          <div class = "left-sidebar">
            <p class ="sidebar-element">View Registered Users</p>
            <p class ="sidebar-element">Product Listings</p>
            <p class ="sidebar-element">Confirm Order</p>
            <p class ="sidebar-element">Sales Report</p>
          </div>
          <div class = "right-body">
            <Outlet />
          </div>
        </div>
      </>

      
    )
  }