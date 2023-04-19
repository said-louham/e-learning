import React, { useState } from 'react'
import './postedCours.css'
import useFetch from '../myCours/useFetch'
import CardCours from '../srcCardCourse/cardCours';
import Pagination from '../pagination/pagination';




function PostedCours() {
  
  //pagination
  const numberOfCoursesPerPage = 4;
  const [currentPage, setCurrentPage] = useState();

  const { loading, data, error } = useFetch("http://localhost:8000/cours?_page=" + currentPage + '&_limit=' + numberOfCoursesPerPage)


  if (loading) return <h1>...loading</h1>
  if (error) return <h1> error</h1>
  return (
    <div className='postedPage'>
      {data && data.map((data,i) => (
        <CardCours key={i} data={data} /> 
    ))}
      <Pagination  nbCoursPerPage={numberOfCoursesPerPage} 
      url={'http://localhost:8000/cours'} 
      setCurrentPage={setCurrentPage}/>
    </div>
  )
}

export default PostedCours