import React, { useEffect, useState } from 'react'
import ReactStars from "react-rating-stars-component";
import { BsStarFill } from "react-icons/bs";
import { AddRate, getRates, get_user_rate } from '../../redux/reducers/RatingSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Rate as MyRating } from 'antd';


const Rating = ({user_id,course_id,setcourRate}) => {
    const {Rate}=useSelector(state=>state.Rate);
    const {single_rate}=useSelector(state=>state.Rate);
    const dispatch=useDispatch();
    const [ValueRating, setValueRating] = useState('')
    const ratingChanged = (value) => {
            setValueRating(value)


            const Rate=new FormData();
            Rate.append('user_id',user_id);
            Rate.append('course_id',course_id);
            Rate.append('rate',value);
            dispatch(AddRate(Rate))
    }
    const Course_rates=Rate?.filter(item=> item?.course_id==course_id)
    const sum=Course_rates.reduce((a,b)=>parseFloat(a) + parseFloat(b.rate)  ,0)
    let avg=sum/Course_rates.length;
    let integerAvg=Math.floor(avg);
  
if(avg <integerAvg+0.5){
    avg=Math.floor(avg);
}else if(avg >integerAvg+0.5){
    avg=Math.ceil(avg);
}
// setcourRate(avg)
    const user_rate=Rate.find(item=>item.user_id==user_id && item.course_id==course_id)
useEffect(()=>{
    dispatch(get_user_rate({course_id,user_id}))
    setcourRate(avg)
    
},[course_id,user_id])

return (
        <div className='sectionReting'>
            <div> Course Rating 
                <h3 style={{ marginTop: '.5rem', fontSize: '2.3rem', marginLeft: '1.5rem', color: '#ffd700' }}> 
                {parseFloat(avg)}
                 </h3>
                 <BsStarFill style={{ color: '#ffd700', marginLeft: '.3rem', fontSize: '1.7rem' }} />
              </div>
            <div>
                <p> rate:{user_rate?.rate ||single_rate?.rate|| 0}</p>

            </div>
            <div 
            style={{background:'white'}}
            >
                <MyRating
                 value={parseFloat(user_rate?.rate)||parseFloat(single_rate?.rate) ||3}
                    onChange={(value)=>ratingChanged(value) }
                    count={5}
                 
                    allowHalf
                
                
                />

            </div>
        </div>
    )
}

export default Rating