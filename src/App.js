import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Cards from "./components/card";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HomePage heading='E-Flight Ticket' message='lets order now, dont regret it'/>
      <Cards />
        <Routes>
          <Route path="/" />
         
        </Routes>
    </BrowserRouter>
  );
}

export default App;
