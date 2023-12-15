import React from 'react';
import './CommentsPopUp.css';
import closeBlack from '../public/icons/close-btn.svg';
import closeRed from '../public/icons/close-red.svg';

const CommentsPopUp = (props) => {
  return(props.trigger) ? (
    <div className='comments-section'>
        <div className='comments-stall'>
            <img alt = 'close-btn'
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

export default CommentsPopUp
