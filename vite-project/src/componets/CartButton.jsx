import React, { useState, useEffect } from 'react'
import { FaShoppingCart } from 'react-icons/fa'

import './comp-css/cart.css'

export default function CartButton({ cart, addToCart, removeFromCart}) {


  // get total number of items in cart
  const totalItems = cart.reduce((total, item) => {
    const itemQuantity = parseInt(item.quantity) || 0
    return total + itemQuantity
  }, 0)

  // onclick function for cart button to toggle cart popup visibility
  const toggleCart = () => {
    const cartPopup = document.querySelector('.cart-popup')
    cartPopup.classList.toggle('show')
  }
  
  console.log(cart)

  return (
    <div className="cart-dropdown">
      <button className="header-btn" onClick={toggleCart}>
        <FaShoppingCart /> ({totalItems})
      </button>
      <div className="cart-popup">
        {cart.length >= 1 ? (
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.name}> 

                <div className="name">
                  {item.name}
                </div>

                <div className="price">
                  £{
                    
                    item.price
                  
                  }
                </div>

                <div className="quantity">
                  x{item.quantity}
                </div>
                
        
                <span className='remove-btn' onClick={() => removeFromCart(item)}>remove</span>
              </li>
            ))}
            <div className="total">
              Total: £{cart.reduce((total, item) => total + item.price * item.quantity, 0)}

            </div>
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  )
}
