import React from 'react'
import { useSelector } from 'react-redux'
import './AboutUs.css'
import { Link } from 'react-router-dom'


function AboutUs() {
  const theme=useSelector(state=>state.theme)
  return (
    <div className={`AboutUs-container ${theme}`}>
        <div className="left-side">
            <p> Want to see more?</p>
            <h1>About Us</h1>
            <Link to={'/about'}><button>show more</button></Link>
        </div>

        <div className="right-side">
            <div className='first-pict'></div>
            <div className='secend-pict'></div>
        </div>
        
    </div>
  )
}

export default AboutUs