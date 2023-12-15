/* eslint-disable no-undef */
import React from 'react';
import './Navbar.css';
// import yunkiBlackLogo from '../components/public/icons/yunki-black.svg';
import yunkiRedLogo from '../public/icons/yunki-red.svg';
import yunkiWhiteLogo from '../public/icons/yunki-white.svg';
import userWhite from '../public/icons/user-white.svg';
import userBlack from '../public/icons/user.svg';
import heartWhite from '../public/icons/heart-icon.svg';
import shoppingBasket from '../public/icons/basket-icon.svg';
// import deliveryIcon from '../public/icon s/delivery-icon.svg';
import deliveryIcon from '../public/icons/delivery-icon.svg';
import menuIcon from '../public/icons/menu-icon.svg'
import { NavLink } from 'react-router-dom';
import navLinks from './NavLinks';
import closeBtn from '../public/icons/close-btn.svg';
import UserDropDown from './UserDropDown';
import helpGray from '../public/icons/help-gray.svg';
import emailIcon from '../public/icons/email-icon.svg';
import logoutIcon from '../public/icons/logout-gray.svg';
import editIcon from '../public/icons/edit-gray.svg';
import searchIcon from '../public/icons/search-black.svg'
import { activeLinkStyle } from '../ActiveLink/ActiveLInk';

// import Home from './Home';
// import FavProducts from './FavProducts';

import { useSelector } from 'react-redux';
import { useState, useEffect, useRef } from 'react';
// import { style } from '@mui/system';
// import index from './redux/index';

const Navbar = () => {

  const counter = useSelector(state => state.bag.totalQuantity);
  const wishCounter = useSelector(state => state.wish.totalQuantity);
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  const openMenu = () => setIsOpen(!isOpen);

  // UserDropdown toggle
  const [userDrop, setUserDrop] = useState(false);
  let userMenuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if(!userMenuRef.current.contains(e.target)){
        setUserDrop(false);
        // console.log(userMenuRef.current);
      }
    };

    document.addEventListener("mousedown", handler)

    return() => {
      document.removeEventListener("mousedown", handler)
    }
  })
  
  // search products
  // const search = ({value, changeInput})

  
  return (
    <div className='navbar__section' ref={userMenuRef}>
        
        {isOpen ? <img className='close-btn' src={closeBtn} onClick={closeMenu}></img> : <img className='isopen-menu' src={menuIcon} onClick={openMenu}></img> }
          <div className='navIcons__container'>
            <div id='nonDisplay' className="leftIcon-holder side-icons">
              <div className="nav-search">
                <input type='search' className='search-input' placeholder='search products...'></input>
                <div className="search-icon">
                  <img alt='img' src={searchIcon}></img>
                </div>
              </div>
            </div>
            <div className='yunkiLogo-container'>
              <NavLink to="/" className='logo-link ' onClick={closeMenu}>
                <img src={yunkiRedLogo} alt='Yunki-Logo'></img>
              </NavLink>
            </div>
            <div className="rightIcon-holder side-icons">           
              <div className='nav__icon user-section'>
                <div className='visit__link user__icon'>
                  <img alt='' src={userBlack} className="user" onClick={e => setUserDrop(!userDrop)}></img>
                  {/* <h6>sign in</h6> */}
                </div>
                {userDrop && (
                  <div className="user-dropDown">
                  {/* <>User Menu</> */}
                    <ul>
                      <UserDropDown text={'Edit Profile'} image={editIcon}/>
                      <UserDropDown text={'Inbox'} image={emailIcon}/>
                      <NavLink to="/SignIn" className="visit__link">
                        <UserDropDown text={'SignIn/LogIn'} image={userBlack}/>
                      </NavLink>
                      <UserDropDown text={'Log Out'} image={logoutIcon}/>
                      <UserDropDown text={'Help'} image={helpGray}/>
                    </ul>
              </div>
                )}               
              </div>
              {/* <div className="line line-invisible"></div> */}
              <div className='nav__icon' id='search-icon'> 
                <NavLink to='wishlist' className='visit__link' onClick={closeMenu}>    
                  <img alt='' src={deliveryIcon} className="delivery-icon"></img>
                  {/* <h6 className='delivery-text'>deliveries</h6> */}
                  {/* <strong className='counter'>0</strong> */}
                </NavLink>
              </div>
              <div className='nav__icon' id='heart__icon'>
                <NavLink style={activeLinkStyle} to='wishlist' className='visit__link heart-icon' onClick={closeMenu}>    
                  <img alt='' src={heartWhite}></img>
                  {/* <h6>wish list</h6> */}
                  <strong className='counter'>{wishCounter}</strong>
                </NavLink>
              </div>
              {/* <div className="line"></div> */}
              <div className='nav__icon'>
                <NavLink style={activeLinkStyle} to='checkout' className='visit__link shopping-basket' >
                  {<img alt='' src={shoppingBasket} className="bag__icon" onClick={closeMenu}></img>}
                  {/* <h6>basket</h6> */}
                  <strong className='counter'>{ counter }</strong>
                </NavLink>
              </div>
              <div className='menu-display' onClick={openMenu}>
                <img alt='' src={menuIcon} className='menu__icon'></img>
              </div>
            </div>
        </div>

        <div className="link-section">
        <div className="link-container">
            <ul>
              {
                navLinks.map(link => {
                  return <li key={link.name}><NavLink style={activeLinkStyle} to={link.route} href={link.route}>{link.name}</NavLink></li>
                })
              }
              {/* e3 */}
            </ul>
          </div>
        </div>
        {isOpen ? (
        <div className="mobile-menu-dropdown" isOpen={isOpen} setIsOpen={setIsOpen}>   
          <div className="search-section">         
            <form className='search-container'>
              <input placeholder='' type='search'></input>
              <button className='search-btn' type='confirm'><img alt='' src={searchIcon}></img></button>
            </form>    
          </div>
          <ul>
            {
              navLinks.map(link => {
                return <li key={link.name}>
                  <a href={link.route}>{link.name}</a>
                </li>
              })
            }
          </ul>
          <div className="overlay" onClick={closeMenu}></div>
        </div>
        ) : null}
        
      </div>
  )
}

export default Navbar
