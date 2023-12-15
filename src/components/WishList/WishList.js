import React from 'react';
import './WishList.css';
import { useDispatch, useSelector } from 'react-redux';
import wishActions from '../Redux/WishListSlice';
import WishListProductHolder from './wishHolder';


const WishList = () => {

  const wishItems = useSelector(state => state.wish.wishList)
  console.log(wishItems)
  return (
    <div className='wishlist__container'>
      <div className='wishlist-text'>
        <hr></hr>
        <ul>
          {wishItems.map(item => (
            <li key={item.id}>
              <WishListProductHolder
              id={item.id}
              image={item.image}
              name={item.name}
              title={item.title}
              colors={item.color}
              price={item.totalPrice}
              totalPrice={item.totalPrice}
              quantity={item.quantity}
              comments={item.comments}
              />
            </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default WishList

