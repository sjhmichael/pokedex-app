import React, { useEffect, useState } from "react";
import Capitalize from "./Capitalize";

const PokemonMoves = ({ pokemonMoves }) => {
  return (
    <div className="flex flex-col">
      <h1 className="font-medium">Moves</h1>
      <div className="grid grid-cols-2 gap-3 mt-4">
        {pokemonMoves.map((items, index) => (
          <div key={index}>
            <Capitalize str={items.move.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonMoves;
