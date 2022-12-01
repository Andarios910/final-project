import React from 'react'
import Selector from './Selector'

export default function SearchBar() {
    // const [check, setCheck] = useState(false)
    // console.log(check)
    return (
        <div className='max-w-[1024px] mx-auto bg-gray-500 w-full h-64 rounded-lg p-5'>
            <form>
                <div className='flex w-full border-2'>
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
                        <div class="form-check">
                            <label className="inline-block px-2 mb-2 text-gray-700" for="returnDateChecked">
                                Checked checkbox
                            </label>
                            <input 
                                defaultChecked='true'
                                className="h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" 
                                type="checkbox" 
                                value='return' 
                                id="returnDateChecked"
                            />
                        </div>
                        <input 
                            className="appearance-none mt-2 block w-full bg-white border border-gray-300 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" 
                            id="grid-first-name" 
                            
                            type="date" 
                            placeholder="First Name / Middle Name" />
                        {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
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
            </form>
        </div>
    )
}
