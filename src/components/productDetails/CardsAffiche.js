
import React from "react";
import Card from "../cardsShop/card";
import './cards.css';
import { useSelector } from "react-redux"
import { useState } from "react";

// import Data from "./../../data.json";



function CardsAffiche(props) {
    const {Courses} = useSelector(state => state.Courses || 0)

    console.log('-------Courses---->',Courses.slice(0, 5))

    return (
        <div className="Card-Content" >
            <h1 name="title">{props.title}</h1>
            <div className="cards">
                {Courses?.slice(0, 8).map(cour=>
                    <Card key={cour?.id} id={cour?.id} picture={cour?.image} price={cour?.price} 
                    title={cour?.title}
                    users={388} />)}
            </div>
        </div>
    );
}

export default CardsAffiche;