import React from 'react'

import SideProfile from '../../components/profileComponent/SideProfile'
import OrderListComponent from '../../components/profileComponent/OrderListComponent'
import NavbarProfile from '../../components/NavbarProfile'
import Footer from '../../components/Footer'

export default function OrderList() {
    return (
        <>  
            <NavbarProfile />
            <div className='h-full bg-[#e9ebee] md:bg-[#f6f7f8] pt-10'>
                <div className='md:flex md:max-w-[1024px] mx-auto md:px-20 mt-16'>
                    <SideProfile />
                    <OrderListComponent />
                </div>
            </div>
            <Footer />
        </>
    )
}
