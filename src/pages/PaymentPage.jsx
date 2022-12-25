import React from 'react'
import { useNavigate } from 'react-router-dom'
import {AiOutlineArrowLeft} from 'react-icons/ai'

export default function PaymentPage() {

    const navigate = useNavigate();

    return (
        <div className='w-full h-full' >
            <div className="md:max-w-[768px] h-full mx-auto bg-white rounded-xl shadow-md overflow-hidden my-5 py-5 px-12">
                <div className='flex items-center'>
                    <button><AiOutlineArrowLeft /></button>
                    <h1 className='text-xl font-bold mx-2'>Payment</h1>
                </div>
                <h3 className='my-10'>Order ID: <span>YFE45RDE</span></h3>
                <div className="divide-y divide-slate-300">
                    <div className='mb-3'>
                        <a href='/' className="uppercase tracking-wide text-sm text-succes-900 font-semibold">Pesanan Anda</a> 
                        <h1 className='text-lg font-bold'>Detail Perjalanan</h1>
                        <div className='flex items-center'>
                            <img className='w-12 h-10 mt-2' alt='' src='https://api.pegipegi.com/images/airlines/web/JT.png'/>
                            <div className='mt-3 ml-2 '>
                                <p>Jakarta (CGK) - SURABAYA (SUB)</p>
                                <p>Jum'at, 30 Des 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className='mb-3'>
                        <h1 className='text-lg font-bold mt-2'>Metode Pembayaran</h1>
                        <div className='flex mt-3 items-center'>
                            <img className='w-15 h-6 ml-3' alt='' src='https://upload.wikimedia.org/wikipedia/commons/9/9e/ALFAMART_LOGO_BARU.png'/>
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
                            <p className='text-ms mt-2 font-semibold '>Anam Air CGK - SUB</p>
                            <div className='flex mt-3 justify-between'>
                                <h3> Dewasa <span>(x1)</span></h3>
                                <h3 className=''>Rp895.000</h3>
                            </div>
                        </div>
                    </div>
                    
                    <a href="/" className="block mt-5  text-lg leading-tight font-medium  text-indigo-500 hover:underline">Cara Pembayaran</a>
                    <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
                </div>
                <button class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-right mt-5" onClick={() => navigate('/copage')} > Bayar Sekarang </button>
            </div>
        </div>
    )
}
