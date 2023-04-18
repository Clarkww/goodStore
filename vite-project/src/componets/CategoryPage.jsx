import React from 'react'

export default function CategoryPage({data, addToCart}) {

  // get category info from url
  let url = window.location.href
  let category = url.split('/').pop()

  // get products from category


    console.log(data.products[0].mainImage)

  return (
    <main className='all-prod-page'>
        <h1>{category}</h1>

        {
            // map through all products in category
            data.products.map((product) => {
                if (product.category === category) {
                    return (
                        <div className='prod-page-card'>
                            <img src={product.mainImage} alt="" />

                            <div className="info-aside">

                            <a className='aside-title' href={`/products/${product.id}`}>{product.name}</a>

                            <p className='aside-price'>£{product.price}</p>

                            <button className='aside-btn' onClick={() => addToCart(product)}>Add to cart</button>

                          </div>
                        </div>
                    )
                }
            }
            )
        }







        

    </main>
  )
}
