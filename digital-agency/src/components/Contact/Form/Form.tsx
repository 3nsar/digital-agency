
import { useState } from 'react'
import "./Form.scss"  

const FormInput = (props:any) => {
    const {label, errorMessage,onChange, id, ...inputProps} = props
    const [focused, setFocused] = useState(false);

    const handleFocus = ()=>{
        setFocused(true)
    }
  return (
    <div className='formInput'>
       <label>{label}</label> 
       <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}/>
       <span className='error-msg'>{errorMessage}</span>
    
    </div>
  )
}

export default FormInput