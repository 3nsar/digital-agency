import React from 'react';
import './Hero.scss';
import heroVideo from  "../video/hero-video.mp4"

const Hero = () => {
  return (
    <div className='hero-container'>
       <video src={heroVideo} autoPlay loop muted  className='video-background' />
        <div className="hero-content">
      <h1>Bringing your vision to its fullest potential</h1>
      </div>
    </div>
  )
}

export default Hero