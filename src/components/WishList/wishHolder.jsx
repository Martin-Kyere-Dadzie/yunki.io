import React from 'react';
import '../../components/Checkout/ShopnBagPrdctHolder.css'
import './wishListProductHolder.css';
// import '../Products/NewArrivals/FavProducts.css';
import { useDispatch } from 'react-redux';
import {wishActions} from '../Redux/WishListSlice';
import cediIcon from '../public/icons/cedi-icon.svg';
import heartRed from '../public/icons/heart-red-fill.svg'
import shoppingBasket from '../public/icons/basket-icon.svg';
import shoppingBasketRed from '../public/icons/basket-red.svg'
import { bagActions } from '../Redux/BagSlice';



const WishListProductHolder = ({image, name, title, colors, price, quantity, id, comments, ratings, priceTag}) => {
    const dispatch = useDispatch();
    const incrementWishItem = () => {
        dispatch(wishActions.addToWish({
            name,
            id,
            price,
            image,
            title,
            colors,
            comments,
        }))
    }

    const addToBag = () => {
        dispatch(bagActions.addToBag({
            image,
            name,
            title,
            colors,
            price,
            id,
            ratings,
            comments,
            priceTag,
        }))
    }

    const deleteProduct = () => {
        dispatch(wishActions.deleteProduct(id))
    }

    
  return (
    
    <div className='checkoutHolder__container'>
        <div className='checkoutHolder__imageIcon'>
            <div className="product-image">
                <img alt='' src={image}></img>
            </div>
            <div className="priceTag-section">
                {Array(priceTag)
                    .fill()
                    .map((_, i) => (
                    <h3>NEW</h3>
                ))} 
            </div>
            <div className="heart-icon" onClick={deleteProduct}>
                {/* <h1>hellowdf</h1> */}
                <img alt='heart icon' src={heartRed}></img>
            </div>
            <button className='wish-addToBag' onClick={addToBag}>
                <img 
                    alt='icon-img' 
                    src={shoppingBasket} 
                    className="bag__icon"
                    onMouseOver={e => (e.currentTarget.src= shoppingBasketRed)}
                    onMouseLeave={e => (e.currentTarget.src = shoppingBasket)}></img>
            </button>
            <div className="wishComment-section">
                <div className="wishComment-text">
                    <h6>{comments}</h6>
                    <h6>comments</h6>
                </div>
            </div>
        </div>
        <div className='checkoutHolder__textContainer'>
            <h3 className='checkoutProduct__name'>{name}</h3>
            <p className='checkoutProduct__description'>{title}</p>
            <div className="color-selector">
                <h5 className='product__color'>colors: {colors}</h5>
                <div className="main-color"></div>
            </div>
            <h3 className='checkoutProduct__price'>
                <img alt='' src={cediIcon}></img>{price} GHS
            </h3>
        </div>
        {/* <button className='trashCan__section' onClick={deleteProduct}>
            <h4>Remove</h4>
            <img alt='' src={trashCan} className="bag__icon"></img>
        </button> */}
    </div>
    )
}

export default WishListProductHolder