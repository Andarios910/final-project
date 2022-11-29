import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Cards from "./components/card";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HomePage heading='Find Next Place To Visit' message='lets order now, dont regret it'/>
      <Cards />
      <Contact />
      <Footer />
        {/* <Routes>
          <Route path="/" />
         
        </Routes> */}
    </BrowserRouter>
  );
}

export default App;
