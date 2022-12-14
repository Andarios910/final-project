import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const SearchPage = () => {
  const [state, setState] = useState([]);
  const getData = async () => {
    try {
      const rest = await axios.get("");
      console.log(rest);
      setState(rest.data.meals);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div class="text-justify flex flex-col-reverse bg-gray-100 w-full min-h-screen gap-2 flex-wrap flex justify-center items-center pt-3">
      <div class="box-content mt:max-w-[1024] w-85 p-2 pt-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl flex space-x-12">
        <div class="space-x-12 gap-2 py-8 m-8 pt-4 pr-2 pl-5 flex flex-row justify-around flex-wrap">
          <div>
            <img
              class="h-50 w-50 object-cover rounded-xl flex-wrap"
              src="https://api.pegipegi.com/images/airlines/web/JT.png"
              alt=""></img>
            <div class="font-bold text-xl mb-2">Lion Air</div>
          </div>
          <div class="text-lg flex flex-row items-center m-2 flex-wrap">
            <div>03:40</div>
            <div>Jakarta (CGK)</div>
          </div>
          <div class="text-lg flex flex-row items-center m-2 flex-wrap">
            <div>05:10</div>
            <div class="bandara">Surabaya (SUB)</div>
          </div>
          <div class="text-lg flex flex-row items-center m-2 flex-wrap">
            <div>1j 30m</div>
            <div>1X Transit</div>
          </div>
          <div class="mt-3 items-center flex-wrap ">
            <div class="text-2xl font-bold text-yellow-500">Rp 895.000</div>
            <button
              role="button"
              href="#"
              class="text-white bg-blue-600 px-2 py-2 rounded-md hover:bg-blue-700">
              Pesan Tiket Pergi
            </button>
          </div>
        </div>
      </div>

      <div class="mt:max-w-[1024] w-85 p-2 pt-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl flex space-x-12">
        <div class="space-x-12 gap-2 py-8 m-8 pt-4 pr-2 pl-5 flex flex-row justify-around flex-wrap">
          <div>
            <img
              class="h-50 w-50 object-cover rounded-xl flex-wrap"
              src="https://api.pegipegi.com/images/airlines/web/JT.png"
              alt=""></img>
            <div class="font-bold text-xl mb-2">Lion Air</div>
          </div>
          <div class="text-lg flex flex-row items-center m-2 flex-wrap">
            <div>03:40</div>
            <div>Jakarta (CGK)</div>
          </div>
          <div class="text-lg flex flex-row items-center m-2 flex-wrap">
            <div>05:10</div>
            <div class="bandara">Surabaya (SUB)</div>
          </div>
          <div class="text-lg flex flex-row items-center m-2 flex-wrap">
            <div>1j 30m</div>
            <div>1X Transit</div>
          </div>
          <div class="mt-3 items-center flex-wrap">
            <div class="text-2xl font-bold text-yellow-500">Rp 895.000</div>
            <button
              role="button"
              href="#"
              class="text-white bg-blue-600 px-2 py-2 rounded-md hover:bg-blue-700">
              Pesan Tiket Pergi
            </button>
          </div>
        </div>
      </div>

      <div class="mt:max-w-[1024] w-85 p-2 pt-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl flex space-x-12">
        <div class="space-x-12 gap-2 py-8 m-8 pt-4 pr-2 pl-5 flex flex-row justify-around flex-wrap">
          <div>
            <img
              class="h-50 w-50 object-cover rounded-xl flex-wrap"
              src="https://api.pegipegi.com/images/airlines/web/JT.png"
              alt=""></img>
            <div class="font-bold text-xl mb-2">Lion Air</div>
          </div>
          <div class="text-lg flex flex-row items-center m-2 flex-wrap">
            <div>03:40</div>
            <div>Jakarta (CGK)</div>
          </div>
          <div class="text-lg flex flex-row items-center m-2 flex-wrap">
            <div>05:10</div>
            <div class="bandara">Surabaya (SUB)</div>
          </div>
          <div class="text-lg flex flex-row items-center m-2 flex-wrap">
            <div>1j 30m</div>
            <div>1X Transit</div>
          </div>
          <div class="mt-3 items-center flex-wrap">
            <div class="text-2xl font-bold text-yellow-500">Rp 895.000</div>
            <button
              role="button"
              href="#"
              class="text-white bg-blue-600 px-2 py-2 rounded-md hover:bg-blue-700">
              Pesan Tiket Pergi
            </button>
          </div>
        </div>
      </div>

      <div class="mt:max-w-[1024] w-85 p-2 pt-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl flex space-x-12">
        <div class="space-x-12 gap-2 py-8 m-8 pt-4 pr-2 pl-5 flex flex-row justify-around flex-wrap">
          <div>
            <img
              class="h-50 w-50 object-cover rounded-xl flex-wrap"
              src="https://api.pegipegi.com/images/airlines/web/JT.png"
              alt=""></img>
            <div class="font-bold text-xl mb-2">Lion Air</div>
          </div>
          <div class="text-lg flex flex-row items-center m-2 flex-wrap">
            <div>03:40</div>
            <div>Jakarta (CGK)</div>
          </div>
          <div class="text-lg flex flex-row items-center m-2 flex-wrap">
            <div>05:10</div>
            <div class="bandara">Surabaya (SUB)</div>
          </div>
          <div class="text-lg flex flex-row items-center m-2 flex-wrap">
            <div>1j 30m</div>
            <div>1X Transit</div>
          </div>
          <div class="mt-3 items-center flex-wrap">
            <div class="text-2xl font-bold text-yellow-500">Rp 895.000</div>
            <button
              role="button"
              href="#"
              class="text-white bg-blue-600 px-2 py-2 rounded-md hover:bg-blue-700">
              Pesan Tiket Pergi
            </button>
          </div>
        </div>
      </div>

      <div class="mt:max-w-[1024] w-85 p-2 pt-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl flex space-x-12">
        <div class="space-x-12 gap-2 py-8 m-8 pt-4 pr-2 pl-5 flex flex-row justify-around flex-wrap">
          <div>
            <img
              class="h-50 w-50 object-cover rounded-xl flex-wrap"
              src="https://api.pegipegi.com/images/airlines/web/JT.png"
              alt=""></img>
            <div class="font-bold text-xl mb-2">Lion Air</div>
          </div>
          <div class="text-lg flex flex-row items-center m-2 flex-wrap">
            <div>03:40</div>
            <div>Jakarta (CGK)</div>
          </div>
          <div class="text-lg flex flex-row items-center m-2 flex-wrap">
            <div>05:10</div>
            <div class="bandara">Surabaya (SUB)</div>
          </div>
          <div class="text-lg flex flex-row items-center m-2 flex-wrap">
            <div>1j 30m</div>
            <div>1X Transit</div>
          </div>
          <div class="mt-3 items-center flex-wrap">
            <div class="text-2xl font-bold text-yellow-500">Rp 895.000</div>
            <button
              role="button"
              href="#"
              class="text-white bg-blue-600 px-2 py-2 rounded-md hover:bg-blue-700">
              Pesan Tiket Pergi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
