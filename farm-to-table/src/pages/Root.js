import { Outlet, Link } from 'react-router-dom';
import{useState} from 'react';
import './Root.css'
export default function Root() {

  const [isCustomerView, setIsCustomerView] = useState(false);
  const [cartItems, setCartItems] = useState([]);

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
                  <Link to={`/shop`}> Shop</Link>
                </li>
              )}
              {isCustomerView && ( 
                <li>
                  <Link  to={`/cart`}>Shopping Cart</Link>
                </li>
              )}
              {isCustomerView && (
                <li>
                  <Link to={`/orders`}> Orders</Link>
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
        
        <Outlet context={{ setIsCustomerView, setCartItems, cartItems }}/>
      </>
    )
  }

  