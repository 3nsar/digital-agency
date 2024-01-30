import { useState} from 'react';
import './Navbar.scss';
import { TbNorthStar } from "react-icons/tb";
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';


const Navbar = () => {

  const [showNav, setShowNav] = useState<boolean>(false);
  const [isSticky, /*setIsSticky*/] = useState<boolean>(false);


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

            <Link
            activeClass="active"
            to="assistance-content"
            smooth={true}
            duration={500}
            onClick={closeNav}
            className="nav-link"
      >
        <li>Blocks</li>

        </Link>

        <Link
            activeClass="active"
            to="cards-content"
            smooth={true}
            duration={500}
            onClick={closeNav}
            className="nav-link"
      >
        <li>Portfolio</li>

        </Link>

        <Link
            activeClass="active"
            to="team-content"
            smooth={true}
            duration={500}
            onClick={closeNav}
            className="nav-link"
      >
        <li>Team</li>

        </Link>

        <Link
            activeClass="active"
            to="accordion-qst-title"
            smooth={true}
            duration={500}
            onClick={closeNav}
            className="nav-link"
      >
        <li>FAQs</li>

        </Link>

        <Link
            activeClass="active"
            to="contact-container"
            smooth={true}
            duration={500}
            onClick={closeNav}
            className="nav-link"
      >
        <li>Contact</li>

        </Link>
            </ul>


        </div>

        <Link
            activeClass="active"
            to="contact-container"
            smooth={true}
            duration={500}
            onClick={closeNav}
            className="nav-link"
        >
        <button>Hire us</button>

        </Link>
        <div className='nav-icon' onClick={toggleNav}>
        {showNav ? <AiOutlineClose fontSize="25px" /> : <FaBars fontSize="25px" />}
      </div>

    </div>
  )
}

export default Navbar