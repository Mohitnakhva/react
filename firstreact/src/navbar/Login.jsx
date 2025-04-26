import axios, { Axios } from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [insert,setInsert] = useState({name:"",password:""});
  const [error,setError] = useState({});



  const navigate = useNavigate()
  function  handleSubmit(e)
  {
    e.preventDefault();
    if(Validation()){

      axios.post("http://localhost:5001/data",insert)
      .then((res)=>{
        console.log(res);
        alert("data insert successfully");
        navigate("/")
      })
      .catch((arr)=>{
        console.log(arr);
        alert("failed insert data");
      })
    }
  }
  function Validation()
    {
      let valid = true;
      let obj={}

      if(!insert.name.trim()){
        obj.name ="User Name is required";
        valid= false;
      }
      if(!insert.password.trim()){
        obj.password="password is required";
        valid=false;
      } 
      if(!insert.password.length > 9)
      {
       obj.password="Password must be at least 9 characters long."
       valid=false
      }
      setError(obj);
      return valid;
    }
  return (
    <div  className='formm' style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"700px" }}>
      
        <form className='box' action="" onSubmit={handleSubmit}  style={{ width: "300px", height:"350px", padding: "25px" }}>
          <h1 style={{textAlign:'center',marginTop:"-14px"}}>Login</h1>
            <div style={{display:"flex",flexDirection:"column", paddingBottom:"8px" }}>
            <label htmlFor="user" style={{fontSize:"18px",fontFamily:"inherit",fontWeight:"bold", paddingBottom:"5px"}}>Username:</label>
            <input type="text" id="user"placeholder='Enter your userName'value={insert.name}  onChange={(e) => setInsert({ ...insert,name: e.target.value })}/>
            {error.name && <p style={{ color: "red",margin:"1px" }}>{error.name}</p>}
        </div>
        <div style={{ display: "flex", flexDirection: "column" , paddingBottom:"8px"}}>
          <label htmlFor="password"  style={{fontSize:"18px",fontFamily:"inherit",fontWeight:"bold", paddingBottom:"5px"}}>Password:</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={insert.password}
            onChange={(e) => setInsert({ ...insert, password: e.target.value })}
          />
          {error.password && <p style={{ color: "red",margin:"1px" }}>{error.password}</p>}
            </div>
          <button style={{marginTop:"20px",marginBottom:"8px",textAlign:"center",height:"30px", width:"100%", borderRadius:"15px", marginLeft:"0px" ,fontWeight:"bold",backgroundColor:"lightblue"}}>Login</button> 
          <p style={{textAlign:"center" }}>Don't have an account?<a href="from.jsx" style={{textDecoration:"none" ,}}>Register</a></p>
        </form>
  </div>
  )
}

export default Login