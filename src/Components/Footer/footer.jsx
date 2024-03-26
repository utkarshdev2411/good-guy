import React from 'react'
import './footer.css'
import logo from '../../image/mylogo.png'

const Footer = () => {
  return (
    <div className='footer'>

      <div className='logo' >
        <img src={logo} alt='logo'></img>
      
      </div>

      <div className='credentials'>
           <h3>Copyright &copy; Good-Guy</h3>
           <h3>All Rights Reserved</h3>

      </div>

      <div className='contact-email'>
         <h3>Contact Us</h3>
         <h4>admin@goodguy.live</h4>
      </div>

    </div>
  )
}

export default Footer
