import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { format } from 'date-fns'

import { GiAirplaneDeparture } from 'react-icons/gi'
import { SlArrowRight } from 'react-icons/sl'
import { BsChevronRight, BsCircleFill } from 'react-icons/bs'

import { useDispatch, useSelector } from 'react-redux'
import { fetchHistory } from '../features/history/historySlice'

export default function OrderListComponent() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { history } = useSelector((state) => state.history);
    const user = JSON.parse(localStorage.getItem('user'))

    const historyR = [...history].reverse();

    useEffect(() => {
        dispatch(fetchHistory(user.id))
    }, [dispatch, user.id])

    return (
        <div className='md:visible w-full rounded-xl pb-10 bg-white drop-shadow-lg md:ml-10 mb-10'>
            <h3 className='text-lg text-center font-medium mt-3 pt-10 md:pt-0'>Recent Order</h3>
            <p className='text-sm text-center text-gray-500'>List Transaksi</p>
            {
                historyR && historyR?.map((item, index) => (
                    <div key={index}>
                        <div className='w-5/6 mx-auto border relative border-gray-400 rounded-lg mt-5'>
                            <div className='flex items-center border-b border-gray-400 px-5 py-1'>
                                <BsCircleFill className='text-blue-600 mr-3 w-2 h-2' />
                                {
                                    item.isSuccess ? 
                                    <p className='text-xs'>{item.paymentMethod}</p>
                                    : 
                                    <p>Pending</p>
                                }
                                
                            </div>
                            <div className='flex justify-between relative items-center px-5 my-3'>
                                <div className='flex items-center'>
                                    <GiAirplaneDeparture className='w-6 h-6 text-blue-600' />
                                    <div className='ml-5 '>
                                        <div className='flex items-center'>
                                            <p>{item.schedule.flightDetail.departure.cityDetails.cityName}</p> 
                                            <SlArrowRight className='mx-1' /> 
                                            <p>{item.schedule.flightDetail.arrival.cityDetails.cityName}</p>
                                        </div>
                                        <p className='text-sm text-gray-400 mt-2'>Anam Air</p>
                                        <p className='text-sm'>{format(Date.parse(item.dueValid), 'EEEE, dd-MM-yyyy')}</p>
                                    </div>
                                </div>
                                {
                                    item.isSuccess ?
                                        <BsChevronRight onClick={() => navigate(`/user/order-list/detail/${user.id}/${item.id}`)} className='cursor-pointer' />
                                    : 
                                    <BsChevronRight onClick={() => navigate(`/checkout/${item?.schedule?.id}/${item?.passengers?.length}/${item?.id}`)} className='cursor-pointer' />
                                }
                            </div>
                            <div className='flex items-center border-t border-gray-400 px-5 py-1'>
                                <p className='text-xs text-gray-400'>
                                    Nomor Pesanan : 
                                    <span className='text-gray-600'> {item.bookingCode}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
