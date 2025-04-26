import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Database = () => { 
      
  const [data,setData] = useState([]);

  function handledelete(id){
      axios
      .delete("http://localhost:5001/data/"+id)
      .then((res)=>{
        console.log(res);
        alert("user data delete successfully!");
        const filterData = data.filter((data) => data.id !== id);
        console.log(filterData)
        setData(filterData);
      })
      .catch((err)=>{
        console.log(err);
        alert("failed to delete data")
      })
  }

  useEffect(()=>{
    axios.get("http://localhost:5001 /data")
    .then((res)=>{
      console.log(res)
      setData(res.data);
    })
    .catch((arr)=>{
      console.log(arr);
    });
  },[]);

   return (
    <div style={{marginBottom:"100px",height:"255px",marginTop:"20px",display:"flex",flexDirection:"column",marginLeft:"20px"} }>
           <Link to={"/login"}>
    <button>create data</button>
    </Link>
    
    <table border={"3px solid black"} style={{width:"30%",textAlign:'center' ,marginTop:"10px" }}>
      <thead>
      <tr style={{border:"2px solid black"}} className='tr'>
        <th>S.no</th> 
        <th>name</th>
        <th>password</th>

        <th>action</th>
      </tr> 
        </thead> 
        <tbody>
          {
            data && data.map((item)=>{
              return (
              <tr key={item.id} className='tr'>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.password}</td>
                <td>
                  <Link to={"/edit/"+item.id}>
                  <button className='btne'>Edit</button>
                  </Link>
                  <button className='btne' onClick={()=>{handledelete(item.id)}}>
                      Delete
                    </button>
                    <Link to={"/read/"+item.id}>
                      <button className='btne'>read</button>
                    </Link>
                </td>
              </tr>  
              );
            })
          }
        </tbody>
    </table>
    </div>
  )
}

export default Database