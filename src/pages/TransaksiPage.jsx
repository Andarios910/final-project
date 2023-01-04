import React, { useState } from 'react'
import RightCard from '../components/TransaksiComponent/RightCard'
import { useNavigate, useParams } from 'react-router'
import NavbarProfile from '../components/NavbarProfile'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux';
import { handleTransaksi } from '../components/features/transaksi/transaksiSlice';
import { useEffect } from 'react';

export default function TransaksiPage() {
    const navigate = useNavigate();
    const { idTicket, pass } = useParams();
    const user = JSON.parse(localStorage.getItem('user'))
    const userId = user.id
    const id = idTicket

    const dispatch = useDispatch();
    const { transaksi } = useSelector((state) => state.transaksi)

    const temp = () => {
        const tempValue = [];
        for (let i = 0; i < pass; i++) {
            tempValue.push({
                gender: 'MR',
                firstName: '',
                lastName: '',
                age: '20',
                ageCategory: 'ADULT',
                baggage: 'KG0'
            })
        }
        return tempValue
    }
    const [passanger, setPassanger] = useState(temp)

    const handleClick = () => {
        dispatch(handleTransaksi(
            {
                scheduleId : idTicket,
                userId : userId, 
                passengerRequests: passanger,
            }))
    }

    useEffect(() => {
        if (transaksi.id !== undefined) {
            navigate(`/checkout/${idTicket}/${pass}/${transaksi.id}`)
        }
    }, [transaksi.id, navigate, idTicket, pass])

    return (
        <>  
            <NavbarProfile />
            <div className='h-full bg-[#e9ebee] pb-5 mt-24'>
                <h1 className='font-semibold text-2xl text-center'>Your Booking</h1>
                <p className='text-center text-gray-600'>Fill in your details and review your booking.</p>  
                <div className='md:flex md:justify-between max-w-[1024px] mx-auto mt-5 pb-10 px-3 md:px-0'>
                    <div className='w-full md:w-4/6 mr-10'>
                        {
                            passanger && passanger.map((item, index) => (
                                <div className='relative' key={index}>
                                    <h2 className='text-xl font-medium mt-10'>Passenger Details {index + 1}</h2>
                                    <div className='bg-white mt-5 rounded-md p-3'>
                                        <form onSubmit={handleClick}>
                                            <label className='text-sm ml-1'>Title</label>
                                            <select 
                                                selected value={passanger[index].gender}
                                                onChange={(e) => setPassanger(prevState => {
                                                    return prevState.map((el,i) => i === index ? {...el, gender: e.target.value,} : el)
                                                })}
                                                id="title" 
                                                className="w-1/4 mt-2 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                            >
                                                <option value="MR">Mr</option>
                                                <option value="MRS">Mrs</option>
                                                <option value="MS">Ms</option>
                                            </select>
                                            <div className="flex flex-wrap -mx-3 mb-6 mt-5">
                                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                    <input 
                                                        className="appearance-none block w-full bg-white border border-gray-300 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" 
                                                        id="grid-first-name" 
                                                        type="text"
                                                        value={passanger[index].firstName}
                                                        onChange={(e) => setPassanger(prevState => {
                                                            return prevState.map((el,i) => i === index ? {...el, firstName: e.target.value,} : el)
                                                        })}
                                                        placeholder="First Name / Middle Name" />
                                                </div>
                                                <div className="w-full md:w-1/2 px-3">
                                                    <input 
                                                        className="appearance-none block w-full bg-white border border-gray-300 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                                        id="grid-last-name" 
                                                        type="text"
                                                        value={passanger[index].lastName}
                                                        onChange={(e) => setPassanger(prevState => {
                                                            return prevState.map((el,i) => i === index ? {...el, lastName: e.target.value,} : el)
                                                        })}
                                                        placeholder="Last Name" />
                                                </div>
                                            </div>
                                            <label className='text-sm ml-1'>Bagasi</label>
                                            <select 
                                                value={passanger[index].baggage}
                                                onChange={(e) => setPassanger(prevState => {
                                                    return prevState.map((el,i) => i === index ? {...el, baggage: e.target.value,} : el)
                                                })}
                                                id="bagasi" 
                                                className="w-1/2 mt-2 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                                                <option value="KG0">0kg</option>
                                                <option value="KG5">5kg/Rp324.000 </option>
                                                <option value="KG10">10kg/Rp648.000</option>
                                                <option value="KG15">15kg/Rp972.000</option>
                                                <option value="KG20">20kg/Rp1.296.000</option>
                                            </select>
                                        </form>
                                    </div>
                                </div>
                            ))
                        }
                    </div>    
                    <RightCard idTicket={id} passenger={pass} />
                </div>
                <div onClick={handleClick} type='submit' className='w-40 text-center text-white bg-cyan-600 hover:bg-cyan-700 py-3 px-8 rounded-2xl mx-auto'>
                    Continue
                </div>
            </div>
            <Footer />            
        </>
    )
}
