import React, { useEffect, useState } from 'react'
import Image from '../assets/image1.jpg'
import Img from '../assets/image2.jpg'
import Img3 from '../assets/image2.jpg'     

export   const Home = () => {
  const [products, setProducts] = useState([]);
 const [card,setCard]= useState(JSON.parse(localStorage.getItem("cartdata"))||[])
 const [loading,setLoading] = useState(true)

 function handleclick(item)
 {
 console.log(item)  
  setCard([item,...card])
  alert("you added product successfully")
 }

useEffect(()=>{
  localStorage.setItem("cartdata",JSON.stringify(card))

},[card])
 useEffect(() => {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      setProducts(res);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);



  return (
   
    <>

<div className=" main justify-content-around  p-5">
<div className='row g-2 p-4'>
      {products && // condiiton rendering
        products.map((item) => {
          return (
            <div key={item.id} style={{ border: "1px solid black",height:"330px"}} className="card m-2  col-4">
              <h2 style={{fontFamily:"sans-serif",fontWeight:"bold"}} >{item.title.slice(0,21)}...</h2>
              <div><img  className="imgcart" src={item.image} alt={item.title} height={"180px"} style={{display:"block", }} width={"100%"}/>
              </div>
              <p style={{fontFamily:"fantasy",fontWeight:"bold",fontSize:"24px"}}>$ {item.price}</p>
              <a href="#" className="btn btn-primary" style={{width:"40%"}} onClick={()=>{handleclick(item)}}>ADD TO CART <i className="fa-solid fa-cart-shopping"></i></a>
            </div>
            
          );
          
        })}
        </div>
    </div>



    </>
  )
}
