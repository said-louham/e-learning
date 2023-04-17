import React from 'react'
import './typeCourse.css'

const Typecourse = (props) => {
      
  return (
    <div >
<div className='categorie-combine'>
        <div className='lines'>
            <div className='line1'></div>
            <div className='line2'></div>
        </div>
    <div className='categorie'>{props.name}</div>
        <div className='lines'>
            <div className='line3'></div>
            <div className='line4'></div>
        </div>
    </div>
<div className='Courscategorie'>{props.type}</div>

    </div>

  )
}

export default Typecourse