import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const SearchPage = () => {
  const [state, setState] = useState([]);
  const getData = async () => {
    try {
      const rest = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
      );
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
    <div className="">
      <div class="place-content-center grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2 md:gap-4 lg:gap-6 p-5 ">
        <div class="section-title">
          <h3 className="font-bold pb-6 ">SHOW SCHEDULE BY DATE</h3>
        </div>
        <div class="shadow-md bg-slate-100 hover:bg-slate-200 cursor-pointer text-grey-500 text-lg font-bold text-left p-6 rounded-lg">
          <div class="flight_info ">
            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6">
                <div class="flight_city ">
                  <h4 className="text-primary">Flights From</h4>
                  <div class="details">
                    Jakarta (JKT), Soekarno Hatta International Airport (CGK)
                  </div>
                </div>
              </div>
              <div class="col-xs-6 col-sm-6 col-md-6 text-right">
                <div class="flight_city">
                  <h4 class="text-primary">Flights To</h4>
                  <div class="details">
                    Surabaya (SUB), Juanda International Airport (SUB)
                  </div>
                </div>
              </div>
              <div class="col-xs-6 col-sm-6 col-md-6">
                <h4 class="title">Flights Date</h4>
                <div class="details">07-12-2022</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex space-x-2 md:space-x-4 lg:space-x-4 gap-2 md:gap-4 lg:gap-6 mb-0 absolute inset-x-12 h-1">
        <div className="text-red-600 text-left text-lg font-bold text-2xl pl-8">
          Filter:
        </div>
        <div class="dropdown-center">
          <button
            class="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            Maskapai
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item " href="#">
                Garuda Indonesia
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Batik Air
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Citilink
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Lion Air
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Super Air Jet
              </a>
            </li>
          </ul>
        </div>

        <div class="dropdown-center">
          <button
            class="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            Waktu
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item " href="#">
                Pagi(00:00 - 11:00)
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Siang(11:00 - 15:00)
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Sore(15:00 - 18:30)
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Malam(18:30 -23:59)
              </a>
            </li>
          </ul>
        </div>

        <div class="dropdown-center">
          <button
            class="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            Transit
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item " href="#">
                Semua Transit
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Langsung
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                1X Transit
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="place-content-center ">
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-3 md:gap-4 lg:gap-6 p-5">
          <div class="shadow-md place-content-center flex justify-center flex space-x-32 gap-6 md:gap-4 lg:gap-6 bg-slate-100 hover:bg-slate-200 text-grey-500 text-lg font-bold text-left p-14 rounded-lg ">
            <div class="firstMaskapai ">
              <div class="detailMaskapai ">
                <div class="maskapaiLogo  ">
                  <img
                    src="https://api.pegipegi.com/images/airlines/web/JT.png"
                    alt="JT"
                    width="70"
                    height="40"></img>
                </div>
              </div>
              <div class="clear"></div>
              <div class="second">Lion Air</div>
            </div>
            <div className="flex space-x-16 gap-2 flex justify-center">
              <div class="rute ">
                <div class="first">03:40</div>
                <div class="second">Jakarta (CGK)</div>
              </div>
              <div class="rute">
                <div class="first" data-date="2022-12-08">
                  05:10
                </div>
                <div class="second">Surabaya (SUB)</div>
              </div>
              <div class="durasi">
                <div class="first">1j 30m</div>
                <div class="second">Langsung</div>
              </div>
              <div class="bagasi">
                <img
                  src="//www.pegipegi.com/tiket-pesawat/sys/img/icon//icon-bagasi.png"
                  width="40"
                  height="40"
                  alt="weight"></img>
              </div>
              <div class="priceBottom">
                <div class="normalPrice">Rp 895.000</div>
              </div>
              <div class="buttonBuy">
                <div class="auto"></div>
                <input
                  type="submit"
                  value="Pesan Tiket Pergi"
                  class="btn btn-primary"
                  onclick="pesanTiket('Pergi', this)"></input>
              </div>
            </div>
          </div>

          <div class="shadow-md place-content-center flex justify-center flex space-x-32 gap-6 md:gap-4 lg:gap-6 bg-slate-100 hover:bg-slate-200 text-grey-500 text-lg font-bold text-left p-14 rounded-lg ">
            <div class="firstMaskapai">
              <div class="detailMaskapai ">
                <div class="maskapaiLogo ">
                  <img
                    src="https://api.pegipegi.com/images/airlines/web/JT.png"
                    alt="JT"
                    width="70"
                    height="40"></img>
                </div>
              </div>
              <div class="clear"></div>
              <div class="second">Lion Air</div>
            </div>
            <div className="flex space-x-16 gap-2 flex justify-center">
              <div class="rute ">
                <div class="first">03:40</div>
                <div class="second">Jakarta (CGK)</div>
              </div>
              <div class="rute">
                <div class="first" data-date="2022-12-08">
                  05:10
                </div>
                <div class="second">Surabaya (SUB)</div>
              </div>
              <div class="durasi">
                <div class="first">1j 30m</div>
                <div class="second">Langsung</div>
              </div>
              <div class="bagasi">
                <img
                  src="//www.pegipegi.com/tiket-pesawat/sys/img/icon//icon-bagasi.png"
                  width="40"
                  height="40"
                  alt="weight"></img>
              </div>
              <div class="priceBottom">
                <div class="normalPrice">Rp 895.000</div>
              </div>
              <div class="buttonBuy">
                <div class="auto"></div>
                <input
                  type="submit"
                  value="Pesan Tiket Pergi"
                  class="btn btn-primary"
                  onclick="pesanTiket('Pergi', this)"></input>
              </div>
            </div>
          </div>

          <div class="shadow-md place-content-center flex justify-center flex space-x-32 gap-6 md:gap-4 lg:gap-6 bg-slate-100 hover:bg-slate-200 text-grey-500 text-lg font-bold text-left p-14 rounded-lg ">
            <div class="firstMaskapai">
              <div class="detailMaskapai ">
                <div class="maskapaiLogo ">
                  <img
                    src="https://api.pegipegi.com/images/airlines/web/JT.png"
                    alt="JT"
                    width="70"
                    height="40"></img>
                </div>
              </div>
              <div class="clear"></div>
              <div class="second">Lion Air</div>
            </div>
            <div className="flex space-x-16 gap-2 flex justify-center">
              <div class="rute ">
                <div class="first">03:40</div>
                <div class="second">Jakarta (CGK)</div>
              </div>
              <div class="rute">
                <div class="first" data-date="2022-12-08">
                  05:10
                </div>
                <div class="second">Surabaya (SUB)</div>
              </div>
              <div class="durasi">
                <div class="first">1j 30m</div>
                <div class="second">Langsung</div>
              </div>
              <div class="bagasi">
                <img
                  src="//www.pegipegi.com/tiket-pesawat/sys/img/icon//icon-bagasi.png"
                  width="40"
                  height="40"
                  alt="weight"></img>
              </div>
              <div class="priceBottom">
                <div class="normalPrice">Rp 895.000</div>
              </div>
              <div class="buttonBuy">
                <div class="auto"></div>
                <input
                  type="submit"
                  value="Pesan Tiket Pergi"
                  class="btn btn-primary"
                  onclick="pesanTiket('Pergi', this)"></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
