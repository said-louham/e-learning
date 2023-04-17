import React from 'react'
// import MoreInfoCourse from '../Components/MoreInfoCourse'
import './PageUnvalidCourses.css'
import CardCoursesUnvalaid from '../../components/unvalidCourses/CardCoursesUnvalaid'
import MainAdmin from '../../layouts/mainAdmin/mainAdmin'
import {  useSelector } from "react-redux";



const PageUnvalidCoursesAdmin = () => {
    const {Courses}=useSelector(state=>state.Courses)


  return (
    <MainAdmin>

    <div className='PageUnvalidCourses'>
        <div className='title'>
            Unvalid Courses
        </div>
        <div className='content'>

            <div className='content-header'>
                <h5> Picture </h5>
                <h5> Course name </h5>
                <h5> Categorie </h5>
                <h5> Course Owner </h5>
                <h5> Price </h5>
                <h5> Options </h5>
                <h5> Action </h5>
            </div>
            <div  className='Content-UnvalidCourses'>
            {Courses && Courses.map(cours=> <CardCoursesUnvalaid cour={cours} key={cours.id}/> )}
             
        
{/* 
                <CardCoursesUnvalaid /> 
                <CardCoursesUnvalaid/> 
                <CardCoursesUnvalaid/> 
                <CardCoursesUnvalaid/> 
                <CardCoursesUnvalaid/> 
                <CardCoursesUnvalaid/> 
                <CardCoursesUnvalaid/> 
                <CardCoursesUnvalaid/>  */}
 
            </div>


        </div>
    </div>
    </MainAdmin>
  )
}

export default PageUnvalidCoursesAdmin