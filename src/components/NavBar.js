import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
   

    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="#">Navbar</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link" to='/register'>register</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/ListProduit'>ListProduit</Link>
          </li>
          
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        
        </form>
      </div>
    </div>
  </nav>
    
  )
}

export default NavBar