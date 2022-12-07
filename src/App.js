import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ProfilePages from "./pages/ProfilePages/ProfilePages";
import OrderList from "./pages/ProfilePages/OrderList";
// import OrderListDetail from "./components/profileComponent/OrderListDetail";
import OrderListDetail from "./pages/ProfilePages/OrderListDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<ProfilePages />} />
        <Route path='/user/profile' element={<ProfilePages />} />
        <Route path='/user/order-list' element={<OrderList />} />
        <Route path='/user/order-list/detail' element={<OrderListDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
