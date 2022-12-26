import React from 'react'
import { MdQrCode2 } from 'react-icons/md'

export default function component() {
    return (
            <div className='w-full h-full bg-[#bdbdbd]' >
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-5">
                    {/* <div className='flex px-5'>
                        <button><AiOutlineArrowLeft /></button>
                        <h1 className='text-xl font-bold mx-2'>Payment</h1>
                    </div>
                    <h1 className='px-12 mx-6'>Order ID: <span>YFE45RDE</span></h1> */}
                    <img className='mt-5 ml-12' src='https://api.pegipegi.com/images/airlines/web/JT.png' alt='' />

                    <div className="p-8 mx-10">   
                        <h1 className='text-lg font-bold'>LION AIR</h1>
                        <h1 className=''>Order ID : <span>YFE45RDE</span></h1>
                        <div className='mt-3 ml-1'>
                            <p>Jakarta (CGK) - SURABAYA (SUB)</p>
                            <p>Jum'at, 30 Des 2022</p>
                        </div>
                        <p className='text-xl font-bold mt-3 ml-1'>----------------------------------------------------------------</p>
                        <div>
                            <div className='flex text-sm font-semibold justify-between'>
                                <h1>Penumpang</h1>
                                <h1>No ID</h1>
                            </div>
                            <div className='flex  text-indigo-500 font-bold justify-between'>
                                <p>NAMA PENUMPANG</p>
                                <p>ID PENUMPANG</p>
                            </div>
                        </div>
                        <div>
                            <h1 className=' text-sm font-semibold mt-4'>Class/Tipe Penumpang</h1>
                            <p className='text-indigo-500 font-bold'>ECONOMIC</p>
                        </div>

                        <div>
                            <h1 className='text-lg font-bold mt-5 text-gray-500 text-center'>Pindai Kode ini di gerbang</h1>
                            <div className='flex justify-center pb-5 items-center mt-4'>
                                <MdQrCode2 className='w-32 h-32'/>
                            </div>
                            <p className='text-sm text-gray-600 text-center'> 11AUI118A57F</p>
                        </div>                     
                    </div>
                </div>
            </div>
    )
}
