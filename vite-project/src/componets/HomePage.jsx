import React, {useState} from 'react'



import SlideShow from './SlideShow'
import ProductCard from './ProductCard'
import Footer from './Footer'

import '../App.css'

export default function HomePage({data}) {
    
    const [products, setProducts] = React.useState(data.products)

  return (
    <>
    <main>
    <SlideShow />
    
    <h2 className='homepage-heading'>Trending Products</h2>
    <section className='card-area'>
      {
        data.products.map((product) => {
          return (
            <ProductCard img={product.mainImage} name={product.name} price={product.price} id={product.id} />
          )})
      }
    </section>
  </main>
  <Footer />
  </>
  )
}
