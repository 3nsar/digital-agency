import React from 'react';
import './Hero.scss';
import heroVideo from  "../video/head.mp4"

const Hero = () => {
  return (
    <div className='hero-container'>
       <video src={heroVideo} autoPlay loop muted  className='video-background' />
       <div className='overlay'></div>
        <div className="hero-content">
      <h1>Bringing your<br /><span className='gradient-text'>vision</span> to its<br /> fullest potential</h1>
      </div>
    </div>
  )
}

export default Hero