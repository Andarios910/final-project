import React, { useState } from 'react'
import OutboundFlight from '../components/TransaksiComponent/OutboundFlight'

export default function TransaksiPage() {
    const [titlePassenger, setTitlePassenger] = useState('Title')
    const [titleContact, setTitleContanct] = useState('Title')
    const [bagasi, setBagasi] = useState('Bagasi')

    console.log('titlePassenger', titlePassenger)
    console.log('titleContact', titleContact)
    console.log('bagasi', bagasi)

    return (
        <div className='h-full bg-[#e9ebee]'>
            <h1 className='font-semibold text-2xl text-center'>Your Booking</h1>
            <p className='text-center text-gray-600'>Fill in your details and review your booking.</p>  
            <div className='md:flex md:justify-between max-w-[1024px] mx-auto mt-5 pb-10 px-5 md:px-0'>
                <div className='w-full md:w-4/6 mr-10'>
                    <div className='relative'>
                        <h2 className='text-xl font-medium'>Passenger Details</h2>
                        <div className='bg-white mt-5 rounded-md p-5'>
                            <form>
                                <label className='text-sm ml-1'>Title</label>
                                <select 
                                    selected value={titlePassenger}
                                    onChange={(e) => setTitlePassenger(e.target.value)}
                                    id="title" 
                                    className="w-1/4 mt-2 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                >
                                    <option value="Mr">Mr</option>
                                    <option value="Mrs">Mrs</option>
                                    <option value="Ms">Ms</option>
                                </select>
                                <div className="flex flex-wrap -mx-3 mb-6 mt-5">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <input 
                                            className="appearance-none block w-full bg-white border border-gray-300 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" 
                                            id="grid-first-name" 
                                            type="text" 
                                            placeholder="First Name / Middle Name" />
                                        {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <input 
                                            className="appearance-none block w-full bg-white border border-gray-300 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                            id="grid-last-name" 
                                            type="text" 
                                            placeholder="Last Name" />
                                    </div>
                                </div>
                                {/* <label className='text-sm ml-1'>Bagasi</label> */}
                                <select 
                                    value={bagasi}
                                    onChange={(e) => setBagasi(e.target.value)}
                                    id="bagasi" 
                                    className="w-1/2 mt-2 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                                    <option value="Mr">Mr</option>
                                    <option value="Mrs">Mrs</option>
                                    <option value="Ms">Ms</option>
                                </select>
                            </form>
                        </div>
                        <h2 className='text-xl font-medium mt-10'>Contact Details</h2>
                        <div className='bg-white mt-5 rounded-md p-5'>
                            <form>
                                <label className='text-sm ml-1'>Title</label>
                                <select  
                                    value={titleContact}
                                    onChange={(e) => setTitleContanct(e.target.value)}
                                    id="title" 
                                    className="w-1/4 mt-2 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                                    {/* <option selected>Title</option> */}
                                    <option value="Mr">Mr</option>
                                    <option value="Mrs">Mrs</option>
                                    <option value="Ms">Ms</option>
                                </select>
                                <div className="flex flex-wrap -mx-3 mb-6 mt-5">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <input 
                                            className="appearance-none block w-full bg-white border border-gray-300 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" 
                                            id="grid-first-name" 
                                            type="text" 
                                            placeholder="First Name / Middle Name" />
                                        {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <input 
                                            className="appearance-none block w-full bg-white border border-gray-300 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                            id="grid-last-name" 
                                            type="text" 
                                            placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6 mt-5">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <input 
                                            className="appearance-none block w-full bg-white border border-gray-300 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" 
                                            id="grid-first-name" 
                                            type="text" 
                                            placeholder="No. Telepon" />
                                        {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <input 
                                            className="appearance-none block w-full bg-white border border-gray-300 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                            id="grid-last-name" 
                                            type="text" 
                                            placeholder="Email" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-2/6 h-full bg-white rounded-md mt-10'>
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
