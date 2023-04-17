import React from 'react'
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useState } from 'react';
import img from './../../imgs/card/dev.jpg';
import profile from './../../imgs/card/USER.png';
import './course.css';


const Card = ({ picture, title, users, price, Rate }) => {



    const colors = {
        orange: "#FFBA5A",
        grey: "#a9a9a9",
    };

    const [currentValue, setCurrentValue] = useState(Rate);
    const [hoverValue, setHoverValue] = useState(null);
    const stars = Array(5).fill(0)
    console.log('value', currentValue);

    const handleClick = value => {
        setCurrentValue(value)
    }

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
            alignItems: "center",
        },
        stars: {
            display: "flex",
            flexDirection: "row",
        },


    };



    return (
            <div className='card' style={{ marginBottom: '7rem' }}>
                <img src={img} alt="card-picture" className='card-picture' />
                <img src={profile} alt="" className='profile' />
                <div>
                    <div className='card-title'>
                        <h3>Developement Course for Beginners</h3>
                        <span className='price'>{price}
                            <AiOutlineDollarCircle style={{ marginLeft: '8px' }} /></span>
                    </div>
                </div>
                <div className='icons'>
                    <div>
                        <FaHeart style={{ margin: "0 10px " }} />
                        <FaShoppingCart />
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


    )
}

export default Card