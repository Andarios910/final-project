import React from 'react';
import { useNavigate } from 'react-router-dom';
import {AiOutlineArrowLeft} from 'react-icons/ai'

export default function component() {
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();

    return (
            <div className='w-full h-full bg-[#bdbdbd]' >
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-5">
                    <div className='flex px-5'>
                        <button><AiOutlineArrowLeft /></button>
                        <h1 className='text-xl font-bold mx-2'>Payment</h1>
                    </div>
                    <h1 className='px-12 mx-6'>Order ID: <span>YFE45RDE</span></h1>

                    <div className="divide-y divide-slate-300 p-8 mx-10">
                        <div className='mb-3'>
                            <a href='/' className="uppercase tracking-wide text-sm text-succes-900 font-semibold">Pesanan Anda</a> 
                            <h1 className='text-lg font-bold'>Detail Perjalanan</h1>
                            <div className='flex'>
                                <img className='mt-2' alt='' src='https://api.pegipegi.com/images/airlines/web/JT.png'/>
                                <div className='mt-3 ml-2 '>
                                    <p>Jakarta (CGK) - SURABAYA (SUB)</p>
                                    <p>Jum'at, 30 Des 2022</p>
                                </div>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <h1 className='text-lg font-bold mt-2'>Metode Pembayaran</h1>
                            <div className='flex mt-3'>
                                <img className='w-16 ml-3 object-cover' alt='' src='https://upload.wikimedia.org/wikipedia/commons/9/9e/ALFAMART_LOGO_BARU.png'/>
                                <p className='ml-3'>Pembayaran melalui Minimarket (Alfamart)</p>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <h1 className='text-lg font-bold mt-2'>Kode Pembayaran</h1>
                            <div className=''>
                                <p className='text-lg font-semibold '>1234 5678 910</p>
                            </div>
                        </div>

                        <div className=''>
                            <h1 className='text-lg font-bold mt-2'>Total Pesanan</h1>
                            <div className=''>
                                <p className='text-ms mt-2 font-semibold '>Lion Air CGK - SUB</p>
                                <div className='flex mt-3'>
                                    <h1> Dewasa <span>(x1)</span></h1>
                                    <h1 className='px-9 ml-10 '>Rp895.000</h1>
                                </div>
                            </div>
                        </div>
                        
                        <a href="/" className="block mt-5  text-lg leading-tight font-medium  text-indigo-500 hover:underline">Cara Pembayaran</a>
                        <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
                    </div>
                    <button class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-right mr-12 mb-4" onClick={() => navigate('/copage')} > Bayar Sekarang </button>
                </div>
            </div>
    )
}
