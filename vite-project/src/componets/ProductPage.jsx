import React from 'react'

import { useParams } from 'react-router-dom'

import './comp-css/product-page.css'

export default function ProductPage({product}) {
    const { id } = useParams()

    let index = id - 1

    console.log(id)

    // add product to local storage when add to cart button is clicked
    const addToCart = () => {
      let cart = JSON.parse(localStorage.getItem('cart'))
      if (cart === null) {
        cart = []
      }
      console.log(cart)
      cart.push(product.products[index])
      localStorage.setItem('cart', JSON.stringify(cart))
      
    }


    
  return (
    <>
      <main>
        <p className='cat-header'>Catagory: Household -- {
          // only show first 20 characters of product name
          product.products[index].name.length > 20 ? product.products[index].name.slice(0, 20) + '...' :
          product.products[index].name


        }</p>
        <h3>{product.products[index].name}</h3>
        <img src={product.products[index].mainImage} alt="" className='prod-image'/>
        <button id='addToCartBtn' onClick={addToCart}>Add to cart</button>
        <p>{product.products[index].description}</p>
        <p>£{product.products[index].price}</p>
      </main>
    </>
  )
}
