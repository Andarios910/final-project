import React from 'react'
import Selector from './Selector'

export default function SearchBar() {
    return (
        <div className='max-w-[1024px] mx-auto bg-gray-500 w-full h-64 rounded-lg p-5'>
            <form>
                <div className='flex justify-between w-1/2'>
                    <div className='w-full'>
                        <Selector label='From' />
                    </div>
                    <div className='w-full ml-5'>
                        <Selector label='To' />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6 mt-5">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <input 
                            className="appearance-none block w-full bg-white border border-gray-300 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" 
                            id="grid-first-name" 
                            type="text" 
                            placeholder="First Name / Middle Name" />
                        {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <input 
                            className="appearance-none block w-full bg-white border border-gray-300 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="grid-last-name" 
                            type="text" 
                            placeholder="Last Name" />
                    </div>
                </div>
                {/* <label className='text-sm ml-1'>Bagasi</label> */}
                <select 
                    // value={bagasi}
                    // onChange={(e) => setBagasi(e.target.value)}
                    id="bagasi" 
                    className="w-1/2 mt-2 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Ms">Ms</option>
                </select>
            </form>
        </div>
    )
}
