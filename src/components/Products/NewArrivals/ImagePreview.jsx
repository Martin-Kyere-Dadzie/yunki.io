import React from 'react'
import './ImagePreview.css'
import { productData } from '../productData';
import { useState } from 'react';

const ImagePreview = ({images}) => {

  return (
    <div className="preview-container">
        
        {
            productData.map(((products) => {
                
                const [preview, setPreview] = useState(products.imageOnclick[0]);
                const handleClick = (index) => {
                    // console.log(index);
                    const slider = products.imageOnclick[index];
                    setPreview(slider);
                }
                
                return(
                    <div className="small-image-preview">
                        <div className="big-image-container">
                            <img src={preview.value} className='big-img'></img>
                        </div>

                        {
                            products.imageOnclick.map((image, index) => {
                                return(
                                    <div className="main-image">
                                        {
                                        <img 
                                            alt='img' 
                                            src={image.imageDisplay} 
                                            className='popup-img' 
                                            onClick={() => handleClick(index)} 
                                            id={index}
                                            >
                                        </img> 
                                        
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }))
        }
    </div>
  )
}

export default ImagePreview;