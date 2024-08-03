import React from "react";
import Capitalize from "./Capitalize";

const PokemonType = ({ typeName }) => {
  const Backgrounds = {
    normal: "bg-zinc-500",
    fire: "bg-red-500",
    fighting: "bg-orange-500",
    water: "bg-blue-500",
    flying: "bg-sky-500",
    grass: "bg-green-500",
    poison: "bg-purple-500",
    electric: "bg-yellow-500",
    ground: "bg-[#9f6941]",
    psychic: "bg-pink-500",
    rock: "bg-stone-500",
    ice: "bg-cyan-500",
    bug: "bg-lime-500",
    dragon: "bg-indigo-500",
    ghost: "bg-[#845b84]",
    dark: "bg-neutral-500",
    steel: "bg-[#60A1B8]",
    fairy: "bg-fuchsia-500",
  };

  return (
    <div
      className={`flex space-x-2 font-medium text-sm items-center bg-pink rounded-full px-4 py-[4px] ${Backgrounds[typeName]}`}
    >
      <h1>
        <Capitalize str={typeName} />
      </h1>
    </div>
  );
};

export default PokemonType;
