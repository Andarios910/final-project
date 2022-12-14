import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import COpage from "./pages/COPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<COpage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
