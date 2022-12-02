import React from 'react'

export default function ProfileDetail({name, value, handleClick, edit}) {
    return (
        <div className='w-3/4 mx-auto border border-gray-400 rounded-lg mt-5 p-5'>
            <div className='flex justify-between '>
                <div>
                    <p className='mb-2 text-sm text-gray-500'>{name}</p>
                    <h4 className='mb-3'>{value}</h4>
                </div>
                <p 
                    className='text-blue-600 hover:text-blue-800 cursor-pointer'
                    onClick={handleClick}
                >
                    Edit
                </p>
            </div>
            {
                edit ?
                <div>
                    <hr/>
                    <form className='mt-5'>
                        <input 
                            type='text' 
                            name='name' 
                            id='name' 
                            placeholder='Name'
                            className={`w-full p-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1`}
                        />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-5 mt-5 rounded-xl">
                            Simpan
                        </button>
                    </form>
                </div>
                :
                <span></span>
            }
        </div>
    )
}
