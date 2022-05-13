import React from "react";
import {useState} from 'react';
import axios from 'axios'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import './Register.css'
const currencies=[
  {
    value:'MALE',
    label:'Male'
  },
  {
   value:'FEMALE',
   label:'Female'
  }
]
const Register=()=>{
  const validate=()=>{
    let temp={}
    temp.firstname=(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/).test(firstname)?"":"FirstName is Required"
    temp.lastname=(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/).test(lastname)?"":"LastName is Required"
    temp.email=(/$|.+@.+..+/).test(email)?"":"Email is Required"
    temp.gender=gender?"":"Gender is Required"
    temp.contactnumber=(0-9).test(contactnumber.length<9)?"":"Minimum 10 Numbers Are Required"
    temp.password=password?"":"PassWord Is Required"
  }
 
  const[firstname,setFirstname]=useState('')
  const[lastname,setLastname]=useState('')
  const[email,setEmail]=useState('')
  const[gender,setGender]=useState('')
  const[contactnumber,setContactnumber]=useState('')
  const[password,setPassword]=useState('')
  const formData={
    firstname,
    lastname,
    email,
    gender,
    contactnumber,
    password
  }
  const handleOnClick=async(e)=>{
    e.preventDefault();
    console.log(formData);
    axios.post()
  }
  const handleChange=(e)=>{
    setGender(e.target.value)
  }
    return(
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="text-ce">
        <TextField
          id="standard-password-input"
          label="First Name"
          type="text"
          onChange={(e)=>setFirstname(e.target.value)}
          pattern="[a-zA-Z0-9]+" 
          minLength="4"
          maxLength="10"
          autoComplete="current-password"
          variant="standard"
        />
        <TextField
          id="standard-password-input"
          label="Last Name"
          type="text"
          onChange={(e)=>setLastname(e.target.value)}
          autoComplete="current-password"
          variant="standard"
        />
        <TextField
          id="standard-password-input"
          label="Email"
          type="email"
          onChange={(e)=>setEmail(e.target.value)}
          autoComplete="current-password"
          variant="standard"
        />
          <TextField
          id="filled-select-currency"
          select
          onChange={(e)=>setGender(e.target.value)}
          label="Select Your Gender"
          variant="filled"
        >
           {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="standard-password-input"
          label="Contact"
          type="text"
          onChange={(e)=>setContactnumber(e.target.value)}
          autoComplete="current-password"
          variant="standard"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="text"
          onChange={(e)=>setPassword(e.target.value)}
          autoComplete="current-password"
          variant="standard"
        />
            <button className='btn btn-danger' onClick={handleOnClick}>Register</button>
            </div>
      </Box>
    )
}
export default Register;