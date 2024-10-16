import React, { useEffect, useState } from "react";
import axios from "axios";
import Capitalize from "./Capitalize";
import { useNavigate } from "react-router-dom";
import ListItem from "./ListItem";
import Spinner from "./Spinner";

const EvolutionChain = ({ pokemonEvolution }) => {
  const [evolutionChain, setEvolutionChain] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const pokemonInfo = (pokemonName) => {
    navigate(`/pokemon/${pokemonName.toLowerCase()}`);
  };

  useEffect(() => {
    // Loading
    setLoading(true);
    const fetchEvolutions = async (chain) => {
      const fetchEvolutionData = async (species) => {
        try {
          const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${species.name}`
          );
          return response.data;
        } catch (error) {
          console.error("Error fetching evolution data:", error);
          return null;
        }
      };

      const traverseEvolutionChain = async (chain) => {
        if (!chain) return [];

        const currentEvolution = await fetchEvolutionData(chain.species);
        const evolvesTo = await Promise.all(
          chain.evolves_to.map((evolution) => traverseEvolutionChain(evolution))
        );

        return [{ ...currentEvolution, evolves_to: evolvesTo.flat() }];
      };

      const evolutionData = await traverseEvolutionChain(chain);
      setEvolutionChain(evolutionData);

      // Load Finish
      setLoading(false);
    };

    if (pokemonEvolution) {
      fetchEvolutions(pokemonEvolution.chain);
    }
  }, [pokemonEvolution]);

  const renderEvolutionChain = (chain) => {
    if (!chain || chain.length === 0) return null;

    return chain.map((evolution, index) => (
      <div
        key={index}
        className="flex flex-col items-center w-full justify-between space-y-6 z-20"
      >
        {/* <div
          className="flex flex-col justify-center items-center px-2 hover:cursor-pointer group"
          onClick={() => pokemonInfo(evolution.name)}
        >
          <div className="w-24 flex items-center justify-center group-hover:scale-110 duration-300">
            <img src={evolution.sprites?.front_default} alt={evolution.name} />
          </div>
          <h1>
            <Capitalize str={evolution.name} />
          </h1>
        </div> */}

        <ListItem pokemon={evolution} />

        {evolution.evolves_to.length > 0 && (
          <>
            <div className="flex flex-row items-center space-x-2 w-[100vw]">
              <div className="border-b-[1px] w-full border-gray-300" />
              <div className="flex items-center justify-center whitespace-nowrap font-medium">
                <h1>Evolves To</h1>
              </div>
              <div className="border-b-[1px] w-full border-gray-300" />
            </div>

            {/* <div className="grid grid-cols-[auto_auto_auto] justify-center z-20 w-full">
              {renderEvolutionChain(evolution.evolves_to)}
            </div> */}

            <div className="justify-center z-20 w-full">
              {renderEvolutionChain(evolution.evolves_to)}
            </div>
          </>
        )}
      </div>
    ));
  };

  if (loading) {
    return (
      <div className="flex w-full text-black text-xl justify-center mt-9">
        <div className="flex flex-row space-x-3 items-center">
          <Spinner />
          <h1>Loading...</h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col w-full">
        <h1 className="font-medium text-xl">Evolution Chain</h1>
        {renderEvolutionChain(evolutionChain)}
      </div>
    );
  }
};

export default EvolutionChain;
