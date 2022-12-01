import React from 'react'

import Navbar from '../components/Navbar'
import Cards from '../components/card'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
// import SearchBar from '../components/SearchBar'

const HomePage = ({heading, message}) => {
  return (
    <>

    <Navbar />
    <div className='flex items-center justify-center h-screen mb-[5rem] bg-fixed bg-center bg-cover custom-image'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-[#051036]/60 z-[2]'/>
        <div className='p-5 text-white z-[2] mb-[-6rem]'>
            <h2 className='text-5xl font-bold'>Find Next Place To Visit</h2>
            <p className='py-5 text-xl'>lets order now, dont regret it</p>
        </div>
    </div>
    <Cards />
    <Contact />
    <Footer />
    </>
  )
}

export default HomePage