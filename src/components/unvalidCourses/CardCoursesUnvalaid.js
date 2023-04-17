import React, { useState } from 'react'
import img from './../../imgs/slideHome/img-card.jpeg'
import MoreInfoCourse from './MoreInfoCourse'
import {  useSelector } from "react-redux";


const CardCoursesUnvalaid = (props) => {

    const {users} =useSelector(state=>state.UsersSlice)
    const [BoleenShow, setBoleenShow] = useState(false)
    const user= users.filter(usr=> usr.id ==props.cour.user_id).shift()

    const Categorie = ["Development", "Design", "Business", "Marketing", "Management",];

    return (
        <div>
            <div className='CardCoursesUnvalaid'>

                <div className='content-img'>
                    <img  src={`http://127.0.0.1:8000/Courses/${props.cour.image}`} alt="" />
                </div>

                <div>
                    <p> {props.cour.title }</p>
                
                </div>

                <div>
                    <p> {Categorie[props.cour.category_id -1]} </p>
                </div>

                <div className='Owner'>
                    <p> { user?.full_name ||'Owner Name' } </p>
                </div>

                <div className='price'>
                    <p> {props.cour.price } $ </p>
                </div>

                <div className='ShowMore'>
                    <button onClick={()=> setBoleenShow((prev) => !prev)} > More </button>
                </div>

                <div className='Btns-Accepte'>

                    <button className='accept' > Accept </button>
                    <button className='reject'> Reject </button>

                </div>

            </div>

            { BoleenShow && <MoreInfoCourse cour={props.cour} setBoleenShow = {setBoleenShow} /> } 

        </div>
    )
}

export default CardCoursesUnvalaid