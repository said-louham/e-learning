import React from 'react'
import './Style/headerSlider1.css'
import log from'../../imgs/category/development.jpg'

function HeaderSilder() {
  return (
    <div className='haeder-silder1'>
     <div className='left-side'> 
          <p>Best online courses</p>
          <h1>The best Online<br/> Learning Platform </h1>
      </div>
      <img   className='circle' src={log} alt="" />

    </div>
  )
}

export default HeaderSilder