import React from "react";
import { Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Pokemon from "./pages/Pokemon";
import PokemonList from "./pages/PokemonList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/pokemon/:pokemonName" element={<Pokemon />} />
        <Route path="/pokemonlist" element={<PokemonList />} />
      </Routes>
    </>
  );
}

export default App;
