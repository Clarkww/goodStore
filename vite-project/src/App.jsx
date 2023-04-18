import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';


import Header  from './componets/Header'
import ProductPage from './componets/ProductPage'

import HomePage from './componets/HomePage'

import Footer from './componets/Footer'

import AllProductsPage from './componets/AllProductsPage'

import CategoryPage from './componets/CategoryPage'



import './App.css'

function App() {

  const [data, setData] = useState(null)
  
  const [cart, setCart] = useState([])

  
  useEffect(() => {
    fetch('http://localhost:3000/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error))

  }, [])

  
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    if (cart) {
      setCart(cart)
    }

    // listen for changes to the cart and update local storage
    const cartListener = (event) => {
      if (event.key === 'cart') {
        setCart(JSON.parse(event.newValue))
      }
    }
    window.addEventListener('storage', cartListener)
    return () => {
      window.removeEventListener('storage', cartListener)
    }

  }, [])

  const addToCart = (product) => {
    const index = cart.findIndex((item) => item.name === product.name)
    if (index >= 0) {

      // Update the quantity of the item in the cart
      const newCart = [...cart]
      newCart[index].quantity += 1
      setCart((prevCart) => (prevCart ? [...newCart] : []))

    } else {

      // Add the item to the cart
      setCart((prevCart) => (prevCart ? [...prevCart, {...product, quantity: 1}] : [{...product, quantity: 1}]))
    }

    // Add the item to local storage
    const storedCart = JSON.parse(localStorage.getItem('cart'))
    if (storedCart) {
      const newStoredCart = storedCart.filter((item) => item.name !== product.name)
      newStoredCart.push({...product, quantity: 1})
      localStorage.setItem('cart', JSON.stringify(newStoredCart))
    } else {
      localStorage.setItem('cart', JSON.stringify([{...product, quantity: 1}]))
    }
  }
    
  



  
  

const removeFromCart = (product) => {
  const index = cart.findIndex((item) => item.name === product.name)
  if (index >= 0) {
    const newCart = [...cart]
    newCart[index].quantity -= 1
    if (newCart[index].quantity === 0) {
      newCart.splice(index, 1)
    }
    setCart((prevCart) => (prevCart ? [...newCart] : []))
  }
  // Remove the item from local storage
  const storedCart = JSON.parse(localStorage.getItem('cart'))
  const newStoredCart = storedCart.filter((item) => item.name !== product.name)
  localStorage.setItem('cart', JSON.stringify(newStoredCart))
}

  
  if (!data) {
    return <div>Loading...</div>
  }
  // console.log(data.products[0].name)
  
  
  
  
  
  return (
    <>

      <Router>
      <Header cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
          <Routes>
            <Route exact path='/' element={<HomePage data={data} addToCart={addToCart} />} />
            <Route path='/products/:id' element={<ProductPage addToCart={addToCart} product={data} />} />
            <Route path='/products/all' element={<AllProductsPage data={data} addToCart={addToCart} />} />
            {/* route for category page */}
            <Route path='/products/cat/:category' element={<CategoryPage data={data} addToCart={addToCart} />} />
          </Routes>
        <Footer />
      </Router>

    </>
  )
}


export default App
