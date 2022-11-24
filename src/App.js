import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ProfilePages from "./pages/ProfilePages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<ProfilePages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
