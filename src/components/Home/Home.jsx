import React from 'react';
// import ReactDOM from 'react-dom'
import './Home.css'
import angleRight from '../public/icons/angle-right.svg';
import angleLeft from '../public/icons/angle-left.svg';
import angleRightWhite from '../public/icons/angle-right-white.svg'
import angleLeftWhite from '../public/icons/angle-left-white.svg'
import { useState, useEffect } from 'react';
import { sliderData } from '../Slides/SliderData'
import FavProducts from '../Products/NewArrivals/FavProducts';
import Filter from './Filter/Filter';
// import Search from './Search/Search';
import { Link } from 'react-router-dom';
import foodIcon from '../public/icons/food-icon.svg'
import deliveryIcon from '../public/icons/delivery-icon.svg';
import petsIcon from '../public/icons/pets-icon.svg'
import apparelsIcon from '../public/icons/apparel-icon.svg'
import beautyIcon from '../public/icons/bodycare-icon.svg'
import socketIcon from '../public/icons/socket-icon.svg'
// import List from './List/List';
import sofaIcon from '../public/icons/sofa-icon.svg'
// import YunkiOffers from '../Navbar/UserDropDown'
import { productData } from '../Products/productData';
import ScrollToTop from '../Scroll/ScrollToTop';
// import {setSearchTerm} from '../Home/Search/Search'
// import {setSearchTerm} from '../Home/Search/Search'
import '../Home/Search/Search.css';
import tileOption from '../public/icons/tile-white.svg';
import listOption from '../public/icons/list-option.svg';
import searchIcon from '../public/icons/search-icon.svg';
import angleDown from '../public/icons/angle-down.svg';
import Offers from './Offers/Offers';
// import Navbar from '../Navbar/Navbar';


const Home = ({selected, setSelected}) => {

    // banner carousel section
    const [dropDown, setDropDown] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;
    const [searchTerm, setSearchTerm] = useState('');
      // sort dropdown toggle state
    const [isActive, setIsAtive] = useState(false);

    const options = ['New Arrivals', 'Electronics', 'Phones and Accessories', 'Men Fashion', 'Ladies', ]

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide + 1)
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength -1 : currentSlide - 1)
    };
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const autoSlide = () => {
        slideInterval = setInterval(nextSlide, intervalTime)
    }

    // useEffect(() => {
    //     setCurrentSlide(0)
    // }, []); 

    useEffect(() => {
        if (autoScroll) {
            autoSlide()
        }
        return () => clearInterval(slideInterval) 
    }, [autoScroll, autoSlide, currentSlide, slideInterval])
    // banner carousel section ends

    // const manualToggle = () => {
    //     setCurrentSlide(currentSlide)
    // }
return (
    <div className='Home__screen'>
        {/* <div className="scrollUp-container"> */}
            <ScrollToTop/>
        {/* </div> */}
        <div className="banner-background">
            {/* <Navbar /> */}
            <div className='Home__section'>
                {/* <div className='text__container'>
                    <div className="above-text">
                        <h4>buy your products and get it delivered to you today...</h4>
                    </div>
                </div> */}
                <div className='banner__container'>
                    <div className="banner-icon">
                        <div className="icon electronics">
                            <img alt='electronics' src={socketIcon}></img>
                            <h4>electronics</h4>
                        </div>
                        <div className="border"></div>
                        <div className="icon icon-one">
                            <img alt='sof' src={sofaIcon}></img>
                            <h4>decors</h4>
                        </div>
                        <div className="border"></div>
                        <div className="icon icon-one">
                            <img alt='pet' src={petsIcon}></img>
                            <h4>pets</h4>
                        </div>
                        <div className="border"></div>
                        <div className="icon icon-one">
                            <img alt='fashion' src={apparelsIcon}></img>
                            <h4>fashion</h4>
                        </div>
                        <div className="border"></div>
                        <div className="icon icon-one">
                            <img alt='skin' src={beautyIcon}></img>
                            <h4>skin care</h4>
                        </div>
                        <div className="border"></div>
                        <div className="icon food">
                            <img alt='img' src={foodIcon}></img>
                            <h4>food</h4>
                        </div>
                    </div>
                    <div className="border"></div>
                    <div className='banner__image'>
                        {sliderData.map((slide, index) => {
                        return (
                            <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                                {index === currentSlide && (
                                    <>
                                        <img alt='' src={slide.Image}></img>
                                        <div className="gallery-contents">
                                            <div className='content'>
                                                <h4 className='slide-text'>Welcome to our</h4>
                                                <h1><h1  className='main-text'>{slide.heading}</h1> <span className='gallery-text'></span><span className='light-text'>gallery</span></h1>
                                                <h5>{slide.title}</h5>
                                                <h6 className='slide-text'>browse our collections from the above tray.</h6>
                                                <button>SHOP NOW</button>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                            )
                        })}
                    </div>
                    <div className="angle-container">
                        <div className='angle__icon left__angle' onClick={prevSlide} >
                            <img 
                            alt='left-angle-icon' 
                            src={angleLeft}
                            onMouseOver={e => (e.currentTarget.src = angleLeftWhite)}
                            onMouseLeave={e => (e.currentTarget.src = angleLeft)}></img>
                        </div>
                        <div className='angle__icon right__angle' onClick={nextSlide}>
                            <img 
                            alt='right-angle-icon' 
                            src={angleRight}
                            onMouseOver={e => (e.currentTarget.src = angleRightWhite)}
                            onMouseLeave={e => (e.currentTarget.src = angleRight)} ></img>
                        </div>
                    </div>
                    <div className="manualToggle">
                        {
                            sliderData.map((slide, slideIndex) => (
                                <div key={slideIndex} className="toggleIcons"></div>
                            ))
                        }
                    </div>
                </div>
                {/* <div className="nav__icon delivery-container">
                    <Link to='/wishlist' className='delivery__link'>
                        <img alt='' src={deliveryIcon} className='delivery-icon'></img>
                        <strong className='counter'>0</strong>
                    </Link>
                </div> */}
            </div>
        </div>
        <div className="offer-section">
            <Offers/>
        </div>
        <div className='top__favorite'>
            {/* <Search/> */}
            <div className='search-container'>
                <form>
                    <input 
                    type='search' 
                    placeholder='type to search...' 
                    type="text" 
                    onChange={
                    (e) => { 
                        setSearchTerm(e.target.value)
                    }
                    }>          
                    </input>
                    <button className='sort-search'>
                    <img alt='search-icon' src={searchIcon}></img>
                    </button>
                </form>
                <div className="sort-option">
                    <div className="option-image">
                    <img className='tile-option' alt='option-img' src={tileOption}></img>
                    </div>
                    <div className="option-image">
                    <img className='list-option' alt='option-img' src={listOption}></img>
                    </div>
                </div>
                <div className="stock">{productData.length} product available</div>
                <div className="category-section">
                    <h4 className='auto-select'>All</h4>
                    <div className="category-drop">
                    {dropDown && (
                        <div className="dropdown">
                            {/* {options.map({
                                
                            })} */}
                        <div className="dropdown-item" onClick={(e) => setSelected(e.relatedTarget.textContent)}>
                            <h5>New Arrivals</h5>
                        </div>
                        <div className="dropdown-item">
                            <h5>Electronics</h5>
                        </div>
                        <div className="dropdown-item">
                            <h5>Phones and Accessories</h5>
                        </div>
                        <div className="dropdown-item">
                            <h5>Men Fashion</h5>
                        </div>
                        <div className="dropdown-item">
                            <h5>Ladies</h5>
                        </div>
                        <div className="dropdown-item">
                            <h5>Electronics</h5>
                        </div>
                        </div>
                    )}
                    </div>
                    <button className="drop-icon" onClick={e => setDropDown(!dropDown)}>
                    <img alt='angle-down' src={angleDown}></img>
                    </button>
                </div>
            </div>
        </div>
        <div className='content-display'>
            {/* <div className="h-col filter">
                <Filter />
            </div> */}
            <div className="product-holder h-col">
                {
                    productData.filter((product) => {
                        if(searchTerm == ''){
                            return(
                                <FavProducts key={product.id} {...product} />
                            )
                        }else if(product.name.toLowerCase().includes(searchTerm.toLowerCase())){
                            return product;
                        }
                    })
                    .map(product => {
                        // const {image, name, productType, title, color, price, id, ratings, comments, priceTag} = product;
                        // console.log(product)
                        return(
                            <FavProducts key={product.id} {...product} />

                        )
                    })

                }
            </div>               
        </div>

        <div className="yunki-offers">
            {/* <YunkiOffers/> */}
        </div>
    </div>
)
}

export default Home;
