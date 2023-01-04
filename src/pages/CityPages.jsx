import React, { useEffect } from 'react'
import NavbarProfile from '../components/NavbarProfile'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCity } from '../components/features/airport/citySlice'

export default function CityPages() {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.city)

    useEffect(() => {
        dispatch(fetchCity());
    }, [dispatch])

    return (
        <>
            <NavbarProfile />
            <div className='mt-24'>
                <h1 className='text-base text-center md:text-lg text-indigo-700 mb-1'>CITY</h1>
                <h1 className='text-4xl text-center md:text-6xl text-gray-700 font-semibold'>Brief History Of The City</h1>
                <div className='my-10 grid grid-cols-3'>
                    {
                        data && data.map((item,index) => (
                            <div key={index} className='mt-10 w-9/12 mx-auto'>
                                <div className='h-[560px] md:h-[650px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                                    <img src={item.imageUrl} alt='imagecity' className='lg:h-72 md:h-48 w-full object-cover object-center'/>

                                    <div className='p-6 h-full hover:bg-slate-300 hover-text-white transition duration-300 ease-in'>
                                        <h1 className='text-2xl font-semibold mb-3'>{item.cityName}</h1>
                                        <p className='leading-relaxed mb-3'>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}
