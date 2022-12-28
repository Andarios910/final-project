import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookingById } from '../components/features/payment/paymentHistory'
import { fetchQrCode } from '../components/features/result/resultSlice';

export default function Ticket() {
    const { idTicket } = useParams();

    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.paymentHistory)
    const { result } = useSelector((state) => state.result)
    
    useEffect(() => {
        if (idTicket !== undefined) {
            dispatch(fetchBookingById(idTicket))
            dispatch(fetchQrCode(idTicket))
        }
    }, [dispatch, idTicket])
    return (
        <div className='w-full h-full' >
            <div className="md:max-w-[768px] h-full mx-auto bg-white rounded-xl shadow-md overflow-hidden my-5 py-5 px-12">
                <img className='' src='https://api.pegipegi.com/images/airlines/web/JT.png' alt='' />
                <div className="">   
                    <h1 className='text-lg font-bold mb-8 mt-2'>LION AIR</h1>
                    <h3 className=''>Booking Code : <span>{data.bookingCode}</span></h3>
                    {
                        data && data.schedule && 
                        <div className='mt-3 ml-1'>
                            <p>
                                {`${data.schedule.flightDetail.departure.cityDetails.cityName} - 
                                (${data.schedule.flightDetail.departure.airportDetails.airportCode})`} - 
                                {`${data.schedule.flightDetail.arrival.cityDetails.cityName} - 
                                (${data.schedule.flightDetail.arrival.airportDetails.airportCode})`}
                            </p>
                            <p>{data.schedule.departureDate}</p>
                        </div>
                    }
                    <p className='text-xl font-bold mt-3 ml-1'>---------------------------------------------------------</p>
                    <div>
                        <div className='flex text-sm font-semibold justify-between'>
                            <h3>Penumpang</h3>
                            <h3>No ID</h3>
                        </div>
                        {
                            data.passengers && data.passengers.map((item, index) => (
                                <div key={index} className='flex text-indigo-500 font-bold justify-between mt-2'>
                                    <p>{`${item.firstName} ${item.lastName}`}</p>
                                    <p>{item.id}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        <h1 className=' text-sm font-semibold mt-4'>Class/Tipe Penumpang</h1>
                        {
                            data && data.schedule &&
                            <p className='text-indigo-500 font-bold mt-2'>{data.schedule.flightClass}</p>
                        }
                    </div>

                    <div>
                        <h1 className='text-lg font-bold mt-5 text-gray-500 text-center'>Pindai Kode ini di gerbang</h1>
                        <div className='flex justify-center pb-5 items-center mt-4'>
                            <img src={`data:image/png;base64,${result}`} alt="Red dot" />
                        </div>
                        <p className='text-sm text-gray-600 text-center'>{data.bookingCode}</p>
                    </div>                     
                </div>
            </div>
        </div>
    )
}
