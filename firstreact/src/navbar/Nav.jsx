import React from 'react'

export const Nav = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg  text-white">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#" ><i class="fa-solid fa-shirt"></i></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"> 
          <a className="nav-link active text-white" aria-current="page" href="Home.jsx">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="Contact.jsx">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">About Us</a>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success text-white" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}
