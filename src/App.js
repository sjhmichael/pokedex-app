import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Pokemon from "./pages/Pokemon";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/Pokemon" element={<Pokemon />} />
      </Routes>
    </>
  );
}

export default App;
