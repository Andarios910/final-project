import React, { useState } from 'react'

import ProfileDetail from './ProfileDetail';

export default function ProfileContent() {
    const [editName, setEditName] = useState(false);
    const [editEmail, setEditEmail] = useState(false);
    const [editPhoneNumber, setEditPhoneNumber] = useState(false);

    const handleClickEditName = () => {
        setEditName(!editName)
    }

    const handleClickEditEmail = () => {
        setEditEmail(!editEmail)
    }

    const handleClickEditPhoneNumber = () => {
        setEditPhoneNumber(!editPhoneNumber)
    }

    return (
        <div className=' md:visible w-full rounded-xl pb-10 bg-white drop-shadow-lg md:ml-10 mb-10'>
            <h3 className='text-lg text-center font-medium mt-3 pt-10 md:pt-0'>Profile</h3>
            <p className='text-sm text-center text-gray-500'>Anda bisa mengatur detail profil Anda</p>
            <ProfileDetail  
                handleClick={handleClickEditName} 
                edit={editName}  
                name='Name'
                value='Dwi Putra'
            />
            <ProfileDetail  
                handleClick={handleClickEditEmail} 
                edit={editEmail}  
                name='Email'
                value='dwiputra@gmail.com'
            />
            <ProfileDetail  
                handleClick={handleClickEditPhoneNumber} 
                edit={editPhoneNumber}  
                name='Nomor Telepon'
                value='0808080808'
            />
        </div>
    )
}
