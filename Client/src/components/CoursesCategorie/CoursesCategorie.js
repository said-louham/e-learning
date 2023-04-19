import React from 'react'
import img0 from '../../imgs/card/dev.jpg'
import './coursesCategorie.css'
import Typecourse from '../typeCourse/Typecourse'
import { Link } from 'react-router-dom'


const CoursesCategorie = () => {
  return (
    <div >


      <Typecourse name="CATEGORIES" type="Courses Categories" />
      <div className="grid">
        <Link to='/search/1' className='item item1'>

          <div className="hero-text">
            <h1 >Design</h1>
          </div>
        </Link>

        <Link to='/search/2' className='item item2'>
          <div className="hero-text">
            <h1 >Business</h1>
          </div>
        </Link >
        <Link to='/search/3' className='item item3'>
          <div className="hero-text">
            <h1 >Development</h1>
          </div>
        </Link>
        <Link to='/search/4' className='item item4'>
          <div className="hero-text">
            <h1 >Management</h1>
          </div>
        </Link>
        <Link to='/search/5' className='item item5'>
          <div className="hero-text">
            <h1 >Marketing</h1>
          </div>
        </Link>
      </div>
    </div>

  )
}

export default CoursesCategorie