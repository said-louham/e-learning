import React,{useEffect} from "react";
import "./card.css";
import { MdDeleteSweep } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { useModal } from 'react-modal-hook';
import PopUpMsg from "../PopUpMsgDeleteFav/PopUpDeleteFav";




function CardFvoris({ data ,idFavoris }) {

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
    <div className="containerFavorite">
      
        <img  src={`http://127.0.0.1:8000/Courses/${data?.image}`} alt="" className="img-course"/>

      <div className="card-info">
        <div className="action-icons">
          <MdDeleteSweep
							color={'white'}
              onClick={() =>removeFav()} />
        </div>
        <div className="title">{data?.title}</div>
        {/* <div className="subtitle text-white">{data?.subtitle}</div>
        <div className="price text-white">{data?.price}</div> */}

        <div className="description ">
        {data?.discription}
        </div>
        <div className="bottom">
          <span className="language">
            <BiWorld className="icon" />
            <p className="lang">
            {data?.language}
            </p>
          </span>
          <span><div className='stars-container text-danger' >
            {stars.map((_, index) => {
              return ( <FaStar key={index} size={15} color={ data?.stars > index ? colors.orange : colors.grey} style={{marginRight: 5}}/>)
            })}
          </div> </span>
        </div>
      </div>
    </div>
  );
}

export default CardFvoris;
