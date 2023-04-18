import React from 'react'
import { Link } from 'react-router-dom'

import products from '../assets/products'

export default function ProductCard({img, name, price, id, addToCart}) {
  return (
    <div className='card'>
        <Link to={`/products/${id}`}>
      
        <img src={img} alt="" />
        <h4>{name}</h4>
        <p>£{price}</p>
        </Link>

        <div className='card-btn-area'>
          <button className='card-btn' onClick={addToCart}>Add to cart</button>
          <Link to={`/products/${id}`}>
          <button className='card-btn view-prod-btn'>View Product</button>
          </Link>
        </div>

    </div>
  )
}
