import React from 'react'
import "./Footer.scss"
import { TbNorthStar } from "react-icons/tb";
import { PiLinkedinLogoFill } from "react-icons/pi";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-box">
        <div className="footer-title">
        <h1>Exo<TbNorthStar size="2rem" color="#ff0066"/>co</h1>
        </div>
        <div className="footer-list-content">
            <ul id='footer-ul'>
                <li id='footer-li'>Blocks</li>
                <li id='footer-li'>Portfolio</li>
                <li id='footer-li'>Team</li>
                <li id='footer-li'>FAQs</li>
                <li id='footer-li'>Contact</li>
            </ul>
        </div>
        <div className="social-list">
            <ul id="social-ul">
                <li id="social-li" ><PiLinkedinLogoFill size="2rem" color="#f1f0f0"/></li>
                <li id="social-li"><FaSquareXTwitter size="2rem" color="#f1f0f0"/></li>
            </ul>
        </div>
        </div>
        <p id='footer-end'>© 2024 Exo+Co Ltd. All rights reserved. Vienna | Company number: 512194</p>
    </div>
  )
}

export default Footer