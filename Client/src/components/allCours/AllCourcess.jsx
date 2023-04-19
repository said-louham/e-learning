import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './ListCources.css';
import Slider from "react-slick";
import settings from './setings'
import Card from "../cardsShop/card";
import { useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch";
const AllCourcess = () => {
   const theme=useSelector(state=>state.theme)
   // const { loading, data, error } = useFetch("http://127.0.0.1:8000/api/course" /*+ url*/)
   const {Courses}=useSelector(state=>state.Courses)


return ( 
        <div className={`ListCources ${theme}`}>
        <Slider {...settings}> 
        
        {Courses && Courses?.map(data => (


         <Card key={data?.id} picture={data?.image} id={data?.id} title={data?.title} price={data?.price} users={388} />
         ))}

         </Slider>
        </div>
     );
}
 
export default AllCourcess;

// import React from 'react';
// import './ListCources.css';
// import Slider from "react-slick";
// import settings from './setings'
// import Card from "../cardsShop/card";
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// // import '../App.css'
// import { useParams } from 'react-router-dom';

// const AllCourcess = () => {
//    const id_category=4
//    // useParams();
//    console.log('id_category',id_category)
//    const dispatch=useDispatch();
// const {Courses}=useSelector(state=>state.Courses)
// console.log(Courses)

//   const category_courses= Courses && Courses.filter(item=>item.category_id==id_category);

//    // console.log('courses',Courses)


// return ( 
//         <div className="ListCources">
//         <Slider {...settings}> 
         
//            {category_courses && category_courses.map((item,index)=>{
//             return <Card key={index} Rate={3} 
//                         id={item.id}
//                          price={item.price}       users={1355} 
//                          item={item}              title={item.title} 
//                          image={item.image}    />

//             })}
//             </Slider>

//         </div>
//      );
// }
 
// export default  React.memo(AllCourcess);



































































