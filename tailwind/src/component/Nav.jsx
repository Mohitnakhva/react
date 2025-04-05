import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
       <div className='navbar_top flex item-center justify-center bg-[#272343] h-[45px] w-full '>
        <div className='lg:container flex  align-center justify-between'>
        <p className='text-sm font-normal p-3 text-white capitalize '><i className="fa-solid fa-check">Free on all orders over $50</i></p>

        <div className='navbar_top_right flex text-white gap-2 w-50 justify-between'>
    <select name="" className='select'>
        <option value="English">English</option>
        <option value="hindi">Hindi</option>
    </select>
    <button>Faqs</button>
        <button className="text-sm font-normal text-white capitalize ">need help</button>
        </div>
        
        </div>

       </div>
       <div className='navbar_down'>
        <nav className='nav bg-[grey] w-full flex align-center  justify-between'>
        <div className='logo ms-[10px] pt-[3px]'>
                <Link to={'/'} className='text-3x1 text-black font-medium capitalize flex gap-4 m-px' ><i className="fa-solid  fa-shirt h-[50px] p-3">outfit</i></Link>
        </div>
        <div className='w-300'>
            <ul className='flex gap-5 pt-[10px] ms-[60px] '>
                <li className=' me-[50px]' >
                    <Link to={'/'} className='text-lg  font-normal text-white    capitalize'>Home</Link>
                </li>
                <li className=' me-[50px]'> 
                   <Link to={'/product'} className='text-lg font-normal text-white capitalize'>Product</Link>
                </li>
                <li className=' me-[50px]'>
                   <Link to={'/contact'} className='text-lg font-normal text-white capitalize'>Contact</Link>
                </li>
                
            </ul>
        </div>
        <div className='w-50 pt-[10px]' >
            <ul className='flex gap-5 ms-[20px]'> 
                <li>
                    <Link to={'/login'} className='text-lg font-normal text-white capitalize'>Login</Link>
                </li>
                <li>
                    <Link to={'/logout'} className='text-lg font-normal text-white capitalize'>logout</Link>
                </li>
                <li>
                    <Link to={'/cart'} className='text-lg font-normal text-white capitalize'><i className="fa-solid fa-cart-shopping"></i></Link>
                </li>
            </ul>
        </div>
        </nav>
       </div>
    </div>
  )
}

export default Nav