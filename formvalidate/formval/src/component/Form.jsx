import React, { useState } from 'react'

const Form = () => {
    const [data,setData] = useState({userName:"",email:"",password:""});
    const [error, setError] = useState({});
    const [showData, setShowData] = useState();

    function  handleSubmit(e)
    {
      e.preventDefault();
      if(Validation()){

        setShowData(data);
        setData({userName:"",email:"",password:""});
      }
    }

    function Validation()
    {
      let valid = true;
      let obj={}

      if(!data.userName.trim()){
        obj.userName ="User Name is required";
        valid= false;
      }
      if(!data.email.trim()){
        obj.email="Email is required";
        valid=false;
      }
      if(!data.password.trim()){
        obj.password="password is required";
        valid=false;
      }
      if(!data.password.length > 9)
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
            <input type="text" id="user"placeholder='Enter your userName'value={data.userName}  onChange={(e) => setData({ ...data, userName: e.target.value })}/>
            {error.userName && <p style={{ color: "red",margin:"1px" }}>{error.userName}</p>}
        </div>
        <div style={{ display: "flex", flexDirection: "column" , paddingBottom:"8px"}}>
          <label htmlFor="email"  style={{fontSize:"18px",fontFamily:"inherit",fontWeight:"bold", paddingBottom:"5px"}}> Email:</label>
          <input
            id="email"
            type="text"
            placeholder="Enter your Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          {error.email && <p style={{ color: "red",margin:"1px"  }}>{error.email}</p>}
        </div>
        <div style={{ display: "flex", flexDirection: "column" , paddingBottom:"8px"}}>
          <label htmlFor="password"  style={{fontSize:"18px",fontFamily:"inherit",fontWeight:"bold", paddingBottom:"5px"}}>Password:</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          {error.password && <p style={{ color: "red",margin:"1px" }}>{error.password}</p>}
            </div>
          <button style={{marginTop:"20px",marginBottom:"8px",textAlign:"center",height:"30px", width:"100%", borderRadius:"15px", marginLeft:"0px" ,fontWeight:"bold" }}>Login</button> 
          <p style={{textAlign:"center" }}>Don't have an account?<a href="from.jsx" style={{textDecoration:"none" ,}}>Register</a></p>
        </form>
        {showData && (
      <div>
        <h2>Username :{showData.userName}</h2>
        <h2>Email :{showData.email}</h2>
        <h2>Password :{showData.password}</h2>
      </div>
    )}

    </div>
    

  )
}

export default Form