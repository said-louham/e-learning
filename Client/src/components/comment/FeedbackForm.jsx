import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';
import { isDisabled } from '@testing-library/user-event/dist/utils';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { AddComment } from '../../redux/reducers/CommentSlice';
import { GetCourses} from '../../redux/reducers/CoursesSlice';

function FeedbackForm({id}) {
  const Local_user=JSON.parse( localStorage.getItem('user'))

  const {single_item}=useSelector(state=>state.comment)
const dispatch = useDispatch();
  const minimunCharacters = 10;
  const [text, setText] = useState('');  
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleOnChange = (e) => {
    if(text!='' && text.length>=4){
      setMessage(null);
      setBtnDisabled(false);
    }
    if(text===''){
      setBtnDisabled(true);
        setMessage(`Text must be at least ${minimunCharacters} characters`);
    }
    setText(e.target.value)
  };
// -------------------------------
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('comment',text)
    const data=new FormData();
    data.append('comment',text)
    data.append('user_id',Local_user?.id) // seleted id from login
    data.append('course_id',id)
    console.log('comment-->',text)
    console.log('user_id-->',Local_user?.id)
   dispatch(AddComment(data));
   dispatch(GetCourses());
      setText('');
  };


  return (
  <>
    <Card>
        <form onSubmit={handleSubmit} className='p-2 '>
            <h2 style={{textAlign:'center'}}>How would you rate your service with us ?</h2>
         <div className="input-group mx-auto " >
            <input type="text" 
                placeholder='Write a review'
                defaultValue={single_item}
                className='ps-2'
                onChange={handleOnChange} />
            <Button  style={{marginLeft:"20px"}} type="submit" isDisabled={btnDisabled}>Send</Button>
        </div>  
            {message && <div className='message'>{message}</div>}          
        </form>

    </Card>
  </>
  )
}

export default  React.memo(FeedbackForm)