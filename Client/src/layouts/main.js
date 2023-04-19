import React from 'react';
import Footer from '../components/footer/footer';
// import Header from './Header';
import Navbar from '../components/nav/UserNavbar';
import Navbar2 from '../components/nav/NavBar';
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { GetUsers } from '../redux/reducers/users';





const Layout = ({ children }) => {
    const { login, connected_user } = useSelector(state => state.Auth)
    const dispatch = useDispatch();
    if (connected_user?.role == 'admin') {
            dispatch(GetUsers())
        return <Navigate to="/admin" />
    }
    return (
        <>
            {login ? <Navbar2 /> : <Navbar />}
            <div className="navigationWrapper">
                <main>{children}</main>
            </div>
            <Footer />
        </>
    );
};
export default Layout;