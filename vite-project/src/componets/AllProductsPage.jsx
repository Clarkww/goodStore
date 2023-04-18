import React from 'react'

import './comp-css/prod-pages.css'


export default function ({data, addToCart}) {
  return (
    <main>
        {
            // map through all products
            data.products.map((product) => {
                return (
                    <div className='prod-page-card'>
                        <img src={product.mainImage} alt="" />
                        {/* link to prodcut page */}
                        <a href={`/products/${product.id}`}>{product.name}</a>
                        {/* <h4>{product.name}</h4> */}
                        <p>£{product.price}</p>
                        <button onClick={() => addToCart(product)}>Add to cart</button>
                    </div>
                )
            }
            )
        }
    </main>
  )
}
