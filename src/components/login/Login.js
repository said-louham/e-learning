import React, { useEffect, useState } from "react";
import "./login.css";
import { IoMdClose } from "react-icons/io";
import logo from "../../imgs/slideHome/Logo.png";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Login_1 } from "../../redux/reducers/AuthSlice";
import { useModal } from 'react-modal-hook';
import { Link } from "react-router-dom";


const Login = ({ hidden }) => {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();
  const { message } = useSelector(state => state.Auth)
  const { token } = useSelector(state => state.Auth)
  const { role } = useSelector(state => state.Auth)
  const { isloding } = useSelector(state => state.Auth)
  const { login } = useSelector(state => state.Auth)

  // console.log('message ',message);
  // console.log('token ',token);
  // console.log('user role ',role);
  // console.log('isloding ',isloding);
  // console.log('login ',login);
  const handleSubmit = (e) => {
    e.preventDefault();
    const User = new FormData();
    User.append('email', email);
    User.append('password', password);
    //  1 check every inputs  are not null then dispatch 
    dispatch(Login_1(User))

      // 2 after dispatch  if role===admin  navigate to dashbord
      // else navigate to home page  
      .unwrap().then(res => {
        console.log(res)
        // navigate
      })

  }

  return (
    <div className="loginModel" >
      <div className="PageLogin">
        <div>
          <IoMdClose className="iconClose" onClick={hidden} />
        </div>
        <div className="combinelogin">
          <div className="icon ">
            <img className="Logo" src={logo} alt="logo" />
            <p className="c4u">C4U</p>
          </div>
          <div className="lineCombine"></div>
          <div className="formulaire">
            <form onSubmit={handleSubmit}>


              <input
                className="input"
                type="email"
                placeholder="Email@adress.com"
                name="name"
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                className="input"
                type="text"
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}

              />

              <button
                type="submit"
                className="buttonsubmit"
              >
                {isloding ? 'Lodding...' : ' Login'}

              </button>
              <p style={{ color: "red", fontSize: "13px" }}>
                {
                  message && message
                }

              </p>

            </form>
            <a className='a' href="#">create account </a>
            <Link to="/ForgetPassword"  className="a">ForgetPassword </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
