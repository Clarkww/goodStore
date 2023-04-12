import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

import CartButton from './CartButton'
import UserButton from './UserButton'

// user acount symbol from react icons
import { FaUserCircle } from 'react-icons/fa'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => setIsOpen(!isOpen)

  return (
    <div className='header-container'>
      <header className='header'>
        <button className='hamburger-btn' onClick={toggleNav}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <h1 className='main-h1'>Good Store</h1>
        <div className='header-right-items'>
          <input className='search' type='text' placeholder='Search' />
          <CartButton />
          <UserButton />


        </div>
      </header>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products/all'>Products</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}



