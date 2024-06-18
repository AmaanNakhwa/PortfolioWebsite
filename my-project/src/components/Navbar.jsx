import React,{useState} from 'react'
import {AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import{ Link } from 'react-router-dom'
import DarkMode from './DarkMode';

const Navbar = () => {
    const[nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }


  return (  
    <div className='z-10 flex justify-between items-center max-w[1240px] mx-auto h-24 px-4 text-l'>
        
        <h1 className='text-3xl font-bold primary-color ml-4'>A. Nakhwa</h1>
        
        <ul className='hidden md:flex'>
            <li className='p-5'> <Link to="/">Home</Link> </li>
            <li className='p-5'> <Link to="/about">About</Link> </li>
            <li className='p-5'> <Link to="/work">Work</Link> </li>
            <li className='p-5'> <Link to="/contacts">Contacts</Link></li>
            
        </ul>
        <ul className=' md:flex'>
        <li><DarkMode /></li>
        </ul>


        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>

        <div className={nav ? 'z-10 text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r-gray-900 bg-[#d1d5db] dark:bg-[#121212]  ease-in-out duration-500'
            : 'fixed left-[-100%]'}>
        <h1 className='text-3xl primary-color m-4'>A. Nakhwa</h1>
        <ul className='p-8 text-2xl'>
        <li className='p-2'> <Link to="/">Home</Link> </li>
            <li className='p-2'> <Link to="/about">About</Link> </li>
            <li className='p-2'> <Link to="/work">Work</Link> </li>
            <li className='p-2'> <Link to="/contacts">Contacts</Link></li>
        </ul>
        </div>

    </div>
  )
}

export default Navbar