import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { IoMdFemale, IoMdMale } from "react-icons/io";
import { RiWeightLine } from "react-icons/ri";
import { FaArrowLeft, FaRegHeart } from "react-icons/fa6";
import { AiOutlineColumnHeight } from "react-icons/ai";
import { TbPokeball } from "react-icons/tb";
import { MdCatchingPokemon } from "react-icons/md";
import Capitalize from "../components/Capitalize";
import BaseStats from "../components/BaseStats";
import PokemonCry from "../components/PokemonCry";
import clsx from "clsx";
import PokemonBackground from "../components/PokemonBackground";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import EvolutionChain from "../components/EvolutionChain";
import PokemonMoves from "../components/PokemonMoves";

function Pokemon() {
  const [tab, setTab] = useState(0);
  const [pokemon, setPokemon] = useState(null);
  const [pokemonSpecies, setPokemonSpecies] = useState(null);
  const [evolution, setEvolution] = useState([null]);
  const [eggGroup, setEggGroup] = useState([]);
  const [abilities, setAbilites] = useState([]);
  const [stats, setStats] = useState([]);
  const { pokemonName } = useParams();
  const [moves, setMoves] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
        signal,
      })
      .then((response) => {
        setPokemon(response.data);
        setAbilites(response.data.abilities);
        setStats(response.data.stats);
        setMoves(response.data.moves);
      });

    return () => controller.abort;
  }, [pokemonName]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if (pokemon) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}/`, {
          signal,
        })
        .then((response) => {
          setPokemonSpecies(response.data);
          setEggGroup(response.data.egg_groups);
        });
    }

    return () => controller.abort;
  }, [pokemon]);

  useEffect(() => {
    if (pokemonSpecies) {
      axios
        .get(pokemonSpecies.evolution_chain.url)
        .then((response) => setEvolution(response.data));
    }
  }, [pokemonSpecies]);

  const femaleGenderRatio = (num) => {
    const percentage = (num / 8) * 100;
    return percentage + "%";
  };

  const maleGenderRatio = (num) => {
    const percentage = ((8 - num) / 8) * 100;
    return percentage + "%";
  };

  //add all stats together
  const totalStats = () => {
    const totalStat = stats
      .map((stat) => stat.base_stat)
      .reduce((acc, curr) => acc + curr, 0);
    return totalStat;
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="max-w-[480px] w-full overflow-clip relative border-gray-100 border-2 rounded-3xl">
        {/* background */}
        <PokemonBackground element={pokemon?.types[0].type.name} />

        {/* navbar */}
        <div className="px-4">
          <div className="flex flex-row items-center justify-between mt-8 ">
            <button>
              <FaArrowLeft
                size={24}
                className="fill-white"
                onClick={() => navigate("/")}
              />
            </button>
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
            <ul className="flex flex-row -mb-px justify-between mx-4">
              <li
                className={clsx(
                  "inline-block hover:cursor-pointer",
                  tab === 0
                    ? "text-black pb-4 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-600 hover:border-gray-300 hover:border-b-2"
                )}
                onClick={() => setTab(0)}
              >
                About
              </li>
              <li
                className={clsx(
                  "inline-block hover:cursor-pointer",
                  tab === 1
                    ? "text-black pb-4 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-600 hover:border-gray-300 hover:border-b-2"
                )}
                onClick={() => setTab(1)}
              >
                Base Stats
              </li>
              <li
                className={clsx(
                  "inline-block hover:cursor-pointer",
                  tab === 2
                    ? "text-black pb-4 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-600 hover:border-gray-300 hover:border-b-2"
                )}
                onClick={() => setTab(2)}
              >
                Evolution
              </li>
              <li
                className={clsx(
                  "inline-block hover:cursor-pointer",
                  tab === 3
                    ? "text-black pb-4 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-600 hover:border-gray-300 hover:border-b-2"
                )}
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
                  <div className="flex flex-row items-center">
                    <IoMdMale className="mr-1 fill-blue-700" />
                    <h1>{maleGenderRatio(pokemonSpecies?.gender_rate)}</h1>
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
                <BaseStats
                  stat={"HP"}
                  value={pokemon?.stats[0].base_stat}
                  totalValue={255}
                  color={"#f87171"}
                />
                <BaseStats
                  stat={"Attack"}
                  value={pokemon?.stats[1].base_stat}
                  totalValue={255}
                  color={"#22c55e"}
                />
                <BaseStats
                  stat={"Defense"}
                  value={pokemon?.stats[2].base_stat}
                  totalValue={255}
                  color={"#f87171"}
                />
                <BaseStats
                  stat={"Sp. Attack"}
                  value={pokemon?.stats[3].base_stat}
                  totalValue={255}
                  color={"#22c55e"}
                />
                <BaseStats
                  stat={"Sp. Def"}
                  value={pokemon?.stats[4].base_stat}
                  totalValue={255}
                  color={"#f87171"}
                />
                <BaseStats
                  stat={"Speed"}
                  value={pokemon?.stats[5].base_stat}
                  totalValue={255}
                  color={"#22c55e"}
                />
                <BaseStats
                  stat={"Total"}
                  value={totalStats()}
                  totalValue={1530}
                  color={"#f87171"}
                />
              </div>
            </div>
          </div>

          {/* Tab 3 */}
          <div className={tab === 2 ? "space-y-5 mt-4" : "hidden"}>
            <EvolutionChain pokemonEvolution={evolution} />
          </div>

          {/* Tab 4 */}
          <div className={tab === 3 ? "space-y-5 mt-4" : "hidden"}>
            <PokemonMoves pokemonMoves={moves} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
