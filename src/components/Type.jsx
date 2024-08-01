import React from "react";
import Capitalize from "./Capitalize";

const Backgrounds = {
  normal: "bg-zinc-400",
  fire: "bg-red-400",
  fighting: "bg-orange-400",
  water: "bg-blue-400",
  flying: "bg-sky-400",
  grass: "bg-green-400",
  poison: "bg-purple-400",
  electric: "bg-yellow-400",
  ground: "bg-[#9f6941]",
  psychic: "bg-pink-400",
  rock: "bg-stone-400",
  ice: "bg-cyan-400",
  bug: "bg-lime-400",
  dragon: "bg-indigo-400",
  ghost: "bg-[#845b84]",
  dark: "bg-neutral-500",
  steel: "bg-[#60A1B8]",
  fairy: "bg-fuchsia-400",
};

const Type = ({ pokemonType }) => {
  return (
    <div className={`rounded-full px-4 py-1 ${Backgrounds[pokemonType.type]}`}>
      <span className="flex whitespace-nowrap justify-between">
        <Capitalize str={pokemonType.type} />
        <div className="px-2 bg-white rounded-full">
          {pokemonType.effectiveness}×
        </div>
      </span>
    </div>
  );
};

export default Type;
