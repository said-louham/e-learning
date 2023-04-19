import React, { useState } from 'react'
import ReactStars from "react-rating-stars-component";
import { BsStarFill } from "react-icons/bs";
import { useSelector } from "react-redux"




const Rating = () => {

    const [ValueRating, setValueRating] = useState('')
    const theme = useSelector(state => state.theme)


    const ratingChanged = (value) => {
        setValueRating(value)
    }

    return (
        <div className={`sectionReting ${theme}`}>
            <div> Course Rating <h3 style={{ marginTop: '.5rem', fontSize: '2.3rem', marginLeft: '1.5rem', color: '#ffd700' }}> {ValueRating} </h3> <BsStarFill style={{ color: '#ffd700', marginLeft: '.3rem', fontSize: '1.7rem' }} />  </div>
            <div>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={54}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                />

            </div>
        </div>
    )
}

export default Rating