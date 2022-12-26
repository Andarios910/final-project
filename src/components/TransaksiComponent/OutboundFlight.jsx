import React, { useEffect } from 'react'
import { BsCircle } from 'react-icons/bs'
import { format } from 'date-fns'
import { parse } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { fetchScheduleById } from '../../components/features/schedule/scheduleSlice';

export default function OutboundFlight({ detail }) {
    // const dispatch = useDispatch();
    // const { detail } = useSelector((state) => state.schedule)
    // console.log('out', detail)

    console.log(detail)
    // console.log(detail)

    // useEffect(() => {
    //     dispatch(fetchScheduleById(idTicket))
    // }, [dispatch, idTicket])

    return (
        <>
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
        </>
    )
}
