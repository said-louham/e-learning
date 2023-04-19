import React from "react";
// import Rating from './Rating'
import { BsStarFill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import img from "../../imgs/card/img-card.jpeg";
import ObjectifCourse from "./ObjectifCourse";
import DescriptionCoures from "./DescriptionCoures";
// import Fade from "react-reveal/Fade";
// import Slide from "react-reveal/Slide";
// import Rotate from "react-reveal/Rotate";
// import Rating from "./Rating";

const CourseDetails = (props) => {
  const array = [5];
  
  return (
    <div>
      {/* <Fade top> */}
        <div className="Courses-Details" >
          <div className="Section-Info">
            <h3 className="title mt-4" name="title">
              {props.title}
            </h3>
            <p className="description" name="description">
              {props.description}
            </p>
            <div className="Rating-cours">
           
      


              <h3>{isNaN(props?.courRate)?'':props.numberetoile}</h3>
            </div>
            <div className="section-bottom  mb-5" >
              <div className="language">
                <BiWorld />
                <p name="language"> {props.language} </p>
              </div>
              <p name="students">{props.students}</p>
            </div>
          </div>

          {/* <Fade right> */}
            <div className="section-img-course">
              <div className="img-buttons">
                <div className="course-img">
                  <img  src={`http://127.0.0.1:8000/Courses/${props.image}`} alt="" />

                </div>
                <button className="btn-price"> {props.price} </button>
                <button className="btn-addCart">{props.cart}</button>
              </div>
            </div>
          {/* </Fade> */}
        </div>
      {/* </Fade> */}

      {/* <Slide bottom> */}
        <div>
          <ObjectifCourse
            content=" Design Reusable Object-Oriented Python Classes "
            title="What you'll learn "
          />
        </div>
      {/* </Slide> */}

      {/* <Rotate bottom left> */}
        <div>
          <DescriptionCoures
            title="Description :"
            description="In this Python Beyond the Basics - Object-Oriented Programming training course,
                expert author David Blaikie will teach you how to design Python classes,
                and how to implement object-oriented programming concepts in Python.
                This course is designed for users that already have a basic working knowledge of Python."
          />
        </div>
      {/* </Rotate> */}
    </div>
  );
};

export default CourseDetails;
