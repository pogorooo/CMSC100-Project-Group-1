import React, { useState } from 'react';
import {useOutletContext } from "react-router-dom";
import './Product.css';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

export default function Product({ product, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const { setCartItems } = useOutletContext();

  // if (!product) return null;

  function addItem(product, quantity) {
    if(quantity !== 0){   //to make sure you cant add an item with 0 quantity to the cart
        setCartItems((prevItems) => {
            // Check if the product already exists in the cart
            const existingItem = prevItems.find((item) => item.product.product_id === product.product_id);
            if (existingItem) {
              // If the product exists, increment its quantity and update its price in the cart
              return prevItems.map((item) =>
                item.product.product_id === product.product_id
                  ? { ...item, quantity: item.quantity + quantity, item_price: (item.quantity + quantity) * item.product.price }
                  : item
              );
            } else {
              // If the product doesn't exist
              const newItem = { product, quantity: quantity, imgUrl: product.imgUrl, item_price: quantity * product.price };
              console.log("New item:", newItem);
              return [...prevItems, newItem];
            }
          });
    }
    
  }

  // increment a quantity in the input
  function handleAddQuantity() {
    if (quantity < product.quantity) {
      setQuantity(quantity + 1);
    }
  }

  // decrement a quantity in the input
  function handleSubQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}><HighlightOffOutlinedIcon sx={{ fontSize: 'xx-large' }} /></button>
        <div className="modal-content">
          <img src={product.imgUrl} alt={product.product_name} className="modal-image" />
          <h2 className='prodName'>{product.product_name}</h2>
          <p>P{product.price}</p>
          <p>{product.description || "No description available."}</p>
          <div className="quantity-selector">
            <label htmlFor="quantity">Quantity:</label>
            <input 
              type="number" 
              id="quantity" 
              value={quantity} 
              min="1" 
              max={product.quantity} 
              onChange={(e) => setQuantity(Number(e.target.value))} 
            />
            <div className="quantity-buttons">
              <button onClick={handleAddQuantity} className="quantity-button"><AddOutlinedIcon /></button>
              <button onClick={handleSubQuantity} className="quantity-button"><RemoveOutlinedIcon /></button>
            </div>
          </div>
          <button className="add-to-cart-button" onClick={() => { addItem(product, quantity); onClose(); }}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
