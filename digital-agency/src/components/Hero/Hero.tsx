import './Hero.scss';
import heroVideo from  "../../video/hero-video.mp4"
import { TbNorthStar } from "react-icons/tb";




const Hero = () => {
  return (
    <div className='hero-container'>
       <video src={heroVideo} autoPlay loop muted  className='video-background' />
       <div className='overlay'></div>
        <div className="hero-content">
        <div className="hero-subtitle">
          <p><TbNorthStar size="2rem"/>Design & development studio</p>
       </div>
      <h1>Bringing your<br /><span className='gradient-text'>vision</span> to its<br /> fullest potential</h1>
      </div>
    </div>
  )
}

export default Hero