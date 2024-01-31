import './Hero.scss';
import heroVideo from  "../../video/hero-video.mp4"
import { TbNorthStar } from "react-icons/tb";
import { motion } from 'framer-motion';



const Hero = () => {
  return (
    <div className='hero-container'>
       <video src={heroVideo} autoPlay loop muted  className='video-background' />
       <div className='overlay'></div>
        <div className="hero-content">
        <div className="hero-subtitle">
          <p><TbNorthStar size="2rem"/>Design & development studio</p>
       </div>
      <motion.h1     
                    initial={{opacity: 0.2, scale: 0, x:90}}
                    whileInView={{opacity: 1, scale: 1, x:0}}
                    transition={{duration: 1}}
                    viewport={{once: true}}>Bringing your<br /><span className='gradient-text'>vision</span> to its<br /> fullest potential</motion.h1>
      </div>
    </div>
  )
}

export default Hero