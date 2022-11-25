import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TransaksiPage from "./pages/TransaksiPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<TransaksiPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
