import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Checkout from './pages/checkout'
import COpage from "./pages/COPage";
import Payment from "./pages/payment";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Checkout/>}/>
        <Route path="checkout" element={<Checkout/>}/>
        <Route path="payment" element={<Payment/>}/>
        <Route path="copage" element={<COpage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
