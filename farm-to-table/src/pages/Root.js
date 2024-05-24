import { Outlet, Link } from 'react-router-dom';
import{useState} from 'react';
import './Root.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
export default function Root() {

  const [isCustomerView, setIsCustomerView] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const[orders, setOrders] = useState([]);

    return (
      <>
        <nav>
          <ul>

            <li className='title'><Link to={`/`} >Farm-to-table</Link></li>   
            <div className='rightSide'>  
              <li> <Link to ={`/about`}> About</Link></li>
              {/* to show the shop and shopping cart only when the user signed in (customer view) */}
              {isCustomerView && (
                <li>
                  <Link to={`/shop`}> 
                  <StorefrontIcon/>
                  </Link>
                </li>
              )}
              {isCustomerView && ( 
                <li>
                  <Link  to={`/cart`}>
                    <ShoppingCartOutlinedIcon/>
                  </Link>
                </li>
              )}
              {isCustomerView && (
                <li>
                  <Link to={`/orders`}> 
                  <ShoppingBagOutlinedIcon/>
                  </Link>
                </li>
              )}

              <li> 
                <button className='signInButton'>
                  <Link to = {`/sign-in`}> Sign In</Link>
                </button>
              </li>

            </div>
            <link></link>
          </ul>
        </nav>
        
        <Outlet context={{ setIsCustomerView, setCartItems, cartItems, setOrders, orders }}/>
      </>
    )
  }

  