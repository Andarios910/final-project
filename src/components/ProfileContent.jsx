import React from 'react'

export default function ProfileContent() {
    return (
        <div className=' md:visible w-full rounded-xl pb-10 bg-white drop-shadow-lg md:ml-10 mb-10'>
            <h3 className='text-lg text-center font-medium mt-3 pt-10 md:pt-0'>Profile</h3>
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
    )
}
