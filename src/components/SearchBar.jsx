import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { addMonths }  from 'date-fns';
import { Combobox } from '@headlessui/react';
import 'react-datepicker/dist/react-datepicker.css';

import { fetchAirPort } from './features/airport/airportSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function SearchBar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { airport } = useSelector((state) => state.airport)

    const [selectDeparture, setSelectDeparture] = useState('Jakarta')
    const [selectArrival, setSelectArrival] = useState('Denpasar');
    const [departureDate, setDepartureDate] = useState(new Date());
    const [passValue, setPassValue] = useState(1);
    const [typeClass, setTypeClass] = useState('ECONOMY');

    const [query, setQuery] = useState('')
    const filteredPeople =
    query === ''
        ? airport
        : airport.filter((data) => {
            return (
                data.airportDetails.airportName.toLowerCase().includes(query.toLowerCase()) ||
                data.countryDetails.countryName.toLowerCase().includes(query.toLowerCase()) ||
                data.cityDetails.cityName.toLowerCase().includes(query.toLowerCase())       ||
                data.airportDetails.airportCode.toLowerCase().includes(query.toLowerCase())
            )
        })
    const [passanger, setPassanger] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search-page/${selectDeparture}/${selectArrival}/${departureDate}/${typeClass}/0/2/netPrice,asc`)
    }


    const handleDecrement = (e) => {
        if (passValue > 1) {
            setPassValue(passValue - 1)
        } else {
            setPassValue(1)
        }
    }

    useEffect(() => {
        dispatch(fetchAirPort())
    }, [dispatch])

    return (
        <div className='absolute top-[520px] md:top-full md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:z-5 max-w-[1024px] h4/4 md:h-76 mx-auto bg-white w-full rounded-lg p-5 drop-shadow-2xl px-5'>
            <form onSubmit={handleSubmit}>
                <div className='md:flex w-full'>
                    <div className='w-full'>
                        <div className="">
                            <Combobox
                                value={selectDeparture}
                                onChange={(e) => setSelectDeparture(e)}
                                name='departure'
                            >
                                <label className="form-label inline-block px-2 mb-2 text-gray-700">
                                    Departure
                                </label>
                                <Combobox.Input
                                    className='appearance-none mt-2 block w-full bg-white border border-gray-300 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none'
                                    onChange={(event) => setQuery(event.target.value)}
                                    name='departure'
                                />
                                <Combobox.Options className='absolute z-10 bg-white w-60 h-64 overflow-auto'>
                                    {
                                        filteredPeople.map((item) => (
                                            <Combobox.Option
                                                key={item.cityDetails.cityName} 
                                                value={`${item.cityDetails.cityName}`}
                                                className='cursor-pointer p-2 text-sm hover:bg-gray-300 bg-white'
                                            >
                                                <p>{item.cityDetails.cityName}, {item.countryDetails.countryName}</p>
                                                <p className='text-sm text-gray-500'>{item.airportDetails.airportCode} - {item.airportDetails.airportName}</p>
                                            </Combobox.Option>
                                        ))
                                    }
                                </Combobox.Options>
                            </Combobox>
                        </div>
                    </div>
                    <div className='w-full'>
                        {/* <Selector data={airport} label='To' name='arrival' id='arrival' /> */}
                        <div className="">
                            <Combobox
                                value={selectArrival}
                                onChange={(e) => setSelectArrival(e)}
                                name='departure'
                            >
                                <label className="form-label inline-block px-2 mb-2 text-gray-700">
                                    Arrival
                                </label>
                                <Combobox.Input
                                    className='appearance-none mt-2 block w-full bg-white border border-gray-300 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none'
                                    onChange={(event) => setQuery(event.target.value)}
                                    name='departure'
                                />
                                <Combobox.Options className='absolute z-10 bg-white w-60 h-64 overflow-auto'>
                                    {
                                        filteredPeople.map((item) => (
                                            <Combobox.Option
                                                key={item.cityDetails.cityName} 
                                                value={`${item.cityDetails.cityName}`}
                                                className='cursor-pointer p-2 text-sm hover:bg-gray-300 bg-white'
                                            >
                                                <p>{item.cityDetails.cityName}, {item.countryDetails.countryName}</p>
                                                <p className='text-sm text-gray-500'>{item.airportDetails.airportCode} - {item.airportDetails.airportName}</p>
                                            </Combobox.Option>
                                        ))
                                    }
                                </Combobox.Options>
                            </Combobox>
                        </div>
                    </div>
                    <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                        <label className="inline-block px-2 mb-2 text-gray-700" htmlFor='departureDate'>
                            Departure Date
                        </label>
                        <DatePicker
                            selected={departureDate}
                            onChange={(date) => setDepartureDate(date)}
                            // minDate={new Date()}
                            maxDate={addMonths(new Date(), 5)}
                            className='appearance-none mt-2 block w-full bg-white border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none'
                        />
                        {/* <input 
                            className="appearance-none mt-2 block w-full bg-white border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" 
                            id="departureDate"
                            name='departureDate' 
                            type="text"
                            ref={ref}
                            onFocus={() => (ref.current.type = 'date')}
                            onBlur={() => (ref.current.type = 'text')}
                            // onChange={handleChange}
                            onChange={(e) => setDepartureDate(e.target.value)}
                            placeholder="Select Date"
                            // value={formValues.departureDate}
                            value={departureDate}
                        /> */}
                        {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                    {/* <div className="w-full md:w-full px-3 mb-6 md:mb-0">
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
                            // onChange={handleChange}
                            // value={formValues.returnDate}
                            /> 
                    </div> */}
                </div>
                <div className="md:flex mt-1">
                    <div className="relative flex flex-col w-full mr-5">
                        <label className='text-sm ml-1'>Passenger</label>
                        <input 
                            onClick={() => setPassanger(!passanger)} 
                            className='border border-gray-300 py-2.5 px-4 mt-3 rounded'
                            id='passanger'
                            name='passanger'
                            value={passValue}
                            readOnly
                        />
                        <div className={passanger ? 'absolute top-20 visible px-4 py-3 bg-white border border-gray-300 w-full' : 'absolute invisible'}>
                            <div className='flex justify-between items-center'>
                                <h5 className='w-3/4'>{passValue} Passanger</h5>
                                <div className='flex justify-around items-center w-1/4'>
                                    <div 
                                        onClick={() => handleDecrement()} 
                                        className='py-1 px-2 bg-blue-600 text-white rounded'>
                                        -
                                    </div>
                                    <p> {passValue} </p>
                                    <div 
                                        onClick={() => setPassValue(passValue + 1)} 
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
                            value={typeClass}
                            onChange={(e) => setTypeClass(e.target.value)} 
                            className="w-full mt-2 border border-gray-300 text-black text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block py-3 px-4"
                        >
                            <option value="ECONOMY">Economic</option>
                            <option value="BUSINESS">Bussines</option>
                        </select>
                    </div>
                </div>
                <button 
                    className='float-right mt-6 text-white p-3 border bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] rounded-md'
                    type='submit'
                >
                    Search Flight
                </button>
            </form>
        </div>
    )
}
