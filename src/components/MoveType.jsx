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

const MoveType = ({ type }) => {
  return (
    <div
      className={`flex basis-8/12 rounded-lg ${Backgrounds[type]} px-5 py-1`}
    >
      <h1 className="flex w-full justify-center">
        <Capitalize str={type} />
      </h1>
    </div>
  );
};

export default MoveType;
