import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import NavbarProfile from '../components/NavbarProfile'
import { useDispatch, useSelector } from "react-redux";
import { handleSearch } from "../components/features/search/searchSlice";

import { format } from 'date-fns'
import { parse } from 'date-fns';
import ReactPaginate from 'react-paginate'

import anamLogo from '../utility/anamair.png'

const SearchPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  // const param = useParams();
  const { dep, arr, ddate, classF, size, sort, pass, page } = useParams()
  const { search } = useSelector((state) => state.search)

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

  // useEffect(() => {
  //   dispatch(handleSearch(param))
  // }, [dispatch, param])
  useEffect(() => {
    // dispatch(handleSearch(param, offset))
    dispatch(handleSearch({dep, arr, ddate, classF, page, size, sort, offset }))
  }, [dispatch, dep, arr, ddate, classF, page, size, sort, offset])

  return (
    <>
      <NavbarProfile />
      <div className="max-w-[1024px] mx-auto px-2.5 md:px-0 mt-40">
        {/* <div className="border-2 border-black items-center w-full mb-10">
          <div className="flex">
            <button className=" bg-white relative flex jutify-center items-center border focus:outline-none shadow text-white rounded focus:ring ring-gray-200 group">
                <p className="px-2.5">Waktu</p>
                <span className="border-l p-2 hover:bg-gray-100">
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"></path>
                    </svg>
                </span>
                <div className="absolute z-10 hidden group-focus:block top-full min-w-full w-max bg-white shadow-md mt-1 rounded">
                    <ul className="text-left border rounded px-4 py-6">
                        <li className="px-4 ру-1 hover:bg-gray-100 border-b" value="A">
                            <input type="checkbox">
                              
                            </input> 
                            (00:00-11:00)
                        </li>
                        <li className="px-4 ру-1 hover:bg-gray-100 border-b" value="B">
                            <input type="checkbox"></input>
                            (11:00-15:00)
                        </li>
                        <li className="px-4 ру-1 hover:bg-gray-100 border-b" value="C">
                            <input type="checkbox"></input>
                            (15:00-18:30)
                        </li>
                        <li className="px-4 ру-1 hover:bg-gray-100 border-b" value="D">
                            <input type="checkbox"></input>
                            (18:30-23:59)
                        </li>
                    </ul>
                </div>
            </button>
            <button className="relative flex jutify-center items-center bg-white border focus:outline-none shadow text-white rounded focus:ring ring-gray-200 group">
                <p className="px-2.5 ">Harga</p>
                <span className="border-l p-2 hover:bg-gray-100">
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"></path>
                    </svg>
                </span>
                <div className="absolute z-10 hidden group-focus:block top-full min-w-full w-max bg-white shadow-md mt-1 rounded">
                    <ul className="text-left border rounded px-4 py-4">
                        <li className="px-4 ру-1 hover:bg-gray-100 border-b" value="A">
                            <input
                                id="checkbox"
                                checked
                                className="pr-4"
                                type="checkbox" />
                            Harga Tertinggi
                        </li>
                        <li
                        id="checkbox"
                        checked
                        className="px-4 pt-6 ру-1 hover:bg-gray-100 border-b"
                        value="B">
                        Harga Terendah
                        </li>
                    </ul>
                </div>
            </button>
          </div>

          <button className="relative flex jutify-center items-center bg-white border focus:outline-none shadow text-white rounded focus:ring ring-gray-200 group">
              <p className="px-4">Berdasarkan</p>
              <span className="border-l p-2 hover:bg-gray-100">
              <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"></path>
              </svg>
              </span>
              <div className="absolute z-10 hidden group-focus:block top-full min-w-full w-max bg-white shadow-md mt-1 rounded">
              <ul className="text-left border rounded px-4 py-4">
                  <li className="px-4 ру-1 hover:bg-gray-100 border-b" value="A">
                    Harga Tertinggi
                  </li>
                  <li className="px-4 ру-1 hover:bg-gray-100 border-b" value="B">
                  <input type="checkbox"></input>
                    Harga Terendah
                  </li>
              </ul>
              </div>
          </button>
        </div> */}

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
                          onClick={() => navigate(`/transaksi/${item.id}/${pass}`)}
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
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={5}
          previousLabel="< previous"
          marginPagesDisplayed={2}
          containerClassName={'pagination justify-content-center'}
          pageClassName={'page-item'}
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
      {/* <div className="max-w-[1024px] mx-auto px-2.5 md:px-0 mt-40">
        {
          search && search.map((item) => (
            <div key={item.id} className="w-full mb-10 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <div className="w-full md:flex items-center justify-around p-3 md:px-10 md:py-10">
              <div className="flex items-center">
                <img
                  className="md:h-50 md:w-50 rounded-xl"
                  src="https://api.pegipegi.com/images/airlines/web/JT.png"
                  alt="maskapai" />
                <div className="font-bold text-xl md:mb-2">Anam Air</div>
              </div>
              <div className="flex justify-between md:w-2/6 items-center  mt-5 md:mt-0">
                <div className="text-lg text-center items-center">
                  <div className="font-semibold">{item.departureTime}</div>
                  <div>{`${item.flightDetail.departure.cityDetails.cityName} (${item.flightDetail.departure.airportDetails.airportCode})`}</div>
                </div>
                <div className="text-2xl">
                  <AiOutlineArrowRight />
                </div>
                <div className="text-lg text-center items-center">
                  <div className="font-semibold">{item.arrivalTime}</div>
                  <div className="bandara">{`${item.flightDetail.arrival.cityDetails.cityName} (${item.flightDetail.arrival.airportDetails.airportCode})`}</div>
                </div>
              </div>
              <div className="text-lg text-center items-center mt-5 md:mt-0">
                <div className="font-semibold">1j 30m</div>
                <div>1X Transit</div>
              </div>
              <div className="text-center mt-3">
                <div className="text-lg md:text-xl font-bold text-yellow-500">{`Rp${item.netPrice}`}</div>
                <button
                  onClick={() => navigate(`/transaksi/${item.id}/${param.pass}`)}
                  className="text-white bg-blue-600 mt-2 md:mt-5 p-1 md:p-2 rounded-md hover:bg-blue-700">
                  Pesan Tiket
                </button>
              </div>
            </div>
          </div>
          ))
        }
      </div> */}
    </>
  );
};

export default SearchPage;
