import React from 'react'

export default function TransaksiPage() {
    return (
        <div className='h-full bg-[#e9ebee]'>
            <h1 className='font-semibold text-2xl text-center'>Your Booking</h1>
            <p className='text-center text-gray-600'>Fill in your details and review your booking.</p>  
            <div className='flex justify-between max-w-[1024px] mx-auto border border-black mt-5'>
                <div className='w-4/6 mr-10'>
                    <div>
                        <h2 className='text-xl font-medium'>Contact Details</h2>
                        <div className='bg-white h-64 mt-5 rounded-md'>

                        </div>
                    </div>
                </div>
                <div className='w-2/6 bg-white rounded-md'>
                    
                </div>
            </div>
        </div>
    )
}
