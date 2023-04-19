import React, { useState } from 'react'
// import './panier.css'
import { useSelector } from "react-redux"
import CardPanier from '../../components/cardPanier/cardPanier';
import Checkout from '../../components/checkout/checkout';
import Layout from '../../layouts/main';
import Err404 from '../error404/Err404';
// import useFetch from '../../hooks/useFetch'
// import Pagination from '../../components/paginatioComponent/pagination';

function PagePanier() {
  // let url = 'id=0'
  // if (mesCours.length > 0) {
  //   url = mesCours?.map(i => 'id=' + i + '&').join('')
  // } else {

  //   url = 'id=0'
  // }
  // const { loading, data, error } = useFetch("http://127.0.0.1:8000/api/course" /*+ url*/)
  // console.log(data )

  
  const mesCours = useSelector(state => state.panier)
  const courses = useSelector(state => state.Courses)
  let TotlePrice = 0
  const init = JSON.parse(localStorage.getItem('panier'))
  const panierCours = courses.Courses.filter(cours => mesCours.includes(cours.id))
  if (panierCours?.length > 0) {
    panierCours?.map(i => TotlePrice += parseFloat(i.price))
  }
  if (courses.isloding) return <h1>...loading</h1>
  if (courses.error) return <Err404 />
  return (
    <Layout>
      <div className=' p-5 ' style={{backgroundColor:' rgba(19, 45, 70, 1)'}}>
        {panierCours && panierCours?.map(data => (
          <CardPanier key={data.id} data={data} />))}
        <Checkout totalePrice={TotlePrice} coursesId={mesCours}/>
      </div>
    </Layout>
  )
}
export default PagePanier