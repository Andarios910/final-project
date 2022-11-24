import React from 'react'
import { FaUser } from 'react-icons/fa'

export default function ProfilePages() {
    return (
        <div className='md:flex max-w-[1024px] mx-auto mt-10 px-20'>
            <div className='w-full md:w-96 rounded-xl pb-10 bg-white drop-shadow-lg'>
                <div className='text-center shadow-neutral-400 px-16 md:mt-5'>
                    <img 
                        src='https://tse4.mm.bing.net/th?id=OIP.mDv826UG65YB8vFcW1SB3QHaHa&pid=Api&P=0' 
                        alt='profile'
                        className='w-32 rounded-full' 
                    />
                    <p className='text-sm text-gray-500'>Selamat Datang</p>
                    <h3 className='text-lg font-medium'>Lazy Asian</h3>
                </div>
                <div className='invisible md:visible flex items-center p-3 pl-5 mt-10 text-gray-500 hover:bg-gray-200'>
                    <FaUser className='h-5' />
                    <h3 className='ml-3'>Profile</h3>
                </div>
                <div className='flex items-center p-3 pl-5 text-gray-500 hover:bg-gray-200'>
                    <FaUser className='h-5' />
                    <h3 className='ml-3'>Pemesanan Saya</h3>
                </div>
                <div className='flex items-center p-3 pl-5 text-gray-500 hover:bg-gray-200'>
                    <FaUser className='h-5' />
                    <h3 className='ml-3'>Ubah Email</h3>
                </div>
                <div className='flex items-center p-3 pl-5 text-gray-500 hover:bg-gray-200'>
                    <FaUser className='h-5' />
                    <h3 className='ml-3'>Ubah Password</h3>
                </div>
            </div>

            <div className='w-full rounded-xl pb-10 bg-white drop-shadow-lg ml-10'>
                <h3 className='text-lg text-center font-medium mt-5'>Profile</h3>
                <p className='text-sm text-center text-gray-500'>Anda bisa mengatur detail profil Anda</p>
                <div className='flex justify-between w-3/4 mx-auto border border-gray-400 rounded-lg mt-5 p-5'>
                    <div>
                        <p className='mb-2 text-sm text-gray-500'>Nama</p>
                        <h3>Lazy Asian</h3>
                    </div>
                    <p className='text-blue-600 hover:text-blue-800 cursor-pointer'>Edit</p>
                </div>
                <div className='flex justify-between w-3/4 mx-auto border border-gray-400 rounded-lg mt-5 p-5'>
                    <div>
                        <p className='mb-2 text-sm text-gray-500'>Email</p>
                        <h3>lazyasian910@gmail.com</h3>
                    </div>
                    <p className='text-blue-600 hover:text-blue-800 cursor-pointer'>Edit</p>
                </div>
                <div className='flex justify-between w-3/4 mx-auto border border-gray-400 rounded-lg mt-5 p-5'>
                    <div>
                        <p className='mb-2 text-sm text-gray-500'>Nomor Telepon</p>
                        <h3>0808080808</h3>
                    </div>
                    <p className='text-blue-600 hover:text-blue-800 cursor-pointer'>Edit</p>
                </div>

            </div>
        </div>
    )
}
