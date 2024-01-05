import React from 'react'
import "./Partner.scss"
import { TbNorthStar } from "react-icons/tb";
import Reviews from './Reviews';

const Partner = () => {
  return (
    <div className='partner-container'>
        <div className="partner-content">
            <div className="partner-titel">
               <p className='partner-small-titel'><TbNorthStar color="#b01cff"/> Who we work with</p>
               <p className='partner-big-titel'>Who for?</p>
               <p className='partner-titel-text'>We collaborate with funded startups, established businesses, enterprise companies, and agencies to provide tailored design and development solutions.
                Our expertise enhances your brand presence, drives growth, and fosters long-term success in your respective industries.</p>
            </div>
            <div className="grid-container">
              <div className="grid-item">
                <h2>Funded Startups</h2>
                <p>Empower your startup's vision with our innovative design. We collaborate with ambitious founders like you to establish a strong brand presence and accelerate growth, bringing your ideas to life.</p>
              </div>
              <div className="grid-item">
                <h2>Mid-market Businesses</h2>
                <p>Elevate your business with impactful design. We craft custom strategies to boost your brand identity, enhance online presence, and drive meaningful customer engagement, helping you stand out in the market.</p>
              </div>
              <div className="grid-item">
                <h2>Enterprise Companies</h2>
                <p>We partner with enterprise companies, delivering comprehensive design solutions that align with their scale and vision. Our expertise helps them achieve a cohesive and influential brand presence across platforms.</p>
              </div>
              <div className="grid-item">
                <h2>Partner Agencies</h2>
                <p>We collaborate with partner agencies, complementing their services with our solutions. Together, we create remarkable experiences for their clients, creating lasting relationships and mutual success.</p>
              </div>
            </div>
            <Reviews/>
        </div>
    </div>
  )
}

export default Partner