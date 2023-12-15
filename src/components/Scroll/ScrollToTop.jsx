import React from 'react';
import './ScrollToTop.css'
import angleUp from '../public/icons/angle-up.svg'

import { useEffect, useState } from 'react';

const ScrollToTop = () => {
    const [scrollToTop, setScrollToTop] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 900) {
                setScrollToTop(true)
            } else {
                setScrollToTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
  return (
      <div>
        {scrollToTop &&(
            <button className='croll-img' onClick={scrollUp}>
                <img alt='img' src={angleUp}></img>
            </button>
        )}
    </div>
  )
}

export default ScrollToTop