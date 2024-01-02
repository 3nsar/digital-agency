import React from 'react'
import "./Cards.scss"
import { TbNorthStar } from "react-icons/tb";
import pic1 from "../../images/web1.jpg"
import pic2 from "../../images/web2.jpg"

const Cards = () => {
  return (
    <div className='cards-container'>
         <h1>Made by Exo<TbNorthStar size="2rem" color="#ff0066"/>co</h1>
       <div className="cards-content">
      
            <div className="cards">
                <img src={pic1}alt="pic" />
                <div className="cards-details">
                    <p>DELAWARE, USA</p>
                    <p>Cryptocurrency</p>
                </div>
                <p className='cards-title'>Deepwaters</p>
                <p>Product Design</p>
                <button>View project</button>
            </div>

            <div className="cards">
                <img src={pic2} alt="pic" />
                <div className="cards-details">
                    <p>DELAWARE, USA</p>
                    <p>Cryptocurrency</p>
                </div>
                <p className='cards-title'>Deepwaters</p>
                <p>Product Design</p>
                <button>View project</button>
            </div>
       </div>
    </div>
  )
}

export default Cards