import React from 'react';
import axios from 'axios';
// import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { useState } from 'react';
import FeedbackItem from "./FeedbackItem";
import { useDispatch, useSelector } from "react-redux";
// import { getComments} from '../Redux/CommentSlice'
import { getComments } from '../../redux/reducers/CommentSlice';
import { Users } from '../../redux/reducers/UsersSlice';
import { useParams } from 'react-router-dom';

function FeedbackList({idCours}) {
  //  performance
  const dispatch=useDispatch();
  const {comments}=useSelector(state=>state.comment)
  const {Courses} = useSelector(state => state.Courses || 0)

  
  
  
  const {id}= useParams();
  const detCours = Courses.filter(cour=> cour.id == idCours).shift();
  // console.log('course_id---------->',detCours?.course_id)
  // detCours?.comments?.map(comp=>console.log(comp))




useEffect(()=>{
    dispatch(getComments((+idCours)))
    dispatch(Users())
    console.log('useffect')
},[idCours])
 
  return (
    <div className="feedback-list">
      {/* <AnimatePresence> */}
        {

detCours?.comments && detCours?.comments
       .map((item) => (
              // <motion.div 
              // <div
              //   key={item.id}
              //   initial={{opacity: 0}}
              //   animate={{opacity: 1}}
              //   exit={{opacity: 0}}
              // >
                 <FeedbackItem key={item.id} 
                              item={item} user_id={item.user_id} user={item.user} />
                      // </div>
              // </motion.div>
            ))
        }
      {/* </AnimatePresence>         */}
    </div>
  );
}

export default React.memo( FeedbackList);