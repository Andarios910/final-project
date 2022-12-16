import React, { useState, useEffect, useRef } from 'react'

export default function Selector({ data, label, departure, id, formValues, setFormValues }) {
    const [value, setValue] = useState("");
    const [selected, setSelected] = useState("");
    const [open, setOpen] = useState(false);
    const ref2 = useRef()

    const onChange = (e) => {
        const { name } = e.target
        setValue(e.target.value.toLowerCase())
        setFormValues({...formValues, [name]: value})
    }

    useEffect(() => {
        document.body.addEventListener("click", event => {
            if (ref2.current.contains(event.target)) {
                return
            }
            setOpen(false)
        })
    }, [])

    return (
        <div ref={ref2} className='relative'>
            <label className="form-label inline-block px-2 mb-2 text-gray-700">
                {label}
            </label>
            <div onClick={() => setOpen(!open)} className={`flex items-center px-2 sticky top-0`}>
                <input
                    type="text"
                    value={value}
                    name={departure}
                    id={id}
                    onChange={onChange}
                    placeholder="Enter country name"
                    // className="placeholder:text-gray-700 p-2 outline-none"
                    className='appearance-none mt-2 block w-full bg-white border border-gray-300 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none'
                />
            </div>
            <ul className={`absolute ${open ? 'h-56' : 'hidden' } mt-1 w-full z-50 bg-white overflow-auto border border-gray-300 scrollbar-hide`}>
                {data && data?.map((item) => (
                    <li
                        key={item?.id}
                        className={`cursor-pointer p-2 text-sm hover:bg-gray-300 bg-white
                        ${
                            item?.cityDetails?.cityName?.toLowerCase() === selected?.toLowerCase() &&
                            "bg-gray-300 text-white"
                        }
                        ${
                        item?.airportDetails?.airportName?.toLowerCase().startsWith(value) || 
                        item?.countryDetails?.countryName?.toLowerCase().startsWith(value) ||
                        item?.cityDetails?.cityName?.toLowerCase().startsWith(value)       ||
                        item?.airportDetails?.airportCode?.toLowerCase().startsWith(value)
                            ? "block"
                            : "hidden"
                        } `}
                        onClick={() => {
                            if (item?.cityDetails?.cityName?.toLowerCase() !== selected.toLowerCase()) {
                                setSelected(`${item?.cityDetails?.cityName} (${item?.airportDetails?.airportCode})`)
                                setValue(`${item?.cityDetails?.cityName} (${item?.airportDetails?.airportCode})`)
                                // setValue({...value, nameInput: `${item?.cityDetails?.cityName} (${item?.airportDetails?.airportCode})`})
                                setOpen(!open)
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
