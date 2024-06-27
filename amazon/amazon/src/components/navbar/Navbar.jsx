import React from 'react'
import "./Navbar.css"
import { FaLocationDot } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";


function Navbar() {
  return (
    <div className="navbar">

      <nav className="top">
        <div className="logo">
            <img src="/images/amazon_logo.png" alt="" />
        </div>

        <div className="input">
            <div className="location"><h1><small>Deliver to</small><br/>
            <FaLocationDot/>India</h1></div>
            <input type="text" placeholder="Search Amazon" />
            <span className="searchIcon"> <FaSearch/> </span>
        </div>

        <div className="links">
            <ul>
                <li><a href="">EN  <img className="eng" src="/images/flag-Stars-and-Stripes-July-4-1912.gif" alt="" /> </a></li>
                <li><a href=""><small>Hello sign in </small><br/>Accounts & Lists</a></li>
                <li><a href=""><small>Return</small><br/>& Orders</a></li>
                <li><a href=""> <FaCartShopping/> Cart</a></li>
            </ul>
        </div>
      </nav>

  <nav className="bottom">
        <div className="left">
        <div className="dropdown">
            <IoMenu/>
            Menu
        </div>
        <ul>
            <li><a href="">Today's Deals</a></li>
            <li><a href="">Customer Service </a></li>
            <li><a href="">Registry</a></li>
            <li><a href="">Gift Cards</a></li>
            <li><a href="">Sell</a></li>
        </ul>
        </div>

        <div className="right">
            <h2>Shop Deals in Electronics </h2>
        </div>
  </nav>
    </div>
  )
}

export default Navbar;
