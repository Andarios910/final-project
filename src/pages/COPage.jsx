import React from 'react'
import Checkout from "../components/checkout"

export default function TransaksiPage() {
    return (
        <div className='h-full w-full bg-[#e9ebee] '>
            {/* <h1 className='font-semibold text-2xl text-center'>Your Booking</h1>
            <p className='text-center text-gray-600'>Fill in your details and review your booking.</p>   */}
            <div className='md:flex md:justify-between max-w-[1024px] mx-auto mt-5 pb-10 px-5 md:px-0'>
               <Checkout />
            </div>
            {/* <div className='w-40 text-center text-white bg-cyan-600 hover:bg-cyan-700 py-3 px-8 rounded-2xl mx-auto'>
                    Continue
            </div> */}
        </div>
    )
}