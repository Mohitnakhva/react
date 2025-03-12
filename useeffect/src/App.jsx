import React, {useState } from 'react'


export const App = () => {

 
  const[count,setCount]=useState(0);

  return (
    <div className='main-container' >
      <p>Count :{count}</p>
      <button onClick={()=>{setCount(count + 1)}}>incress</button>
      <button onClick={()=>{setCount(count - 1)}}>decress</button>
  
    </div>
  )
}
export default App;