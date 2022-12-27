// import React, { useState } from 'react'
// import { useParams } from 'react-router'

// export default function LeftCard() {
//     const { idTicket, pass } = useParams();
//     const user = JSON.parse(localStorage.getItem('user'))

//     const temp = () => {
//         const tempValue = [];
//         for (let i = 0; i < pass; i++) {
//             tempValue.push({
//                 gender: 'Mr',
//                 firstName: '',
//                 lastName: '',
//                 age: '20',
//                 ageCategory: 'ADULT',
//                 baggage: ''
//             })
//         }
//         return tempValue
//     }

//     const [passanger, setPassanger] = useState(temp)

//     console.log(passanger)

//     return (
//         <div className='w-full md:w-4/6 mr-10'>
//             <div className='relative'>
//                 <h2 className='text-xl font-medium'>Passenger Details</h2>
//                 {
//                     passanger && passanger.map((item, index) => (
//                         <div className='bg-white mt-5 rounded-md p-5' key={index}>
//                         <form>
//                             <label className='text-sm ml-1'>Title</label>
//                             <select 
//                                 selected value={passanger[index].gender}
//                                 onChange={(e) => setPassanger(prevState => {
//                                     return prevState.map((el,i) => i === index ? {...el, gender: e.target.value,} : el)
//                                 })}
//                                 id="title" 
//                                 className="w-1/4 mt-2 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
//                             >
//                                 <option value="Mr">Mr</option>
//                                 <option value="Mrs">Mrs</option>
//                                 <option value="Ms">Ms</option>
//                             </select>
//                             <div className="flex flex-wrap -mx-3 mb-6 mt-5">
//                                 <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//                                     <input 
//                                         className="appearance-none block w-full bg-white border border-gray-300 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" 
//                                         id="grid-first-name" 
//                                         type="text"
//                                         value={passanger[index].firstName}
//                                         onChange={(e) => setPassanger(prevState => {
//                                             return prevState.map((el,i) => i === index ? {...el, firstName: e.target.value,} : el)
//                                         })}
//                                         placeholder="First Name / Middle Name" />
//                                     {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
//                                 </div>
//                                 <div className="w-full md:w-1/2 px-3">
//                                     <input 
//                                         className="appearance-none block w-full bg-white border border-gray-300 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
//                                         id="grid-last-name" 
//                                         type="text"
//                                         value={passanger[index].lastName}
//                                         onChange={(e) => setPassanger(prevState => {
//                                             return prevState.map((el,i) => i === index ? {...el, lastName: e.target.value,} : el)
//                                         })}
//                                         placeholder="Last Name" />
//                                 </div>
//                             </div>
//                             <label className='text-sm ml-1'>Bagasi</label>
//                             <select 
//                                 value={passanger[index].baggage}
//                                 onChange={(e) => setPassanger(prevState => {
//                                     return prevState.map((el,i) => i === index ? {...el, baggage: e.target.value,} : el)
//                                 })}
//                                 id="bagasi" 
//                                 className="w-1/2 mt-2 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
//                                 <option value="KG0">0kg</option>
//                                 <option value="KG5">5kg/Rp324.000 </option>
//                                 <option value="KG10">10kg/Rp648.000</option>
//                                 <option value="KG15">15kg/Rp972.000</option>
//                                 <option value="KG20">20kg/Rp1.296.000</option>
//                             </select>
//                         </form>
//                     </div>
//                     ))
//                 }
//                 {/* <h2 className='text-xl font-medium mt-10'>Contact Details</h2>
//                 <div className='bg-white mt-5 rounded-md p-5'>
//                     <form>
//                         <label className='text-sm ml-1'>Title</label>
//                         <select  
//                             value={titleContact}
//                             onChange={(e) => setTitleContanct(e.target.value)}
//                             id="title" 
//                             className="w-1/4 mt-2 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
//                             <option value="Mr">Mr</option>
//                             <option value="Mrs">Mrs</option>
//                             <option value="Ms">Ms</option>
//                         </select>
//                         <div className="flex flex-wrap -mx-3 mb-6 mt-5">
//                             <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//                                 <input 
//                                     className="appearance-none block w-full bg-white border border-gray-300 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" 
//                                     id="grid-first-name" 
//                                     type="text" 
//                                     placeholder="First Name / Middle Name" />
//                             </div>
//                             <div className="w-full md:w-1/2 px-3">
//                                 <input 
//                                     className="appearance-none block w-full bg-white border border-gray-300 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
//                                     id="grid-last-name" 
//                                     type="text" 
//                                     placeholder="Last Name" />
//                             </div>
//                         </div>
//                         <div className="flex flex-wrap -mx-3 mb-6 mt-5">
//                             <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//                                 <input 
//                                     className="appearance-none block w-full bg-white border border-gray-300 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" 
//                                     id="grid-first-name" 
//                                     type="text" 
//                                     placeholder="No. Telepon" />
//                             </div>
//                             <div className="w-full md:w-1/2 px-3">
//                                 <input 
//                                     className="appearance-none block w-full bg-white border border-gray-300 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
//                                     id="grid-last-name" 
//                                     type="text" 
//                                     placeholder="Email" />
//                             </div>
//                         </div>
//                     </form>
//                 </div> */}
//             </div>
//         </div>
//     )
// }
