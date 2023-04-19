import React from 'react'
import './cardInstructor.css'
import { useSelector } from "react-redux"

const Cardinstructor = ({name ,role}) => {
  const theme= useSelector(state => state.theme)
  return (
        
        
    <div className={`Card ${theme}`}>
        <div className='mostatil'></div>
        <h1 style={{marginTop:'15px'}}>{name}</h1>
        <p>{role}</p>

    </div>
    
  )
}

export default Cardinstructor