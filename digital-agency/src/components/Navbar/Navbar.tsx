import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import { TbNorthStar } from "react-icons/tb";
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {

  const [showNav, setShowNav] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const closeNav = () => {
    setShowNav(false);
  };

  return (
    <div className={`nav-container  ${isSticky ? 'sticky' : ''}`}>
      <div className="nav-title">
        <h1>Exo<TbNorthStar size="2rem" color="#ff0066"/>co</h1>
        </div>
        <div className={`list-content ${showNav ? 'show' : ''}`}>
            <ul>
                <li>Blocks</li>
                <li>Portfolio</li>
                <li>Team</li>
                <li>FAQs</li>
                <li>Contact</li>
            </ul>
        </div>
        <button>Hire us</button>
        <div className='nav-icon' onClick={toggleNav}>
        {showNav ? <AiOutlineClose fontSize="25px" /> : <FaBars fontSize="25px" />}
      </div>

    </div>
  )
}

export default Navbar