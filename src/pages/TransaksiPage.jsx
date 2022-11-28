import React from 'react'
import OutboundFlight from '../components/TransaksiComponent/OutboundFlight'

export default function TransaksiPage() {
    return (
        <div className='h-full bg-[#e9ebee]'>
            <h1 className='font-semibold text-2xl text-center'>Your Booking</h1>
            <p className='text-center text-gray-600'>Fill in your details and review your booking.</p>  
            <div className='md:flex md:justify-between max-w-[1024px] mx-auto border border-black mt-5 pb-10 px-5 md:px-0'>
                <div className='w-full md:w-4/6 mr-10'>
                    <div>
                        <h2 className='text-xl font-medium'>Contact Details</h2>
                        <div className='bg-white h-64 mt-5 rounded-md'>

                        </div>
                    </div>
                </div>
                <div className='w-full md:w-2/6 bg-white rounded-md mt-10'>
                    <h2 className='text-center text-xl border-b py-2'>Your Trip Summary</h2>
                    <p className='px-5 py-3'>Outbound Flight</p>
                    <OutboundFlight />
                    <p className='px-5 py-3'>Outbound Flight</p>
                    <OutboundFlight />
                    <div className='flex justify-between items-center text-center text-md border-t py-2 mt-3 px-5'>
                        <h2 className='text-left'>Total trip price: <br/> (1 Adult)</h2>
                        <h2 className=''>11.618.800.00 IDR</h2>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
