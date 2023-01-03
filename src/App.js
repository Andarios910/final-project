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
import PaymentPage from "./pages/PaymentPage";
import Ticket from "./pages/Ticket";
import RequireAuth from "./components/RequireAuth";
import AdminPages from "./pages/AdminPages";
import UpdateEmail from "./pages/ProfilePages/UpdateEmail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* public route */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="/register" element={<RegisterPages />} />
        <Route path="/search-page/:dep/:arr/:ddate/:classF/:page/:size/:sort/:pass" element={<SearchPage />} />
        
        {/* protect */}
        <Route element={<RequireAuth allowedRoles={['ROLE_ADMIN']} />}>
          <Route path="/admin" element={<AdminPages />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={['ROLE_USERS', 'ROLE_ADMIN']} />}>
          <Route path="/user/profile" element={<ProfilePages />} />
          <Route path="/user/order-list" element={<OrderList />} />
          <Route path="/user/updateEmail" element={<UpdateEmail />} />
          <Route path="/user/order-list/detail/:id/:idBooking" element={<OrderListDetail />} />
          <Route path="/transaksi/:idTicket/:pass" element={<TransaksiPage />} />
          <Route path="/checkout/:id/:pass/:idT" element={<Checkout />}/>
          <Route path="/payment/:id/:pass/:payment" element={<PaymentPage />}/>
          <Route path="/copage/:idTicket" element={<Ticket/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
