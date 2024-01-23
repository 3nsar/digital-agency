import Form from './Form/Form';
import './Contact.scss';
import React,{useState} from 'react';
import { TbNorthStar } from "react-icons/tb";

const Contact = () => {
    const [values, setValues] = useState({
        username:"",
        email:"",
        birthday:"",
        password:"",
        confirmPassword:"",
       })
      
       const inputs = [
        {
          id:1,
          name:"username",
          type:"text",
          placeholder:"FULL NAME",
          errorMessage:"Full name should be 3-40 and shouldn't have any special character!",
    
          pattern: "^[A-Za-z0-9]{3,40}$",
          required:true
        },
        {
          id:2,
          name:"email",
          type:"email",
          placeholder:"EMAIL",
          errorMessage:"It should be a valid email-address!",
      
          required:true
        },
        {
          id:3,
          name:"birthday",
          type:"date",
          placeholder:"BIRTHDAY",
         
          required:true
        },
        
        
       ]
      
        const handleSubmit = (e)=>{
          e.preventDefault();
      
        }
      
        const onChange = (e)=>{
          setValues({...values, [e.target.name]: e.target.value})
        }
      
        console.log(values)

  return (
    <div className='contact-container'>
        <div className="contact-title">
            
            <h1>Let's talk about you</h1>
            <p className='contact-small-title'><TbNorthStar color="#0044ff"/>Start a project</p>
        </div>
        <div className="contact-content">
            <div className="contact-text">
                <h1>Free 30min consultation</h1>
                <p>Have a new project in mind? Schedule a 30-minute discovery call or fill out the quick form, and together we'll explore the possibilities.</p>
                <button id='contact-button'>Schedule discovery call</button>
            </div>
            <div className="contact-form">
            <form onSubmit={handleSubmit}>
      {inputs.map((input)=>(
        <Form 
           key={input.id} {...input} 
           value={values[input.name]} 
           onChange={onChange}/>
      ))}
      <div className="form-submit">
       <textarea cols={45} rows={8} placeholder='YOUR MESSAGE'></textarea>
       <button id='contact-button'>Submit</button>
       </div>
     </form>
            </div>
        </div>
    </div>
  )
}

export default Contact