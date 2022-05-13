import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
 <>
 <nav className="navbar navbar-expand-lg navbar-light bg-light wrapper">
  <div className="container-fluid ">
 {/*<div className='bhadohi-word-swipe' style={{opacity:1}}>
   <span className="line line1">
     <span className='letter'>B</span>
     <span className='letter'>h</span>
     <span className='letter'>a</span>
     <span className='letter'>d</span>
     <span className='letter'>o</span>
     <span className='letter'>h</span>
     <span className='letter'>i</span>
     </span>
     </div>
 <div className='baazar-word-swipe' style={{opacity:1}}>
 <span className="line line1">
 <span className='letter'>B</span>
 <span className='letter'>a</span>
 <span className='letter'>a</span>
 <span className='letter'>z</span>
 <span className='letter'>a</span>
 <span className='letter'>r</span>
  </span>
   </div>*/}
   <div className="text-typing">
   
 
   <p>Bhadohi Bazaar </p>
    
    
   </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mainclass ">
      <li className="nav-item ">
          <Link className="nav-link active nb" aria-current="page" to="/shop">Shop </Link>
        </li>
         <li className="nav-item">
        <Link className="nav-link active nb" aria-current="page" to="/account">My Account</Link>
      </li>
      <li className="nav-item">
       <Link className="nav-link active nb" aria-current="page" to="/cart">Cart</Link>
     </li>
        <li className="nav-item">
        <Link className="nav-link active nb" aria-current="page" to="/login">Login</Link>
        </li>
        </ul>
     </div>
  </div>
</nav>

 </>
  )
}

export default Navbar