import React, { useState } from 'react'

export const Cart = () => {

  const [cartdata,setCartdata] =  useState(JSON.parse(localStorage.getItem("cartdata"))||[])
  return (
   <>
  <h1>cart page</h1>

  {cartdata&& // condiiton rendering
        cartdata.map((item) => {
          return (
            <div key={item.id} style={{ border: "1px solid black",height:"330px"}} className="card m-2  col-4">
              <h2 >{item.title.slice(0,21)}...</h2>
              <div><img  className="imgcart" src={item.image} alt={item.title} height={"180px"} style={{display:"block", }} width={"100%"}/>
              </div>
              <p style={{fontFamily:"initial",fontWeight:"bolder",fontSize:"24px"}}>$ {item.price}</p>

            </div>  
            
          );
          
        })}
   </>
  )
}
