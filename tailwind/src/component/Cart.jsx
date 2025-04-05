import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {

  const [carddata,setCarddata]=useState([JSON.parse(localStorage.getItem("cartdata"))])
  console.log(carddata)
  return (
    <div>
      <h1>cart page</h1>
      <div className='grid grid-cols-3 gap-10 p-5'>
          {carddata && carddata.map((item)=>{
            return(
              <div key={item.id} className='border-2 card bg-white h-[330px] hover:border-blue-50 w-130'>
                <h2 className='font-bold text-[28px]'>{item.title}...</h2>
                <div className=''><img className='h-[180px] w-[100%]  object-contain ' src={item.image} alt={item.title}  /></div>
                <p className='font-bold text-[24px]'>${item.price}</p>
                
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Cart