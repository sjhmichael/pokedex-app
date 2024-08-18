import React from "react";
import Capitalize from "./Capitalize";
import PokemonType from "./PokemonType";
import { useNavigate } from "react-router-dom";

const ListItem = ({ pokemon }) => {
  const navigate = useNavigate();

  const pokemonInfo = (pokemonName) => {
    navigate(`/pokemon/${pokemonName}`);
  };

  const Backgrounds = {
    normal: "bg-zinc-100",
    fire: "bg-red-100",
    fighting: "bg-orange-100",
    water: "bg-blue-100",
    flying: "bg-sky-100",
    grass: "bg-green-100",
    poison: "bg-purple-100",
    electric: "bg-yellow-100",
    ground: "bg-[#ece0d8]",
    psychic: "bg-pink-100",
    rock: "bg-stone-100",
    ice: "bg-cyan-100",
    bug: "bg-lime-100",
    dragon: "bg-indigo-100",
    ghost: "bg-fuchsia-100",
    dark: "bg-neutral-100",
    steel: "bg-[#dceaef]",
    fairy: "bg-fuchsia-100",
  };

  const SpriteBackgrounds = {
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
    dark: "bg-neutral-400",
    steel: "bg-[#60A1B8]",
    fairy: "bg-fuchsia-400",
  };

  return (
    <div
      className={`flex flex-row ${
        Backgrounds[pokemon.types[0].type.name]
      } rounded-2xl items-center mt-4 w-full mx-auto justify-between hover:cursor-pointer`}
      onClick={() => pokemonInfo(pokemon.name)}
      key={pokemon.name}
    >
      <div className="flex flex-col space-y-2 px-6">
        <h1>Nº {pokemon.id}</h1>
        <h1 className="text-2xl font-semibold">
          <Capitalize str={pokemon.name} />
        </h1>
        <div className="flex flex-row space-x-2">
          {pokemon.types.map((type) => (
            <PokemonType typeName={type.type.name} />
          ))}
        </div>
      </div>
      <div
        className={`${
          SpriteBackgrounds[pokemon.types[0].type.name]
        } h-[132px] flex items-center w-[132px] justify-center rounded-2xl`}
      >
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
    </div>
  );
};

export default ListItem;
