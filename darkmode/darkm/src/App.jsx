import React, { useState } from 'react'
import { IoSunnyOutline } from "react-icons/io5";
import { FaCloudMoon } from "react-icons/fa6";
import { WiMoonFull } from "react-icons/wi";
import { IoSunny } from "react-icons/io5";


export const App = () => {

 const [boolean,setboolean] =  useState(false)
 
 
  return (
    <div className='main' style={{height:"700px",width:"100%", backgroundColor:`${boolean?"skyblue":"black"}`, border:"1px solid black"}}>
    <div className='iconn ' style={{position:"absolute", right:"5%",top:"5%", fontSize:"80px"}}>
    {
      boolean?(
        <div><IoSunny style={{color:"orange"}}/></div>
      ):(
        <div><FaCloudMoon style={{color:"white"}} /></div>
      )
    }
    </div>
   

     {
      boolean?(
        <button className='btn'style={{backgroundColor:"black",color:"white"}} on  onClick={()=>setboolean(false)}>
          <div  style={{display:"flex", justifyContent:"space-evenly", alignItems:"center",}}>
          <WiMoonFull className="cng"  style={{fontSize:"30px"}}/>
          <span style={{fontSize:"30px"}}>night</span>
          </div>
        </button>
      ):(
        <button style={{backgroundColor:"yellow"}} className='btn'  onClick={()=>setboolean(true)}>
          <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center",}}>
            <span style={{fontSize:"40px"}}>day</span>
            <IoSunnyOutline style={{fontSize:"40px"}} />
          </div>
        </button>
      )
     }

    </div>
  )
}
export default App;