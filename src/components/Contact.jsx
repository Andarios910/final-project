import React from 'react'

const Contact = () => {
  return (

    <div className='max-w-[1024px] m-auto p-4 h-full mb-10'>

        <h1 className='text-2xl font-bold text-center p-4'>Please Share Your Comments and Suggestions</h1>
        <form className='max-w-[600px] m-auto'>
            <div className='grid grid-cols-2 gap-2'>
                <input className='border shadow-lg p-3' type='text' placeholder='Name'/>
                <input className='border shadow-lg p-3' type='email' placeholder='Email'/>
            </div>
            <input className='border shadow-lg p-3 w-full my-3' type='text' placeholder='Subject'/>
            <textarea className='border shadow-lg p-3 w-full' cols='50' rows='15' placeholder='Message'></textarea>
            <button className='border shadow-lg p-3 w-full mt-2 '>Submit</button>
        </form>
    </div>
  )
}

export default Contact