import React from 'react'
import './colorPicker.css'
import { useDispatch } from 'react-redux'
import { bagActions } from '../Redux/BagSlice'
import FavProducts from './NewArrivals/FavProducts'
import short from '../public/images/63f8e2fa879dd01aabbf7672_Img  (3)-p-500.png'

const productColorPicker = (image, image1, name, title, colors, price, id,ratings,comments,priceTag) => {

  const addToBag = () => {
    useDispatch(bagActions.addToBag({
        image,
        image1,
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

  return (
    <div className='color-picker'>
      <img src={short}></img>
    </div>
  )
}

export default productColorPicker;