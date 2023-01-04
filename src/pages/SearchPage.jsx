import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import NavbarProfile from '../components/NavbarProfile'
import { useDispatch, useSelector } from "react-redux";
import { handleSearch } from "../components/features/search/searchSlice";
import Footer from '../components/Footer'

import { format } from 'date-fns'
import { parse } from 'date-fns';
import ReactPaginate from 'react-paginate'

import { BsCheck } from 'react-icons/bs'
import { MdSearchOff } from 'react-icons/md'
import anamLogo from '../utility/anamair.png'

const SearchPage = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const [menu, setMenu] = useState(false);
  const [sorting, setSorting] = useState('netPrice,asc')
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { dep, arr, ddate, classF, size, sort, pass, page } = useParams()
  const { search } = useSelector((state) => state.search)

  console.log(search.length);

  const [offset, setOffset] = useState(page)

  const formatNumber = (numb) => {
    const format = numb.toString().split('').reverse().join('');
    const convert = format.match(/\d{1,3}/g);
    const rupiah = 'Rp ' + convert.join('.').split('').reverse().join('')
    return rupiah;
  }

  function toHoursAndMinutes(totalMinutes) {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);
  
    return `${padTo2Digits(hours)} h : ${padTo2Digits(minutes)}m`;
  }
  
  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  const handlePageClick = (data) => {
    setOffset(data.selected)
  }

  const handleSorting = (value) => {
    setSorting(value)
    setMenu(false)
  }

  useEffect(() => {
    dispatch(handleSearch({dep, arr, ddate, classF, page, size, sort, offset, sorting}))
  }, [dispatch, dep, arr, ddate, classF, page, size, sort, offset, sorting])

  if (search.length === 0) {
    return (
      <>
        <NavbarProfile />
        <div className="flex flex-col items-center my-32">
          <MdSearchOff className="w-40 h-40" />
          <p className="font-semibold text-xl">Ticket Not Found</p>
          <a href="/" className="text-blue-500 underline"> Home </a>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <NavbarProfile />
      <div className="max-w-[1024px] mx-auto px-2.5 md:px-0 mt-40">
        <div className="grid place-items-end mb-2">
          <div className="relative inline-block text-left">
            <div>
              <button onClick={() => setMenu(!menu)} type="button" className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true">
                Sorting
                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className={menu ? "absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" : "hidden"} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
              <div className="py-1" role="none">
                <p onClick={() => handleSorting('netPrice,asc')} className="flex items-center text-gray-700 px-4 py-2 text-sm hover:text-blue-500 cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-0">
                  <BsCheck className={sorting === 'netPrice,asc' ? "w-5 h-5 text-blue-500" : 'opacity-0'} />
                  Harga Terendah
                </p>
                <p onClick={() => handleSorting('departureTime,asc')} className="flex items-center text-gray-700 px-4 py-2 text-sm hover:text-blue-500 cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-1">
                  <BsCheck className={sorting === 'departureTime,asc' ? "w-5 h-5 text-blue-500" : 'opacity-0'} />
                  Keberangkatan paling awal
                </p>
                <p onClick={() => handleSorting('departureTime,desc')} className="flex items-center text-gray-700 px-4 py-2 text-sm hover:text-blue-500 cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-2">
                <BsCheck className={sorting === 'departureTime,desc' ? "w-5 h-5 text-blue-500" : 'opacity-0'} />
                  Keberangkatan paling akhir
                </p>
                <p onClick={() => handleSorting('arrivalTime,asc')} className="flex items-center text-gray-700 px-4 py-2 text-sm hover:text-blue-500 cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-2">
                  <BsCheck className={sorting === 'arrivalTime,asc' ? "w-5 h-5 text-blue-500" : 'opacity-0'} />
                  Kedatangan paling awal
                </p>
                <p onClick={() => handleSorting('departureTime,desc')} className="flex items-center text-gray-700 px-4 py-2 text-sm hover:text-blue-500 cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-2">
                  <BsCheck className={sorting === 'arrivalTime,desc' ? "w-5 h-5 text-blue-500" : 'opacity-0'} />
                  kedatangan paling akhir
                </p>
                <p onClick={() => handleSorting('route.duration,asc')} className="flex items-center text-gray-700 px-4 py-2 text-sm hover:text-blue-500 cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-2">
                  <BsCheck className={sorting === 'route.duration,asc' ? "w-5 h-5 text-blue-500" : 'opacity-0'} />
                  Durasi tercepat
                </p>
              </div>
            </div>
          </div>
          </div>
        {
          search && search.map((item, index) => (
            <div key={index} className="mb-5 ring ring-gray-200 hover:ring-blue-400 bg-white rounded hover:shadow-lg cursor-pointer">
                <div className="flex flex-wrap items-center py-6">
                    <div className="px-2">
                        <img
                            className="h-12 w-42 object-cover rounded-xl "
                            src={anamLogo}
                            alt="" />
                        <div className="font-bold text-center text-xl">Anam Air</div>
                    </div>
                    <div className="flex flex-wrap justify-start ">
                        <div className="m-6 flex-col">
                            {format(parse(item.departureTime, 'HH:mm:ss', new Date()), 'hh:mm a')}
                            <div className="bandara">{`${item.flightDetail.departure.cityDetails.cityName}(${item.flightDetail.departure.airportDetails.airportCode})`}</div>
                        </div>
                        <div className="m-6">
                            {format(parse(item.arrivalTime, 'HH:mm:ss', new Date()), 'hh:mm a')}
                            <div className="bandara">{`${item.flightDetail.arrival.cityDetails.cityName}(${item.flightDetail.arrival.airportDetails.airportCode})`}</div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-start">
                        <div className="m-6 gap-8">
                            {toHoursAndMinutes(item.route.duration)}<div className="bandara flex flex-wrap">Langsung</div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-start">
                        <div className="m-6">
                            <div className="relative flex flex-col items-center group">
                                <div className="text-4xl text-amber-400">
                                    <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    version="1.1"
                                    viewBox="0 0 16 16"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 4h-4v-1c0-0.55-0.45-1-1-1h-4c-0.55 0-1 0.45-1 1v1h-4c-0.55 0-1 0.45-1 1v9c0 0.55 0.45 1 1 1h14c0.55 0 1-0.45 1-1v-9c0-0.55-0.45-1-1-1zM6 3.002c0.001-0.001 0.001-0.001 0.002-0.002h3.996c0.001 0.001 0.001 0.001 0.002 0.002v0.998h-4v-0.998zM15 8h-2v1.5c0 0.275-0.225 0.5-0.5 0.5h-1c-0.275 0-0.5-0.225-0.5-0.5v-1.5h-6v1.5c0 0.275-0.225 0.5-0.5 0.5h-1c-0.275 0-0.5-0.225-0.5-0.5v-1.5h-2v-1h14v1z"></path>
                                    </svg>
                                </div>
                                <div className="absolute bottom-0 flex-col items-center hidden mb-6 group-hover:flex">
                                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
                                    Max Bagasi 20 Kg
                                    </span>
                                    <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-start gap-4">
                        <div className="m-6">
                            <div className="bandara text-2xl text-blue-600 font-bold flex flex-start text-shadow-lg">
                                {formatNumber(item.netPrice)}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-start gap-2 px-2">
                        <button 
                          onClick={user ? () => navigate(`/transaksi/${item.id}/${pass}`) : () => navigate(`/login`)}
                          className="text-white bg-blue-600 px-8 py-2 font-bold rounded hover:bg-blue-500 "
                        >
                            Choose
                        </button>
                    </div>
                </div>
            </div>
          ))
        }

        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={3}
          previousLabel="<"
          marginPagesDisplayed={1}
          containerClassName={'pagination justify-content-center'}
          pageClassName={'page-item' }
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          breakClassName={'page-item'}
          breakLinkClassName={'page-link'}
          activeClassName={'active'}
        />
      </div>
      <Footer />
    </>
  );
};

export default SearchPage;
