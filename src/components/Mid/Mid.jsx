import React from 'react'
import image from '../images/jeans.jpg'
import './Mid.css';
import imag from '../images/tshirt.jpg'
function Mid(props) {
  return (
  <div>
   <div className='Mid-upper my-3' >
     <h1>Latest Collections</h1>
   </div>
   <div className='head'>
   <img src={image} className="img-fluid " alt="network issue"/>
     <img src={imag} className="img-fluid" alt="network issue"/> 
     </div>
      {/* <div className="dropdown my-5">
       <h1 className='dropbtn'>Shop By Category</h1>
  <Link to="/tshirt">T-Shirt</Link>
    <Link to="/jeans">Jeans</Link>
  <Link to="/shirts">Shirts</Link>
</div> */}
<h1>{props.id}</h1>
     </div>
  )
}

export default Mid;