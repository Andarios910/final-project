import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { handlePayment } from '../components/features/payment/paymentSlice';
import { format } from 'date-fns'

import {AiOutlineArrowLeft} from 'react-icons/ai'
import { MdPayment } from 'react-icons/md'
import anamLogo from '../utility/anamair.png'

import NavbarProfile from '../components/NavbarProfile';
import { fetchBookingById } from '../components/features/payment/paymentHistory';

export default function PaymentPage() {
    const navigate = useNavigate();
    const { id, pass, payment }  = useParams();
    const dispatch = useDispatch();

    const { data } = useSelector((state) => state.paymentHistory)

    const handleBooking = () => {
        dispatch(handlePayment({id, payment}))
        navigate(`/copage/${id}`)
    }

    const formatNumber = (numb) => {
        const format = numb.toString().split('').reverse().join('');
        const convert = format.match(/\d{1,3}/g);
        const rupiah = 'Rp ' + convert.join('.').split('').reverse().join('')
        return rupiah;
    }

    useEffect(() => {
        dispatch(fetchBookingById(id))
    }, [dispatch, id])

    return (
        <>
            <NavbarProfile />
            <div className='w-full h-full mt-32'>
                <div className="md:max-w-[768px] h-full mx-auto bg-white rounded-xl shadow-md overflow-hidden my-5 py-5 px-12">
                    <div className='flex items-center'>
                        <button><AiOutlineArrowLeft /></button>
                        <h1 className='text-xl font-bold mx-2'>Payment</h1>
                    </div>
                    <h3 className='my-10'>Order ID: <span>{id}</span></h3>
                    <div className="divide-y divide-slate-300">
                        <div className='mb-3'>
                            <a href='/' className="uppercase tracking-wide text-sm text-succes-900 font-semibold">Pesanan Anda</a> 
                            <h1 className='text-lg font-bold'>Detail Perjalanan</h1>
                            <div className='flex items-center'>
                                <img className='w-42 h-12 mt-2' alt='' src={anamLogo}/>
                                {
                                    data && data.schedule && 
                                    <div className='mt-3 ml-2 '>
                                        <p>{`${data.schedule.flightDetail.departure.cityDetails.cityName}(${data.schedule.flightDetail.departure.airportDetails.airportCode})`} - {`${data.schedule.flightDetail.arrival.cityDetails.cityName}(${data.schedule.flightDetail.arrival.airportDetails.airportCode})`}</p>
                                        <p>{format(Date.parse(data.schedule.departureDate), 'EE, dd MMM yyyy')}</p>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='mb-3'>
                            <h1 className='text-lg font-bold mt-2'>Metode Pembayaran</h1>
                            <div className='flex mt-3 items-center'>
                                <MdPayment className='h-10 w-12' />
                                <p className='ml-3'>Pembayaran melalui {payment}</p>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <h1 className='text-lg font-bold mt-2'>Kode Pembayaran</h1>
                            <div className=''>
                                <p className='text-lg font-semibold '>{data.paymentCode}</p>
                            </div>
                        </div>

                        <div className=''>
                            <h1 className='text-lg font-bold mt-2'>Total Pesanan</h1>
                            <div className=''>
                                {
                                    data && data.schedule && 
                                    <p className='text-ms mt-2 font-semibold '>Anam Air {data.schedule.flightDetail.departure.airportDetails.airportCode} - {data.schedule.flightDetail.arrival.airportDetails.airportCode}</p>
                                }
                                <div className='flex mt-3 justify-between'>
                                    <h3> Dewasa <span>(x{pass})</span></h3>
                                    {
                                        data && data.finalPrice && 
                                        <h3 className=''>{formatNumber(data.finalPrice)}</h3>
                                    }
                                </div>
                            </div>
                        </div>
                        
                        <a href="/" className="block mt-5  text-lg leading-tight font-medium  text-indigo-500 hover:underline">Cara Pembayaran</a>
                        <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
                    </div>
                    <button 
                        className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-right mt-5" 
                        onClick={handleBooking} 
                    > 
                        Bayar Sekarang 
                    </button>
                </div>
            </div>
        </>
    )
}
