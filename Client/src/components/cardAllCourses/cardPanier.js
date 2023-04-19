import React from "react";
import "./cardPanier.css";
import { FiSettings } from "react-icons/fi";
import { AiOutlineSetting } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux"
// import { removeFromPanier } from "../../redux/actions/panier";
import { removeFromPanier } from "../../redux/reducers/reducerPanier";
import { Link } from 'react-router-dom'




function CardMyCour({ data }) {

  const dispatch=useDispatch()
 
  const removFromPanier= item => {
    dispatch(removeFromPanier(item)) 

   };

  const colors = {
    orange: "#FFF507",
    grey: "#a9a9a9"
  };
  const stars = Array(5).fill()
  return (
    <div className="container">
        <img  src={`http://127.0.0.1:8000/Courses/${data?.image}`} alt="" className="img-course"/>

      <div className="card-info">
        <div className="action-icons">
          <Link to={'/update/'+data?.id}>
          <FiSettings onClick={() =>removFromPanier(data?.id)} />
          </Link>
        </div>
        <div className="title">{data?.title}</div>

        <div className="description">
        {data?.discription}
        </div>
        <div className="bottom">
          <span className="language">
            <BiWorld className="icon" />
            <p className="lang">
            {data?.language}
            </p>
          </span>
          <span><div className='stars-container' >
            {stars.map((_, index) => {
              return ( <FaStar key={index} size={15} color={ data?.stars > index ? colors.orange : colors.grey} style={{marginRight: 5}}/>)
            })}
          </div> </span>
        </div>
      </div>
    </div>
  );
}

export default CardMyCour;
