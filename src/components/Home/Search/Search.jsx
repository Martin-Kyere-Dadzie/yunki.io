import React from 'react';
import './Search.css';
import tileOption from '../../public/icons/tile-white.svg';
import listOption from '../../public/icons/list-option.svg';
import searchIcon from '../../public/icons/search-icon.svg';
import angleDown from '../../public/icons/angle-down.svg';
import { useState } from 'react';
// import ()


const Search = () => {
  const [dropDown, setDropDown] = useState(false);
  const [searchItem, setSearchItem] = useState('');
  
  return (
    <div className='search-container'>
      <form>
        <input 
        type='search' 
        placeholder='Search' 
        type="text" 
        onChange={
          (event) => {
            setSearchItem(event.target.value)
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
      <div className="stock">New Arrivals</div>
      <div className="category-section">
          <h4 className='auto-select'>New Arrivals</h4>
        <div className="category-drop">
          {dropDown && (
            <div className="dropdown">
              <div className="dropdown-item">
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
  )
};

export default Search;