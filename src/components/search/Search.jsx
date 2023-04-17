import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getSearche } from '../../redux/reducers/SearchSlice'
import Card from './card';
import FeedbackForm from './FeedbackForm';
import FeedbackList from './FeedbackList';
function Search() {
    const dispatch=useDispatch();
    const {search_list}=useSelector(state=>state.search)
    const [term,setTerm]=useState(null);

    console.log('list',search_list)
    const handelsearch=(e)=>{
        e.preventDefault();
        const title=new FormData();
        title.append('title',term)
        dispatch(getSearche(title))
    }
  return (
    <div>
        <h1> search here</h1>
        <form onSubmit={handelsearch}>
            <input type="text" onChange={(e)=>setTerm(e.target.value)}/>
            <button>search</button>
        </form>


{<p>{search_list.length}</p>}
     {
search_list.length>=1?
         <div className='show_courses' >
            {
                    search_list.map(item=>{
                        return <Card key={item.id} Rate={3} 
                        id={item.id}
                        price={item.price}       users={1355} 
                        item={item}              title={item.title} 
                        image={item.image}    />
                    })
            }
        </div>:' no course'
 } 
    </div>
  )
}

export default Search