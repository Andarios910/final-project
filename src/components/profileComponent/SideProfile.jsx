import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../features/user/userSlice'

import { FaUser, FaTicketAlt, FaEnvelope } from 'react-icons/fa'
import { IoLogOutOutline } from 'react-icons/io5'

export default function SideProfile() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { dataUser } = useSelector((state) => state.user);
    const user = JSON.parse(localStorage.getItem('user'))

    const logOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem('user');
        setTimeout(() => {
            window.location.reload(1)
        }, 1500)
        navigate('/')
    }

    useEffect(() => {
        dispatch(fetchUser(user.id))
    }, [dispatch, user.id])
    
    return (
        <div className='w-full md:w-96 md:rounded-xl pb-10 bg-white drop-shadow-lg mb-10'>
            <div className='text-center shadow-neutral-400 px-16 pt-5 md:mt-5'>
                <img  
                    src={dataUser.photoProfile}
                    alt='profile'
                    className='w-32 rounded-full mx-auto' 
                />
                <p className='text-sm text-gray-500'>Selamat Datang</p>
                <h3 className='text-lg font-medium'>{`${user.firstName} ${user.lastName}`}</h3>
            </div>
            <div 
                className='flex items-center p-3 pl-5 mt-10 text-gray-500 hover:bg-gray-200 cursor-pointer'
                onClick={() => navigate('/user/profile')}    
            >
                <FaUser className='h-5' />
                <h4 className='ml-3'>Profile</h4>
            </div>
            <div 
                className='flex items-center p-3 pl-5 text-gray-500 hover:bg-gray-200 cursor-pointer'
                onClick={() => navigate('/user/order-list')}
            >
                <FaTicketAlt className='h-5' />
                <h4 className='ml-3'>Pemesanan Saya</h4>
            </div>
            <div 
                className='flex items-center p-3 pl-5 text-gray-500 hover:bg-gray-200 cursor-pointer'
                onClick={() => navigate('/user/updateEmail')}
            >
                <FaEnvelope className='h-5' />
                <h4 className='ml-3'>Update Profile</h4>
            </div>
            <div onClick={logOut} className='flex items-center p-3 pl-5 text-gray-500 hover:bg-gray-200 cursor-pointer'>
                <IoLogOutOutline className='w-5 h-5' />
                <h4 className='ml-3'>Logout</h4>
            </div>
        </div>
    )
}

