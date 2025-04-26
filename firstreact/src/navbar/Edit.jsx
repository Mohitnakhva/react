import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const [update,setUpdate] =useState({name:"",password:""});

    const navigate= useNavigate();
    const {id} = useParams();

    function handlesubmit(e){
        e.preventDefault();
        axios
        .put("http://localhost:5001/data/"+id,update)
        .then((res)=>{
            console.log(res);
            alert("update data successfully");
            navigate("/")
        })
        .catch((err)=>{
            console.log(err);
            alert("failed to update data")
        })
    }

    useEffect(()=>{
        axios.get("http://localhost:5001/data/"+id)
        .then((res)=>{
            setUpdate({...update,name:res.data.name,password:res.data.password})
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
  return (
    <div  className='formm' style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"700px" }}>
      
    <form className='box' action="" onSubmit={handlesubmit}  style={{ width: "300px", height:"350px", padding: "25px" }}>
    <div style={{display:"flex",flexDirection:"column", paddingBottom:"8px" }}>
    <label htmlFor="user" style={{fontSize:"18px",fontFamily:"inherit",fontWeight:"bold", paddingBottom:"5px"}}>Username:</label>
    <input type="text" id="user"placeholder='Enter your userName'value={update.name}  onChange={(e) => setUpdate({ ...update,name: e.target.value })}/>

</div>
<div style={{display:"flex",flexDirection:"column", paddingBottom:"8px" }}>
    <label htmlFor="user" style={{fontSize:"18px",fontFamily:"inherit",fontWeight:"bold", paddingBottom:"5px"}}>Password:</label>
    <input type="text" id="user"placeholder='Enter your userName'value={update.password}  onChange={(e) => setUpdate({ ...update,password: e.target.value })}/>

    <button  > update data</button>

</div>
    </form>
</div>
  )
}

export default Edit
