
import React, { useState } from 'react'

import img2 from '../assets/slideshow/prod2.jpg'
import img3 from '../assets/slideshow/prod3.jpg'
import img4 from '../assets/slideshow/prod4.jpg'

import './comp-css/slides.css'

import { AiOutlineRight } from 'react-icons/ai'
import { AiOutlineLeft } from 'react-icons/ai'


export default function SlideShow() {
  const [activeIndex, setActiveIndex] = useState(0)

  const images = [img2, img3, img4]

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % images.length)
  }

  const handlePrev = () => {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1)
  }

  const handleSelect = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className="slideshow">
      <div className="slideshow-container">
        {images.map((image, index) => (
          <img
            key={index}
            className={index === activeIndex ? 'active' : ''}
            src={image}
            alt=""
          />
        ))}
      </div>
      <div className="slideshow-controls">
        <button className="slideshow-btn" onClick={handlePrev}>
          <AiOutlineLeft />
        </button>
        <div className="slideshow-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={index === activeIndex ? 'active' : ''}
              onClick={() => handleSelect(index)}
            ></span>
          ))}
        </div>
        <button className="slideshow-btn" onClick={handleNext}>
          <AiOutlineRight />
        </button>`
      </div>
    </div>
  )
}