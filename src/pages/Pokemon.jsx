import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Psychic from "../assets/Types/psychic.svg";
import PsychicIcon from "../components/PsychichIcon";
import { IoMdFemale, IoMdMale } from "react-icons/io";
import { RiWeightLine } from "react-icons/ri";
import { FaArrowLeft, FaRegHeart } from "react-icons/fa6";
import { AiOutlineColumnHeight } from "react-icons/ai";
import { TbPokeball } from "react-icons/tb";
import { MdCatchingPokemon } from "react-icons/md";
import Capitalize from "../components/Capitalize";

function Pokemon() {
  const [tab, setTab] = useState(0);

  const [pokemonSpecies, setPokemonSpecies] = useState(null);
  const [pokemon, setPokemon] = useState(null);
  const [eggGroup, setEggGroup] = useState([]);
  const [abilities, setAbilites] = useState([]);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/gardevoir")
      .then((response) => {
        setPokemon(response.data);
        setAbilites(response.data.abilities);
      });
  }, []);

  useEffect(() => {
    if (pokemon) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}/`)
        .then((response) => {
          setPokemonSpecies(response.data);
          setEggGroup(response.data.egg_groups);
        });
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

  const changeTab = (id) => {
    setTab(id);
  };

  console.log("info", pokemon);
  console.log("species", abilities);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[360px] overflow-clip relative border-gray-100 border-2 rounded-3xl">
        {/* background */}
        <div className="relative">
          <div>
            <MdCatchingPokemon
              size={250}
              className="absolute fill-white/30 z-[-1] top-1/2 left-1/2 -translate-x-[40px] translate-y-[180px]"
            />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 h-[500px] bg-gradient-to-br from-pink-400 to-pink-100 w-[360px] z-[-2]" />
        </div>

        {/* navbar */}
        <div className="px-4">
          <div className="flex flex-row items-center justify-between mt-8">
            <FaArrowLeft size={24} className="fill-white" />
            <FaRegHeart size={24} className="fill-white" />
          </div>

          <div className="flex flex-col mt-6 space-y-2">
            <div className="text-white flex flex-row justify-between items-end">
              <h1 className="text-3xl font-medium">
                <Capitalize str={pokemon?.name} />
              </h1>
              <h1>Nº{pokemon?.id ? pokemon.id : "-"}</h1>
            </div>

            <div className="flex flex-row space-x-2">
              <div className="flex space-x-2 font-medium text-sm items-center bg-pink rounded-full px-4 py-[4px] bg-rose-500">
                <h1>
                  <Capitalize str={pokemon?.types[0].type.name} />
                </h1>
              </div>
              {pokemon?.types[1] ? (
                <div className="flex space-x-2 font-medium text-sm items-center bg-pink rounded-full px-4 py-[4px] bg-pink-500">
                  <Capitalize str={pokemon?.types[1].type.name} />
                </div>
              ) : (
                <div className="hidden space-x-2 font-medium text-sm items-center bg-pink rounded-full px-4 py-[4px] bg-pink-500" />
              )}
            </div>
          </div>
        </div>

        {/* pokemon sprite */}
        <div className="relative w-full flex justify-center">
          <div className="absolute">
            <div>
              {pokemon && pokemon.sprites && (
                <img
                  src={pokemon.sprites.other["official-artwork"].front_default}
                  alt={pokemon.name}
                  width={250}
                />
              )}
            </div>
          </div>
        </div>

        {/* pokemon information */}
        <div className=" bg-white rounded-3xl w-full px-4 py-8 mt-[220px]">
          <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
            <ul className="flex flex-row -mb-px justify-between">
              <li
                className="me-2 inline-block text-black pb-4 border-b-2 border-blue-600 hover:cursor-pointer"
                onClick={() => setTab(0)}
              >
                About
              </li>
              <li
                className="me-2 inline-block border-b-2 pb-4 border-transparent hover:text-gray-600 hover:border-gray-300 hover:cursor-pointer"
                onClick={() => setTab(1)}
              >
                Base Stats
              </li>
              <li
                className="me-2 inline-block border-b-2 pb-4 border-transparent hover:text-gray-600 hover:border-gray-300 hover:cursor-pointer"
                onClick={() => setTab(2)}
              >
                Evolution
              </li>
              <li
                className="me-2 inline-block border-b-2 pb-4 border-transparent hover:text-gray-600 hover:border-gray-300 hover:cursor-pointer"
                onClick={() => setTab(3)}
              >
                Moves
              </li>
            </ul>
          </div>

          {/* Tab 1 */}
          <div className={tab === 0 ? "space-y-5 mt-4" : "hidden"}>
            <p className="text-sm text-gray-600">
              {pokemonSpecies
                ? pokemonSpecies?.flavor_text_entries[0].flavor_text
                : "-"}
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-6 py-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex space-x-1 text-gray-400 items-center">
                    <AiOutlineColumnHeight className="fill-gray-400" />
                    <h1 className="text-sm font-medium">Height</h1>
                  </div>
                  <h1 className="text-black mt-2 font-medium">
                    {pokemon?.height / 10} m
                  </h1>
                </div>
                <div>
                  <div className="flex space-x-1 text-gray-400 items-center">
                    <RiWeightLine className="fill-gray-400" />
                    <h1 className="text-sm font-medium">Weight</h1>
                  </div>
                  <h1 className="text-black mt-2 font-medium">
                    {pokemon?.weight / 10} kg
                  </h1>
                </div>
              </div>
              <div>
                <div className="flex space-x-1 text-gray-400 items-center">
                  <TbPokeball />
                  <h1 className="text-sm font-medium">Abilities</h1>
                </div>
                {abilities?.length > 0 && (
                  <h1 className="text-black mt-2 font-medium">
                    <Capitalize
                      str={abilities
                        ?.map((ability) => ability.ability.name)
                        .join(", ")}
                    />
                  </h1>
                )}
              </div>
            </div>

            <div className="pt-4">
              <h1 className="text-black text-xl font-medium">Breeding</h1>
              <div className="grid grid-cols-[auto_auto] gap-x-6 gap-y-3 pt-4">
                <div>
                  <h1 className="text-gray-400">Species</h1>
                </div>
                <div>
                  <h1>
                    <Capitalize str={pokemon?.species.name} />
                  </h1>
                </div>
                <div>
                  <h1 className="text-gray-400">Gender</h1>
                </div>
                <div className="flex flex-row items-center space-x-6">
                  <div className="flex flex-row items-center">
                    <IoMdFemale className="mr-1 fill-pink-400" />
                    <h1>{femaleGenderRatio(pokemonSpecies?.gender_rate)}</h1>
                  </div>
                  <div className="flex flex-row-reverse items-center">
                    <h1 className="ml-1">
                      {maleGenderRatio(pokemonSpecies?.gender_rate)}
                    </h1>
                    <IoMdMale className="fill-blue-700" />
                  </div>
                </div>
                <div>
                  <h1 className="text-gray-400">Egg Group</h1>
                </div>
                <div>
                  {eggGroup.length > 0 && (
                    <h1>{eggGroup.map((egg) => egg.name).join(", ")}</h1>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Tab 2 */}
          <div className={tab === 1 ? "space-y-5 mt-4" : "hidden"}>
            <div className="text-sm text-gray-600 flex flex-col space-y-4">
              <div className="flex flex-col space-y-4 font-medium w-full">
                <div className="flex flex-row space-x-4 items-center">
                  <div className="basis-[40%]">
                    <h1>HP</h1>
                  </div>
                  <div className="basis-[20%] text-black">
                    <h1>{pokemon?.stats[0].base_stat}</h1>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`bg-blue-600 h-2 rounded-full w-[calc((${pokemon?.stats[0].base_stat}/255)*100%)]`}
                    ></div>
                  </div>
                </div>

                <div className="flex flex-row space-x-4 items-center">
                  <div className="basis-[40%]">
                    <h1>Attack</h1>
                  </div>
                  <div className="basis-[20%] text-black">
                    <h1>{pokemon?.stats[1].base_stat}</h1>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`bg-blue-600 h-2 rounded-full w-[calc((${pokemon?.stats[1].base_stat}/255)*100%)]`}
                    ></div>
                  </div>
                </div>

                <div className="flex flex-row space-x-4 items-center">
                  <div className="basis-[40%]">
                    <h1>Defense</h1>
                  </div>
                  <div className="basis-[20%] text-black">
                    <h1>{pokemon?.stats[2].base_stat}</h1>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`bg-blue-600 h-2 rounded-full w-[calc((${pokemon?.stats[2].base_stat}/255)*100%)]`}
                    ></div>
                  </div>
                </div>

                <div className="flex flex-row space-x-4 items-center">
                  <div className="basis-[40%]">
                    <h1>Sp. Attack</h1>
                  </div>
                  <div className="basis-[20%] text-black">
                    <h1>{pokemon?.stats[3].base_stat}</h1>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`bg-blue-600 h-2 rounded-full w-[calc((${pokemon?.stats[3].base_stat}/255)*100%)]`}
                    ></div>
                  </div>
                </div>

                <div className="flex flex-row space-x-4 items-center">
                  <div className="basis-[40%]">
                    <h1>Sp. Def</h1>
                  </div>
                  <div className="basis-[20%] text-black">
                    <h1>{pokemon?.stats[4].base_stat}</h1>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`bg-blue-600 h-2 rounded-full w-[calc((${pokemon?.stats[4].base_stat}/255)*100%)]`}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-row space-x-4 items-center">
                  <div className="basis-[40%]">
                    <h1>Speed</h1>
                  </div>
                  <div className="basis-[20%] text-black">
                    <h1>{pokemon?.stats[5].base_stat}</h1>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`bg-blue-600 h-2 rounded-full w-[calc((${pokemon?.stats[5].base_stat}/255)*100%)]`}
                    ></div>
                  </div>
                </div>

                <div className="flex flex-row space-x-4 items-center">
                  <div className="basis-[40%]">
                    <h1>Total</h1>
                  </div>
                  <div className="basis-[20%] text-black">
                    <h1>{pokemon?.stats[4].base_stat}</h1>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`bg-blue-600 h-2 rounded-full w-[calc((${pokemon?.stats[4].base_stat}/255)*100%)]`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tab 3 */}
          <div className={tab === 2 ? "space-y-5 mt-4" : "hidden"}>
            <p className="text-sm text-gray-600">Placeholder 3</p>
          </div>

          {/* Tab 4 */}
          <div className={tab === 3 ? "space-y-5 mt-4" : "hidden"}>
            <p className="text-sm text-gray-600">Placeholder 4</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
