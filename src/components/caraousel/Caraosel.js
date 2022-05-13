import React from 'react'
import imagp from '../images/1.jpg';
import imag from '../images/15.jpg';
import imga from '../images/10.jpg'
import './Carausel.css'
function Caraosel() {
  return (

<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 pop" src={imagp} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 pop" src={imag} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 pop" src={imga} alt="Third slide"/>
    </div>
  </div>
  </div>
  )
}

export default Caraosel