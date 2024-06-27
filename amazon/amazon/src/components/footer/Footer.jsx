import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <h1>Back to Top</h1>
      </div>

      <div className="center">

        <div className="section">
            <h1>Get To Know Us</h1>
        <ul>
            <li><a href="">Careers</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">About Amazon</a></li>
            <li><a href="">Investor Relations</a></li>
            <li><a href="">Amazon Devices</a></li>
            <li><a href="">Amazon Science</a></li>
        </ul>
        </div>

        <div className="section">
            <h1>Make Money With Us</h1>
        <ul>
            <li><a href="">Sell products on Amazon</a></li>
            <li><a href="">Sell on Amazon Business</a></li>
            <li><a href="">Sell apps on Amazon</a></li>
            <li><a href="">Become an Affiliate</a></li>
            <li><a href="">Advertise Your Products</a></li>
            <li><a href="">Self-Publish with Us</a></li>
            <li><a href="">Host on Amazon Hub</a></li>
        </ul>
        </div>

        <div className="section">
            <h1>Amazon Payment Products</h1>
        <ul>
            <li><a href="">Amazon Business Card</a></li>
            <li><a href="">Shop with Points</a></li>
            <li><a href="">Reload Your Balance</a></li>
            <li><a href="">Amazon Currency Converter</a></li>
        </ul>
        </div>

        <div className="section">
            <h1>Let Us Help You</h1>
        <ul>
            <li><a href="">Your Account</a></li>
            <li><a href="">Your Orders</a></li>
            <li><a href="">Shipping Rates & Policies</a></li>
            <li><a href="">Returns & Replacements</a></li>
            <li><a href="">Manage Your Content and Devices</a></li>
            <li><a href="">Amazon Assistants</a></li>
            <li><a href="">Help</a></li>
        </ul>
        </div>

      </div>



      <div className="bottom">
<img src="/images/amazon_logo.png" alt="" />
      </div>
      <div className="privacy">
<h3>Conditions of Use Privacy Notice Your Ads Privacy Choices</h3>
<h4>&copy; 1996-2023, Amazon.com, Inc. or its affiliates</h4>

      </div>
    </div>
  )
}

export default Footer;
