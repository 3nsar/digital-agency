import { useState } from 'react';
import "./Accordion.scss";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

type SectionType = {
 title: string;
 content: string;
};

type AccordianSectionProps = {
 section: SectionType;
 isActiveSection: boolean;
 setActiveIndex: (index: number | null) => void;
 sectionIndex: number;
};

const accordionData= [
    {
        "title":"How does the subscription work?",
        "content": 
        `We believe in making things as flexible as possible for you. This is why we charge month-to-month, and give you the ability to pause or cancel anytime. If you do chose to cancel, then we'll finish out our commitments till the end of the cycle. You can pause any time during the cycle, and we'll store your remaining days as credit with us. Come back to us at any time within the following 6 months to continue.`
    },
    {
        "title":"What type of projects do you usually work on?",
        "content": 
        `While we primarily focus on helping ecommerce storefronts grow by increasing conversions, our team is filled with developers of varying disciplines. The best way to know if we'd be a good fit, is to get in touch with us. We'd be happy to jump on a call to understand your requirements, and help you see if we'd be a good fit.`
    },
    {
        "title":"How much does Webflow hosting cost?",
        "content": 
        `The cost of Webflow hosting depends on the specific plan you choose. Webflow offers a variety of hosting plans with different features and pricing tiers. It's best to visit the Webflow website or contact their sales team directly for the most up-to-date and accurate pricing information for their hosting services.`
    },
    {
        "title":"How does communication and collaboration work?",
        "content": 
        `We're a big believer in not wasting your time, so we don't schedule too many meetings. However, sometimes meetings are necessary and we get that. We've found a good balance in 1x cadence call per week. You will also have access to your own dashboard, where you can view updates on on-going tasks, set up tickets for future tasks, or start discussions with anyone from our team.`
    },


]

const AccordianSection = ({
    section,
    isActiveSection,
    setActiveIndex,
    sectionIndex,
   }: AccordianSectionProps) => {
    const toggleSection = () => {
       const nextIndex = isActiveSection ? null : sectionIndex;
       setActiveIndex(nextIndex);
    };
   
    return (
       <div className='accordian-section' onClick={toggleSection}>
         <div className='accordian-section-title'>
           <h1 className='section-title-font'>{section.title}</h1>
           {isActiveSection ? <MdKeyboardDoubleArrowUp /> : <MdKeyboardDoubleArrowDown />}
         </div>
         {isActiveSection && <p className='accordian-section-text'>{section.content}</p>}
       </div>
    );
   };
   
   const Accordian = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
   
    return (
       <div className='accordion-container'>
         <h1 className='accordion-qst-title'>Some Common questions</h1>
         {accordionData.map((section, index) => {
           return (
             <AccordianSection
               section={section}
               key={index}
               isActiveSection={index === activeIndex}
               setActiveIndex={setActiveIndex}
               sectionIndex={index}
             />
           );
         })}
       </div>
    );
   };
   
   export default Accordian;