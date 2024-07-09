import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Psychic from "../assets/Types/psychic.svg";
import PsychicIcon from "../components/PsychichIcon";
import { IoMdFemale, IoMdMale } from "react-icons/io";
import { RiWeightLine } from "react-icons/ri";
import { AiOutlineColumnHeight } from "react-icons/ai";

function Pokemon() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonSpecies, setPokemonSpecies] = useState(null);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/gardevoir")
      .then((response) => setPokemon(response.data));
  }, []);

  useEffect(() => {
    if (pokemon) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}/`)
        .then((response) => setPokemonSpecies(response.data));
    }
  }, [pokemon]);

  const femaleGenderRatio = (num) => {
    const percentage = (num / 8) * 100;
    return percentage + "%";
  };

  const maleGenderRatio = (num) => {
    const percentage = ((8 - num) / 8) * 100;
    return percentage + "%";
  };

  console.log(pokemon);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[360px] p-4 overflow-clip relative pt-28 border-gray-100 border-2">
        {/* background */}
        <div className="h-full w-full relative">
          <img
            src={Psychic}
            className="fill-slate-50 absolute z-[-1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-[90px]"
            width={170}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[320px] aspect-square rounded-full bg-gradient-to-br from-pink-500 to-pink-200 w-[450px] z-[-2]" />
        </div>

        <div className="space-y-5 mt-4">
          <div className="w-full flex justify-center">
            <div>
              {pokemon && pokemon.sprites && (
                <img
                  src={pokemon.sprites.other["official-artwork"].front_default}
                  alt={pokemon.name}
                  width={200}
                />
              )}
            </div>
            {/* <div>
            {pokemon && pokemon.sprites && (
                <img src={pokemon.sprites.back_default} alt={pokemon.name} />
                )}
                </div> */}
          </div>

          <div className="text-black">
            <h1 className="text-3xl font-medium">
              {pokemon?.name.toUpperCase()}
            </h1>
            <h1>Nº{pokemon?.id ? pokemon.id : "-"}</h1>
          </div>

          <div className="flex flex-row space-x-4">
            <div className="flex space-x-2 font-medium text-sm items-center bg-pink rounded-full px-4 py-[4px] bg-rose-500">
              <div className="p-[4px] bg-white rounded-full">
                <PsychicIcon className="fill-rose-500" />
              </div>
              <h1>
                {pokemon?.types[0]
                  ? pokemon?.types[0].type.name.toUpperCase()
                  : "NA"}
              </h1>
            </div>
            <div className="flex space-x-2 font-medium text-sm items-center bg-pink rounded-full px-4 py-[4px] bg-pink-500">
              <div className="p-[4px] bg-white rounded-full">
                <PsychicIcon className="fill-pink-500" />
              </div>
              <h1>{pokemon?.types[1] ? pokemon?.types[1].type.name : "NA"}</h1>
            </div>
          </div>

          <p className="text-sm text-gray-600">
            {pokemonSpecies
              ? pokemonSpecies?.flavor_text_entries[0].flavor_text
              : "-"}
          </p>

          <div className="border-t border-gray-200 w-full" />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex space-x-1 text-gray-500 items-center">
                <AiOutlineColumnHeight className="fill-gray-500" />
                <h1 className="text-sm font-medium">HEIGHT</h1>
              </div>
              <div className="p-4 py-2 border-gray-200 border-2 rounded-2xl flex justify-center mt-1">
                <h1 className="text-black text-xl">{pokemon?.height / 10} m</h1>
              </div>
            </div>
            <div>
              <div className="flex space-x-1 text-gray-500 items-center">
                <RiWeightLine className="fill-gray-500" />
                <h1 className="text-sm font-medium">WEIGHT</h1>
              </div>
              <div className="p-4 py-2 border-gray-200 border-2 rounded-2xl flex justify-center mt-1">
                <h1 className="text-black text-xl">
                  {pokemon?.weight / 10} kg
                </h1>
              </div>
            </div>
          </div>

          <div className="flex w-full justify-center flex-col items-center">
            <h1 className="font-medium text-gray-500">GENDER</h1>
            <div className="w-full flex flex-row">
              <div className="w-full">
                <div className="w-full h-2 rounded-full bg-pink-400 mt-2"></div>
                <div className="flex flex-row items-center mt-1">
                  <IoMdFemale className="mr-1" />
                  <h1>{femaleGenderRatio(pokemonSpecies?.gender_rate)}</h1>
                </div>
              </div>
              <div className="w-full">
                <div className="w-full h-2 rounded-full bg-blue-700 mt-2"></div>
                <div className="flex flex-row-reverse items-center mt-1">
                  <h1 className="ml-1">
                    {maleGenderRatio(pokemonSpecies?.gender_rate)}
                  </h1>
                  <IoMdMale />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <h1 className="font-medium text-2xl">Weaknesses</h1>
          </div>
          <div className="w-full">
            <h1 className="font-medium text-2xl">Evolutions</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
