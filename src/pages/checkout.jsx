import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BsBank } from 'react-icons/bs'

export default function COpage() {
  const navigate = useNavigate();
  return (
    <div className='w-full h-full bg-[#bdbdbd]' >
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-5">
        <div className='flex px-5'>
          <button><AiOutlineArrowLeft /></button>
            <h1 className='text-xl font-bold mx-2'>Metode Pembayaran</h1>
        </div>
          <h1 className='px-12 mx-6'>Order ID: <span>YFE45RDE</span></h1>
          <div className="divide-y divide-slate-300 p-8 mx-10">
            <div className='mb-3'>
              <h1 className='text-lg font-bold'>Transfer Bank</h1>
              <div className='flex mt-2'>
                <BsBank className='mt-1 ml-2'>
                  </BsBank><button className="ml-5" type="button" >Bank Central Asia</button> 
              </div>
            </div>
            <div className='flex mt-2 items-center'>
              <BsBank className='mt-1 ml-2'/>
              {/* <button className="ml-5" type="button" ><p>Bank Central Asia</p></button>  */}
              <p>asfdasdf</p>
            </div>
            <div className='flex mt-4 mb-4 items-center'>
              <BsBank className='mt-1 ml-2'/>
              <button className="ml-5" type="button" >Bank Central Asia</button> 
            </div>
            <div className='flex mb-4 '>
              <BsBank className='mt-1 ml-2'/>
              <button className="ml-5" type="button" >Bank Central Asia</button> 
            </div>

            <div className='mb-3'>
              <h1 className='text-lg font-bold mt-3'>Credit Card</h1>
              <div className='flex mt-3 ml-2'>
                <img src='https://politap.ac.id/wp-content/uploads/2020/12/Credit-Card-Visa-And-Master-Card-Transparent-PNG-1024x238-1.png' className='w-23 h-8' alt='' /> 
                <button className="ml-3 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                  Credit Card/Instalment/Discharge
                </button>
              </div>
            </div>
                        
            <div className='mb-3'>
              <h1 className='text-lg font-bold mt-3'>Virtual Account</h1>
              <div className='flex mt-4 '>
                <img src='https://www.freepnglogos.com/uploads/logo-bca-png/bank-central-asia-logo-bank-central-asia-bca-format-cdr-png-gudril-1.png' alt='' className='w-14 h-15 ml-3'/>          
                <button className="ml-9" type="button">Virtual Account BCA</button> 
              </div>
            </div>
            <div className='flex mb-4 '> 
              <img src='https://prismalink.b-cdn.net/wp-content/uploads/2019/05/Cara-Transfer-Virtual-Account-Mandiri-Paling-Mudah.png' alt='' className='w-20 h-15 ml-3'/>          
              <button className="ml-4" type="button">Virtual Account Mandiri</button> 
            </div>

            <div className='mb-3'>
              <h1 className='text-lg font-bold mt-3'>Minimarket</h1>
              <div className='flex mt-4 '>
                <img src='https://upload.wikimedia.org/wikipedia/commons/9/9e/ALFAMART_LOGO_BARU.png' alt='' className='w-15 h-6 ml-3'/>
                  <span 
                    onClick={() => navigate('/payment')} 
                    className="ml-5" type="button" >Alfamart
                  </span> 
              </div>
            </div>
            <div className='flex mb-4 '>   
                <img src='https://upload.wikimedia.org/wikipedia/commons/9/9d/Logo_Indomaret.png' alt='' className='w-15 h-6 ml-3'/>        
                      <button 
                        onClick={() => navigate('/payment-indomart')} 
                        className="ml-5 inline-block align-middle " type="button" >Indomart
                      </button> 
                </div>
            </div>
      </div>
    </div>
    
  )
}
