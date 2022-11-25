import React from 'react'
import SideProfile from '../../components/profileComponent/SideProfile'
import ProfileContent from '../../components/profileComponent/ProfileContent'


export default function ProfilePages() {
    return (
        <div className='h-full bg-[#e9ebee] md:bg-[#f6f7f8] pt-10'>
            <div className='md:flex md:max-w-[1024px] mx-auto md:px-20 '>
                <SideProfile />
                <ProfileContent />
            </div>
        </div>
    )
}
