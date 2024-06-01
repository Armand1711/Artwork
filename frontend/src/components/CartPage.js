// src/components/CartPage.js
import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';

const CartPage = () => {
  const { cartItems, removeItemFromCart } = useCart();

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.title} - ${item.price}
              <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
     
    </div>
  );
};

export default CartPage;
