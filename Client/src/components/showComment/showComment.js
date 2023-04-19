import React from 'react'
// import Zoom from 'react-reveal/Zoom';
import { AiFillCloseCircle } from "react-icons/ai";
import FeedbackForm from '../comment/FeedbackForm';
import FeedbackList from '../comment/FeedbackList';
import './style.css'

const ShowComment = ({idCours},props) => {
    return (
        <div>
                <div className='showComment'>
                    <div className='section-info'>
                        <FeedbackForm id={idCours}/>
                        <FeedbackList idCours={idCours} />                      
                    </div>
                </div>
        </div>
    )
}

export default ShowComment