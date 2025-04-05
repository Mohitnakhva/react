import React from 'react'
import Nav from './component/nav'
import { Route, Routes } from 'react-router-dom'
import Home from './component/home'
import Login from './component/auth/login'
import Register from './component/auth/register'
import Product from './component/Product'
import Contact from './component/Contact'
import Cart from './component/Cart'
import Logout from './component/Logout'
import Footer from './component/Footer'

const App = () => {
  return (
   <>
   <Nav/> 
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="Login" element={<Login/>}/>
    <Route path="register" element={<Register/>}/>
    <Route path='product' element={<Product/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='cart' element={<Cart/>}/>
    <Route path='logout' element={<Logout/>}/>
    </Routes>
    <Footer/>
   </>
  )
}

export default App