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
    <div class="bg-gray-100 w-full min-h-screen gap-4 flex-wrap flex justify-center items-center">
      <div class="w-85 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl flex space-x-12">
        <div class="flex space-x-12 py-8 m-8">
          <div>
            <img
              class="h-25 w-25 object-cover rounded-xl "
              src="https://api.pegipegi.com/images/airlines/web/JT.png"
              alt=""></img>
            <div class="font-bold text-lg mb-2">Lion Air</div>
          </div>
          <div class="m-6">
            03:40
            <div class="bandara">Jakarta (CGK)</div>
          </div>
          <div class="m-6">
            05:10
            <div class="bandara">Surabaya (SUB)</div>
          </div>
          <div class="m-6">
            1j 30m
            <div class="bandara">1X Transit</div>
          </div>
          <div class="m-8">
            <img
              class="h-35 w-30 object-cover rounded "
              src="//www.pegipegi.com/tiket-pesawat/sys/img/icon//icon-bagasi.png"
              alt=""></img>
            <div class="font-bold text-lg mb-2"></div>
          </div>

          <div class="m-3">
            <div class="text-lg font-bold text-yellow-500">
              <strong> Rp 895.000</strong>
            </div>
            <button
              role="button"
              href="#"
              class="text-white bg-blue-600 px-3 py-2 rounded-md hover:bg-blue-600">
              Pesan Tiket Pergi
            </button>
          </div>
        </div>
      </div>

      <div class="w-85 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl flex space-x-12">
        <div class="flex space-x-12 py-8 m-8">
          <div>
            <img
              class="h-25 w-25 object-cover rounded-xl "
              src="https://api.pegipegi.com/images/airlines/web/JT.png"
              alt=""></img>
            <div class="font-bold text-lg mb-2">Lion Air</div>
          </div>
          <div class="m-6">
            03:40
            <div class="bandara">Jakarta (CGK)</div>
          </div>
          <div class="m-6">
            05:10
            <div class="bandara">Surabaya (SUB)</div>
          </div>
          <div class="m-6">
            1j 30m
            <div class="bandara">1X Transit</div>
          </div>
          <div class="m-8">
            <img
              class="h-35 w-30 object-cover rounded "
              src="//www.pegipegi.com/tiket-pesawat/sys/img/icon//icon-bagasi.png"
              alt=""></img>
            <div class="font-bold text-lg mb-2"></div>
          </div>

          <div class="m-3">
            <div class="text-lg font-bold text-yellow-500">
              <strong> Rp 895.000</strong>
            </div>
            <button
              role="button"
              href="#"
              class="text-white bg-blue-600 px-3 py-2 rounded-md hover:bg-blue-600">
              Pesan Tiket Pergi
            </button>
          </div>
        </div>
      </div>

      <div class="w-85 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl flex space-x-12">
        <div class="flex space-x-12 py-8 m-8">
          <div>
            <img
              class="h-25 w-25 object-cover rounded-xl "
              src="https://api.pegipegi.com/images/airlines/web/JT.png"
              alt=""></img>
            <div class="font-bold text-lg mb-2">Lion Air</div>
          </div>
          <div class="m-6">
            03:40
            <div class="bandara">Jakarta (CGK)</div>
          </div>
          <div class="m-6">
            05:10
            <div class="bandara">Surabaya (SUB)</div>
          </div>
          <div class="m-6">
            1j 30m
            <div class="bandara">1X Transit</div>
          </div>
          <div class="m-8">
            <img
              class="h-35 w-30 object-cover rounded "
              src="//www.pegipegi.com/tiket-pesawat/sys/img/icon//icon-bagasi.png"
              alt=""></img>
            <div class="font-bold text-lg mb-2"></div>
          </div>

          <div class="m-3">
            <div class="text-lg font-bold text-yellow-500">
              <strong> Rp 895.000</strong>
            </div>
            <button
              role="button"
              href="#"
              class="text-white bg-blue-600 px-3 py-2 rounded-md hover:bg-blue-600">
              Pesan Tiket Pergi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
