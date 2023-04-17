import React from 'react'
import AboutUs from '../../components/AboutUs/AboutUs'
import AllCourcess from '../../components/allCours/AllCourcess'
import CoursesCategorie from '../../components/CoursesCategorie/CoursesCategorie'
import ExpertInstructors from '../../components/ExperInstructors/ExpertInstructors'
import HeaderSliderContainer from '../../components/HeaderSliderContainer/HeaderSliderContainer'
import './home.css'
import { useSelector } from "react-redux"
import Layout from '../../layouts/main'
import { useModal } from 'react-modal-hook';
import Login from '../../components/login/Login'



const Home = () => {


    const theme = useSelector(state => state.theme)
    return (
        <Layout>

            <div className={`home ${theme} `}>
                <HeaderSliderContainer />
                <CoursesCategorie />
                <AllCourcess />
                <AboutUs />
                <ExpertInstructors />
            </div>
        </Layout>

    )
}

export default Home