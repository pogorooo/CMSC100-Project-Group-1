import{useState} from 'react';

import './merchantPages.css';
import ProductListings from './ProductListings';
import ConfirmOrder from './ConfirmOrder';
import SalesReport from './SalesReport';
import ViewRegisteredUsers from './ViewRegisteredUsers';

export default function MerchantPage() {

  const [showViewRegisteredUsers, setShowViewRegisteredUsers] = useState(true);
  const [showProductListings, setShowProductListings] = useState(false);
  const [showConfirmOrder, setShowConfirmOrder] = useState(false);
  const [showSalesReport, setSalesReport] = useState(false);

  function handleShowViewRegisteredUsers  () {
    setShowViewRegisteredUsers(true);
    setShowProductListings(false);
    setShowConfirmOrder(false);
    setSalesReport(false);
  };

  function handleShowProductListings  () {
    setShowViewRegisteredUsers(false);
    setShowProductListings(true);
    setShowConfirmOrder(false);
    setSalesReport(false);
  };

  function handleShowConfirmOrder  () {
    setShowViewRegisteredUsers(false);
    setShowProductListings(false);
    setShowConfirmOrder(true);
    setSalesReport(false);
    
  };

  function handleShowSalesReport  () {
    setShowViewRegisteredUsers(false);
    setShowProductListings(false);
    setShowConfirmOrder(false);
    setSalesReport(true);
  };

    return (
      <>
        <br></br>
        <div class = "dashboard">
          <div class = "left-sidebar">
            <div class ="sidebar-elements">
              <button onClick={handleShowViewRegisteredUsers}>View Registered Users</button>
              <button onClick={handleShowProductListings}>Product Listings</button>
              <button onClick={handleShowConfirmOrder}>Confirm Order</button>
              <button onClick={handleShowSalesReport}>Sales Report</button>
            </div>
          </div>
          <div class = "right-body">
            {showViewRegisteredUsers && (
              <ViewRegisteredUsers />
            )}
            {showProductListings && (
              <ProductListings />
            )}
            {showConfirmOrder && ( 
              <ConfirmOrder />
            )}
            {showSalesReport && (
              <SalesReport />
            )}
          </div>
        </div>
        <br></br>
      </>

      
    )
  }