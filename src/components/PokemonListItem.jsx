import React, { useEffect, useState } from "react";
import axios from "axios";
import Capitalize from "./Capitalize";
import { Navigate, useNavigate } from "react-router-dom";
import PokemonType from "./PokemonType";

const PokemonListItem = ({ pokemonName }) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        await Promise.all(
          pokemonName.map((item) => {
            axios
              .get(`${item.url}`)
              .then((response) =>
                setPokemonData((prevData) => [...prevData, response.data])
              );
          })
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemonData();
  }, [pokemonName]);

  const pokemonInfo = (pokemonName) => {
    navigate(`/pokemon/${pokemonName.toLowerCase()}`);
  };

  console.log(pokemonData);

  return (
    <div className="flex flex-col">
      {pokemonData.map((pokemon) => (
        <div
          className="flex flex-row bg-slate-100 rounded-lg items-center mt-4 px-4 py-4 w-full mx-auto justify-between hover:cursor-pointer"
          onClick={() => pokemonInfo(pokemon.name)}
          key={pokemon.name}
        >
          <div className="flex flex-col space-y-2">
            <h1>Nº {pokemon.id}</h1>
            <h1 className="text-2xl font-semibold">
              <Capitalize str={pokemon.name} />
            </h1>
            <div className="flex flex-row space-x-4">
              {pokemon.types.map((type) => (
                <PokemonType typeName={type.type.name} />
              ))}
            </div>
          </div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      ))}
    </div>
  );
};

export default PokemonListItem;
