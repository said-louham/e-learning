import React from 'react'
// import Zoom from 'react-reveal/Zoom';
import { AiFillCloseCircle } from "react-icons/ai";

const MoreInfoCourse = (props) => {
    return (
        <div>
            {/* <Zoom right> */}
                <div className='MoreInfoCourse'>

                    <div className='section-icon'>
                        <AiFillCloseCircle onClick={() => props.setBoleenShow(prev => !prev)} />
                    </div>

                    <div className='section-info'>
                        <h3> Discription : </h3>
                        <p>
                        {props.cour.discription}                      
                        </p>

                        <h3> Objectives :  </h3>
                        <p>
                            <p> {props.cour.objectifs} </p>
                         
                        </p>

                        <h3> Language : </h3>
                        <p>
                        {props.cour.language}
                        </p>
                    </div>

                </div>
            {/* </Zoom> */}
        </div>
    )
}

export default MoreInfoCourse