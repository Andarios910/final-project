import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosNotifications } from 'react-icons/io'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { RiArrowDropDownLine } from 'react-icons/ri'
import Notification from './Notification'

const Navbar = () => {
    const [ nav, setNav ] = useState(false);
    const [ logo, setLogo ] = useState(false);
    const [ color, setColor ] = useState('transparent')
    // const [ textColor, setTextColor ] = useState('white')
    const [ notif, setNotif] = useState(false)
    const [select, setSelect] = useState(false)

    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo);
    };

    const token = JSON.parse(localStorage.getItem('token'))
    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY >= 90) {
                setColor('#051036')
                // setTextColor('#000000')
            }else{
                setColor('transparent')
                // setTextColor('#ffffff')
            }
        }
        window.addEventListener('scroll', changeColor);
    }, [])


return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-30 flex justify-between items-center h-20 px-10 text-white'>
        <div>
            <h1 className={logo ? 'hidden cursor-pointer' : 'block cursor-pointer'}>E'FLIGHT.</h1>
        </div>
        <ul className='hidden md:flex'>
            <li className='hover:text-violet-500 cursor-pointer'>
                <Link to='/'>Home</Link>
            </li>
            <li className='hover:text-violet-500 cursor-pointer'>
                <Link to='/'>City</Link>
            </li>
            <li className='hover:text-violet-500 cursor-pointer'>
                <Link to='/'>Contact</Link>
            </li>
        </ul>
        <div className='flex items-center justify-between'>
            <div onClick={() => setNotif(!notif)} className=''>
                <IoIosNotifications className='hover:text-violet-500' size={20}/>
            </div>
            {
                notif ? <Notification /> : <span></span>
            }
            <ul className='ml-5'>
                {
                    token ?  
                        <div className='hidden md:flex items-center justify-end cursor-pointer' onClick={() => setSelect(!select)}>
                            <li className='py-2 px-0'>
                                <img 
                                    className='h-10 w-10 rounded-full' 
                                    src={user.photoProfile} 
                                    alt="profile"/>
                            </li>
                            <li className='py-2 px-0 hover:text-[#0d6efd] text-white transition-all duration-500 ease-out'>
                                <RiArrowDropDownLine className='w-8 h-8' />
                            </li>
                        </div> 
                    : 
                        <li className='hidden md:flex hover:text-violet-500'>
                            <Link to="/login" >Sign In / Register</Link>
                        </li>
                }
            </ul>
            <div 
                className={`absolute right-10 top-16 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black 
                ring-opacity-5 focus:outline-none transition ease-out duration-100 ${select ? 'visible transform opacity-100 scale-100' : 'invisible transform opacity-0 scale-95'}`}
                role="menu" 
                aria-orientation="vertical" 
                aria-labelledby="menu-button" 
                tabIndex="-1"
            >
                {
                    token ? 
                        <div className="py-1 text-black" role="none">
                            <Link to='/user/profile'>
                                <p className="hover:text-[#0d6efd] hover:bg-blue-100 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">
                                    Profile
                                </p>
                            </Link>
                            <Link to='/user/order-list'>
                                <p className="hover:text-[#0d6efd] hover:bg-blue-100 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">
                                    History
                                </p>
                            </Link>
                            <p className="hover:text-[#0d6efd] hover:bg-blue-100 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">
                                Logout
                            </p>
                        </div>
                    :
                        <div className="py-1 text-white" role="none">
                            <p className="hover:text-[#2b9c87] block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">
                                Login
                            </p>
                            <p className="hover:text-[#2b9c87] block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">
                                Register
                            </p>
                        </div>
                }
            </div>
        </div>

        {/* Hamburger */}
        <div onClick={handleNav} className='md:hidden z-10'>
            {nav ? <AiOutlineClose className='text-black' size={20}/> : <AiOutlineMenu size={20} /> }

        </div>

        {/* Mobile menu Dropdown */}
        <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full h-screen bg-gray-100/90 px-4 py-5 flex flex-col' 
        : 'absolute left-[-100%]'}>
            <ul>
                <h1>E'FLIGHT.</h1>
                <li className='border-b'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='border-b'>City</li>
                <li className='border-b'>Contact</li>
                <div className='flex flex-col'>
                    {
                        token ? 
                            <button className='flex flex-col items-center'>
                                <Link to='/user/profile'>
                                    <p>Account</p>
                                    <span className='text-gray-200'>{user.email}</span>
                                </Link>
                            </button>
                        :
                            <button className='my-4'>
                                <Link to='/login'>Sign In / Register</Link>
                            </button>
                    }
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