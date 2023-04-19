import React,{useState} from 'react'
import CourseDetails from '../../components/productDetails/CourseDetails'
// import Rating from '../../components/productDetails/Rating'
import './productDetailsPage.css'
import CardsAffiche from '../../components/productDetails/CardsAffiche'
import Layout from '../../layouts/main'
import { useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import { Navigate } from "react-router-dom";
import Rating from '../../components/rating/Rating'
import ShowComment from '../../components/showComment/showComment'




const ProductDetailsPage = () => {
    const [courRate, setcourRate] = useState(1)
    const [BoleenShow, setBoleenShow] = useState(false)


    const theme = useSelector(state => state.theme || 0)
    const {idCours}=useParams()
    const {Courses} = useSelector(state => state.Courses || 0)
    const {id}= useSelector(state => state.Auth.connected_user )
    const detCours = Courses.filter(cour=> cour.id == idCours).shift()
    console.log('--Courses--',Courses)
    console.log('Courses',detCours?.category_id)

    return (
        <Layout>
        <div className={`product-details-page ${theme} `}>
            {detCours? 
            <>
            <CourseDetails 
            courRate={courRate}
            title={detCours.title}
            description={detCours.discription}
            language={detCours.language}
            students="230 Students"
            price={detCours.price+' Coins'}
            cart="Add to cart"
            numberetoile={courRate}
            image={detCours.image}
            />  
            {/* <Rating  /> */}
            <Rating course_id={idCours} user_id={id} setcourRate={setcourRate}/>
            {/* <button className='btn btn-warning btn-showCom'>comment</button> */}
             <ShowComment idCours={idCours}  setBoleenShow = {setBoleenShow} />
            
            <CardsAffiche title="Users Also Bought" idcat={detCours?.category_id}/>
            </>
            : <Navigate to="/" />}
        </div>
        </Layout>
    )
}

export default ProductDetailsPage