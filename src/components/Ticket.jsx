import React from 'react'
import { MdQrCode2 } from 'react-icons/md'

export default function component() {
    return (
        <div className='w-full h-full' >
            <div className="md:max-w-[768px] h-full mx-auto bg-white rounded-xl shadow-md overflow-hidden my-5 py-5 px-12">
                <img className='' src='https://api.pegipegi.com/images/airlines/web/JT.png' alt='' />
                <div className="">   
                    <h1 className='text-lg font-bold mb-8 mt-2'>LION AIR</h1>
                    <h3 className=''>Order ID : <span>YFE45RDE</span></h3>
                    <div className='mt-3 ml-1'>
                        <p>Jakarta (CGK) - SURABAYA (SUB)</p>
                        <p>Jum'at, 30 Des 2022</p>
                    </div>
                    <p className='text-xl font-bold mt-3 ml-1'>---------------------------------------------------------</p>
                    <div>
                        <div className='flex text-sm font-semibold justify-between'>
                            <h3>Penumpang</h3>
                            <h3>No ID</h3>
                        </div>
                        <div className='flex text-indigo-500 font-bold justify-between mt-2'>
                            <p>NAMA PENUMPANG</p>
                            <p>ID PENUMPANG</p>
                        </div>
                    </div>
                    <div>
                        <h1 className=' text-sm font-semibold mt-4'>Class/Tipe Penumpang</h1>
                        <p className='text-indigo-500 font-bold mt-2'>ECONOMIC</p>
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
