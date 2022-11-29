import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPages from "./pages/LoginPages";
import RegisterPages from "./pages/RegisterPages";

import HomePage from "./pages/HomePage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="login" element={<LoginPages />} />
        <Route path="register" element={<RegisterPages />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
