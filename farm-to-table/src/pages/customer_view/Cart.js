import './Cart.css';
import {Link, useOutletContext} from "react-router-dom";
import cart from '../../assets/green_cart.png';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ClearAllOutlinedIcon from '@mui/icons-material/ClearAllOutlined';

export default function Cart() {
  const { setCartItems, cartItems, setOrders } = useOutletContext();

  //function for deleting/removing an item in the cart
  function deleteItem(index) { 
    const newCartItems = [];
    for (let i = 0; i < cartItems.length; i++) {
      if (i !== index) {
        newCartItems.push(cartItems[i]);
      } else {
        if (cartItems[i].quantity > 1) {
          cartItems[i].quantity -= 1;
          cartItems[i].item_price -= cartItems[i].product.price;
          newCartItems.push(cartItems[i]);
        }
      }
    }
    setCartItems(newCartItems);
  }

  let totalQuantity = 0;
  for (const item of cartItems) {
    totalQuantity += item.quantity;
  }

  let totalPrice = 0;
  for (const item of cartItems) {
    totalPrice += item.item_price;
  }
  let totalPayment = totalPrice + 60;

  //  to generate unique transaction IDs
function generateTransactionId (){
  return 'TRANS_' + Math.random().toString(36).substr(2, 9).toUpperCase();
}


  function handleSubmit() {
      // Create orders for each item in the cart
      const orders = cartItems.map(item => {
        const transactionId = generateTransactionId();
        console.log(item.id)
        return {
          transactionId,
          productId: item.product.product_id,
          orderQuantity: item.quantity,
          orderStatus: 0,
          email: 'user@example.com', // Replace with actual user email
          dateOrdered: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),
          imgUrl: item.imgUrl
        };
      });

      // Clear the cart
      setCartItems([]);

      // Set the orders
      setOrders(prevOrders => [...prevOrders, ...orders]);
  }

  //remove all items in the cart
  function removeAll (){
    setCartItems([]);
  }

  return (
    <>
      {cartItems.length === 0 ? (
        <div className='noItems'>
          <img className='cartImg' src={cart} alt="cart"></img>
          <div>No Items Yet</div>
        </div>
      ) : (
        <div className="body">
          <div className="left">
            <div className='head'>
            <h2 className="totalItems">Total No. of Items: {totalQuantity}</h2> 
            <button className="removeAllBttn" onClick={removeAll}><ClearAllOutlinedIcon/></button>
            </div>
            
            <div className="itemCard">
              {cartItems.map((item, index) => (
                <ul className="cartItem" key={item.id}>
                  <div className="imageContainer">
                    <img className="itemImage" src={item.imgUrl} alt={item.product.product_name} />
                  </div>
                  <div className="itemDetails">
                    <div className="itemName">{item.product.product_name}</div>
                    <div className="quantity">({item.quantity})</div>
                  </div>
                  <button className="remove" onClick={() => deleteItem(index)}><DeleteOutlinedIcon/></button>
                </ul>
              ))}
            </div> 
          </div>
            <div className="right"> 
              <h2 className="checkoutTitle">Checkout</h2>
              <div className="checkoutDetails">
                <div className="checkout">
                  {cartItems.map((item) => (
                    <div className="checkoutItems" key={item.id}>
                      <div className="item_details">
                        <div className="details1">
                          <div className="item_name">{item.product.product_name}</div>
                        </div>
                        <div className="details2">
                          <div>x{item.quantity}</div>
                        </div>
                      </div>
                      <div className="quantities">
                        <div>{item.product.price}</div>
                        <div>{item.item_price}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="payment">
                  <div>Payment Method:</div>
                  <div>
                    <label className="cod">
                      <input className='payRadio' type="radio" name="paymentMethod" defaultChecked required />
                      Cash on Delivery
                    </label>
                  </div>
                </div>
                <div className='paymentDetails'>
                  <div className='p1'>
                    <div> Sub Total:</div>
                    <div>{totalPrice}</div>
                  </div>
                  <div className='p2'>
                    <div>Shipping Fee:</div>
                    <div>60</div>
                  </div>                
                  <div className='p3'>
                    <div>Total Payment:</div>
                    <div>{totalPayment}</div>
                  </div>
                </div>
              </div>
              <Link to={`/orders`}>
                <button className="placeOrder" onClick={handleSubmit}>PLACE ORDER</button>
              </Link>  
            </div>
        </div>
      )}
    </>
  );
}
