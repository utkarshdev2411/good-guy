import React from "react";
import './navbar.css';
import mylogo from '../../image/mylogo.png';


const Navbar =()=>{
    return( <div className="navbar">
        <div className="n-left">
            <div className="logo"><img src={mylogo}></img></div>
            <div className="name"><h2>Good-Guy</h2></div>
        </div>
        <div className="n-right">
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Contact Us</li>

            </ul>
        </div>
    </div>)
}
export default Navbar;