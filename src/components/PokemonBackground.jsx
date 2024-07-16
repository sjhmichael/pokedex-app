import React from "react";
import { MdCatchingPokemon } from "react-icons/md";

const Backgrounds = {
  normal: "bg-gradient-to-br from-zinc-400 to-zinc-100",
  fire: "bg-gradient-to-br from-red-400 to-red-100",
  fighting: "bg-gradient-to-br from-orange-400 to-orange-100",
  water: "bg-gradient-to-br from-blue-400 to-blue-100",
  flying: "bg-gradient-to-br from-sky-400 to-sky-100",
  grass: "bg-gradient-to-br from-green-400 to-green-100",
  poison: "bg-gradient-to-br from-purple-400 to-purple-100",
  electric: "bg-gradient-to-br from-yellow-400 to-yellow-100",
  ground: "bg-gradient-to-br from-amber-400 to-amber-100",
  psychic: "bg-gradient-to-br from-pink-400 to-pink-100",
  rock: "bg-gradient-to-br from-stone-400 to-stone-100",
  ice: "bg-gradient-to-br from-cyan-400 to-cyan-100",
  bug: "bg-gradient-to-br from-lime-400 to-lime-100",
  dragon: "bg-gradient-to-br from-indigo-400 to-indigo-100",
  ghost: "bg-gradient-to-br from-fuchsia-400 to-fuchsia-100",
  dark: "bg-gradient-to-br from-red-400 to-red-100",
  steel: "bg-gradient-to-br from-red-400 to-red-100",
  fairy: "bg-gradient-to-br from-red-400 to-red-100",
  stellar: "bg-gradient-to-br from-red-400 to-red-100",
};

const PokemonBackground = ({ element }) => {
  return (
    <div className="relative max-w-[480px]">
      <MdCatchingPokemon
        size={300}
        className="absolute fill-white/30 z-[-1] top-32 left-1/2"
      />
      <div
        className={`absolute left-1/2 -translate-x-1/2 h-[500px] w-full z-[-2] ${Backgrounds[element]}`}
      />
    </div>
  );
};

export default PokemonBackground;
