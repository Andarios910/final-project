import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Notification from './Notification'

const Navbar = () => {

    const [ nav, setNav ] = useState(false)
    const [ color, setColor ] = useState('transparent')
    const [ textColor, setTextColor ] = useState('white')
    // const [ isOpen, setIsOpen ] = useState(false)

    const [notif, setNotif] = useState(false)
    console.log(textColor)

    const handleNav = () => {
        setNav(!nav)
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


    // const changeColor = () => {
    //     if (window.scrolly <= 1) {
    //         setColor(true);
    //     } else {
    //         setColor(false);
    //     }
    // }

    return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className='max-w-[1024px] m-auto flex justify-between items-center p-4 text-white'>
            <Link href='/'>
                <h1 style={{color: `{textColor}`}} className='font-bold text-4xl'>E-Flight</h1>
            </Link>
            <ul style={{color: `{textColor}`}} className='hidden sm:flex'>
                <li className='p-4  hover:text-violet-500'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='p-4  hover:text-violet-500'>
                    <Link href='/#city'>City</Link>
                </li>
                <li className='p-4  hover:text-violet-500'>
                    <Link href='/contact'>Contact</Link>
                </li>     
            </ul>
            <div className='flex'>
                <button onClick={() => setNotif(!notif)} className='block px-4 py-3 lg:py-5 text-white hover:text-violet-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                    </svg>
                </button>
                {
                    notif ? <Notification /> : <div></div>
                }
                <button href="#" className='flex flex-col lg:flex-row px-4 py-3 lg:py-5 text-white  hover:text-violet-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </button>   
                <ul style={{color: `{textColor}`}} className='hidden sm:flex'>
                    <li className='p-5  hover:text-violet-500'>
                        <Link to='/login' >Sign In / Register</Link>
                    </li>
                </ul>      
            </div>

            {/* Mobile Button */}
            <div onClick={handleNav} className='block sm:hidden z-10 text-white' >
                {nav ? <AiOutlineClose size={20} style={{color: `{textColor}`}} /> : <AiOutlineMenu size={20} style={{color: `{textColor}`}}/> }
            </div>
            {/* Mobile Menu */}
            <div className= { 
                nav 
                ?
                'sm:hidden absolute top-0 left-0 bottom-0 flex justify-between items-center w-full h-screen bg-white text-center ease-in duration-300'
                : 
                'sm:hidden absolute top-0 left-[100%] bottom-0 flex justify-between items-center w-full h-screen bg-white text-center ease-in duration-300'
            }>
            <ul className='text-black'>
                <li className='p-4 text-2xl hover:text-violet-500'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='p-4 text-2xl hover:text-violet-500'>
                    <Link href='/#city'>City</Link>
                </li>
                <li className='p-4 text-2xl hover:text-violet-500'>
                    <Link href='/contact'>Contact</Link>
                </li>
                <li className='p-4 text-2xl hover:text-violet-500'>
                    <Link href="#" >Sign In / Register</Link>
                </li>
            </ul>
            </div>
        </div>
    </div>
    )
}

export default Navbar