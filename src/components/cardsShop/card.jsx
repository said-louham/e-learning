import React from 'react'
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from 'react';
import img from '../../imgs/card/dev.jpg';
import profile from '../../imgs/card/USER.png';
import './courses.css'
import { useDispatch, useSelector } from "react-redux"
// import { addToPanier } from '../../redux/actions/panier';
import { addToPanier } from '../../redux/reducers/reducerPanier';
import { useModal } from 'react-modal-hook';
import Login from '../login/Login';
import { Link } from 'react-router-dom'
import axios from 'axios'




function Card({ id, picture, title, users, price, Rate  }) {
  const [showModal, hideModal] = useModal(() => (<Login hidden={hideModal} />));
  const  {connected_user} = useSelector(state => state.Auth || 0 )
  const rate=useSelector(state=>state.Rate.Rate || 0);
     const Course_rates=rate?.filter(item=> item?.course_id==id)
     const sum=Course_rates.reduce((a,b)=>parseFloat(a) + parseFloat(b.rate)  ,0)
     let avg=sum/Course_rates.length;






  async function handleClick() {
    const course = new FormData()
    id && course.append('course_id', id)
    course.append('user_id',  connected_user.id)
    try {
      await axios.post('http://127.0.0.1:8000/api/favorite',course).
        then(res => console.log(res))
    } catch (error) {
      console.error(error)
    }
  }

  const { login } = useSelector(state => state.Auth)
  const dispatch = useDispatch()

  const addTopanier = item => {
    dispatch(addToPanier(item))

  };
  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
  };

  const [currentValue, setCurrentValue] = useState(avg);
  const [hoverValue, setHoverValue] = useState(null);
  const stars = Array(5).fill(0)


  // const handleClick = value => {
  //   setCurrentValue(value)
  // }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(null)
  }
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    stars: {
      display: "flex",
      flexDirection: "row",
    },


  };

  return (
    <div className='cardContainer'>

      <div className='card m-4' style={{ marginTop: '80px' }}>
        <Link to={'/course-detail/' + id}>
          <img src={`http://127.0.0.1:8000/Courses/${picture}`} alt="" className='card-picture' />

        </Link>
        <img src={profile} alt="" className='profile' />
        <div>
          <div className='card-title'>
            <h3>{title}</h3>
            <span className='price'>{price}<AiOutlineDollarCircle style={{ marginLeft: '8px' }}
            /></span>
          </div>
        </div>
        <div className='icons'>
          <div>
            <FaHeart style={{ margin: "0 10px " }} onClick={() => login ? handleClick() : showModal()} />
            <FaShoppingCart onClick={() => addTopanier(id)} />
          </div>
          <div> {users} students</div>
          <div className='stars-container' style={styles.stars}>
            {stars.map((_, index) => {
              return (
                <FaStar
                  key={index}
                  size={15}
                  // onClick={() => handleClick(index + 1)}
                  // onMouseOver={() => handleMouseOver(index + 1)}
                  onMouseLeave={handleMouseLeave}
                  color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                  style={{
                    marginRight: 3,
                    cursor: "pointer"
                  }}
                />
              )
            })}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Card;  