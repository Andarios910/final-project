import React, { useState } from 'react'


export default function Selector({ data, label }) {
    // const [countries, setCountries] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const [selected, setSelected] = useState("");
    const [open, setOpen] = useState(false);

    return (
        <div className='relative'>
            <label className="form-label inline-block px-2 mb-2 text-gray-700">
                {label}
            </label>
            <div onClick={() => setOpen(!open)} className={`flex items-center px-2 sticky top-0`}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                    placeholder="Enter country name"
                    // className="placeholder:text-gray-700 p-2 outline-none"
                    className='appearance-none mt-2 block w-full bg-white border border-gray-300 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none'
                />
            </div>
            <ul className={`absolute ${open ? 'h-64' : 'h-0' } mt-1 w-full z-50 bg-white overflow-auto scrollbar-hide`}>
                {data && data?.map((item) => (
                    <li
                        key={item?.id}
                        className={`p-2 text-sm hover:bg-gray-300 text-black
                        ${
                            item?.airportDetails?.airportName?.toLowerCase() === selected?.toLowerCase() &&
                            "bg-gray-300 text-white"
                        }
                        ${
                        item?.airportDetails?.airportName?.toLowerCase().startsWith(inputValue) || 
                        item?.countryDetails?.countryName?.toLowerCase().startsWith(inputValue) ||
                        item?.cityDetails?.cityName?.toLowerCase().startsWith(inputValue)       ||
                        item?.airportDetails?.airportCode?.toLowerCase().startsWith(inputValue)
                            ? "block"
                            : "hidden"
                        } `}
                        onClick={() => {
                        if (item?.cityDetails?.cityName?.toLowerCase() !== selected.toLowerCase()) {
                            setSelected(item?.cityDetails?.cityName);
                            setOpen(false);
                            setInputValue(item?.cityDetails?.cityName);
                        }
                        }}
                    >
                        <p>{`${item?.cityDetails?.cityName}, ${item?.countryDetails?.countryName}`}</p>
                        <p className='text-sm text-gray-500'>{`${item?.airportDetails?.airportCode} - ${item?.airportDetails?.airportName}`}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
