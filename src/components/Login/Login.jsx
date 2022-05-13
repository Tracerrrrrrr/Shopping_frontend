import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'
import { ValidatorComponent } from 'react-material-ui-form-validator';
import facebook from "../images/facebook.png";
import google from "../images/download.png"
import axios from 'axios';
import App from '../../App';
import SocialButton from "../../SocialLogin/SocialButton"
const te="http://localhost:8000/user/login"
toast.configure()
const Login=()=> {
  const validate=()=>{
    let temp={}
    temp.email=email?"":"Email is Required"
    temp.password=password?"":"PassWord Is Required"
  }
  const handleSocialLogin = (user) => {
    console.log(user);
  };
  
  const handleSocialLoginFailure = (err) => {
    console.error(err);
  };
  let navigate=useNavigate();
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const loginData=async(e)=>{
    e.preventDefault()
    if(!email||!password)
    {
      toast("All Fields Are Required",{
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      },
      )
    }
    else{
      const postData={email,password}
      console.log(postData)
  const result=await axios.post(te,postData,{headers:{
    'Content-Type':'application/json'
  }})
  if(result)
  {
    console.log(result.data.token)
    window.alert(result.data.message)
    localStorage.setItem('Id',JSON.stringify(result.data.token))
    navigate(`/`,{state:{id:result.data.token}})
  }
  else{
    toast.error("Please Login Again")
  }
}}

  return (
<>
<Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    >
      <div className="text-cen">
      <TextField
          id="standard-password-input"
          label="Email"
          type="text"
          autoComplete="current-password"
          variant="standard"
          errorMessages={['maxNumber:9', 'matchRegexp:^[a-z,A-Z]$']}
          validators={['Maximum 9 Chracters Are Allowed', '']}
          onChange={(e)=>setEmail(e.target.value)}
        />
         <TextField
          id="standard-password-input"
          label="Password"
          type="text"
          autoComplete="current-password"
          variant="standard"
          onChange={(e)=>setPassword(e.target.value)}
        />
    <button className='btn btn-success my-2' onClick={loginData}>Login</button>
    <a href="#" style={{textDecoration:"none",color:"black"}}>Forgot Password ?</a>
       <p className='my-4'>Already Have An Account ?<Link to='/login/register' className='tet'>Sign-in </Link></p>
  
     <p>Or</p>
     <div className="gfLogin"><img className='ima' src={google}/>
     <img className='im mx-2' src={facebook}/></div>
     
    </div>
    </Box>
    
   
</>
  )
}

export default Login;