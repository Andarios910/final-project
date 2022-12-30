import React, { useEffect } from 'react'
import { GiAirplaneDeparture } from 'react-icons/gi'
import { SlArrowRight } from 'react-icons/sl'
import { BsChevronRight, BsCircleFill } from 'react-icons/bs'

import { useParams } from 'react-router'
import { format } from 'date-fns'

import { useDispatch, useSelector } from 'react-redux'
import { fetchQrCode } from '../features/result/resultSlice'
import { fetchBookingById } from '../features/payment/paymentHistory'

export default function OrderListDetailComponent() {
    const { idBooking } = useParams();
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.paymentHistory)
    const { result } = useSelector((state) => state.result)

    useEffect(() => {
        dispatch(fetchBookingById(idBooking))
        dispatch(fetchQrCode(idBooking))
    }, [dispatch, idBooking])

    return (
        <div className='md:visible w-full rounded-xl pb-10 bg-white drop-shadow-lg md:ml-10 mb-10'>
            <h3 className='text-lg text-center font-medium mt-3 pt-10 md:pt-0'>Recent Order Detail</h3>
            <p className='text-sm text-center text-gray-500'>List Transaksi</p>
                <div>
                    <div className='w-5/6 mx-auto border relative border-gray-400 rounded-lg mt-5'>
                        <div className='flex items-center border-b border-gray-400 px-5 py-1'>
                            <BsCircleFill className='text-blue-600 mr-3 w-2 h-2' />
                            {
                                data && data.paymentMethod &&  
                                <p className='text-xs'>{data.paymentMethod}</p>
                            }
                        </div>
                        <div className='flex justify-between relative items-center px-5 my-3'>
                            <div className='flex items-center'>
                                <GiAirplaneDeparture className='w-6 h-6 text-blue-600' />
                                <div className='ml-5 '>
                                    <div className='flex items-center'>
                                        {
                                            data && data.schedule && data.schedule.flightDetail && data.schedule.flightDetail.departure
                                            && data?.schedule?.flightDetail?.departure?.cityDetails && 
                                            <p>{data?.schedule?.flightDetail?.departure?.cityDetails?.cityName}</p> 
                                        }
                                        <SlArrowRight className='mx-1' />
                                        {
                                            data && data.schedule && data.schedule.flightDetail && data.schedule.flightDetail.arrival
                                            && data?.schedule?.flightDetail?.arrival?.cityDetails && 
                                            <p>{data?.schedule?.flightDetail?.arrival?.cityDetails?.cityName}</p>
                                        }
                                    </div>
                                    <p className='text-sm text-gray-400 mt-2'>Anam Air</p>
                                    {
                                        data && data.dueValid && 
                                        <p className='text-sm'>{format(Date.parse(data?.dueValid), 'EEEE, dd-MM-yyyy')}</p>
                                    }
                                    <p className='my-2 font-semibold text-sm'>Penumpang :</p>
                                    {
                                        data?.passengers && data?.passengers.map((item, i) => (
                                            <p key={i} className='text-sm'>{`- ${item?.firstName} ${item?.lastName}`}</p>
                                        ))
                                    }
                                </div>
                            </div>
                            <BsChevronRight className='cursor-pointer' />
                        </div>
                        <div className='flex items-center border-t border-gray-400 px-5 py-1'>
                            {
                                data && 
                                <p className='text-xs text-gray-400'>
                                    Nomor Pesanan : 
                                <span className='text-gray-600'> {data?.bookingCode}</span>
                            </p>
                            }
                        </div>
                    </div>
                    <div className='w-5/6 h-full mx-auto my-5 text-center rounded-lg border border-gray-400'>
                        {
                            data && 
                            <p className='text-xs pt-2.5 text-gray-400'>
                                Detail Pesanan : 
                            <span className='text-gray-600'> {data?.bookingCode}</span>
                        </p>
                        }
                        <div className='flex justify-center pb-5 items-center'>
                            <img className='mt-5' src={`data:image/png;base64,${result}`} alt="QR CODE" />
                        </div>
                    </div>
                </div>
        </div>
    )
}
