import React from 'react'
import './cardTeams.css'
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";


const CardTeams = (props) => {

  return (
   
    <div className='Card-teams'>
        <div className='section-img'>
            <img src={props.img} alt='img profile'/>
        </div>
        <h1> {props.name}</h1>
        <h5> {props.description} </h5>
        <div className='section-icons-teams'>
                <div className='circle' > <FaLinkedinIn /> </div>
                <div className='circle' > <FaFacebookF /> </div>
                <div className='circle' > <BsGithub /> </div>
        </div>
    </div>
  )
}

export default CardTeams