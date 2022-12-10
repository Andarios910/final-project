import React from 'react'
import { GiAirplaneDeparture } from 'react-icons/gi'
import { SlArrowRight } from 'react-icons/sl'
import { BsChevronRight, BsCircleFill } from 'react-icons/bs'
import { AiOutlineQrcode } from 'react-icons/ai'

export default function OrderListDetailComponent() {
    return (
        <div className='md:visible w-full rounded-xl pb-10 bg-white drop-shadow-lg md:ml-10 mb-10'>
            <h3 className='text-lg text-center font-medium mt-3 pt-10 md:pt-0'>Recent Order Detail</h3>
            <p className='text-sm text-center text-gray-500'>List Transaksi</p>
            <div>
                <div className='w-5/6 mx-auto border relative border-gray-400 rounded-lg mt-5'>
                    <div className='flex items-center border-b border-gray-400 px-5 py-1'>
                        <BsCircleFill className='text-blue-600 mr-3 w-2 h-2' />
                        <p className='text-xs'>MENUNGGU METODE PEMBAYARAN</p>
                    </div>
                    <div className='flex justify-between relative items-center px-5 my-3'>
                        <div className='flex items-center'>
                            <GiAirplaneDeparture className='w-6 h-6 text-blue-600' />
                            <div className='ml-5 '>
                                <div className='flex items-center'>
                                    <p>Jakarta</p> 
                                    <SlArrowRight className='mx-1' />
                                    <p>Bali / Denpasar</p>
                                </div>
                                <p className='text-sm text-gray-400 mt-2'>Super Air Jet</p>
                                <p className='text-sm'>Kamis, 24 Nov 2022</p>
                            </div>
                        </div>
                        <BsChevronRight className='cursor-pointer' />
                    </div>
                    <div className='flex items-center border-t border-gray-400 px-5 py-1'>
                        <p className='text-xs text-gray-400'>
                            Nomor Pesanan : 
                            <span className='text-gray-600'> 11AUI118A57F</span>
                        </p>
                    </div>
                </div>
                <div className='w-5/6 h-full mx-auto my-5 text-center rounded-lg border border-gray-400'>
                    <p className='text-xs pt-2.5 text-gray-400'>
                        Detail Pesanan : 
                        <span className='text-gray-600'> 11AUI118A57F</span>
                    </p>
                    <div className='flex justify-center pb-5 items-center'>
                        <AiOutlineQrcode className='w-32 h-32'/>
                    </div>
                </div>
            </div>
        </div>
    )
}