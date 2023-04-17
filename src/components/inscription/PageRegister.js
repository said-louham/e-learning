import React  from 'react'
import { IoMdClose } from 'react-icons/io';
import './pageRegister.css'
import logo from "../../imgs/slideHome/Logo.png";
import { useState } from 'react';
import axios from 'axios';
import { Login_1 } from "../../redux/reducers/AuthSlice";
import { useDispatch, useSelector } from "react-redux";






const PageRegister = ({ hidden }) => {
  const dispatch = useDispatch();

  const [full_name,setfull_name]=useState(null)
  const [email,setemail]=useState(null)
  const [password,setPassword]=useState(null) 
  const [msg,setMsg]=useState('') 
  const [Conrirmpassword,setConfirmPassword]=useState(null) 

  const handleSubmit = () => {
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
  const handelSubmit=(e)=>{
    e.preventDefault();
    const user=new FormData();
    user.append('full_name',full_name);
    user.append('email',email);
    user.append('password',password);
    const Register=async()=>{
     await axios.post('http://127.0.0.1:8000/api/users',user).then(
      res=>res.data.error?setMsg(res.data.error):handleSubmit()
     
     ) 
    }
    Register()
  }
  
  return (
    <div className="loginModel" >
    <div className='PageRegister'>
      <div className='register-section-top'>
        <IoMdClose  className='Icon-close' onClick={hidden} />
      </div>
      <h2> {msg}</h2>
      <div className='register-section-content'>
        <form className='formulaire'onSubmit={handelSubmit}>
          <input type='text' placeholder='full name' onChange={e=>setfull_name(e.target.value)} />
          <label>  </label>
          <input type='email' placeholder='email@gmail.com'  onChange={e=>setemail(e.target.value)}/>
          <label>  </label>
          <input type='password' placeholder='Password'  onChange={e=>setPassword(e.target.value)}/>
          {/* <label> ereur </label> */}
          {/* <input type='password' placeholder='Confirme Password' onChange={e=>setConfirmPassword(e.target.value)} /> */}
          {/* <label> ereur </label> */}
          <button className='btn-SignUp'> Sign Up </button>
          <p> ALREADY HAVE AN ACCOUNT? <span> LOGIN </span> </p>
         
          <div className='Api-button'>
            <button className='btn-fb'> Sign Up With Facebook </button>
            <button className='btn-google'> Sign Up With Google  </button>
          </div>
        </form>
        <div className='ligne'></div>
        <div className='logo'>
          <img src={logo} alt='logo' />
          <p> C4U </p>
        </div>
      </div>
    </div>
    </div>
  )
}
export default PageRegister