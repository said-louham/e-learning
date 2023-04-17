import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ForgetPassword() {

const [email,setEmail]=useState(null);
const [message,setMessage]=useState(null);

const handelsubmit=(e)=>{
    e.preventDefault();
   const checkEmail=async()=>{
    const sendEmail=new FormData();
   sendEmail.append('email',email);
      await axios.post('http://127.0.0.1:8000/api/forget',sendEmail).then(res=>{
        console.log(res.data.message)
        setMessage(res.data.message)
        // setError(res.data.error)
      })

   }
   checkEmail()
}

  return (

    <div >
        <div className="card text-center" style={{width:'500px',marginInline:'auto',marginTop:"100px"}} >
    <div className="card-header h5 text-white " style={{background:'#3BBA9C'}}>Password Reset</div>
    <div className="card-body px-5 text-white"  style={{background:'#43455C'}}>

  
        <div className="card-text py-2">

       
                  {  message? <div className="alert alert-success" role="alert">
                   {message}
                </div>:'Enter your email address and we ll send you an email with instructions to reset your password.'}
        </div>
        <div className="form-outline">
          <form onSubmit={(e)=>handelsubmit(e)}>
          <label className="form-label" style={{marginLeft:'-320px',marginBottom:"-20px"}}>Email </label> 
          <input type="email" id="typeEmail" className="form-control my-3" onChange={e=>setEmail(e.target.value)} />
            <button type='submit' className="btn text-white  w-100" style={{background:'#3BBA9C'}}>Reset password</button>

          </form>
         </div>

        <div className="d-flex justify-content-between mt-4">
            <Link to={'/'}>go to home</Link>
            <a className="" href="#">Register</a>
        </div>
    </div>
</div>
    </div>
  )
}

export default ForgetPassword