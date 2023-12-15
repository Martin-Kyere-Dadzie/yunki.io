import React from "react";
import './LoginPopUp.css';
import closeBlack from '../public/icons/close-black.svg'
import closeRed from '../public/icons/close-red.svg'

const LoginPopUp = (props) => {
    return(props.trigger) ? (
      <div className="login-popup">
        <div className="login-popup-inner">
        <img alt='close-btn'
           src={closeBlack} 
           className='close-btn' 
           onClick={() => props.setTrigger(false)}
           onMouseOver={e => (e.currentTarget.src = closeRed)}
           onMouseLeave={e => (e.currentTarget.src = closeBlack)}>
           </img>
          {props.children}
        </div>
      </div>
    ) : ""
  } 

  export default LoginPopUp;