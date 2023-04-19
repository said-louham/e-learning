import React from "react";
// import "./cardPanier.css";
import { FiSettings } from "react-icons/fi";
import { AiOutlineSetting } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux"
// import { removeFromPanier } from "../../redux/actions/panier";
import { removeFromPanier } from "../../redux/reducers/reducerPanier";
import { Link } from 'react-router-dom'
import { MdHeight } from "react-icons/md";




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
    <div className="container  my-2" style={{ width:"48%",background:''}}>

        <img  src={`http://127.0.0.1:8000/Courses/${data?.image}`} alt="" className="img-course" 
         style={{ borderRadius:"14px" }}
         />

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
        <div className="d-flex p-1">
              <span className="d-flex ">
                <BiWorld className="icon me-1 mt-1" />
                <p className="">
                {data?.language}
                </p>
              </span>
              <div className='d-flex justify-content-end ' style={{width:"40%" ,height:'20px',marginLeft:"0 px",paddingLeft:"0px", flex:"40%"}} >
                {stars.map((_, index) => {
                  return ( <FaStar key={index} size={15} 
                    // color={ data?.stars > index ? colors.orange : colors.grey} 
                    color={"hsl(47, 86%, 65%)"}
                    style={{marginRight: 4}}
                    />)
                })}
              </div>
        </div>
      </div>
    </div>
  );
}

export default CardMyCour;
