import React, { useEffect } from 'react'
import { BsCircle } from 'react-icons/bs'
import { format } from 'date-fns'
import { parse } from 'date-fns';

import { useDispatch, useSelector } from 'react-redux';
import { fetchScheduleById } from '../features/schedule/scheduleSlice';

export default function RightCard({ idTicket, passenger }) {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.schedule)
    console.log('data', data)

    const formatNumber = (numb) => {
        const format = numb.toString().split('').reverse().join('');
        const convert = format.match(/\d{1,3}/g);
        const rupiah = 'Rp ' + convert.join('.').split('').reverse().join('')
        return rupiah;
    }

    function toHoursAndMinutes(totalMinutes) {
        const minutes = totalMinutes % 60;
        const hours = Math.floor(totalMinutes / 60);
        return `${padTo2Digits(hours)} h : ${padTo2Digits(minutes)}m`;
    }
    
    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }

    useEffect(() => {
        if (idTicket !== undefined) {
            dispatch(fetchScheduleById(idTicket))
        }
    }, [dispatch, idTicket])

    return (
        <div className='w-full md:w-2/6 h-full bg-white rounded-md mt-28'>
            <h2 className='text-center text-xl border-b py-4 font-medium text-blue-800'>Your Trip Summary</h2>
            <p className='px-3 py-3'>Outbound Flight</p>
            {
                data && data.departureDate && data.arrivalDate &&
                <div>
                    <div className='flex justify-between px-3'>
                        <p className=''>
                            {format(Date.parse(data.departureDate), 'EE, dd MMM')}
                        </p>
                        <p className=''>
                            {format(Date.parse(data.arrivalDate), 'EE, dd MMM')}
                        </p>
                    </div>
                    <div className='flex justify-between items-center px-3'>
                        <div>
                            <p>{data.flightDetail.departure.airportDetails.airportCode}</p>
                            <p className='font-medium text-blue-800 w-20'>{format(parse(data.departureTime, 'HH:mm:ss', new Date()), 'hh:mm a')}</p>
                        </div>
                        <div className='text-center'>
                            <p>{toHoursAndMinutes(data.route.duration)}</p>
                            <div className='flex justify-between items-center'>
                                <BsCircle />
                                <div className='w-28 border-t border-black'></div>
                                <BsCircle />
                            </div>
                        </div>
                        <div className='text-right'>
                            <p>{data.flightDetail.arrival.airportDetails.airportCode}</p>
                            <p className='font-medium text-blue-800 w-20'>{format(parse(data.arrivalTime, 'HH:mm:ss', new Date()), 'hh:mm a')}</p>
                        </div>
                    </div>
                </div>
            }
            <div className='flex justify-between items-center text-center text-md border-t py-4 mt-3 px-3'>
                <p className='text-left'>Total : </p>
                {
                    data && data.netPrice && 
                    <p className='font-medium text-blue-800'>{formatNumber(Number(data.netPrice) * Number(passenger))}</p>
                }
            </div>
        </div>
    )
}