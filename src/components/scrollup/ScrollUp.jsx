import React, { useState, useEffect } from 'react'
import './scrollup.css'

const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 560) {
        setShowScroll(true)
      } else {
        setShowScroll(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <a 
      href="#" 
      className={`scrollup ${showScroll ? 'show-scroll' : ''}`}
      onClick={(e) => {
        e.preventDefault()
        scrollToTop()
      }}
    >
      <i className="bx bx-up-arrow-alt scrollup__icon"></i>
    </a>
  )
}

export default ScrollUp
