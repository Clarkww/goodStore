import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

import CartButton from './CartButton'
import UserButton from './UserButton'
import SearchBar from './SearchBar'

// user acount symbol from react icons
import { FaUserCircle } from 'react-icons/fa'

export default function Header({cart, addToCart, removeFromCart, data, gSearchTerm, setGSearchTerm }) {

  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen(!isOpen)
    let main = document.querySelector('main')
    main.classList.toggle('main-open')
  }


 


  let closeNav = () => {
    setIsOpen(false)
    let main = document.querySelector('main')
    main.classList.remove('main-open')
  }


  return (
    <div className='header-container'>
      <header className='header'>
        <button className='hamburger-btn' onClick={toggleNav}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <h1 className='main-h1'>Good Store</h1>
        <div className='header-right-items'>
          <SearchBar data={data} gSearchTerm={gSearchTerm} setGSearchTerm={setGSearchTerm} />
          <CartButton cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
          <UserButton />


        </div>
      </header>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link onClick={closeNav} to='/'>Home</Link>
          </li>
          <li>
            <Link onClick={closeNav} to='/products/all'>Products</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}



