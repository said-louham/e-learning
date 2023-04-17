import React from 'react'
import './footer.css'
import logo from '../../imgs/slideHome/Logo.png'
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FiTwitter, FiMapPin } from "react-icons/fi";
import { BsGithub, BsTelephoneFill } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";

const Footer = () => {
    return (
        <div className='Footer'>

            <div className='section-left'>
                <div className='section-img'>
                    <img src={logo} alt='logo' />
                    <p> C4U </p>
                </div>
                <div className='section-about'>
                    <h5> About </h5>
                    <p>free online courses, Gain new skills. Join today.
                    </p>
                </div>
                <div className='section-icons'>
                    <div className='circle' > <FaLinkedinIn /> </div>
                    <div className='circle' > <FiTwitter />  </div>
                    <div className='circle' > <FaFacebookF /> </div>
                    <div className='circle' > <BsGithub /> </div>
                </div>
            </div>

            <div className='section-center'>
                <h5> Categories </h5>
                <div>
                    <p> Design </p>
                    <p> Developement </p>
                    <p> Marketing </p>
                    <p> Editeng Video </p>
                
                </div>
            </div>

            <div className='section-right'>
                <h5> Contact </h5>
                <div className='contact-info'>
                    <div>
                        <FiMapPin className='icons-contact' />
                        <p> Mirlft, Morocco  </p>
                    </div>
                    <div>
                        <BsTelephoneFill className='icons-contact' />
                        <p> +212 652716681 </p>
                    </div>
                    <div>
                        <HiOutlineMailOpen className='icons-contact' />
                        <p> saidlouham110@gmail.com </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer