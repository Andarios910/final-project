import React, { } from "react";
import { useNavigate, useParams } from "react-router";
import NavbarProfile from '../components/NavbarProfile'
import { useDispatch, useSelector } from "react-redux";
import { handleSearch } from "../components/features/search/searchSlice";

import { AiOutlineArrowRight } from 'react-icons/ai'
import { useEffect } from "react";

const SearchPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const param = useParams();
  const { search } = useSelector((state) => state.search)

  useEffect(() => {
    dispatch(handleSearch(param))
  }, [dispatch, param])

  return (
    <>
      <NavbarProfile />
      <div className="max-w-[1024px] mx-auto px-2.5 md:px-0 mt-40">
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
      </div>
    </>
  );
};

export default SearchPage;
