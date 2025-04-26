import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = ({size}) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  text-white">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#" ><i className="fa-solid fa-shirt"></i></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
             <Link to={"/"} style={{textDecoration:"none"}}><span className='nav-link  text-white'>Home</span></Link>   
              </li>
              <li className="nav-item">
                <Link to={"/Contact"} style={{textDecoration:"none"}}><span className='nav-link  text-white'>Contact</span></Link>
              </li>
              <li className="nav-item">
              <Link to={"/Aboutus"} style={{textDecoration:"none"}}><span className='nav-link  text-white'>About us</span></Link>
              </li>
              <li className="nav-item">
              <Link to={"/Database"} style={{textDecoration:"none"}}><span className='nav-link  text-white'>Database</span></Link>
              </li>
              <li className="nav-item">
              <Link to={"/Login"} style={{textDecoration:"none"}}><span className='nav-link  text-white'>Login</span></Link>
              </li>
     
            </ul>
            <form className="d-flex" role="search" style={{ marginRight: "50px" }}>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

            </form>
            <div className='parentdiv'> <Link to={"/Cart"}>
<i className="fa-solid fa-cart-shopping ps-3 iconcart" ></i><span className='size'>{size}</span></Link> </div>
          </div>
        </div>
      </nav>
    </>
  )
}
