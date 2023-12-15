import React from 'react'
import './Filter.css'
import MainCategory from '../../Partials/MainCategory/MainCategory';
import { categoryList } from '../../Partials/MainCategory/Data/data';
import babyIcon from '../../public/icons/baby-icon.svg';
import apparelIcon from '../../public/icons/apparel-icon.svg';
import petsIcon from '../../public/icons/pets-icon.svg';
import bodyCareIcon from '../../public/icons/bodycare-icon.svg';
import laptopIcon from '../../public/icons/laptop-icon.svg';
import phoneIcon from '../../public/icons/phone-icon.svg';
import gamingIcon from '../../public/icons/gaming-icon.svg';

const Filter = ({selectedCategory, selectToggle}) => {
  return (
      <div className="filter__container">
        <div className="link-section">
          <div className="header">
            <h5>Category</h5>
          </div>
          <div className="category-links">
            <div className="apparels-link main-link">
              <div className="image-holder">
                <img alt='apparels' src={apparelIcon}></img>
              </div>
              <div className="link-holder">
                <h6>Apparels</h6>
              </div>
            </div>
            <div className="skin-link main-link">
              <div className="image-holder">
                <img alt='body-care' src={bodyCareIcon}></img>
              </div>
              <div className="link-holder">
                <h6>Skin & Beauty</h6>
              </div>
            </div>
            <div className="phone-link main-link">
              <div className="image-holder">
                <img alt='phone' src={phoneIcon}></img>
              </div>
              <div className="link-holder">
                <h6>Phones & Accessories</h6>
              </div>
            </div>
            <div className="baby-link main-link">
              <div className="image-holder">
                <img alt='baby-icon' className='baby-icon category-icon' src={babyIcon}></img>
              </div>
              <div className="link-holder">
                <h6>Babies</h6>
              </div>
            </div>
            <div className="laptop-link main-link">
              <div className="image-holder">
                <img alt='laptop' src={laptopIcon}></img>
              </div>
              <div className="link-holder">
                <h6>Laptops & Accessories</h6>
              </div>
            </div>
            <div className="pet-link main-link">
              <div className="image-holder">
                <img alt='pets' src={petsIcon}></img>
              </div>
              <div className="link-holder">
                <h6>Pets</h6>
              </div>
            </div>
            <div className="gaming-link main-link">
              <div className="image-holder">
                <img alt='pets' src={gamingIcon}></img>
              </div>
              <div className="link-holder">
                <h6>Gaming</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Filter;