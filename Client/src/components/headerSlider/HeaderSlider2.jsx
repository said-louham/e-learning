import React from 'react'
import './Style/headerSilder2.css'
import log from'../../imgs/category/design.jpg'

function HeaderSilder() {
  return (
    <div className='haeder-silder2'>
      <img   className='circle' src={log} alt="" />
     <div className='right-side'> 
          <p>Best online courses</p>
          <h1>Grow Your Skills To</h1>
            <h1 className='sec-heading'> Advance Your</h1> 
          <h1 className='trd-heading'>  Career Path </h1>
            
      </div>
    </div>
  )
}

export default HeaderSilder