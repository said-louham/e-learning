import React, { useState, useEffect } from 'react'
// import './panier.css'
import { useSelector } from "react-redux"
import Layout from '../../layouts/main';
import Err404 from '../error404/Err404';
import CardFvoris from '../../components/cardFavorit/cardFavoris';
import { useDispatch } from 'react-redux';
import { GetCommand } from '../../redux/reducers/commandSlice';
import CardMyCour from '../../components/cardMyCours/card';
import HeaderSliderContainer from '../../components/HeaderSliderContainer/HeaderSliderContainer';
import Footer from '../../components/footer/footer';
import UserNavbar from '../../components/nav/UserNavbar';
import Navbar from '../../components/nav/NavBar';



// import Pagination from '../../components/paginatioComponent/pagination';

function UserCourses() {
    const login = useSelector(state => state.Auth)



    const dispatch = useDispatch()
    useEffect(_ => {
        dispatch(GetCommand())
    }, [])



    const { commands } = useSelector(state => state.command)
    const { id } = useSelector(state => state.Auth.connected_user || 0)
    const myCommands = commands.filter(comand => comand.user_id == id).map(idcour => idcour.course_id)
    const { Courses } = useSelector(state => state.Courses)
    const courses = Courses.filter(cours => myCommands.includes(cours.id))
    console.log('Courses finale---->', courses)


    //   const myFavorite=favorite.filter( fav=> fav.user_id == id).map(idcour=>idcour.course_id)
    //   const idFavoris =favorite.filter( fav=> fav.user_id == id).map(idcour=>idcour.id)

    //   const init = JSON.parse(localStorage.getItem('panier'))
    // if (panierCours?.length > 0) {
    //   panierCours?.map(i => TotlePrice += parseFloat(i.price))
    // }
    // if (courses.isloding) return <h1>...loading</h1>
    // if (courses.error) return <Err404 />
    if (login.login == false) return <Err404 />

    return (
        // <Layout>
       <>
                    
                    <div className='bg-light'style={{}}>
                    {/* <UserNavbar /> */}
                    {/* <Navbar/> */}
                    {login ? <Navbar /> : <UserNavbar />}
                                    {courses && courses?.map((data ,i )=> (
                                                <CardMyCour key={data.id} data={data}/>
                                        ))
                        }

                            </div>
          <div style={{zIndex:"1000"}}>
          <Footer />
          </div>
       
       </>
        // </Layout>
    )
}
export default UserCourses