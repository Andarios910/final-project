import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookingById } from '../components/features/payment/paymentHistory'
import { fetchQrCode } from '../components/features/result/resultSlice';
import NavbarProfile from '../components/NavbarProfile';
import anamLogo from '../utility/anamair.png'
import { saveAs } from "file-saver";
import Footer from '../components/Footer';

export default function Ticket() {
    const { idTicket } = useParams();

    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.paymentHistory)
    const { result } = useSelector((state) => state.result)

    const saveFile = () => {
        saveAs(
            `https://anam-air.herokuapp.com/api/invoice/generateticket?bookingId=${idTicket}`,
            "example.pdf"
        );
    };
    
    useEffect(() => {
        if (idTicket !== undefined) {
            dispatch(fetchBookingById(idTicket))
            dispatch(fetchQrCode(idTicket))
        }
    }, [dispatch, idTicket])
    return (
        <>
            <NavbarProfile />
            <div className='w-full h-full mt-32'>
                <div className="md:max-w-[768px] h-full mx-auto bg-white rounded-xl shadow-md overflow-hidden my-5 py-5 px-12">
                    <img className='h-12 w-42 mb-8' src={anamLogo} alt='' />
                    <div className="">   
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
                        <div className='grid place-items-center mt-5'>
                            <button onClick={saveFile} className=''>
                                Click for Ticket
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
