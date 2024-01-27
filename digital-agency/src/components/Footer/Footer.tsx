import "./Footer.scss"
import { TbNorthStar } from "react-icons/tb";
import { PiLinkedinLogoFill } from "react-icons/pi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-scroll';


const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-box">
        <div className="footer-title">
        <h1>Exo<TbNorthStar size="2rem" color="#ff0066"/>co</h1>
        </div>
        <div className="footer-list-content">
            <ul id='footer-ul'>

                <Link
            activeClass="active"
            to="assistance-content"
            smooth={true}
            duration={500}
            
            id='footer-li'
      >
        <li>Blocks</li>

        </Link>

        <Link
            activeClass="active"
            to="cards-content"
            smooth={true}
            duration={500}
            
            id='footer-li'
      >
        <li>Portfolio</li>

        </Link>

        <Link
            activeClass="active"
            to="team-content"
            smooth={true}
            duration={500}
           
            id='footer-li'
      >
        <li>Team</li>

        </Link>

        <Link
            activeClass="active"
            to="accordion-qst-title"
            smooth={true}
            duration={500}
           
            id='footer-li'
      >
        <li>FAQs</li>

        </Link>

        <Link
            activeClass="active"
            to="contact-container"
            smooth={true}
            duration={500}
            
            id='footer-li'
      >
        <li>Contact</li>

        </Link>
            </ul>
        </div>
        <div className="social-list">
            <ul id="social-ul">
            <li id="social-li" ><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><PiLinkedinLogoFill size="2rem" color="#f1f0f0"/></a></li>
            <li id="social-li"><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter size="2rem" color="#f1f0f0"/></a></li>
            </ul>
        </div>
        </div>
        <p id='footer-end'>© 2024 Exo+Co Ltd. All rights reserved. Vienna | Company number: 512194</p>
    </div>
  )
}

export default Footer