import React from "react";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { BsCircle } from "react-icons/bs";

const SearchPage = () => {
  return (
    <div>
      <div>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home"></Nav.Link>
              <Nav.Link href="#features"></Nav.Link>
              <Nav.Link href="#pricing"></Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="cari penerbangan"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Container>
        </Navbar>
      </div>
      <div className="flex justify-center">
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="dark" />
      </div>

      <div className="py-4 mx-60 gap-x-8">
        <Card body>
          <div className="flex items-center justify-between  bg-white rounded-md p-6">
            <div>
              <div className="flex justify-between items-center px-5">
                <img
                  className=" w-10"
                  src="https://ik.imagekit.io/tvlk/image/imageResource/2015/12/17/1450350497772-d343e9b6823d18054324b818b999c394.png?tr=q-75"
                  alt="nam-air"
                />
                <h1 className="px-5 text-xl font-medium">ANAM AIR</h1>
                <div className="">
                  <p>18.30</p>
                  <p>Jakarta</p>
                </div>
                <div className="text-center">
                  <p>2h 30m</p>
                  <div className="flex justify-between items-center">
                    <BsCircle />
                    <div className="w-28 border-t border-black"></div>
                    <BsCircle />
                  </div>
                </div>
                <div className="text-right">
                  <p>20.30</p>
                  <p>Jogja</p>
                </div>
              </div>
            </div>
            <div className="px-5">
              <h1 className="text-xl font-medium">
                <span className="text-orange-600">Rp 1.150.000/</span>org
              </h1>
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-10 py-2 rounded-lg">
                Pilih
              </button>
            </div>
          </div>
        </Card>
      </div>

      <div className="py-0 mx-60">
        <Card body>
          <div className="flex items-center justify-between  bg-white rounded-md p-6">
            <div>
              <div className="flex justify-between items-center px-5">
                <img
                  className=" w-10"
                  src="https://ik.imagekit.io/tvlk/image/imageResource/2015/12/17/1450350497772-d343e9b6823d18054324b818b999c394.png?tr=q-75"
                  alt="nam-air"
                />
                <h1 className="px-5 text-xl font-medium">ANAM AIR</h1>
                <div className="">
                  <p>18.30</p>
                  <p>Jakarta</p>
                </div>
                <div className="text-center">
                  <p>1h 5m</p>
                  <div className="flex justify-between items-center">
                    <BsCircle />
                    <div className="w-28 border-t border-black"></div>
                    <BsCircle />
                  </div>
                </div>
                <div className="text-right">
                  <p>19.30</p>
                  <p>Bandung</p>
                </div>
              </div>
            </div>
            <div className="px-5">
              <h1 className="text-xl font-medium">
                <span className="text-orange-600">Rp 1.150.000/</span>org
              </h1>
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-10 py-2 rounded-lg">
                Pilih
              </button>
            </div>
          </div>
        </Card>
      </div>

      <div className="py-4 mx-60">
        <Card body>
          <div className="flex items-center justify-between  bg-white rounded-md p-6">
            <div>
              <div className="flex justify-between items-center px-5">
                <img
                  className=" w-10"
                  src="https://ik.imagekit.io/tvlk/image/imageResource/2015/12/17/1450350497772-d343e9b6823d18054324b818b999c394.png?tr=q-75"
                  alt="nam-air"
                />
                <h1 className="px-5 text-xl font-medium">ANAM AIR</h1>
                <div className="">
                  <p>18.30</p>
                  <p>Jakarta</p>
                </div>
                <div className="text-center">
                  <p>2h 30m</p>
                  <div className="flex justify-between items-center">
                    <BsCircle />
                    <div className="w-28 border-t border-black"></div>
                    <BsCircle />
                  </div>
                </div>
                <div className="text-right">
                  <p>20.30</p>
                  <p>Jogja</p>
                </div>
              </div>
            </div>
            <div className="px-5">
              <h1 className="text-xl font-medium">
                <span className="text-orange-600">Rp 1.150.000/</span>org
              </h1>
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-10 py-2 rounded-lg">
                Pilih
              </button>
            </div>
          </div>
        </Card>
      </div>

      <div className="py-0 mx-60">
        <Card body>
          <div className="flex items-center justify-between  bg-white rounded-md p-6">
            <div>
              <div className="flex justify-between items-center px-5">
                <img
                  className=" w-10"
                  src="https://ik.imagekit.io/tvlk/image/imageResource/2015/12/17/1450350497772-d343e9b6823d18054324b818b999c394.png?tr=q-75"
                  alt="nam-air"
                />
                <h1 className="px-5 text-xl font-medium">ANAM AIR</h1>
                <div className="">
                  <p>18.30</p>
                  <p>Jakarta</p>
                </div>
                <div className="text-center">
                  <p>2h 30m</p>
                  <div className="flex justify-between items-center">
                    <BsCircle />
                    <div className="w-28 border-t border-black"></div>
                    <BsCircle />
                  </div>
                </div>
                <div className="text-right">
                  <p>20.30</p>
                  <p>Jogja</p>
                </div>
              </div>
            </div>
            <div className="px-5">
              <h1 className="text-xl font-medium">
                <span className="text-orange-600">Rp 1.150.000/</span>org
              </h1>
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-10 py-2 rounded-lg">
                Pilih
              </button>
            </div>
          </div>
        </Card>
      </div>

      <div className="py-4 mx-60">
        <Card body>
          <div className="flex items-center justify-between  bg-white rounded-md p-6">
            <div>
              <div className="flex justify-between items-center px-5">
                <img
                  className=" w-10"
                  src="https://ik.imagekit.io/tvlk/image/imageResource/2015/12/17/1450350497772-d343e9b6823d18054324b818b999c394.png?tr=q-75"
                  alt="nam-air"
                />
                <h1 className="px-5 text-xl font-medium">ANAM AIR</h1>
                <div className="">
                  <p>18.30</p>
                  <p>Jakarta</p>
                </div>
                <div className="text-center">
                  <p>2h 30m</p>
                  <div className="flex justify-between items-center">
                    <BsCircle />
                    <div className="w-28 border-t border-black"></div>
                    <BsCircle />
                  </div>
                </div>
                <div className="text-right">
                  <p>20.30</p>
                  <p>Jogja</p>
                </div>
              </div>
            </div>
            <div className="px-5">
              <h1 className="text-xl font-medium">
                <span className="text-orange-600">Rp 1.150.000/</span>org
              </h1>
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-10 py-2 rounded-lg">
                Pilih
              </button>
            </div>
          </div>
        </Card>
      </div>

      <div className="py-0 mx-60">
        <Card body>
          <div className="flex items-center justify-between  bg-white rounded-md p-6">
            <div>
              <div className="flex justify-between items-center px-5">
                <img
                  className=" w-10"
                  src="https://ik.imagekit.io/tvlk/image/imageResource/2015/12/17/1450350497772-d343e9b6823d18054324b818b999c394.png?tr=q-75"
                  alt="nam-air"
                />
                <h1 className="px-5 text-xl font-medium">ANAM AIR</h1>
                <div className="">
                  <p>18.30</p>
                  <p>Jakarta</p>
                </div>
                <div className="text-center">
                  <p>2h 30m</p>
                  <div className="flex justify-between items-center">
                    <BsCircle />
                    <div className="w-28 border-t border-black"></div>
                    <BsCircle />
                  </div>
                </div>
                <div className="text-right">
                  <p>20.30</p>
                  <p>Jogja</p>
                </div>
              </div>
            </div>
            <div className="px-5">
              <h1 className="text-xl font-medium">
                <span className="text-orange-600">Rp 1.150.000/</span>org
              </h1>
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-10 py-2 rounded-lg">
                Pilih
              </button>
            </div>
          </div>
        </Card>
      </div>

      <div className="py-4 mx-60">
        <Card body>
          <div className="flex items-center justify-between  bg-white rounded-md p-6">
            <div>
              <div className="flex justify-between items-center px-5">
                <img
                  className=" w-10"
                  src="https://ik.imagekit.io/tvlk/image/imageResource/2015/12/17/1450350497772-d343e9b6823d18054324b818b999c394.png?tr=q-75"
                  alt="nam-air"
                />
                <h1 className="px-5 text-xl font-medium">ANAM AIR</h1>
                <div className="">
                  <p>18.30</p>
                  <p>Jakarta</p>
                </div>
                <div className="text-center">
                  <p>2h 30m</p>
                  <div className="flex justify-between items-center">
                    <BsCircle />
                    <div className="w-28 border-t border-black"></div>
                    <BsCircle />
                  </div>
                </div>
                <div className="text-right">
                  <p>20.30</p>
                  <p>Jogja</p>
                </div>
              </div>
            </div>
            <div className="px-5">
              <h1 className="text-xl font-medium">
                <span className="text-orange-600">Rp 1.150.000/</span>org
              </h1>
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-10 py-2 rounded-lg">
                Pilih
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SearchPage;
