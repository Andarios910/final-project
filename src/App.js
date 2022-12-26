import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPages from "./pages/LoginPages";
import RegisterPages from "./pages/RegisterPages";
import HomePage from "./pages/HomePage";
import ProfilePages from "./pages/ProfilePages/ProfilePages";
import OrderList from "./pages/ProfilePages/OrderList";
import OrderListDetail from "./pages/ProfilePages/OrderListDetail";
import TransaksiPage from "./pages/TransaksiPage";
import SearchPage from "./pages/SearchPage";
import Checkout from './pages/checkout';
import COpage from "./components/Ticket";
import Payment from "./pages/payment";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="/register" element={<RegisterPages />} />
        <Route path="/user/profile" element={<ProfilePages />} />
        <Route path="/user/order-list" element={<OrderList />} />
        <Route path="/user/order-list/detail/:id/:idBooking" element={<OrderListDetail />} />
        <Route path="transaksi" element={<TransaksiPage />} />
        <Route path="/search-page/:dep/:arr/:ddate/:classF/:page/:size/:sort" element={<SearchPage />} />

        <Route path="checkout" element={<Checkout/>}/>
        <Route path="payment" element={<Payment/>}/>
        <Route path="copage" element={<COpage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
