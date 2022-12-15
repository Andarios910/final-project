import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Selector from './Selector'

export default function SearchBar() {
    const navigate = useNavigate();
    const [check, setCheck] = useState()
    const [passanger, setPassanger] = useState(false)
    const [value, setValue] = useState(1);

    const handleDecrement = () => {
        if (value > 1) {
            setValue(value-1);
        } else {
            setValue(1)
        }
    }

    return (
        <div className='absolute top-[520px] md:top-full md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:z-5 max-w-[1024px] h-4/4 md:h-80 mx-auto bg-white w-full rounded-lg p-5 drop-shadow-2xl px-5'>
            <form>
                <div className='md:flex w-full'>
                    <div className='w-full'>
                        <Selector label='From' />
                    </div>
                    <div className='w-full'>
                        <Selector label='To' />
                    </div>
                    <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                        <label className="inline-block px-2 mb-2 text-gray-700">
                            Departure Date
                        </label>
                        <input 
                            className="appearance-none mt-2 block w-full bg-white border border-gray-300 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" 
                            id="grid-first-name" 
                            type="date" 
                            placeholder="First Name / Middle Name" />
                        {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                    <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                        <div className="form-check">
                            <label className="inline-block px-2 mb-2 text-gray-700" htmlFor="returnDateChecked">
                                Checked checkbox
                            </label>
                            <input 
                                className="h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" 
                                type="checkbox" 
                                onClick={(e) => setCheck(e.target.checked)} 
                                id="returnDateChecked"
                            />
                        </div>
                        <input 
                            className="appearance-none mt-2 block w-full bg-white border border-gray-300 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" 
                            id="grid-first-name" 
                            disabled={!check}
                            type="date" /> 
                    </div>
                </div>
                <div className="flex mt-1">
                    <div className="relative w-full mr-5">
                        <label className='text-sm ml-1'>Passenger</label>
                        <div onClick={() => setPassanger(!passanger)} className='border border-gray-300 py-2.5 px-4 mt-2 rounded'>
                            {value} Passanger
                        </div>
                        <div className={passanger ? 'absolute visible px-4 py-3 bg-white border border-gray-300 w-full' : 'absolute invisible'}>
                            <div className='flex justify-between items-center'>
                                <h5 className='w-3/4'>{value} Passanger</h5>
                                <div className='flex justify-around items-center w-1/4'>
                                    <div onClick={() => handleDecrement()} className='py-1 px-2 bg-blue-600 text-white rounded'>
                                        -
                                    </div>
                                    <p> {value} </p>
                                    <div onClick={() => setValue(value+1)} className='py-1 px-2 bg-blue-600 text-white rounded'>
                                        +
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <label className='text-sm ml-1'>Class</label>
                        <select 
                            // selected value={titlePassenger}
                            // onChange={(e) => setTitlePassenger(e.target.value)}
                            id="class" 
                            className="w-full mt-2 border border-gray-300 text-black text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block py-3 px-4"
                        >
                            <option value="Mr">Economic</option>
                            <option value="Mrs">Bussines</option>
                        </select>
                    </div>
                </div>
                <button onClick={() => navigate('/search-page')} className='float-right mt-8'>
                    Search Flight
                </button>
            </form>
        </div>
    )
}
