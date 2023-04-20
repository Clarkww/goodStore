import React from 'react'

import './comp-css/prod-pages.css'


export default function ({data, addToCart}) {

    let categories = []
    let getCategories = () => {
        data.products.map((product) => {
            if (!categories.includes(product.category)) {
                categories.push(product.category)
            }
        })
        console.log(categories)
        return categories
    }

    getCategories()
  return (
    <main className='all-prod-page'>
        <div className='prod-page-cat-selector'>
            <h4>Categories</h4>
            <ul>
                {categories.map((category) => {
                    return (
                        <li>
                            <a href={`/products&cat/${category}`}>{category}</a>
                        </li>
                    )
                })}
            </ul>
        </div>


        {
            // map through all products
            data.products.map((product) => {
                return (
                    <div key={product.id} className='prod-page-card'>
                        {console.log(product.mainImage)}

                        <img src={product.mainImage} alt="" />
                        
                        <div className="info-aside">
                            <a className='aside-title' href={`/products/${product.id}`}>{product.name}</a>
                            
                            <p className='aside-price'>£{product.price}</p>
                            <button className='aside-btn' onClick={() => addToCart(product)}>Add to cart</button>
                        </div>
                    </div>
                )
            }
            )
        }
    </main>
  )
}
