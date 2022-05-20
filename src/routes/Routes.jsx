import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/homepage/Homepage";
import Categories from "../pages/categories/Categories";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
