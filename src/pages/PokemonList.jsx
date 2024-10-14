import React, { useEffect, useState } from "react";
import { MdCatchingPokemon } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PokemonListItem from "../components/PokemonListItem";

const PokemonList = () => {
  const navigate = useNavigate();
  const [listPokemon, setlistPokemon] = useState([]);
  const [pageLimit, setPageLimit] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${pageLimit}`, {
        signal,
      })
      .then((response) => {
        setlistPokemon(response.data.results);
      })
      .catch((error) => console.log("Error fetching pokemon list", error));

    return () => controller.abort;
  }, [pageLimit]);

  const increasePageLimit = () => {
    setPageLimit((prevPageLimit) => prevPageLimit + 10);
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="max-w-[480px] w-full min-h-[700px] px-4 pt-16 overflow-clip space-y-8">
        <div className="flex flex-row mx-auto">
          <button>
            <FaArrowLeft
              size={24}
              className="fill-black"
              onClick={() => navigate("/")}
            />
          </button>
        </div>

        <div className="relative">
          <div className="absolute z-[-1] left-[55%] top-[-250px]">
            <MdCatchingPokemon
              className="fill-gray-300/30 pokeBall"
              size={300}
            />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <h1 className="font-bold text-3xl text-black text-balance mb-8">
            Pokedex
          </h1>
          {/* <ul>
            {listPokemon.map((items, index) => (
              <li key={index} className="">
                {items.name}
              </li>
            ))}
          </ul> */}
          <PokemonListItem pokemonName={listPokemon} />
          <button
            className="flex items-center justify-center w-full px-4 py-4 rounded-lg border-gray-200 border-[1px] mt-4"
            onClick={increasePageLimit}
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
