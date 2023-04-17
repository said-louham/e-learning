
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import CardTeams from "../cardTeam/CardTeams";
import CardTeams from '../cardsShop/cardTeam/CardTeams';

import img from '../../imgs/profile-pic.png'
import './slideTeams.css'
import { useSelector } from "react-redux"





const SlideTeams = () => {

  const theme = useSelector(state => state.reducerThemeMode)
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3, initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };





  const Data = [
    { id: 2, name: "FULL NAME", description: "MANAGER", img: img },
    { id: 6, name: "SAID LOUHAM", description: "Web Full stack developer", img: img },
    { id: 3, name: "FULL NAME", description: "TESTER", img: img },
    // { id: 4, name: "Ahmed AKENFAR", description: "Web Full stack developer", img: img },
    // { id: 5, name: "Raja ELGHAZI", description: "Web Full stack developer", img: img },
  ]
  return (

    <div className={`caroussel-container ${theme}`} >
      <Slider {...settings} className="slide-teams">
        {
          Data.map((item) => {
            return (
              <CardTeams key={item.id} name={item.name} img={item.img} description={item.description} />

            )
          })
        }
      </Slider>
    </div>
  );
};

export default SlideTeams;
