import { useState } from 'react';
import "./Assistance.scss"
import { TbNorthStar } from "react-icons/tb";
import AssistanceCard from './AssistanceCard';
import dwaveImg from "../../images/dwave.jpg"
import { GiMeshBall } from "react-icons/gi";


type ListItemProps = {
  item: string;
  selected: boolean;
  onClick: (service: string) => void;
 };

const ListItem = ({ item, selected, onClick }: ListItemProps) => {
  const handleClick = () => {
    onClick(item);
  };

  return (
    <li onClick={handleClick} style={{ color: selected ? '#ff0066' : '#767373' }}>
      {item}
    </li>
  );
};

const Assistance = () => {
  const [selectedService, setSelectedService] = useState('Branding');

  const handleServiceClick = (service: string) => {
    setSelectedService(service);
  };

  return (
    <div className='assistance-container'>
      <div className="assistance-content">
        <div className="assistance-title">
          <p className='small-title'><TbNorthStar color="#0044ff"/> What we do</p>
          <h1>Choose all the service <span className='rainbow'>blocks</span><br />or just the ones you need...</h1>
          <p className='assistance-title-text'>Tailored services <span className='dark-text'>without the agency fluff</span>: discovery, strategy, branding, website and
             <br className='assistance-break'/>product design, Webflow development, and training, all in one comprehensive suite.</p>
        </div>
        <div className="assistance-options">
         <div className="assistance-options-inner">
          <ul>
            <ListItem item="Branding" selected={selectedService === 'Branding'} onClick={handleServiceClick} />
            <ListItem item="Website Design" selected={selectedService === 'Website Design'} onClick={handleServiceClick} />
            <ListItem item="Webflow" selected={selectedService === 'Webflow'} onClick={handleServiceClick} />
            <ListItem item="Product Design" selected={selectedService === 'Product Design'} onClick={handleServiceClick} />
          </ul> 
            <div className="assistance-text">
                {selectedService === 'Branding' 
                && 
                <AssistanceCard 
                title="Brand guidelines"
                subtitle="Developing a consistent look"
                time="1-2 weeks"
                text="We'll create a comprehensive brand guidelines document that outlines the proper use of your logo, colour palette, typography, imagery, and other elements. 
                This ensures that your brand is represented in a consistent and professional manner across all channels."
                />}
                {selectedService === 'Website Design' 
                && <AssistanceCard
                title="UX Design + content"
                subtitle="Wireframes and content guidance"
                time="2-3 weeks"
                text="Our dedicated UX designers create custom wireframes and offer content guidance to ensure the end result of your project is both intuitive and impactful,
                 putting your website on the right track for success."/>}
                {selectedService === 'Webflow' 
                && <AssistanceCard 
                title="Webflow Integration"
                subtitle="Seamlessly connect business platforms"
                time="1 week"
                text="Effortlessly integrate your business platforms into your Webflow website. Seamlessly connect your CRM,
                 and other systems to optimise operations and enhance user experiences, all within a unified digital ecosystem."/>}
                {selectedService === 'Product Design' 
                && <AssistanceCard 
                title="Defining the product"
                subtitle="Crafting the product vision"
                time="1-2 days"
                text="The foundation of successful product design begins with a well-defined product vision. Clearly outlining the what,
                 how, why, and who sets the stage for a shared understanding and drives project success."/>}
            </div>
        </div>
        </div>
        <div className="dwave-container">
          <div className="dwave-content">
            <div className="dwave-img">
              <img src={dwaveImg} alt="pic" />
            </div>
            <div className="dwave-text">
              <h2><GiMeshBall />DesignWave</h2>
              <h1>Design, on-demand</h1>
              <p className='dwave-subtitle'>Design plans to supercharge your business.</p>
              <p className='dwave-paragraph'>You didn't know design could be this good... Prepare to have your mind blown by our top quality, lightening fast and super convenient design service.
               Say goodbye to the hassle of unreliable freelancers and the exorbitant costs of bloated agencies.</p>
               <a href="https://www.designwave.co/" target="_blank" rel="noopener noreferrer"><button>Go to DesignWave</button> </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assistance;
