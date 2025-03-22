
import { Nav } from './navbar/Nav'
import './App.css'
import { Home } from './navbar/Home'
import { Footer } from './navbar/Footer'
import { Contact } from './navbar/Contact'
import { Cart } from './navbar/Cart'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { Aboutus } from './navbar/Aboutus'

function App() {
  const [product,setProduct] = useState ([]);
    const [cartdata,setCartdata] =  useState(JSON.parse(localStorage.getItem("cartdata"))||[])

  
 
  return (
    <>
      <Nav size={cartdata.length}/>
      <Routes>
        <Route path='/Cart' element={<Cart />} />
        <Route path='/' element={<Home />}/>
        <Route path='/Contact' element={<Contact/>} />
        <Route  path='/Aboutus' element={<Aboutus/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
