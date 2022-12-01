import React from 'react'

import SideProfile from '../../components/profileComponent/SideProfile'
import OrderListComponent from '../../components/profileComponent/OrderListComponent'

export default function OrderList() {
    return (
        <div className='h-screen bg-[#e9ebee] md:bg-[#f6f7f8] pt-10'>
            <div className='md:flex md:max-w-[1024px] mx-auto md:px-20 '>
                <SideProfile />
                <OrderListComponent />
            </div>
        </div>
    )
}
