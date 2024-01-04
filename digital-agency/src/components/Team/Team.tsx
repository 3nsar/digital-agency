import React,{useEffect} from 'react'
import "./Team.scss"
import { TbNorthStar } from "react-icons/tb";
import { FaCircle } from "react-icons/fa";

const About = () => {

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    const addAnimation =() => {
      scrollers.forEach((scroller) => {
        (scroller as HTMLElement).setAttribute("data-animated", "true");
      });
    }

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);



  return (
    <div className='team-container'>
        <div className="team-content">
            <p className='team-small-title'><TbNorthStar color="#0044ff"/>  Who you're working with</p>
            <h1 className='team-title'>A curated collective of <br />problem solvers</h1>

            <p className='team-subtitle'>Exceptional work is the baseline, doing<br />
            what we love is the mission.</p>
            <div className="team-box">
            <div className='banner-container'>
      <div className="scroller">
        <div className="scroller-inner">

          <p><FaCircle color="#79ff61" size="0.5rem" style={{ marginRight: '5px' }} /> Product Designer</p>
          
          <p><FaCircle color="#79ff61" size="0.5rem" style={{ marginRight: '5px' }}/> UI Designer</p>
          
          <p><FaCircle color="#79ff61" size="0.5rem" style={{ marginRight: '5px' }}/> UX Designer</p>
          
          <p><FaCircle color="#79ff61" size="0.5rem" style={{ marginRight: '5px' }}/> UX Researcher</p>
          
          <p><FaCircle color="#79ff61" size="0.5rem" style={{ marginRight: '5px' }}/> Front-end Developer</p>
          
          <p><FaCircle color="#79ff61" size="0.5rem" style={{ marginRight: '5px' }}/> UI Developer</p>
          
          <p><FaCircle color="#79ff61" size="0.5rem" style={{ marginRight: '5px' }}/> Front-end Engineer</p>

          <p><FaCircle color="#79ff61" size="0.5rem" style={{ marginRight: '5px' }}/> Product Designer</p>
          
          <p><FaCircle color="#79ff61" size="0.5rem" style={{ marginRight: '5px' }}/> Product Manager</p>
          
          <p><FaCircle color="#79ff61" size="0.5rem" style={{ marginRight: '5px' }}/> Web Developer</p>
          
          <p><FaCircle color="#79ff61" size="0.5rem" style={{ marginRight: '5px' }}/> Interaction Designer</p>
          
          <p><FaCircle color="#79ff61" size="0.5rem" style={{ marginRight: '5px' }}/> UI Developer</p>
          
          <p><FaCircle color="#79ff61" size="0.5rem" style={{ marginRight: '5px' }}/> Product Designer</p>
          
          <p><FaCircle color="#79ff61" size="0.5rem" style={{ marginRight: '5px' }}/> UX Researcher</p>
        </div>
      </div>
    </div>
            <p className='team-box-title'>The right talent, in the right place, at the right time.</p>
            <p className='team-box-text'>Jords+Co are a remarkable and meticulously curated remote team located in the UK, Europe and the US comprising of experts in their respective domains.<br/>
            Your dedicated team is carefully chosen for your project, ensuring a perfect match for its unique requirements.<br/>
            Our approach of handpicking individuals with specialised skills, aligned interests, and exceptional suitability unlocks unparalleled outcomes.</p>

            </div>
        </div>
    </div>
  )
}

export default About