import React from 'react';
import './UserDropDown.css';


const UserDropDown = (Title) => {
  return (
    <div className="dropdown-contents">
        <li>
          <img alt='img' src={Title.image}></img>
          <a>{Title.text}</a>
        </li>
    </div>
  )
}

export default UserDropDown