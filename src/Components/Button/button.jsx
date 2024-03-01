import React from 'react'
import './button.css'
import Arrow from '../../image/arrow.png';

const Button = () => {
  return (
    <div className='button'>
      <button ><span className='try'> 
      <a href='#section2'>Try Now</a></span><img className='arrow' src={Arrow}></img></button>
    </div>
  )
}

export default Button
