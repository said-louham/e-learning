import React,{useEffect} from "react";
import "./card.css";
import { MdDeleteSweep } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { useModal } from 'react-modal-hook';
import PopUpMsg from "../PopUpMsgDeleteFav/PopUpDeleteFav";




function CardMyCours({ data ,idFavoris }) {

  const [show, hide] = useModal(() => (<PopUpMsg hidden={hide} />));

  const removeFav= _ => {

     axios.delete('http://127.0.0.1:8000/api/favorite/'+idFavoris)
    .then(show)

   };

  const colors = {
    orange: "#FFF507",
    grey: "#a9a9a9"
  };
  const stars = Array(5).fill()
  return (
    <div className="containerFavorite my-2 mx-auto"  style={{ width:"40%",height:'260px'}}>
        <img  src={`http://127.0.0.1:8000/Courses/${data?.image}`} alt="" className="img-course"
         style={{ borderRadius:"14px" }}
        
        />

      <div className="card-info">
        <div className="action-icons">
         
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
    // <div className='bg-danger'>

    //   hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
    //   hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
    // </div>
  );
}

export default CardMyCours;
