import React, { useState, useEffect } from 'react'
import ProfileDetail from './ProfileDetail';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../features/user/userSlice';

export default function ProfileContent() {
    const user = JSON.parse(localStorage.getItem('user'))
    const dispatch = useDispatch();
    const { dataUser } = useSelector((state) => state.user)

    useEffect(() => {
        dispatch(fetchUser(user.id))
    }, [dispatch, user.id])

    return (
        <div className=' md:visible w-full rounded-xl pb-10 bg-white drop-shadow-lg md:ml-10 mb-10'>
            <h3 className='text-lg text-center font-medium mt-3 pt-10 md:pt-0'>Profile</h3>
            <p className='text-sm text-center text-gray-500'>Anda bisa mengatur detail profil Anda</p>
            <div className='w-3/4 mx-auto border border-gray-400 rounded-lg mt-5 p-5'>
                <div className='flex justify-between '>
                    <div>
                        <p className='mb-2 text-sm text-gray-500'>Username</p>
                        <h4 className='mb-3'>{`${user.firstName} ${user.lastName}`}</h4>
                    </div>
                </div>
            </div>
            <div className='w-3/4 mx-auto border border-gray-400 rounded-lg mt-5 p-5'>
                <div className='flex justify-between '>
                    <div>
                        <p className='mb-2 text-sm text-gray-500'>Email</p>
                        <h4 className='mb-3'>{dataUser.email}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
