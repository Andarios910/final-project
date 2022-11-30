import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaUser, FaTicketAlt, FaEnvelope, FaUserLock } from 'react-icons/fa'
import { IoLogOutOutline } from 'react-icons/io5'

export default function SideProfile() {
    const navigate = useNavigate()

    return (
        <div className='w-full md:w-96 md:rounded-xl pb-10 bg-white drop-shadow-lg mb-10'>
            <div className='text-center shadow-neutral-400 px-16 pt-5 md:mt-5'>
                <img 
                    src='https://tse4.mm.bing.net/th?id=OIP.mDv826UG65YB8vFcW1SB3QHaHa&pid=Api&P=0' 
                    alt='profile'
                    className='w-32 rounded-full mx-auto' 
                />
                <p className='text-sm text-gray-500'>Selamat Datang</p>
                <h3 className='text-lg font-medium'>Dwi Putra</h3>
            </div>
            <div 
                className='flex items-center p-3 pl-5 mt-10 text-gray-500 hover:bg-gray-200 cursor-pointer'
                onClick={() => navigate('/user/profile')}    
            >
                <FaUser className='h-5' />
                <h3 className='ml-3'>Profile</h3>
            </div>
            <div 
                className='flex items-center p-3 pl-5 text-gray-500 hover:bg-gray-200 cursor-pointer'
                onClick={() => navigate('/user/order-list')}
            >
                <FaTicketAlt className='h-5' />
                <h3 className='ml-3'>Pemesanan Saya</h3>
            </div>
            <div className='flex items-center p-3 pl-5 text-gray-500 hover:bg-gray-200 cursor-pointer'>
                <FaEnvelope className='h-5' />
                <h3 className='ml-3'>Ubah Email</h3>
            </div>
            <div className='flex items-center p-3 pl-5 text-gray-500 hover:bg-gray-200 cursor-pointer'>
                <FaUserLock className='h-5' />
                <h3 className='ml-3'>Ubah Password</h3>
            </div>
            <div className='flex items-center p-3 pl-5 text-gray-500 hover:bg-gray-200 cursor-pointer'>
                <IoLogOutOutline className='w-5 h-5' />
                <h3 className='ml-3'>Logout</h3>
            </div>
        </div>
    )
}
