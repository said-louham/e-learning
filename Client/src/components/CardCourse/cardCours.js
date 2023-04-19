import React from "react";
import "./card.css";
import { MdDeleteSweep } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

function CardCours({ data }) {
  const colors = {
    orange: "#FFF507",
    grey: "#a9a9a9"
  };
  const stars = Array(5).fill()
  return (
    <div className="container">
        <img src={data.img} className="img-course"/>
      <div className="card-info">
        <div className="action-icons">
          <AiOutlineSetting />
          <MdDeleteSweep />
        </div>
        <div className="title">{data.title}</div>

        <div className="description">
        {data.description}
        </div>
        <div className="bottom">
          <span className="language">
            <BiWorld className="icon" />
            <p className="lang">
            {data.language}
            </p>
          </span>
          <span><div className='stars-container' >
            {stars.map((_, index) => {
              return ( <FaStar key={index} size={15} color={ data.stars > index ? colors.orange : colors.grey} style={{marginRight: 5}}/>)
            })}
          </div> </span>
        </div>
      </div>
    </div>
  );
}

export default CardCours;
