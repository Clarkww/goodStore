import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import './comp-css/cart.css';

export default function CartButton() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      // Create a map to store the frequency of each item in local storage
      const itemFrequency = new Map();
      storedCart.forEach((item) => {
        const name = item.name;
        if (itemFrequency.has(name)) {
          itemFrequency.set(name, itemFrequency.get(name) + 1);
        } else {
          itemFrequency.set(name, 1);
        }
      });
      // Create an array of objects with name and quantity properties
      const newCart = [];
      itemFrequency.forEach((quantity, name) => {
        newCart.push({ name, quantity });
      });
      setCart(newCart);
      console.log(newCart);
    }
    // Add event listener to listen for changes in the localStorage
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    // Add event listener to detect changes to local storage
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [cart]);
  
  const handleStorageChange = (event) => {
    if (event.key === 'cart') {
      const newCart = JSON.parse(event.newValue);
      setCart(newCart);
    }
  };








  

  const addToCart = (product) => {
    const index = cart.findIndex((item) => item.name === product.name);
    if (index >= 0) {
      const newCart = [...cart];
      newCart[index].quantity += 1;
      setCart(newCart);
    } else {
      setCart([...cart, { name: product.name, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const index = cart.findIndex((item) => item.name === product.name);
    if (index >= 0) {
      const newCart = [...cart];
      newCart[index].quantity -= 1;
      if (newCart[index].quantity === 0) {
        newCart.splice(index, 1);
      }
      setCart(newCart);
    }
    // Remove the item from local storage
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    const newStoredCart = storedCart.filter(
      (item) => item.name !== product.name
    );
    localStorage.setItem('cart', JSON.stringify(newStoredCart));

  };

  const totalItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="cart-dropdown">
      <button className="header-btn">
        <FaShoppingCart /> ({totalItems})
      </button>
      <div className="cart-popup">
        {cart.length >= 1 ? (
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.name}>
                {item.name}
                {item.price}
                <div className="qty">
                  x{item.quantity}
                </div>
                <button onClick={() => removeFromCart(item)}>x</button>
              </li>
            ))}
            <div className="total">
            </div>
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}
