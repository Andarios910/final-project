import React, { useState } from 'react'

import ProfileDetail from './ProfileDetail';

import { useDispatch } from 'react-redux'

export default function ProfileContent() {
    const dispatch = useDispatch();
    const [editFirstName, setEditFirstName] = useState(false);
    const [editLastName, setEditLastName] = useState(false);
    const [editEmail, setEditEmail] = useState(false);
    const [editPhoneNumber, setEditPhoneNumber] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    console.log('fistName', firstName)
    console.log('lastName', lastName)

    const handleClickEditFirstName = () => {
        setEditFirstName(!editFirstName)
    }

    const handleClickEditLastName = () => {
        setEditLastName(!editLastName)
    }

    const handleClickEditEmail = () => {
        setEditEmail(!editEmail)
    }

    const handleClickEditPhoneNumber = () => {
        setEditPhoneNumber(!editPhoneNumber)
    }

    const handleSubmit = () => {
        dispatch()
    }

    const user = JSON.parse(localStorage.getItem('user'))

    return (
        <div className=' md:visible w-full rounded-xl pb-10 bg-white drop-shadow-lg md:ml-10 mb-10'>
            <h3 className='text-lg text-center font-medium mt-3 pt-10 md:pt-0'>Profile</h3>
            <p className='text-sm text-center text-gray-500'>Anda bisa mengatur detail profil Anda</p>
            <ProfileDetail  
                handleClick={handleClickEditFirstName} 
                edit={editFirstName}  
                name='firstName'
                value={user.firstName}
                setState={setFirstName}
                handleSubmit={handleSubmit}
            />
            <ProfileDetail  
                handleClick={handleClickEditLastName} 
                edit={editLastName}  
                name='lastName'
                value={user.lastName}
                setState={setLastName}
            />
            <ProfileDetail  
                handleClick={handleClickEditEmail} 
                edit={editEmail}  
                name='Email'
                value={user.email}
            />
            <ProfileDetail  
                handleClick={handleClickEditPhoneNumber} 
                edit={editPhoneNumber}  
                name='Nomor Telepon'
                value=''
            />
        </div>
    )
}
