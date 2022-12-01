import React, { useState, useEffect} from 'react'


export default function Selector({ label }) {
    const [countries, setCountries] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const [selected, setSelected] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        fetch("https://restcountries.com/v2/all?fields=name")
        .then((res) => res.json())
        .then((data) => {
            setCountries(data);
        });
    }, []);

    console.log(countries)

    return (
        <div className='relative'>
            <label className="form-label inline-block mb-2 text-gray-700">
                {label}
            </label>
            <div onClick={() => setOpen(!open)} className={`flex items-center px-2 sticky top-0 bg-white`}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                    placeholder="Enter country name"
                    className="placeholder:text-gray-700 p-2 outline-none"
                />
            </div>
            <ul className={`absolute ${open ? 'h-64' : 'h-0' } mt-1 w-full z-50 bg-black overflow-auto scrollbar-hide`}>
                {countries && countries?.map((country) => (
                    <li
                        key={country?.name}
                        className={`p-2 text-sm hover:bg-sky-600 text-white
                        ${
                        country?.name?.toLowerCase() === selected?.toLowerCase() &&
                        "bg-sky-600 text-white"
                        }
                        ${
                        country?.name?.toLowerCase().startsWith(inputValue)
                            ? "block"
                            : "hidden"
                        }`}
                        onClick={() => {
                        if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
                            setSelected(country?.name);
                            setOpen(false);
                            setInputValue(country?.name);
                        }
                        }}
                    >
                        {country?.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}
