import React from 'react'

import SideProfile from '../../components/profileComponent/SideProfile'
import OrderListDetailComponent from '../../components/profileComponent/OrderListDetailComponent'

export default function OrderListDetail() {
    return (
        <div className='h-screen bg-[#e9ebee] md:bg-[#f6f7f8] pt-10'>
            <div className='md:flex md:max-w-[1024px] mx-auto md:px-20 '>
                <SideProfile />
                <OrderListDetailComponent />
            </div>
        </div>
    )
}
