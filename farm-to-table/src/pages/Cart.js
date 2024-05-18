import './Cart.css';
import { useOutletContext } from "react-router-dom";
import cart from '../assets/green_cart.png';
import { useState } from 'react';
export default function Cart() {
  const { setCartItems, cartItems } = useOutletContext();

  const [contact, setContact] = useState('');

  // handle changes in the contact input field
  const handleContactChange = (e) => {
    const input = e.target.value;
    // If the input is a number or empty string, update the contact state
    if (!isNaN(input) || input === '') {
      setContact(input);
    }
  };

  // to remove the removed item from the cart by creating new array and using it to update the items array
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

  return (
    <>
    {/*will display different ui if the cart is empty or not  */}
      {cartItems.length === 0 ? (
        <div className='noItems'>
          <img className='cartImg' src= {cart} alt="cart"></img>
          <div>No Items Yet</div>
        </div>
        
      ) : (
        <div className="body">
          <div className="left">
            <h2 className="totalItems">Total No. of Items: {totalQuantity}</h2> 
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
                  <button className="remove" onClick={() => deleteItem(index)}>x</button>
                </ul>
              ))}
            </div> 
          </div>
          <div className="right"> 
            <h2 className="checkoutTitle">Checkout</h2>
            <div className="checkoutDetails">
              <div className="address">
                Enter Address:
                <div>
                  <label>
                    House No./ Building, Street:
                    <input className='inputField' name="houseAndStreet" required />
                  </label>
                </div>
                <div>
                  <label>
                    Barangay:
                    <input className='inputField' name="barangay" required />
                  </label>
                </div>
                <div>
                  <label>
                    Municipality:
                    <input className='inputField' name="municipality" required />
                  </label>
                </div>
              </div>
              <div className="contact"> 
                
                <label>
                  Contact No.:
                  <input className='inputField'  type="text" value={contact} onChange={handleContactChange} maxLength ="11"  name="contact" required />
                </label>
              </div>
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
                  <label className= "cod">
                    <input className='payRadio'  type="radio" name="paymentMethod" defaultChecked required />
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
            <button className="placeOrder">PLACE ORDER</button>
          </div>
        </div>
      )}
    </>
  );
}
