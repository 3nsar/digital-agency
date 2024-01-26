
import "./Cards.scss"
import { TbNorthStar } from "react-icons/tb";
import pic1 from "../../images/web1.jpg"
import pic2 from "../../images/web2.jpg"
import { FaLocationDot } from "react-icons/fa6";
import { motion } from 'framer-motion';

const Cards = () => {
  return (
    <div className='cards-container'>
         <h1>Made by Exo<TbNorthStar size="2rem" color="#ff0066"/>co</h1>
       <div className="cards-content">
      
            <motion.div className="cards"
                        initial={{opacity: 0, scale: 0, y:100}}
                        whileInView={{opacity: 1, scale: 1, y:0}}
                        transition={{duration: 1}}
                        viewport={{once: true}}
            >
                <img src={pic1}alt="pic" />
                <div className="cards-details">
                    <p><FaLocationDot/> DELAWARE, USA</p>
                    <p>Cryptocurrency</p>
                </div>
                <p className='cards-title'>Deepwaters</p>
                <p className='cards-kind'>Product Design</p>
                <a href="https://www.coingecko.com/de" target="_blank" rel="noopener noreferrer"><button>View project</button></a>
            </motion.div>

            <motion.div className="cards"             initial={{opacity: 0, scale: 0, y:100}}
            whileInView={{opacity: 1, scale: 1, y:0}}
            transition={{duration: 2}}
            viewport={{once: true}}
            >
                <img src={pic2} alt="pic" />
                <div className="cards-details">
                    <p><FaLocationDot/> LONDON, UK</p>
                    <p>Finance</p>
                </div>
                <p className='cards-title'>Grain</p>
                <p className='cards-kind'>Web Build</p>
                <a href="https://www.awwwards.com/" target="_blank" rel="noopener noreferrer"><button>View project</button></a>
            </motion.div>
       </div>
    </div>
  )
}

export default Cards