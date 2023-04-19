import React from 'react'
import Add_Course from '../../components/addCours/Add_Course'
import Layout from '../../layouts/main'
import './PostedCours.css'
import { useSelector } from "react-redux"
import Err404 from '../error404/Err404'



function PostedCours() {
  const user = useSelector(state => state.Auth)
if (user.login == false )return <Err404 />
  return (
    <Layout>
        <div className='PostedCours'>
        <Add_Course id_uesr={user?.connected_user.id}/>
        </div>
    </Layout>
  )
}

export default PostedCours