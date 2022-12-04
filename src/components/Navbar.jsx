import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { BsPerson } from 'react-icons/bs'
import { IoIosNotifications } from 'react-icons/io'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Navbar = () => {

    const [ nav, setNav ] = useState(false);
    const [ logo, setLogo ] = useState(false);
    const [ color, setColor ] = useState('transparent')
    const [ textColor, setTextColor ] = useState('white')
   
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo);
    };

    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY >= 90) {
                setColor('#051036')
                setTextColor('#000000')
            }else{
                setColor('transparent')
                setTextColor('#ffffff')
            }
        }
        window.addEventListener('scroll', changeColor);
    }, [])

  return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-30 flex justify-between items-center h-20 px-10 text-white'>
        <div>
            <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>E'FLIGHT.</h1>
        </div>
        <ul className='hidden md:flex'>
            <li className='hover:text-violet-500'>Home</li>
            <li className='hover:text-violet-500'>City</li>
            <li className='hover:text-violet-500'>Contact</li>
            
        </ul>
      
        <div className='flex items-center justify-between'>
            <div className=''>
                <IoIosNotifications className='hover:text-violet-500' size={20}/>
            </div>
            <ul>
              <li className='hidden md:flex hover:text-violet-500'>
                  <Link to="/" >Sign In / Register</Link>
              </li>
            </ul>  
        </div>
       

        {/* Hamburger */}
        <div onClick={handleNav} className='md:hidden z-10'>
            {nav ? <AiOutlineClose className='text-black' size={20}/> : <HiOutlineMenuAlt4 size={20} /> }
        </div>

        {/* Mobile menu Dropdown */}
        <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full h-screen bg-gray-100/90 px-4 py-5 flex flex-col' 
        : 'absolute left-[-100%]'}>
        <ul>
          <h1>E'FLIGHT.</h1>
          <li className='border-b'>Home</li>
          <li className='border-b'>City</li>
          <li className='border-b'>Contact</li>
          <div className='flex flex-col'>
            <button className='my-4'>Sign In / Register </button>
            <button>Account</button>
          </div>
          <div className='flex justify-between my-7 px-9'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaLinkedin className='icon' />
            <FaInstagram className='icon' />
          </div>
        </ul>
      </div>
    </div>

  )
}

export default Navbar