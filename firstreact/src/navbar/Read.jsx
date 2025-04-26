import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Read = () => {
    const [data,setData] = useState();
    const { id } = useParams();
    console.log(id);

    useEffect(()=>{
        axios.get("http://localhost:5001/data/"+id).then((res)=>{
            console.log(res);
            setData(res.data);
        });
    },[]);

  return (
    <div style={{height:"380px"}}>
        <h1>single user data</h1>
       {
        data && (
            <div> <p>Name:{data.name}</p>
            <p>Password:{data.password}</p>
            <Link to={"/"}>
            <button style={{color:"black"}}>Back</button>
          </Link>
            </div>  
        )}
    </div>
  )
}

export default Read