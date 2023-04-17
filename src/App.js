import './App.css';
import { BrowserRouter as Router, Routes, Route ,Navigate } from "react-router-dom";

// import CardPanier from './components/cardPanier/cardPanier';
// import AllCourcess from './components/cardsCours/AllCourcess';
// import Card from './components/cardsCours/card';
// import Navbar from './components/nav/UserNavbar';
import PageAbout from './pages/about/PageAbout';
import Home from './pages/home/home';
import PagePanier from './pages/panier/pagePanier';
import PageBuyCoins from './pages/BuyCoins/BuyCoins';
import Layout from './layouts/main';
import PageProfilClient from './pages/PageProfilClient/PageProfilClient';
import Login from './components/login/Login';
import Err404 from './pages/error404/Err404';
// import ProductDetailsPage from './pages/productDetails/ProductDetailsPage';
import LoginModal from './test/modal';
import Add_Course from './components/addCours/Add_Course';
import PostedCours from './pages/postedCourse/postedCours';
import Dachbord from './test/src-dachbord/Components/Dachbord';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { GetCourses } from './redux/reducers/CoursesSlice';
import { GetFavorite } from './redux/reducers/favoriteSlice';
import Search from './pages/search/search';
// import SlideHome from './components/productDetails/SlideHome';
import { ModalProvider } from 'react-modal-hook';
import MesCours from './pages/mesCours/mesCours';
import MainAdmin from './layouts/mainAdmin/mainAdmin';
import Table from './components/tableProduct/tableProduct';
import UnvalidCourses from './pages/adminUnvalidCourses/unvalidCourses';
import PageUnvalidCoursesAdmin from './pages/src-UnvalidProductAdmin/PageUnvalidCoursesAdmin';
import PageSearch from './pages/search/PageSearch';
import ProductDetailsPage from './pages/productDetails/ProductDetailsPage';
import PageRegister from './test/Components/PageRegister';
import UpdateCourse from './pages/updateCours/updateCourse';
import PageFavoriter from './pages/favorite/pagePanier';
import FeedbackForm from './components/comment/FeedbackForm';
import FeedbackItem from './components/comment/FeedbackItem';
import FeedbackList from './components/comment/FeedbackList';
import Rating from './components/rating/Rating';
import { getRates } from './redux/reducers/RatingSlice';
import { getComments } from './redux/reducers/CommentSlice';
import Users from './redux/reducers/users';
import UserCourses from './pages/myCourses/usersCourses';
import ProfilClient from './pages/profileClient/profileClient';
import AllCourcess from './pages/allCourses/allCourses';
import ForgetPassword from './components/forgetPassword/forgetPassword';
import ResetPaswword from './components/resetPassword/ResetPassword';
// import Searche from './test/srcs/src/components/Search';
// import PageUnvalidCoursesAdmin from './test/src-UnvalidProductAdmin/page/PageUnvalidCoursesAdmin';


function App() {

  // const sold=5
  const dispatch = useDispatch();
  useEffect(_=>{
    dispatch(GetCourses())
    dispatch(getComments())
    dispatch(getRates())
  },[])
  


  return (

    <div className="App">
  
      <Router>
      <ModalProvider>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/inscription" element={<PageRegister/> } />
          
          <Route path="/admin" element={<MainAdmin/> } />
          <Route path="/unvalid-courses" element={<PageUnvalidCoursesAdmin/> } />
          <Route path="/courses" element={<AllCourcess/> } />
          <Route path="/users" element={<UnvalidCourses/> } />

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/panier" element={<PagePanier />} />
          <Route path="/buy-coins" element={<PageBuyCoins />} />
          {/* <Route path="/profile" element={<PageProfilClient/>} /> */}
          <Route path="/detail" element={ <ProductDetailsPage/>} />
          <Route path="/add-cours" element={ <PostedCours/>} />
          <Route path="/test" element={ <LoginModal/>} />
          <Route path="/search/:category" element={<PageSearch/> } />
          <Route path="/search" element={<PageSearch/> } />
          <Route path="/add-cours" element={<Add_Course/> } />
          <Route path="/mes-cours" element={<MesCours/> } />
          <Route path="/tt" element={<Dachbord/> } />
          <Route path="/course-detail/:idCours" element={<ProductDetailsPage/> } />
          <Route path="/update/:idMyCours" element={<UpdateCourse/> } />
          <Route path="/favorite" element={<PageFavoriter/> } />
          <Route path="/favorite" element={<PageFavoriter/> } />
          <Route path="/fav" element={<FeedbackForm/> } />
          <Route path="/f" element={<FeedbackItem/> } />
          <Route path="/fa" element={<FeedbackList/> } />
          <Route path="/rating" element={<Rating/> } />
          <Route path="/my-courses" element={<UserCourses/> } />
          <Route path="/profile" element={<ProfilClient/> } />
          <Route path="/ForgetPassword" element={<ForgetPassword/> } />
          <Route path="/reset-Password" element={<ResetPaswword/> } />
       
          <Route path="*" element={<Err404/>} />
        </Routes>
        </ModalProvider>
      </Router>
     

    </div>
  );
}

export default App;
