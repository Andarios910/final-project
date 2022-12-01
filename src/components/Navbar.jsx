import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsPerson } from 'react-icons/bs'
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

    // <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-30'>
    //     <div className='max-w-[1024px] m-auto flex justify-between items-center p-4 text-white'>
    //         <Link href='/'>
    //             <h1 style={{color: `{textColor}`}} className='font-bold text-4xl'>E-Flight</h1>
    //         </Link>
    //         <ul style={{color: `{textColor}`}} className='hidden sm:flex'>
    //             <li className='p-4  hover:text-violet-500'>
    //                 <Link href='/'>Home</Link>
    //             </li>
    //             <li className='p-4  hover:text-violet-500'>
    //                 <Link href='/#city'>City</Link>
    //             </li>
    //             <li className='p-4  hover:text-violet-500'>
    //                 <Link href='/contact'>Contact</Link>
    //             </li>     
              
    //         </ul>
    //         <div className='flex'>
    //             <button href="/" className='block px-4 py-3 lg:py-5 text-white  hover:text-violet-500'>
    //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    //                     <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
    //                 </svg>
    //             </button>
    //             <button href="/" className='flex flex-col lg:flex-row px-4 py-3 lg:py-5 text-white  hover:text-violet-500'>
    //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    //                     <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    //                 </svg>
    //             </button>   
    //             <ul style={{color: `{textColor}`}} className='hidden sm:flex'>
    //                 <li className='p-5  hover:text-violet-500'>
    //                     <Link to="/" >Sign In / Register</Link>
    //                 </li>
    //             </ul>      
    //         </div>

          
    //         {/* Mobile Button */}
    //         <div onClick={handleNav} className='block sm:hidden z-10 text-white' >
    //             {nav ? <AiOutlineClose size={20} style={{color: `{textColor}`}} /> : <AiOutlineMenu size={20} style={{color: `{textColor}`}}/> }
    //         </div>
    //         {/* Mobile Menu */}
    //         <div className= { 
    //             nav 
    //             ?
    //             'sm:hidden absolute top-0 left-[50%] bottom-0 flex justify-between items-center w-full h-screen bg-[#051036] text-center ease-in duration-300'
    //             : 
    //             'sm:hidden absolute top-0 left-[100%] bottom-0 flex justify-between items-center w-full h-screen bg-[#051036] text-center ease-in duration-300'
    //         }>
    //         <ul className='text-white'>
    //             <li className='p-4 text-2xl hover:text-violet-500'>
    //                 <Link href='/'>Home</Link>
    //             </li>
    //             <li className='p-4 text-2xl hover:text-violet-500'>
    //                 <Link href='/card'>City</Link>
    //             </li>
    //             <li className='p-4 text-2xl hover:text-violet-500'>
    //                 <Link href='/contact'>Contact</Link>
    //             </li>
    //             <li className='p-4 text-2xl hover:text-violet-500'>
    //                 <Link href="/" >Sign In / Register</Link>
    //             </li>
    //         </ul>
    //         </div>
    //     </div>
    // </div>

  )
}

export default Navbar