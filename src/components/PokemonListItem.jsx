import React, { useEffect, useState } from "react";
import axios from "axios";
import ListItem from "./ListItem";

const PokemonListItem = ({ pokemonName }) => {
  const [pokemonData, setPokemonData] = useState([]);

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

  return (
    <div className="flex flex-col">
      {pokemonData.map((pokemon) => (
        // <div
        //   className="flex flex-row bg-slate-100 rounded-2xl items-center mt-4 w-full mx-auto justify-between hover:cursor-pointer"
        //   onClick={() => pokemonInfo(pokemon.name)}
        //   key={pokemon.name}
        // >
        //   <div className="flex flex-col space-y-2 px-6">
        //     <h1>Nº {pokemon.id}</h1>
        //     <h1 className="text-2xl font-semibold">
        //       <Capitalize str={pokemon.name} />
        //     </h1>
        //     <div className="flex flex-row space-x-4">
        //       {pokemon.types.map((type) => (
        //         <PokemonType typeName={type.type.name} />
        //       ))}
        //     </div>
        //   </div>
        //   <div className="bg-green-400 h-[132px] flex items-center w-[132px] justify-center rounded-2xl">
        //     <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        //   </div>
        // </div>
        <ListItem pokemon={pokemon} key={pokemon.id} />
      ))}
    </div>
  );
};

export default PokemonListItem;
