import React, { useState, useEffect } from "react";
import axios from "axios";
import { ImBriefcase } from "react-icons/im";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Modal from "react-bootstrap/Modal";

const SearchPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const url =
    "https://anam-air.herokuapp.com/api/schedule/get/all/search/default?departure=Jakarta&arrival=Denpasar&date=2022-12-24&class=BUSINESS&page=0&size=2&sort=departureTime,asc";
  const getAllSchedule = () => {
    axios.get(`$(url)schedule`);
  };
  useEffect(() => {
    getAllSchedule();
  }, []);

  return (
    <div class="bg-gray-100 w-full min-h-screen gap-4 flex-wrap flex justify-center items-center pb-48">
      <div class="max-w-[384x] flex flex-col flex-wrap justify-start">
        {""}
        <div class="font-semibold text-lg my-2">
          Result :
          <div class=" ring ring-gray-200 hover:ring-blue-400 max-w-[384x]  p-2 bg-red-100 rounded transform transition-all hover:shadow-lg cursor-pointer">
            <div class="max-w-[384x] flex space-x-1 max-w-[750x] flex-wrap justify-center items-center">
              <div class="px-4">
                <img
                  class="h-50 w-70 object-cover rounded-xl "
                  src="https://api.pegipegi.com/images/airlines/web/JT.png"
                  alt=""></img>
                <div class="font-bold text-2xl">Lion Air</div>
              </div>
              <div class="flex flex-wrap justify-start ">
                <div class="m-6 flex-col">
                  03:40
                  <div class="bandara">Jakarta(CGK)</div>
                </div>
                <div class="m-6">
                  05:10
                  <div class="bandara">Surabaya (SUB)</div>
                </div>
              </div>
              <div class="flex flex-wrap justify-start">
                <div class="m-6 gap-8">
                  1h30m
                  <div class="bandara flex flex-wrap">Langsung</div>
                </div>
              </div>

              <div class="flex flex-wrap justify-start">
                <div class="m-6">
                  <div class="line-through text-red-700">IDR 1.250.000</div>
                  <div class="bandara text-2xl text-blue-600 font-bold flex flex-start text-shadow-lg">
                    IDR 895.000
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap justify-start gap-2 px-2">
                <button
                  class="text-white border-blue-600 bg-blue-600 px-4 py-1 items-center rounded hover:bg-blue-500 "
                  onClick={handleShow}>
                  Search
                </button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Ubah Penerbangan</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Row>
                        <Col>
                          <label>Dari</label>
                          <Form.Control placeholder="Jakarta" />
                        </Col>
                        <Col>
                          <label>Ke</label>
                          <Form.Control placeholder="Bali" />
                        </Col>

                        <Col>
                          <label>Pergi</label>
                          <Form.Control id="date" value="2022-12-24" />
                        </Col>
                        <Col>
                          <label>Dewasa</label>
                          <Form.Control placeholder="1" />
                        </Col>
                      </Row>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <button class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-2 rounded">
                      Search Penerbangan
                    </button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </div>
        </div>{" "}
        <div class="flex flex-wrap justify-start">
          <div class="px-2 flex justify-start items-center py-4">Filter:</div>
          <div class="flex flex-wrap items-center">
            <DropdownButton id="dropdown-basic-button" title="Waktu">
              <Dropdown class="items-center flex flex-wrap justify-start items-center m-3">
                <section class="ml-1 " data-filter="condition">
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="Semua Waktu"
                      id="condition-checkbox"></input>
                    <label
                      class="form-check-label text-uppercase small text-muted"
                      for="condition-checkbox">
                      Semua Waktu
                    </label>
                  </div>

                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="pagi"
                      id="condition-checkbox2"></input>
                    <label
                      class="form-check-label text-uppercase small text-muted"
                      for="condition-checkbox2">
                      Pagi
                    </label>
                  </div>

                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="siang"
                      id="condition-checkbox3"></input>
                    <label
                      class="form-check-label text-uppercase small text-muted"
                      for="condition-checkbox3">
                      Siang
                    </label>
                  </div>

                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="Sore"
                      id="condition-checkbox4"></input>
                    <label
                      class="form-check-label text-uppercase small text-muted"
                      for="condition-checkbox4">
                      Sore
                    </label>
                  </div>

                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="malam"
                      id="condition-checkbox4"></input>
                    <label
                      class="form-check-label text-uppercase small text-muted"
                      for="condition-checkbox4">
                      Malam
                    </label>
                  </div>
                </section>
              </Dropdown>
            </DropdownButton>

            <div class="flex flex-wrap justify-start items-center m-2">
              <DropdownButton id="dropdown-basic-button" title="Harga">
                <Dropdown.ItemText class="items-center flex flex-wrap justify-start items-center m-3">
                  <section class="ml-1 " data-filter="condition">
                    <div class="form-check mb-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="Semua Waktu"
                        id="condition-checkbox"></input>
                      <label
                        class="form-check-label text-uppercase small text-muted"
                        for="condition-checkbox">
                        Semua Harga
                      </label>
                    </div>

                    <div class="form-check mb-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="pagi"
                        id="condition-checkbox2"></input>
                      <label
                        class="form-check-label text-uppercase small text-muted"
                        for="condition-checkbox2">
                        Harga Tertinggi
                      </label>
                    </div>

                    <div class="form-check mb-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="siang"
                        id="condition-checkbox3"></input>
                      <label
                        class="form-check-label text-uppercase small text-muted"
                        for="condition-checkbox3">
                        Harga Menengah
                      </label>
                    </div>

                    <div class="form-check mb-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="Sore"
                        id="condition-checkbox4"></input>
                      <label
                        class="form-check-label text-uppercase small text-muted"
                        for="condition-checkbox4">
                        Harga Terendah
                      </label>
                    </div>
                  </section>
                </Dropdown.ItemText>
              </DropdownButton>
            </div>
          </div>
          <div class="sort flex flex-wrap justify-start items-center">
            <div class="flex flex-wrap justify-start items-center mr-2">
              sort by:
            </div>
            <DropdownButton
              id="dropdown-baskic-button"
              title="Berdasaran"
              class="flex flex-wrap justify-center m-3">
              <Dropdown.Item href="#/action-1">Waktu</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Harga</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
        <div class=" ring ring-gray-200 hover:ring-blue-400 max-w-[384x]  p-2 bg-white rounded transform transition-all hover:shadow-lg cursor-pointer">
          <div class="max-w-[384x] flex space-x-1 max-w-[750x] flex-wrap justify-center items-center py-4">
            <div class="px-4">
              <img
                class="h-50 w-70 object-cover rounded-xl "
                src="https://api.pegipegi.com/images/airlines/web/JT.png"
                alt=""></img>
              <div class="font-bold text-2xl">Lion Air</div>
            </div>
            <div class="flex flex-wrap justify-start ">
              <div class="m-6 flex-col">
                03:40
                <div class="bandara">Jakarta(CGK)</div>
              </div>
              <div class="m-6">
                05:10
                <div class="bandara">Surabaya (SUB)</div>
              </div>
            </div>
            <div class="flex flex-wrap justify-start">
              <div class="m-6 gap-8">
                1h30m
                <div class="bandara flex flex-wrap">Langsung</div>
              </div>
            </div>
            <div class="flex flex-wrap justify-start">
              <div class="m-6">
                <div class="relative flex flex-col items-center group">
                  <div class="text-4xl text-amber-400">
                    <ImBriefcase />
                  </div>
                  <div class="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex">
                    <span class="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
                      Max Bagasi 20 Kg
                    </span>
                    <div class="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap justify-start gap-4 px-2">
              <div class="m-6">
                <div class="line-through text-red-700">IDR 1.250.000</div>
                <div class="bandara text-2xl text-blue-600 font-bold flex flex-start text-shadow-lg">
                  IDR 895.000
                </div>
              </div>
            </div>
            <div class="flex flex-wrap justify-start gap-2 px-2">
              {" "}
              <button class="text-white bg-blue-600 px-8 py-2 font-bold rounded hover:bg-blue-500 ">
                Choose
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
