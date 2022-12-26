import React from 'react'
import { BsCircle } from 'react-icons/bs'
import { format } from 'date-fns'
import { parse } from 'date-fns';
import OutboundFlight from './OutboundFlight'

export default function RightCard({ detail }) {

    if (detail) {
        return (
            <div className='w-full md:w-2/6 h-full bg-white rounded-md mt-28'>
                <h2 className='text-center text-xl border-b py-4 font-medium text-blue-800'>Your Trip Summary</h2>
                <p className='px-3 py-3'>Outbound Flight</p>
                <div>
                    <div className='flex justify-between px-3'>
                        <p className=''>{format(Date.parse(detail.departureDate), 'EE, dd MMM')}</p>
                        <p className=''>{format(Date.parse(detail.arrivalDate), 'EE, dd MMM')}</p>
                    </div>
                    <div className='flex justify-between items-center px-3'>
                        <div>
                            <p className='font-medium text-blue-800 w-20'>{format(parse(detail.departureTime, 'HH:mm:ss', new Date()), 'hh:mm a')}</p>
                            <p>{detail.flightDetail.departure.airportDetails.airportCode}</p>
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
                            <p className='font-medium text-blue-800 w-20'>{format(parse(detail.arrivalTime, 'HH:mm:ss', new Date()), 'hh:mm a')}</p>
                            <p>{detail.flightDetail.arrival.airportDetails.airportCode}</p>
                        </div>
                    </div>
                </div>
                {/* <OutboundFlight detail={detail} /> */}
                <div className='flex justify-between items-center text-center text-md border-t py-4 mt-3 px-3'>
                    <p className='text-left'>Total : </p>
                    <p className='font-medium text-blue-800'>11.618.800.00 IDR</p>
                </div>
            </div>
        )
    }
    
}
