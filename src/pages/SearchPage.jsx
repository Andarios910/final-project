import React, { } from "react";
import { useNavigate } from "react-router";
import NavbarProfile from '../components/NavbarProfile'

import { AiOutlineArrowRight } from 'react-icons/ai'

const SearchPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavbarProfile />
      <div class="max-w-[1024px] mx-auto px-2.5 md:px-0 mt-40">
        <div class="w-full mb-10 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
          <div class="w-full md:flex items-center justify-around p-3 md:px-10 md:py-10">
            <div className="flex items-center">
              <img
                className="md:h-50 md:w-50 rounded-xl"
                src="https://api.pegipegi.com/images/airlines/web/JT.png"
                alt="maskapai" />
              <div class="font-bold text-xl md:mb-2">Lion Air</div>
            </div>
            <div className="flex justify-between md:w-2/6 items-center  mt-5 md:mt-0">
              <div class="text-lg text-center items-center">
                <div className="font-semibold">03:40</div>
                <div>Jakarta (CGK)</div>
              </div>
              <div className="text-2xl">
                <AiOutlineArrowRight />
              </div>
              <div class="text-lg text-center items-center">
                <div className="font-semibold">05:10</div>
                <div class="bandara">Surabaya (SUB)</div>
              </div>
            </div>
            <div class="text-lg text-center items-center mt-5 md:mt-0">
              <div className="font-semibold">1j 30m</div>
              <div>1X Transit</div>
            </div>
            <div class="text-center mt-3">
              <div class="text-lg md:text-xl font-bold text-yellow-500">Rp 895.000</div>
              <button
                onClick={() => navigate('/transaksi')}
                class="text-white bg-blue-600 mt-2 md:mt-5 p-1 md:p-2 rounded-md hover:bg-blue-700">
                Pesan Tiket
              </button>
            </div>
          </div>
        </div>

        <div class="w-full mb-10 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
          <div class="w-full md:flex items-center justify-around p-3 md:px-10 md:py-10">
            <div className="flex items-center">
              <img
                className="md:h-50 md:w-50 rounded-xl"
                src="https://api.pegipegi.com/images/airlines/web/JT.png"
                alt="maskapai" />
              <div class="font-bold text-xl md:mb-2">Lion Air</div>
            </div>
            <div className="flex justify-between md:w-2/6 items-center  mt-5 md:mt-0">
              <div class="text-lg text-center items-center">
                <div className="font-semibold">03:40</div>
                <div>Jakarta (CGK)</div>
              </div>
              <div className="text-2xl">
                <AiOutlineArrowRight />
              </div>
              <div class="text-lg text-center items-center">
                <div className="font-semibold">05:10</div>
                <div class="bandara">Surabaya (SUB)</div>
              </div>
            </div>
            <div class="text-lg text-center items-center mt-5 md:mt-0">
              <div className="font-semibold">1j 30m</div>
              <div>1X Transit</div>
            </div>
            <div class="text-center mt-3">
              <div class="text-lg md:text-xl font-bold text-yellow-500">Rp 895.000</div>
              <button
                onClick={() => navigate('/transaksi')}
                class="text-white bg-blue-600 mt-2 md:mt-5 p-1 md:p-2 rounded-md hover:bg-blue-700">
                Pesan Tiket
              </button>
            </div>
          </div>
        </div>

        <div class="w-full mb-10 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
          <div class="w-full md:flex items-center justify-around p-3 md:px-10 md:py-10">
            <div className="flex items-center">
              <img
                className="md:h-50 md:w-50 rounded-xl"
                src="https://api.pegipegi.com/images/airlines/web/JT.png"
                alt="maskapai" />
              <div class="font-bold text-xl md:mb-2">Lion Air</div>
            </div>
            <div className="flex justify-between md:w-2/6 items-center  mt-5 md:mt-0">
              <div class="text-lg text-center items-center">
                <div className="font-semibold">03:40</div>
                <div>Jakarta (CGK)</div>
              </div>
              <div className="text-2xl">
                <AiOutlineArrowRight />
              </div>
              <div class="text-lg text-center items-center">
                <div className="font-semibold">05:10</div>
                <div class="bandara">Surabaya (SUB)</div>
              </div>
            </div>
            <div class="text-lg text-center items-center mt-5 md:mt-0">
              <div className="font-semibold">1j 30m</div>
              <div>1X Transit</div>
            </div>
            <div class="text-center mt-3">
              <div class="text-lg md:text-xl font-bold text-yellow-500">Rp 895.000</div>
              <button
                onClick={() => navigate('/transaksi')}
                class="text-white bg-blue-600 mt-2 md:mt-5 p-1 md:p-2 rounded-md hover:bg-blue-700">
                Pesan Tiket
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
