import React, { useState } from 'react'
// import './panier.css'
import { useSelector } from "react-redux"
import CardMyCour from '../../components/cardMyCours/cardPanier';
import Checkout from '../../components/checkout/checkout';
import Layout from '../../layouts/main';
import Err404 from '../error404/Err404';


function MesCours() {
  
  const courses = useSelector(state => state.Courses)
  const login = useSelector(state => state.Auth)
  const mesCourses=courses?.Courses?.filter(cours=>cours?.user_id==login?.connected_user?.id)

// if (mesCourses.length === 0) return 

if (login.login == false || courses.error)return <Err404 />


  return (
    <Layout>
      <div className='favoritPage mt-3' style={{height:"68vh",width:'70%',marginInline:'auto'}}>
          <div class="row">
            {mesCourses && mesCourses?.map(data => (
                // <div  key={data.id} className="col-lg-4 col-md-6 col-sm-12">
                       <CardMyCour  key={data.id} data={data} />
                // </div>
          ))}
          </div>
      </div>

    </Layout>
   
  )
}
export default MesCours