import React from 'react'
import './Account.css'
import { useEffect,useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import TextareaAutosize from '@mui/material/TextareaAutosize';
const token=localStorage.getItem("Id")
const url="http://localhost:8000/user/get"
function Account() {
  useEffect(()=>{
    axios.get(url).then(res=>{
      console.log(res)
      setDetails(res.data)
    }).catch(err=>{
      console.log(err)
    })
  },[])
  const[details,setDetails]=useState([])
  const LogoutUser=()=>{
    localStorage.clear()
    window.location.pathname='/login'
  }
  return (
 <>
{token? <div className="card">
   <div className="head">
     <h5><b>Personal Information</b></h5>
   </div>
     {details.map((detail,index)=>(
       <div key={detail._id+index} className='UserName'>
         <TextareaAutosize
      aria-label="empty textarea"
      placeholder={detail.firstname}
      style={{ width: 200 }}
    />
     <TextareaAutosize
      aria-label="empty textarea"
      placeholder={detail.lastname}
      style={{ width: 200 }}
    />
        <Button size="small" varient="contained"className='mx-3' color='success'>Save</Button>
     </div>
     ))}
{details.map((detail,index)=>(<div className='contact' key={detail._id+index}>
<TextareaAutosize
      aria-label="empty textarea"
      placeholder={detail.contactnumber}
      style={{ width: 200 }}
    />
     <Button size="small" varient="contained"className='mx-3' color='success'>Save</Button>
</div>))}
   <div className='btnleft'><button className='btn btn-danger' onClick={LogoutUser}>
   Logout
 </button></div>

     </div>: window.location.pathname='/login'}

 </>
  )
}

export default Account