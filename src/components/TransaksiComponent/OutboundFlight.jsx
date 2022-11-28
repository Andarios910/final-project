import React from 'react'
import { BsCircle } from 'react-icons/bs'

export default function OutboundFlight() {
    return (
        <>
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
        </>
    )
}
