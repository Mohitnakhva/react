
import { Nav } from './navbar/Nav'
import './App.css'
import { Home } from './navbar/Home'
import { Footer } from './navbar/Footer'
import { Contact } from './navbar/Contact'
import { Cart } from './navbar/Cart'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { Aboutus } from './navbar/Aboutus'
import Database from './navbar/database'
import Login from './navbar/Login'
import Read from './navbar/Read'
import Edit from './navbar/Edit'

function App() {
    const [cartdata,setCartdata] =  useState(JSON.parse(localStorage.getItem("cartdata"))||[])

  
 
  return (
    <>
      <Nav size={cartdata.length}/>
      
      <Routes>
        <Route path='/Database' element={<Database/>} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/Contact' element={<Contact/>} />
        <Route  path='/Aboutus' element={<Aboutus/>} />
        <Route path='/read/:id'element={<Read/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
