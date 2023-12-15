import React from 'react'
import { useState } from 'react';
import './ProductPopUp.css'
import closeBlack from '../public/icons/close-btn.svg'
import closeRed from '../public/icons/close-red.svg'
// import { bagActions } from '../Redux/BagSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import heartRating from '../../public/icons/heart-icon.svg';
// import heartRatingRed from '../../public/icons/heartp-red.svg';
// import shoppingBasket from '../../public/icons/basket-icon.svg'
// import shoppingBasketRed from '../../public/icons/basket-red.svg'
// import cediIcon from '../../public/icons/cedi-icon.svg';


const ProductPopUp = (props) => {
  // const [buttonPupUp, setButtonPupUp] = useState(false);

  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
          <img alt='close-btn'
           src={closeBlack} 
           className='close-btn' 
           onClick={() => props.setTrigger(false)}
           onMouseOver={e => (e.currentTarget.src = closeRed)}
           onMouseLeave={e => (e.currentTarget.src = closeBlack)}>
           </img>
        { props.children }
      </div>
    </div>
  ) : "";
}

export default ProductPopUp