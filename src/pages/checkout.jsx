import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BsBank } from 'react-icons/bs'
import { fetchBookingById } from '../components/features/payment/paymentHistory';
import NavbarProfile from '../components/NavbarProfile';
import Footer from '../components/Footer';

export default function COpage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.paymentHistory)

  const { pass, idT } = useParams();

  useEffect(() => {
    dispatch(fetchBookingById(idT))
  }, [dispatch, idT])

  return (
    <>
    <NavbarProfile/>
    <div className='w-full h-full mt-32'>
      <div className="md:max-w-[768px] h-full mx-auto bg-white rounded-xl shadow-md overflow-hidden my-5 py-5 px-12">
        <div className='flex items-center'>
          <button><AiOutlineArrowLeft /></button>
          <h1 className='text-xl font-bold ml-6'>Metode Pembayaran</h1>
        </div>
            <h3 className='my-10'>Order ID: <span>{data.bookingCode}</span></h3>
            <div className="divide-y divide-slate-300">
                <h1 className='text-lg font-bold'>Transfer Bank</h1>
                <div onClick={() => navigate(`/payment/${idT}/${pass}/bca`)} className='flex py-2 items-center'>
                  <BsBank className='mt-1 ml-2'/>
                  <h4 className="ml-5 font-semibold" type="button" >Bank Central Asia</h4> 
                </div>
                <div onClick={() => navigate(`/payment/${idT}/${pass}/mandiri`)} className='flex py-2 items-center'>
                  <BsBank className='mt-1 ml-2'/>
                  <h4 className="ml-5 font-semibold" type="button" >Bank Mandiri</h4> 
                </div>
                          
                <div className='mb-3'>
                  <h1 className='text-lg font-bold mt-3'>Virtual Account</h1>
                  <div onClick={() => navigate(`/payment/${idT}/${pass}/BCA`)} className='flex mt-4'>
                    <img src='https://www.freepnglogos.com/uploads/logo-bca-png/bank-central-asia-logo-bank-central-asia-bca-format-cdr-png-gudril-1.png' alt='' className='w-14 h-15 ml-3'/>          
                    <h3 className="ml-9" type="button">Virtual Account BCA</h3> 
                  </div>
                </div>

                <div onClick={() => navigate(`/payment/${idT}/${pass}/MANDIRI`)} className='flex mb-4 '> 
                  <img src='https://prismalink.b-cdn.net/wp-content/uploads/2019/05/Cara-Transfer-Virtual-Account-Mandiri-Paling-Mudah.png' alt='' className='w-20 h-15 ml-3'/>          
                  <h3 className="ml-4" type="button">Virtual Account Mandiri</h3> 
                </div>

                <div className='mb-3'>
                  <h1 className='text-lg font-bold mt-3'>Minimarket</h1>
                  <div className='flex mt-4 '>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/9/9e/ALFAMART_LOGO_BARU.png' alt='' className='w-15 h-6 ml-3'/>
                      <span 
                        onClick={() => navigate(`/payment/${idT}/${pass}/ALFAMART`)}
                        className="ml-5" type="button" >Alfamart
                      </span> 
                  </div>
                </div>
                <div className='flex py-2 items-center'>   
                    <img src='https://upload.wikimedia.org/wikipedia/commons/9/9d/Logo_Indomaret.png' alt='' className='w-15 h-6 ml-3'/>        
                        <span 
                          onClick={() => navigate(`/payment/${idT}/${pass}/INDOMARET`)}
                          className="ml-5 inline-block align-middle " type="button" >Indomaret
                        </span> 
                    </div>
                </div>
      </div>
    </div>
    <Footer />
    </>
  )
}
