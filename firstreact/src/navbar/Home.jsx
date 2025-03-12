import React, { useState } from 'react'
import Image from '../assets/image1.jpg'
import Img from '../assets/image2.jpg'
import Img3 from '../assets/image2.jpg'     

export   const Home = (props) => {

 const [color,setcolor]= useState("");

 const handleEvent=()=> {
   setcolor("red");
 };

  return (
   
    <>
      <div className='main justify-content-around  p-5'>
        <div className='row g-2 p-4'>
        <div className="card  h-75 col-4  ">
          <img src={Image} className="card-img-top" alt="..."  /> <i class=" heart fa-regular fa-heart" onClick={handleEvent} style={{color:color}} ></i>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.p}</p>
            <a href="#" className="btn btn-primary">ADD TO CART <i class="fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>

        <div className="card card h-75 col-4">
          <img src={Img} className="card-img-top" alt="..." /><i class=" heart fa-regular fa-heart"></i>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.p}</p>
            <a href="#" className="btn btn-primary">ADD TO CART <i class="fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>

        <div className="card card  h-75  col-4">
          <img src={Img3} className="card-img-top" alt="..." /><i class=" heart fa-regular fa-heart"></i>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.p}</p>
            <a href="#" className="btn btn-primary">ADD TO CART <i class="fa-solid fa-cart-shopping"></i></a>
          </div>
          </div>
        </div>
       <div className='row g-2 p-4'>
        <div className="card  h-75 col-4 ">
          <img src={Image} className="card-img-top" alt="..." /><i class=" heart fa-regular fa-heart"></i>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.p}</p>
            <a href="#" className="btn btn-primary">ADD TO CART <i class="fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>

        <div className="card card  h-75 col-4 ">
          <img src={Img} className="card-img-top" alt="..." /><i class=" heart fa-regular fa-heart"></i>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.p}</p>
            <a href="#" className="btn btn-primary">ADD TO CART <i class="fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>

        <div className="card card  h-75 col-4">
          <img src={Img3} className="card-img-top" alt="..." /><i class=" heart fa-regular fa-heart"></i>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.p}</p>
            <a href="#" className="btn btn-primary">ADD TO CART <i class="fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
