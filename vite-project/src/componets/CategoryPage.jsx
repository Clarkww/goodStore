import React from 'react'

export default function CategoryPage({data, addToCart}) {


  let url = window.location.href


  url = url.replace(/%20/g, ' ')
  let category = url.split('/').pop()

    // console.log(data.products[0].mainImage)

  return (
    <main className='all-prod-page'>
        <h1>{category}</h1>

        {
            // map through all products in category
            data.products.map((product, index) => {
                if (product.category === category) {
                    return (
                    <div key={product.id} className='prod-page-card'>
                        

                      <img  src={product.mainImage} alt="" 
                        onError={() => console.log('Failed to load image')}
                        onLoad={() => console.log('Image loaded successfully')}
                        />
                      
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
