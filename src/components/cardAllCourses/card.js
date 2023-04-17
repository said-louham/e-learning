import React,{useEffect} from "react";
import "./card.css";
import { MdDeleteSweep } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { useModal } from 'react-modal-hook';
import PopUpMsg from "../PopUpMsgDeleteFav/PopUpDeleteFav";




function CardCourses({ data ,idFavoris }) {

  const [show, hide] = useModal(() => (<PopUpMsg hidden={hide} />));

  // const removeFav= _ => {

  //    axios.delete('http://127.0.0.1:8000/api/favorite/'+idFavoris)
  //   .then(show)

  //  };

  const colors = {
    orange: "#FFF507",
    grey: "#a9a9a9"
  };
  const stars = Array(5).fill()
  return (
    <div className="cardCourses">
        <img  src={`http://127.0.0.1:8000/Courses/${data?.image}`} alt="" className="img-course"/>

      <div className="card-info">
        <div className="action-icons">
         
        </div>
        <div className="titl">{data?.title}</div>

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
        </div>
      </div>
    </div>
  );
}

export default CardCourses;
