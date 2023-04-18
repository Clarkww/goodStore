import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './comp-css/product-page.css';

export default function ProductPage({product, addToCart}) {
  const { id } = useParams()
  const index = id - 1

  const [activeIndex, setActiveIndex] = useState(0)


  // retrive category from data
  const category = product.products[index].category

  

  return (
    <>
      <main className='product-page'>
        <p className='cat-header'>Category: {category} -- {
          // only show first 20 characters of product name
          product.products[index].name.length > 30 ? product.products[index].name.slice(0, 20) + '...' :
          product.products[index].name
        }</p>
        <h3>{product.products[index].name}</h3>
        <div className="product-img-section">
          <div className="big-image-container">
            <img src={product.products[index].images[activeIndex]} />
          </div>
          <div className="product-image-row">
              {product.products[index].images.map((image, index) => {
                return (
                  <img
                    key={index}
                    src={image}
                    className={activeIndex === index ? "active" : ""}
                    onClick={() => setActiveIndex(index)}
                    />)})}
                    
          </div>
        </div>
        <button id='addToCartBtn' onClick={
          
          () => {
            addToCart(product.products[index])
            console.log(product.products[index])
          }

        }>Add to cart</button>
        <p>{product.products[index].description}</p>
        <p>£{product.products[index].price}</p>
      </main>
    </>
  )
}

