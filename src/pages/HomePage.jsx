import React, { useState, useEffect} from 'react'

import Navbar from '../components/Navbar'
import Cards from '../components/card'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import ClipLoader from "react-spinners/ClipLoader";

import { useDispatch, useSelector } from 'react-redux'
import { fetchCity } from '../components/features/airport/citySlice'

const HomePage = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.city)

  useEffect(() => {
    dispatch(fetchCity())
  }, [dispatch])


  if (loading) {
    return (
        <div className='fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
            <ClipLoader
                color="#3182ed"
                size={64}
            />
        </div>
    )
  }

  return (
    <div className='overflow-auto scrollbar-hidden'>
      <Navbar loading={loading} setLoading={setLoading} />
      <div className='flex items-center justify-center h-screen mb-[5rem] bg-fixed bg-center bg-cover custom-image'>
          <div className='absolute top-0 left-0 right-0 bottom-0 bg-[#051036]/60 z-1'/>
          <div className='p-3 text-white z-[0] mb-[-6rem]'>
              <h2 className='text-5xl font-bold'>Find Next Place To Visit</h2>
              <p className='pt-3 pb-8 text-xl md:text-center text-left'>lets order now, dont regret it</p>
          </div>
      </div>
      <SearchBar />
      <Cards data={data} />
      <Footer />
    </div>
  )
}

export default HomePage