import React from 'react'

function Header() {
  return (
<>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid ">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mainclass ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">My Account</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">My Wishlist</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Checkout</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Login</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link active" aria-current="page" href="#">Cart</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
  )
}

export default Header;