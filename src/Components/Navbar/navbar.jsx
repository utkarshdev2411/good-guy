import React from "react";
import './navbar.css';
import mylogo from '../../image/mylogo.png';


const Navbar = () => {
    return (<div className="navbar">
        <div className="n-left">
            <div className="logo"><img src={mylogo}></img></div>
        </div>
        <div className="n-right">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Services</a></li><li>
                    <a href="">Contact</a></li>

            </ul>
        </div>
    </div>)
}
export default Navbar;