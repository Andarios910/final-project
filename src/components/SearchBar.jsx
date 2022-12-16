import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import Selector from './Selector'

import { fetchAirPort } from './features/airport/airportSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function SearchBar() {
    const ref = useRef();
    const ref1 = useRef();

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.airport)

    const [check, setCheck] = useState()
    const [passanger, setPassanger] = useState(false)
    const [formValues, setFormValues] = useState({
        departure: '',
        arrival: '',
        departureDate: '',
        returnDate: '',
        passanger: 1,
        class: 'Ekonomi',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues)
    }


    const handleDecrement = (e) => {
        if (formValues.passanger > 1) {
            setFormValues({...formValues, passanger: formValues.passanger - 1});
        } else {
            setFormValues({ ...formValues, passanger: 1})
        }
    }

    console.log('airport in search bar', data)

    useEffect(() => {
        dispatch(fetchAirPort())
    }, [dispatch])

    return (
        <div className='absolute top-[520px] md:top-full md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:z-5 max-w-[1024px] h4/4 md:h-76 mx-auto bg-white w-full rounded-lg p-5 drop-shadow-2xl px-5'>
            <form onSubmit={handleSubmit}>
                <div className='md:flex w-full'>
                    <div className='w-full'>
                        <Selector 
                            data={data} 
                            label='From' 
                            departure='departure' 
                            id='departure'
                            change={handleChange}
                            formValues={formValues}
                            setFormValues={setFormValues}
                        />
                    </div>
                    <div className='w-full'>
                        <Selector data={data} label='To' name='arrival' id='arrival' />
                    </div>
                    <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                        <label className="inline-block px-2 mb-2 text-gray-700" htmlFor='departureDate'>
                            Departure Date
                        </label>
                        <input 
                            className="appearance-none mt-2 block w-full bg-white border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" 
                            id="departureDate"
                            name='departureDate' 
                            type="text"
                            ref={ref}
                            onFocus={() => (ref.current.type = 'date')}
                            onBlur={() => (ref.current.type = 'text')}
                            onChange={handleChange}
                            placeholder="Select Date"
                            value={formValues.departureDate}
                        />
                        {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                    <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                        <div className="form-check">
                            <label className="inline-block px-2 mb-2 text-gray-700" htmlFor="returnDateChecked">
                                Return Date
                            </label>
                            <input 
                                className="h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" 
                                type="checkbox" 
                                onClick={(e) => setCheck(e.target.checked)} 
                                id="returnDateChecked"
                            />
                        </div>
                        <input 
                            className="appearance-none mt-2 block w-full bg-white border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" 
                            ref={ref1}
                            id="returnDate"
                            name='returnDate' 
                            disabled={!check}
                            type="text" 
                            placeholder="Select Date"
                            onFocus={() => (ref1.current.type = 'date')}
                            onBlur={() => (ref1.current.type = 'text')}
                            onChange={handleChange}
                            value={formValues.returnDate}
                            /> 
                    </div>
                </div>
                <div className="md:flex mt-1">
                    <div className="relative flex flex-col w-full mr-5">
                        <label className='text-sm ml-1'>Passenger</label>
                        <input 
                            onClick={() => setPassanger(!passanger)} 
                            className='border border-gray-300 py-2.5 px-4 mt-3 rounded'
                            id='passanger'
                            name='passanger'
                            // readOnly={true}
                            onChange= {handleChange}
                            value={formValues.passanger}    
                        />
                        <div className={passanger ? 'absolute top-20 visible px-4 py-3 bg-white border border-gray-300 w-full' : 'absolute invisible'}>
                            <div className='flex justify-between items-center'>
                                <h5 className='w-3/4'>{formValues.passanger} Passanger</h5>
                                <div className='flex justify-around items-center w-1/4'>
                                    <div 
                                        onClick={() => handleDecrement()} 
                                        className='py-1 px-2 bg-blue-600 text-white rounded'>
                                        -
                                    </div>
                                    <p> {formValues.passanger} </p>
                                    <div 
                                        onClick={() => setFormValues({...formValues, passanger: formValues.passanger + 1})} 
                                        className='py-1 px-2 bg-blue-600 text-white rounded'>
                                        +
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <label className='text-sm ml-1'>Class</label>
                        <select 
                            id="class"
                            name='class'
                            value={formValues.class}
                            onChange={handleChange} 
                            className="w-full mt-2 border border-gray-300 text-black text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block py-3 px-4"
                        >
                            <option value="Ekonomi">Economic</option>
                            <option value="Bisnis">Bussines</option>
                        </select>
                    </div>
                </div>
                <button 
                    onClick={() => navigate('/search-page')} 
                    className='float-right mt-6 text-white p-3 border bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] rounded-md'
                    type='submit'
                >
                    Search Flight
                </button>
            </form>
        </div>
    )
}
