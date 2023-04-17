import React from 'react'
import './Style/headerSilder3.css';
import logo from'../../imgs/category/business.jpg'
import log from'../../imgs/category/design.jpg'

function HeaderSlider() {
  return (
      <div className='haeder-silder2'>

 
      <img   className='circle' src={logo} alt="" />
      <img   className='circle' src={log} alt="" />

      </div>
  )
}

export default HeaderSlider