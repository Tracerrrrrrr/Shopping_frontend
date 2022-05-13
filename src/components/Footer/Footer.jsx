import React from 'react'
import './Footer.css'
import imagi from '../images/payment.jpeg';
import imagep from '../images/footer_security.png';
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.jpeg"
function Footer() {
  return (
 <div className='my-5'>
 <div className='footer-head'>
   <div className='footer-upper'>
     <h1>Bhadohi-Bazaar</h1>
   </div>
   <div className='footer-lower'>
    <ul>
      <li>Contact: </li>
      <li>Contact Number : 7607786507 , 9555380209</li>
      <li>Email Us: shivamuoadhyay4@gmail.com</li>
      <li>Address: Big Duhiya,</li>
      <li>Post: Kariyawan,</li>
      <li>District: 221406,Bhadohi</li>
    </ul>
   </div>
   <div className='footer-down'>
     <h3>NEWSLETTER</h3>
     <label>Drop Your Email:</label>
     <input type="text" className="input-box"/>
     <button className='btn btn-danger my-2'>Subscribe</button>
     <img src={imagi} className="my-2 img-fluid" alt="Network-error"/>
   </div>
   <img src={imagep}  className="img-fluid" alt="Network error"/>
   <div className='policy'>
    <a href="">Return Policy</a> 
   </div>
   <div className='footer-lower-down my-2'>
      <h5> © 2022 Bhadohi-Bazaar.All Rights Reserved</h5>
    </div>
    <div className='contact-us'>
     <a href="#"><img src={facebook} className="fb" alt="facebook"/> </a>
     <a href="#"><img src={instagram} className="insta mx-3"alt="instagram"/></a>
   </div>
 </div>
 
 </div>
  )
}

export default Footer