import React, {useState} from 'react'



import SlideShow from './SlideShow'
import ProductCard from './ProductCard'


import '../App.css'

export default function HomePage({data, addToCart}) {
    
    const [products, setProducts] = React.useState(data.products)

  return (
    <main id="homeMain">
      <SlideShow />
      
      <h2 className='homepage-heading'>Trending Products</h2>
      <section className='card-area'>
        {
          data.products.slice(0, 3).map((product) => {
            return (
              <ProductCard img={product.mainImage} name={product.name} price={product.price} id={product.id} addToCart={addToCart} product={data} />
            )})
        }
      </section>
  </main>
  )
}
