import React  from 'react'
import { IoMdClose } from 'react-icons/io';
// import '../Style/pageRegister.css'
import logo from "../../imgs/slideHome/Logo.png";
import { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const ResetPaswword = () => {
  const [token,settoken]=useState(null)
  const [email,setemail]=useState(null)
  const [password,setPassword]=useState(null) 
  const [message,setMessage]=useState(null) 
  const [error,setError]=useState(null);

  const handelSubmit=(e)=>{
    e.preventDefault();
    const user=new FormData();
    token&& user.append('token',token);
     email && user.append('email',email);
     password &&user.append('password',password);
    const Register=async()=>{
     await axios.post('http://127.0.0.1:8000/api/reset',user).then(res=>{
        console.log(res.data.error)
        setMessage(res.data.message)
        setError(res.data.error)
     })
    }
    Register()
  }

  return (
    <div className='PageRegister'>
      <div className='register-section-top'>
        <IoMdClose  className='Icon-close' />
      </div>
      <div className='register-section-content'>
        <form className='formulaire'onSubmit={handelSubmit}>


        {
            error&& 
            <div className="alert alert-danger " role="alert" style={{height:"70px",width:'350px',paddingTop:"20px"}} >
            {error}
            </div>  

          }
          
       {
        message && 
        <div className="alert alert-success" role="alert"style={{height:"70px",width:'350px',paddingTop:"20px"}}>
        {message}
        </div>  
       }
                
            <small  style={{marginLeft:'-250px',marginBottom:'8px'}}>Email</small>
          <input type='email' placeholder='email@gmail.com'  onChange={e=>setemail(e.target.value)}/>
        <small  style={{marginLeft:'-250px',marginBottom:'8px'}}>Token</small>
          <input type='text' placeholder='Token' onChange={e=>settoken(e.target.value)} />
        <small  style={{marginLeft:'-250px',marginBottom:'8px'}}>password</small>

          <input type='password' placeholder='Password'  onChange={e=>setPassword(e.target.value)}/>
          
          <button className='btn-SignUp'> update </button>
          
          <Link to={'/'}>go to home</Link>

          <div className='Api-button'>
         
          </div>
        </form>
        <div className='ligne'></div>
        <div className='logo'>
          <img src={logo} alt='logo' />
          <p> C4U </p>
        </div>
      </div>
    </div>
  )
}
export default ResetPaswword