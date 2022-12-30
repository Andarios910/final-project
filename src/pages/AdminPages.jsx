import React, { useEffect } from 'react'
import NavbarProfile from '../components/NavbarProfile'

import anamLogo from '../utility/anamair.png'

import { format } from 'date-fns'
import { parse } from 'date-fns';

import { useDispatch, useSelector } from 'react-redux'
import { fetchSchedule } from '../components/features/schedule/scheduleSlice'

export default function AdminPages() {
    const dispatch = useDispatch();
    const { allData } = useSelector((state) => state.schedule)

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
        dispatch(fetchSchedule())
    }, [dispatch])

    return (
        <div>
            <NavbarProfile />
            <div className='max-w-[1024px] mx-auto h-screen mt-32'>
                <div className='text-black z-[2] py-5'>
                    <h2 className='text-5xl font-bold text-center mb-10'>Anam Air Admin Pages</h2>
                    {
                        allData && allData.map((item, index) => (
                            <div key={index} className="mb-5 ring ring-gray-200 hover:ring-blue-400 bg-white rounded hover:shadow-lg cursor-pointer">
                                <div className="flex flex-wrap items-center py-6">
                                    <div className="px-2">
                                        <img
                                            className="h-12 w-42 object-cover rounded-xl "
                                            src={anamLogo}
                                            alt="" />
                                        <div className="font-bold text-center text-xl">Anam Air</div>
                                    </div>
                                    <div className="flex flex-wrap justify-start ">
                                        <div className="m-6 flex-col">
                                            {format(parse(item.departureTime, 'HH:mm:ss', new Date()), 'hh:mm a')}
                                            <div className="bandara">{`${item.flightDetail.departure.cityDetails.cityName}(${item.flightDetail.departure.airportDetails.airportCode})`}</div>
                                        </div>
                                        <div className="m-6">
                                            {format(parse(item.arrivalTime, 'HH:mm:ss', new Date()), 'hh:mm a')}
                                            <div className="bandara">{`${item.flightDetail.arrival.cityDetails.cityName}(${item.flightDetail.arrival.airportDetails.airportCode})`}</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap justify-start">
                                        <div className="m-6 gap-8">
                                            {toHoursAndMinutes(item.route.duration)}<div className="bandara flex flex-wrap">Langsung</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap justify-start">
                                        <div className="m-6">
                                            <div className="relative flex flex-col items-center group">
                                                <div className="text-4xl text-amber-400">
                                                    <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    version="1.1"
                                                    viewBox="0 0 16 16"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15 4h-4v-1c0-0.55-0.45-1-1-1h-4c-0.55 0-1 0.45-1 1v1h-4c-0.55 0-1 0.45-1 1v9c0 0.55 0.45 1 1 1h14c0.55 0 1-0.45 1-1v-9c0-0.55-0.45-1-1-1zM6 3.002c0.001-0.001 0.001-0.001 0.002-0.002h3.996c0.001 0.001 0.001 0.001 0.002 0.002v0.998h-4v-0.998zM15 8h-2v1.5c0 0.275-0.225 0.5-0.5 0.5h-1c-0.275 0-0.5-0.225-0.5-0.5v-1.5h-6v1.5c0 0.275-0.225 0.5-0.5 0.5h-1c-0.275 0-0.5-0.225-0.5-0.5v-1.5h-2v-1h14v1z"></path>
                                                    </svg>
                                                </div>
                                                <div className="absolute bottom-0 flex-col items-center hidden mb-6 group-hover:flex">
                                                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
                                                    Max Bagasi 20 Kg
                                                    </span>
                                                    <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap justify-start gap-4">
                                        <div className="m-6">
                                            <div className="bandara text-2xl text-blue-600 font-bold flex flex-start text-shadow-lg">
                                                {formatNumber(item.netPrice)}
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="flex flex-wrap justify-start gap-2 px-2">
                                        <button 
                                        onClick={() => navigate(`/transaksi/${item.id}/${pass}`)}
                                        className="text-white bg-blue-600 px-8 py-2 font-bold rounded hover:bg-blue-500 "
                                        >
                                            Choose
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                        ))
                        }
                </div>
            </div>
        </div>
    )
}
