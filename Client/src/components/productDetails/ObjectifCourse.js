import React from 'react'

const ObjectifCourse = (props) => {
  return (
    <div className='ObjectifCourse'>
        <div className='title'style={{color:'black'}}>
            <p>{props.title}</p>
        </div>
        <div className='Objectifs-content'>
            <p className='obj'>{props.content}</p>
            <p className='obj'>{props.content}</p>
            <p className='obj'>{props.content}</p>
        </div>

    </div>
  )
}

export default ObjectifCourse