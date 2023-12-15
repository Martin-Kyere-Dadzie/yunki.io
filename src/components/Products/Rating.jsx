// import React from 'react'
// import Filter from '../Home/Filter/Filter'
// import heartFill from '../public/icons/heart-red-fill.svg'
// import heartOutline from '../public/icons/heart-red-outline.svg'
// import heartHalf from '../public/icons/heart-red-half.svg'

// const Rating = ({heart}) => {
//     const heartRating = Array.from({length: 5}, (elem, index) => {
//         let number = index + 0.5;
//         debugger;
//         return(
//             <span key={index}>
//                 {heart >= index + 1 ? (<img alt='' src={heartFill} className='heart-fill'></img>): 
//                 heart >= number ? (<img alt='' src={heartHalf} className='heart-half'></img>): 
//                 (<img alt='' src={heartOutline} className='heart-outline'></img>) }
//             </span>
//         )
//     })
//   return (
//     <div>Rating</div>
//   )
// }

// export default Rating