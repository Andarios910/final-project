import React, { useState } from 'react'
import { Combobox } from '@headlessui/react';
import { useDispatch } from 'react-redux';
import { setDeparture } from './features/airport/airportSlice';

export default function Selector({ data, label, departure, id, formValues, setFormValues }) {
    const dispatch = useDispatch();
    const [select, setSelect] = useState('')
    const [query, setQuery] = useState('')

    const filteredPeople =
    query === ''
        ? data
        : data.filter((data) => {
            return (
                data.airportDetails.airportName.toLowerCase().includes(query.toLowerCase()) ||
                data.countryDetails.countryName.toLowerCase().includes(query.toLowerCase()) ||
                data.cityDetails.cityName.toLowerCase().includes(query.toLowerCase())       ||
                data.airportDetails.airportCode.toLowerCase().includes(query.toLowerCase())
            )
        })

    return (
        <div className="">
            <Combobox
                value={select}
                onChange={(e) => {
                    setSelect(e);
                    dispatch(setDeparture(select))
                }}
            >
                <label className="form-label inline-block px-2 mb-2 text-gray-700">
                    {label}
                </label>
                <Combobox.Input
                    className='appearance-none mt-2 block w-full bg-white border border-gray-300 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none'
                    onChange={(event) => setQuery(event.target.value)}
                />
                <Combobox.Options className='absolute z-10 bg-white w-60 h-64 overflow-auto'>
                    {
                        filteredPeople.map((item) => (
                            <Combobox.Option
                                key={item.cityDetails.cityName} 
                                value={`${item.cityDetails.cityName} - (${item.airportDetails.airportCode})`}
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
    )
}

        // <div ref={ref2} className='relative'>
        //     <label className="form-label inline-block px-2 mb-2 text-gray-700">
        //         {label}
        //     </label>
        //     <div onClick={() => setOpen(!open)} className={`flex items-center px-2 sticky top-0`}>
        //         <input
        //             type="text"
        //             value={value}
        //             name={departure}
        //             id={id}
        //             onChange={onChange}
        //             placeholder="Enter City Name"
        //             // className="placeholder:text-gray-700 p-2 outline-none"
        //             className='appearance-none mt-2 block w-full bg-white border border-gray-300 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none'
        //         />
        //     </div>
        //     <ul className={`absolute ${open ? 'h-56' : 'hidden' } mt-1 w-full z-50 bg-white overflow-auto border border-gray-300 scrollbar-hide`}>
        //         {data && data?.map((item) => (
        //             <li
        //                 key={item?.id}
        //                 className={`cursor-pointer p-2 text-sm hover:bg-gray-300 bg-white
        //                 ${
        //                     item?.cityDetails?.cityName?.toLowerCase() === selected?.toLowerCase() &&
        //                     "bg-gray-300 text-white"
        //                 }
        //                 ${
        //                 item?.airportDetails?.airportName?.toLowerCase().startsWith(value) || 
        //                 item?.countryDetails?.countryName?.toLowerCase().startsWith(value) ||
        //                 item?.cityDetails?.cityName?.toLowerCase().startsWith(value)       ||
        //                 item?.airportDetails?.airportCode?.toLowerCase().startsWith(value)
        //                     ? "block"
        //                     : "hidden"
        //                 } `}
        //                 onClick={() => {
        //                     if (item?.cityDetails?.cityName?.toLowerCase() !== selected.toLowerCase()) {
        //                         setSelected(`${item?.cityDetails?.cityName} (${item?.airportDetails?.airportCode})`)
        //                         setValue(`${item?.cityDetails?.cityName} (${item?.airportDetails?.airportCode})`)
        //                         // setValue({...value, nameInput: `${item?.cityDetails?.cityName} (${item?.airportDetails?.airportCode})`})
        //                         setOpen(!open)
        //                     }
        //                 }}
        //             >
        //                 <p>{`${item?.cityDetails?.cityName}, ${item?.countryDetails?.countryName}`}</p>
        //                 <p className='text-sm text-gray-500'>{`${item?.airportDetails?.airportCode} - ${item?.airportDetails?.airportName}`}</p>
        //             </li>
        //         ))}
        //     </ul>
        // </div>