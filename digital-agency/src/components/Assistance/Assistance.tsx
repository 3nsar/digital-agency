import React from 'react'
import "./Assistance.scss"
import { TbNorthStar } from "react-icons/tb";

const Assistance = () => {
  return (
    <div className='assistance-container'>
        <div className="assistance-content">
            <div className="assistance-title">
                <p className='small-title'><TbNorthStar color="#0044ff"/> What we do</p>
                <h1>Choose all the service <span className='rainbow'>blocks</span><br />or just the ones you need...</h1>
                <p className='assistance-title-text'>Tailored services <span className='dark-text'>without the agency fluff</span>: discovery, strategy, branding, website and</p>
                <p className='assistance-title-text'>product design, Webflow development, and training, all in one comprehensive suite.</p>
            </div>
        </div>
    </div>
  )
}

export default Assistance