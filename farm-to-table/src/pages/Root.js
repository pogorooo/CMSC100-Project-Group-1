import { Outlet, Link } from 'react-router-dom';
import{useState} from 'react';
import './Root.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
//import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function Root() {
  const [isCustomerView, setIsCustomerView] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const[orders, setOrders] = useState([]);
  const[isAdminView, setIsAdminView] = useState(false);

    return (
      <>
        <nav>
          <ul>
            <li className='title'><Link to={`/`} >Farm-to-table</Link></li>   
            <div className='rightSide'>  
              {/* to show the shop and shopping cart only when the user signed in (customer view) */}
              {isCustomerView && (
                <li>
                  <Link to={`/shop`}> 
                  <StorefrontIcon sx={{ fontSize: "3vh" }}/>
                  </Link>
                </li>
              )}
              {isCustomerView && ( 
                <li>
                  <Link  to={`/cart`}>
                    <ShoppingCartOutlinedIcon sx={{ fontSize: "3vh" }}/>
                  </Link>
                </li>
              )}
              {isCustomerView && (
                <li>
                  <Link to={`/orders`}> 
                  <ShoppingBagOutlinedIcon sx={{ fontSize: "3vh" }}/>
                  </Link>
                </li>
              )}

              {isAdminView && (
                 <li>
                  <Link to={`product-listing`}> 
                  <Inventory2OutlinedIcon sx={{ fontSize: "3vh" }}/>
                  </Link>
                </li>
              )}
              {isAdminView && (
                <li>
                  <Link to={`confirm-order`}> 
                  <InventoryOutlinedIcon sx={{ fontSize: "3vh" }}/>
                  </Link>
                </li>
              )}
              {isAdminView && ( 
                <li>
                  <Link to={`sales-report`}> 
                  <TrendingUpOutlinedIcon sx={{ fontSize: "3vh" }}/>
                  </Link>
                </li>
              )}
              {isAdminView && (
                <li>
                  <Link to={`view-registered-users`}> 
                  <PeopleOutlinedIcon sx={{ fontSize: "3vh" }}/>
                  </Link>
                </li>
              )}

              <li>
             
              <button className='signInButton'>
                <Link to = {`/sign-in`}>SIGN IN</Link>
              </button>
                 

                {/* {isAdminView || isCustomerView ? (
                  <AccountCircleOutlinedIcon sx={{ fontSize: "3.7vh" }}/>
                ):(
                    <Link to = {`/sign-in`}>
                      <button className='signInButton'>
                       SIGN IN
                       </button>
                    </Link> 
                )}  */}

              </li>
            </div>
            <link></link>
          </ul>
        </nav>
        
        <Outlet context={{ setIsCustomerView, setIsAdminView, setCartItems, cartItems, setOrders, orders }}/>
      </>
    )
  }

  