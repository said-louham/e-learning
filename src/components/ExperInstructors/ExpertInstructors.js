import React from 'react'
import Cardinstructor from './Cardinstructor'
import Typecourse from '../typeCourse/Typecourse'
import'./expertInstructors.css'

const ExpertInstructors = () => {
  return (
    <div className='body'>
        <Typecourse name="INSTRUCTORS"type="Expert Instructors"/>
        <div className='displayCard'>
        <Cardinstructor name='name' role='Role'/>
        <Cardinstructor name='Said LOUHAM' role='Developper full stack'/>
        <Cardinstructor name='name' role='Role'/>
        </div>
    </div>
  )
}

export default ExpertInstructors