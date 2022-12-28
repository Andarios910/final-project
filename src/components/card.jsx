import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function card({ data }) {
    return (
        <div>
            <div className='bg-grey-100 mt-[450px] md:mt-0'>
                <section className='md:h-full flex items-center text-gray-900'>
                    <div className='container px-5 py-24 mx-auto'>
                        <div className='text-center mb-12 mt-10'>
                            <h1 className='text-base md:text-lg text-indigo-700 mb-1'>CITY</h1>
                            <h1 className='text-4xl md:text-6xl text-gray-700 font-semibold'>Brief History Of The City</h1>
                        </div>

                        <div className='flex flex-wrap m-4'>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {
                                data && data.map((item) => (
                                    <SwiperSlide key={item.id} className='w-full'>
                                        <div >
                                            <div className='h-[560px] md:h-[620px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                                                <img src={item.imageUrl} alt='imagecity' className='lg:h-72 md:h-48 w-full object-cover object-center'/>

                                                <div className='p-6 h-full hover:bg-slate-300 hover-text-white transition duration-300 ease-in'>
                                                    <h1 className='text-2xl font-semibold mb-3'>{item.cityName}</h1>
                                                    <p className='leading-relaxed mb-3'>
                                                        {item.description}
                                                    </p>
                                                    <div className='flex items-center flex-wrap'>
                                                        <a href='/' className='text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0'> 
                                                        ReadMore
                                                        <svg className='w-4 h-4 ml-2' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                                                            <path d='M5 12h14'></path>
                                                            <path d='M12 5l7 7-7 7'></path>
                                                        </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                        </div>
                    </div>    
                </section>
            </div>
        </div>
    )
}



// export default function card() {
//     const dispatch = useDispatch();


//     return (
    
// );
// };
