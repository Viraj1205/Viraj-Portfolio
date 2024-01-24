import React, { useState } from 'react'
import { FaBars, FaTimes, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-scroll';


const Navbar = () => {
    const links = ["home", "about", "portfolio", "experience", "contact"]
    const [nav,setNav] = useState(false)

  return (
    <div className='flex justify-between items-center fixed bg-black text-white px-2 w-full h-20'>
        <div>
            <h1 className='font-signature text-6xl ml-2'>Viraj</h1>
        </div>

        <ul className='hidden md:flex'>

            {links.map((link) => (<li className='px-4 cursor-pointer text-gray-500 font-medium capitalize
            hover:scale-105 duration-200'><Link to={link} smooth duration={500}>{link}</Link></li>))}
            
        </ul>

        <div className='md:hidden cursor-pointer text-gray-500 pr-4 z-10'
        onClick={()=> setNav(!nav)}>
            {nav ? <FaTimes size={30} /> : <FaBars size={30}/>}
        </div>
        {nav && (
        <ul className='flex flex-col absolute top-0 left-0
            justify-center items-center bg-gradient-to-b from-black to-gray-800 cursor-pointer text-gray-500 w-full h-screen'>
            {links.map((link) => (<li className='px-4 cursor-pointer py-6 capitalize text-4xl'><Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>{link}</Link></li>))}
            
        </ul>)}
    </div>
  )
}

export default Navbar