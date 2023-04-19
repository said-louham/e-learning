import React, { useState ,useEffect} from 'react'
// import './panier.css'
import { useSelector } from "react-redux"
import Layout from '../../layouts/main';
import Err404 from '../error404/Err404';
import CardFvoris from '../../components/cardFavorit/cardFavoris';
import { useDispatch } from 'react-redux';
import { GetFavorite } from '../../redux/reducers/favoriteSlice';


// import Pagination from '../../components/paginatioComponent/pagination';

function PageFavoriter() {
  const login = useSelector(state => state.Auth)



  const dispatch=useDispatch()
  useEffect(_=>{
    dispatch(GetFavorite())
  },[])

   
  
  const {favorite} = useSelector(state => state.favorite)
  const {id} = useSelector(state => state.Auth.connected_user || 0)
  const {Courses} = useSelector(state => state.Courses)
  const myFavorite=favorite.filter( fav=> fav.user_id == id).map(idcour=>idcour.course_id)
  const idFavoris =favorite.filter( fav=> fav.user_id == id).map(idcour=>idcour.id)
  const coursesFavorite =Courses.filter(cours => myFavorite.includes(cours.id))

  const init = JSON.parse(localStorage.getItem('panier'))
  // if (panierCours?.length > 0) {
  //   panierCours?.map(i => TotlePrice += parseFloat(i.price))
  // }
  // if (courses.isloding) return <h1>...loading</h1>
  // if (courses.error) return <Err404 />
  if (login.login == false )return <Err404 />

  return (
    <Layout>
      <div className='favoritPage'>
        {coursesFavorite && coursesFavorite?.map((data ,i )=> (
          <CardFvoris  key={data.id} data={data} idFavoris={idFavoris[i]}/>))
          }
      </div>
    </Layout>
  )
}
export default PageFavoriter