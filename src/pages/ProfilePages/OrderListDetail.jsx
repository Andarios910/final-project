import React from 'react'

import SideProfile from '../../components/profileComponent/SideProfile'
import OrderListDetailComponent from '../../components/profileComponent/OrderListDetailComponent'
import NavbarProfile from '../../components/NavbarProfile'

export default function OrderListDetail() {
    return (
        <>  
            <NavbarProfile />
            <div className='h-full bg-[#e9ebee] md:bg-[#f6f7f8] pt-10'>
                <div className='md:flex md:max-w-[1024px] mx-auto md:px-20 mt-16'>
                    <SideProfile />
                    <OrderListDetailComponent />
                </div>
            </div>
        </>
    )
}