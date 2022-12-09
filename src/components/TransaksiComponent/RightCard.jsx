import React from 'react'
import OutboundFlight from './OutboundFlight'

export default function RightCard() {
    return (
        <div className='w-full md:w-2/6 h-full bg-white rounded-md mt-10'>
            <h2 className='text-center text-xl border-b py-4 font-medium text-blue-800'>Your Trip Summary</h2>
            <p className='px-5 py-3'>Outbound Flight</p>
            <OutboundFlight />
            <p className='px-5 py-3'>Outbound Flight</p>
            <OutboundFlight />
            <div className='flex justify-between items-center text-center text-md border-t py-4 mt-3 px-5'>
                <h2 className='text-left'>Total trip price: <br/> (1 Adult)</h2>
                <h2 className='font-medium text-blue-800'>11.618.800.00 IDR</h2>
            </div>
        </div>
    )
}
