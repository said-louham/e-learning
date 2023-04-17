import React from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteComment } from '../../redux/reducers/CommentSlice';
import { useState } from 'react';
import { useEffect } from 'react';
import { getcomment } from '../../redux/reducers/CommentSlice';
import { GetCourses} from '../../redux/reducers/CoursesSlice';
import moment from 'moment';
import { useModal } from 'react-modal-hook';
import PopUpMsg from "../PopUpMsgDeleteCom/PopUpDeleteFav";
import { FaStar, FaCheckCircle } from 'react-icons/fa';



function FeedbackItem ({item,user_id}) { 
       
    const [show, hide] = useModal(() => (<PopUpMsg hidden={hide} />));


  const Local_user=JSON.parse( localStorage.getItem('user'))
//   console.log('full_name',Local_user && Local_user.full_name|| 'not connected')

    const {users}=useSelector(state=>state.users || 0)
    const ers=useSelector(state=>state.Auth.connected_user)
    // console.log('ers----------',ers)
    const dispatch=useDispatch();
    const login_user_id=Local_user?.id;// use selector form login user_id 


const  deleteFeedback=(item)=>{
    dispatch(DeleteComment(item))
    show()

}

const  editFeedback=async(item)=>{
    dispatch(getcomment(item.id));
} 
const defaultImg=`https://mdbootstrap.com/img/new/avatars/1.jpg`
const selected_user=users?.find(elem=>elem.id===user_id)
console.log('ers----------',selected_user?.image)



useEffect(()=>{
    dispatch(getcomment(item?.id))
},[])
return (
    <Card>

       
      



<div class="d-flex justify-content-between align-items-center ">
            <div class="user d-flex flex-row align-items-center">
                        <img src={`http://127.0.0.1:8000/Users/${selected_user?.image || Local_user?.image}`}
                            className='user-img rounded-circle me-2'
                            width="40"
                            alt=""
                         />

                        <span>
                            <small class="font-weight-bold text-primary"> {selected_user?.full_name ||Local_user?.full_name } </small>

                             <small class="font-weight-bold">
                                    {item?.comment} 
                            </small>
                        </span>
            </div>

            {/* time */}

            {/* x */}
            <small >
            <small >  {  moment(new Date(item?.created_at)).fromNow()  }     </small>
                {user_id==login_user_id? 
                            <> <a type='submit' className='close d-felx' onClick={() => deleteFeedback(item)}  >
                                        <FaTimes color='purple'  style={{marginTop:'-30px',float:'right'}}/>
                                 </a>
                            </>:null
                    }
            </small>


                     {/* <FaStar className="text-warning" />
                     <FaCheckCircle className="check-icon" /> */}
</div>
    </Card>
)
}


export default  React.memo( FeedbackItem);