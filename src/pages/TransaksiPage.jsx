import React from 'react'
import { BsCircle } from 'react-icons/bs'

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
                <div className='w-2/6 bg-white rounded-md mt-10'>
                    <h2 className='text-center text-xl border-b py-2'>Your Trip Summary</h2>
                    <p className='px-5 py-3'>Outbound Flight</p>
                    <div className='px-5 py-2 flex justify-between'>
                        <p>Sat, 26 Nov</p>
                        <p>Sat, 26 Nov</p>
                    </div>
                    <div className='flex justify-between items-center px-5'>
                        <div className=''>
                            <p>18.20</p>
                            <p>JKT</p>
                        </div>
                        <div>
                            <p className='text-center'>8h 50m</p>
                            <div className='flex items-center'>
                                <BsCircle/>
                                <hr className='bg-blue-700 w-32 font-semibold'/>
                                <BsCircle/>
                            </div>  
                        </div>
                        <div className='text-right'>
                            <p>18.20</p>
                            <p>JKT</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
