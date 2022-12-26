import React, { useEffect } from 'react'
import { BsCircle } from 'react-icons/bs'
import { format } from 'date-fns'
import { parse } from 'date-fns';
import OutboundFlight from './OutboundFlight'

import { useDispatch, useSelector } from 'react-redux';
import { fetchScheduleById } from '../features/schedule/scheduleSlice';

export default function RightCard({ idTicket }) {
    const dispatch = useDispatch();

    const { data } = useSelector((state) => state.schedule)
    const schedule = data
    console.log('schedule', data)

    useEffect(() => {
        dispatch(fetchScheduleById(idTicket))
    }, [dispatch, idTicket])

    return (
        <div className='w-full md:w-2/6 h-full bg-white rounded-md mt-28'>
            <h2 className='text-center text-xl border-b py-4 font-medium text-blue-800'>Your Trip Summary</h2>
            <p className='px-3 py-3'>Outbound Flight</p>
            <div>
                <div className='flex justify-between px-3'>
                    {/* <p className=''>{format(Date.parse(schedule.departureDate), 'EE, dd MMM')}</p>
                    <p className=''>{format(Date.parse(schedule.arrivalDate), 'EE, dd MMM')}</p> */}
                </div>
                <div className='flex justify-between items-center px-3'>
                    <div>
                        {/* <p className='font-medium text-blue-800 w-20'>{format(parse(schedule.departureTime, 'HH:mm:ss', new Date()), 'hh:mm a')}</p> */}
                        {/* <p>{schedule.flightDetail.departure.airportDetails.airportCode}</p> */}
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
                        {/* <p className='font-medium text-blue-800 w-20'>{format(parse(schedule.arrivalTime, 'HH:mm:ss', new Date()), 'hh:mm a')}</p>
                        <p>{schedule.flightDetail.arrival.airportDetails.airportCode}</p> */}
                    </div>
                </div>
            </div>
            {/* <OutboundFlight detail={detail} /> */}
            <div className='flex justify-between items-center text-center text-md border-t py-4 mt-3 px-3'>
                <p className='text-left'>Total : </p>
                <p className='font-medium text-blue-800'>{schedule.netPrice}</p>
            </div>
        </div>
    )
}