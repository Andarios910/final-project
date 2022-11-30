import React from 'react'
import { BsCircle } from 'react-icons/bs'

export default function OutboundFlight() {
    return (
        <>
            <div className='flex justify-between px-5'>
                <p className=''>Wed, 30 Nov</p>
                <p className=''>Wed, 30 Nov</p>
            </div>
            <div className='flex justify-between items-center px-5'>
                <div className='border-2'>
                    <p>18.20</p>
                    <p>CGK</p>
                </div>
                <div className='text-center'>
                    <p>8h 50m</p>
                    <div className='flex justify-between items-center'>
                        <BsCircle />
                        <div className='w-28 border-t border-black'></div>
                        <BsCircle />
                    </div>
                </div>
                <div className='text-right'>
                    <p>23.10</p>
                    <p>DOH</p>
                </div>
            </div>
        </>
    )
}
