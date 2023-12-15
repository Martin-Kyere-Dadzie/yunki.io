import React from 'react'
import './Offers.css'
import { NavLink } from 'react-router-dom'
import hoursIcon from '../../public/icons/24hr-icon.svg'
import discount from '../../public/icons/discount-icon.svg'
import safety from '../../public/icons/safety-icon.svg'
import dotsIcon from '../../public/icons/line-icon.svg'
import lineIcon from '../../public/icons/line-icon2.svg'
import forwardIcon from '../../public/icons/forward-icon.svg'

const Offers = () => {
  return (
    <div className='offer-container'>
        <div className="offer-heading">
            <h1>what makes us special</h1>
        </div>        
        <div className="offer-icon-text">
            <div className="main-offer 24hr-section">
                <div className="offer-icon">
                    <img alt='img' src={hoursIcon}></img>
                </div>
                <h4>24/7 Services</h4>
                <div className="offer-text">
                    <h5>Lorem ipsum dolor sit amet, adipisci consequuntur quidem officiis cupiditate ipsum.</h5>
                </div>
                <div className="main-link">
                    <NavLink to='/' className='more-link'>
                        <h5>read more</h5>
                        <img src={forwardIcon} alt='img'></img>
                    </NavLink>
                </div>
            </div>
            <div className="dot-section">
                <img alt='img' src={dotsIcon} className='dot-icon'></img>
            </div>
            <div className="main-offer discount-section">
                <div className="offer-icon">
                    <img alt='img' src={discount}></img>
                </div>
                <h4>Online Discounts</h4>
                <div className="offer-text">
                    <h5>Lorem ipsum dolor sit amet, adipisci consequuntur quidem alias</h5>
                </div>
                <div className="main-link">
                    <NavLink to='/' className='more-link'>
                        <h5>read more</h5>
                        <img src={forwardIcon} alt='img'></img>
                    </NavLink>
                </div>
            </div>
            <div className="dot-section">
                <img alt='img' src={lineIcon} className='dot-icon'></img>
            </div>
            <div className="main-offer discount-section">
                <div className="offer-icon">
                    <img alt='img' src={safety}></img>
                </div>
                <h4>Safety</h4>
                <div className="offer-text">
                    <h5>Lorem ipsum dolor sit amet, adipisci consequuntur quidem alias cupiditate ipsum.</h5>
                </div>
                <div className="main-link">
                    <NavLink to='/' className='more-link'>
                        <h5>read more</h5>
                        <img src={forwardIcon} alt='img'></img>
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offers