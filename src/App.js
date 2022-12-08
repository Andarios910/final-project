import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import OrderListDetail from "./pages/ProfilePages/OrderListDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OrderListDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
