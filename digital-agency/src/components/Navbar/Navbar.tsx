import React from 'react'
import './Navbar.scss';
import { TbNorthStar } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className="nav-title">
        <h1>Exo<TbNorthStar size="2rem" color="#ff0066"/>co</h1>
        </div>
        <div className="list-content">
            <ul>
                <li>Blocks</li>
                <li>Portfolio</li>
                <li>Team</li>
                <li>FAQs</li>
                <li>Contact</li>
            </ul>
        </div>
        <button>Hire us</button>
    </div>
  )
}

export default Navbar