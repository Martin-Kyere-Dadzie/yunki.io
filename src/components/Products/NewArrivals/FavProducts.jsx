import React from 'react'
import './FavProducts.css'
import shoppingBag from '../../public/icons/shopping-bag.svg'
import shoppingBagRed from '../../public/icons/shoppingbag-red-icon.svg'
import heartWhite from '../../public/icons/wish-heart.svg';
import starRating from '../../public/icons/rating-icon.svg';
import heartRating from '../../public/icons/heart-icon.svg';
import heartRatingRed from '../../public/icons/heartp-red.svg';
import priceTagIcon from '../../public/icons/new-icon.svg';
import { useDispatch, useSelector } from 'react-redux';
// import { actions } from '../../Redux'
import { bagActions, } from '../../Redux/BagSlice';
import { wishActions } from '../../Redux/WishListSlice';
import cediIcon from '../../public/icons/cedi-icon.svg';
// import store from './redux/index';
import ProductPopUp from '../../PopUp/ProductPopUp';
// import LoginPopUp from '../../PopUp/LoginPopUp';
import { useState, useEffect } from 'react';
// import Rating from '../Rating';
// import { productData } from '../productData';
import heartFill from '../../public/icons/star-fill.svg'
import heartOutline from '../../public/icons/star-outline.svg'
import heartHalf from '../../public/icons/star-outline-half.svg'
import heartIcon from '../../public/icons/heart-icon.svg'
import quickView from '../../public/icons/quick-view-icon.svg'
import commentsIcon from '../../public/icons/comments-icon.svg'
import commentsRed from '../../public/icons/comments-red-icon.svg'
import ColorPicker from '../colorPicker';
import { productData } from '../productData';
import deliveryIcon from '../../public/icons/freedelivery.svg';
import shieldIcon from '../../public/icons/safety-icon.svg'
import telephone from '../../public/icons/telephone-outline.svg'
import ImagePreview from './ImagePreview';
import Comments from '../../Comments/Comments';
import CommentsPopUp from '../../PopUp/CommentsPopUp';

const FavProducts = ({images, name, title, colors, ratings, price, oldPrice, id, comments, priceTag, discount, productType }) => {

    // const [mainImage, setMainImage] = useState([image, image1, image2, image3])

    const [productPupUp, setProductPupUp] = useState(false);
    const [commentPupUp, setCommentPupUp] = useState(false);


    // const wishCounter = useSelector(state => state.wish.totalQuantity);
    const dispatch = useDispatch();
    const addToWish = () => {
        dispatch(wishActions.addToWish({
            images,
            name,
            title,
            colors,
            price,
            oldPrice,
            id,
            ratings,
            comments,
            priceTag,
            discount
        }))
    }
    const addToBag = () => {
        dispatch(bagActions.addToBag({
            images,
            name,
            title,
            colors,
            price,
            oldPrice,
            id,
            ratings,
            comments,
            priceTag,
            discount,
        }))
    }


    //product rating
    const heartRatings = Array.from({length: 5}, (elem, index) => {
        let number = index + 0.5;
        // debugger;
        return(
            <span key={index}>
                {
                    ratings >= index + 1 ? (<img alt='' src={heartFill} className='heart-fill'></img>): 
                    ratings >= number ? (<img alt='' src={heartHalf} className='heart-half'></img>): 
                    (<img alt='' src={heartOutline} className='heart-outline'></img>) 
                }
            </span>
        )
    })
    
    return (
        <div className='favProduct__container'>
        <div className='favproduct__imageIcon'>
            {
                images.map((image) => (
                    <img alt='product-img' 
                    src={image.image} 
                    className="product" 
                    onClick={() => setProductPupUp(true)} 
                    onMouseOver={e => (e.currentTarget.src = image.image1)}
                    onMouseLeave={e => (e.currentTarget.src = image.image)}
                    ></img>
                    ))
                }
            <button className='heart__icon' onClick={addToWish}>
                <img                
                    alt='icon-img' 
                    src={heartRating}                 
                    onMouseOver={e => (e.currentTarget.src = heartRatingRed)}
                    onMouseLeave={e => (e.currentTarget.src = heartRating)}>
                </img>
            </button>
            {/* <div className="rating-counter">{wishCounter}</div> */}
            <button className='icon-img addToBag__section' onClick={addToBag}>
                <img 
                    alt='icon-img' 
                    src={shoppingBag} 
                    className="bag__icon"
                    onMouseOver={e => (e.currentTarget.src= shoppingBagRed)}
                    onMouseLeave={e => (e.currentTarget.src = shoppingBag)}>
                </img>
            </button>
            <div className="priceTag-section">
                {Array(priceTag)
                    .fill()
                    .map((_, i) => (
                    <h3>NEW</h3>
                ))} 
                {Array(discount)
                    .fill()
                    .map((_, i) => (
                        <h3 className='discount-price'>{discount}</h3>
                    ))}
            </div>
            <div className="comment-section">
                <img alt='' src={commentsIcon}
                onMouseOver={e => (e.currentTarget.src = commentsRed)}
                onMouseLeave={e => (e.currentTarget.src=commentsIcon)}
                onClick={() => setCommentPupUp(true)} >
                </img>
            </div>
        </div>
        <div className='favProduct__textContainer'>
            {
                productData.filter((products) => {
                    
                    // if (colors > 1) {
                    //     return <ColorPicker/>
                    // } else {
                    // }
                    return <></>
                }).forEach(products => {
                    if (products.colors > 1) {
                        return <ColorPicker/>
                    } else {
                        return <></>
                    }
                })
            }

            <h3 className='product__name'>{name}</h3>
            <p className='product__description'>{title}</p>
            <div className="color-selector">
                {/* <h5 className='product__color'>colors: {colors}</h5> */}
                {/* <div className="main-color"></div> */}
            </div>
            <div className="ratin-section">
                <div className="ratings">
                    {heartRatings}
                </div>
            </div>
            <div className="price-rating">
                <h3 className='product__price'>
                    {price}
                    <h6>GHS</h6>
                </h3>
                <h3 className='old-price'>                   
                    <h6>{oldPrice}</h6>
                </h3>
            </div>
            <button className='quick-view'>
                <img alt='img' src={quickView}></img>
                <h5 className='btn-text'>quick view</h5>
            </button>
        </div>
        <div className="popup-holder">
            <ProductPopUp trigger={productPupUp} setTrigger={setProductPupUp} id='product-popup'>
                <ImagePreview/>
                <div className="popup-right">
                    <div className="popup-text">                        
                        <h3>{name}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ut. Quibusdam excepturi quam rem molestiae tempora commodi consequuntur inventore pariatur.</p>
                        <h3>{price}<span>GHS</span></h3>
                        <div className='popup-rating'>
                            <div className='heart-rate'>{heartRatings}</div>
                            <div className="review-container"> (65 costumer Reviews) </div>
                        </div>
                        <div className="popup-icons">
                            <div className="popup-icon container">
                                <img alt='img' src={deliveryIcon}></img>
                                <h5>Free Delivery</h5>
                            </div>
                            <div className="popup-icon warranty-container">
                                <img alt='img' src={shieldIcon}></img>
                                <h5>1yr Warranty</h5>
                            </div>
                            <div className="popup-icon call-container">
                                <img alt='img' src={telephone}></img>
                                <h5>(+233)599 607 814</h5>
                            </div>
                        </div>
                        <div className="product-availability">
                            <h5>Available:<span>In Stock{Array(priceTag)
                                        .fill()
                                        .map((_, i) => (
                                        <h3>NEW</h3>
                                    ))}
                                </span>
                            </h5>
                            <h5>Brand:<span></span></h5>
                            <h5>colors:<span>{colors}</span></h5>
                        </div>
                    </div>
                    {/* <div className="popup-icons"></div> */}
                    <div className="user-icon-section">
                        <button className="popup-basket">
                            <h5>add to basket</h5>
                            <img alt='img' src={shoppingBag}></img>
                        </button>
                        <button className="popup-wishlist">
                            <h5>add to wishlist</h5>
                            <img alt='img' src={heartIcon}></img>
                        </button>
                    </div>
                </div>
            </ProductPopUp>
            <CommentsPopUp trigger={commentPupUp} setTrigger={setCommentPupUp} id='product-popUp'>
                <Comments currentUserId='1'/>
            </CommentsPopUp>
        </div>   
    </div>
)
}

export default FavProducts