import React, { useEffect, useState } from "react";

const EvolutionChain = ({ pokemonSpecies, pokemonEvolution }) => {
  const [evolution, setEvolution] = useState(null);

  useEffect(() => {
    if (pokemonEvolution) {
      setEvolution(pokemonEvolution);
    }
  }, [pokemonEvolution]);

  console.log("evolution", pokemonEvolution);
  console.log(evolution);

  return (
    <div className="flex flex-col">
      {evolution && evolution.chain && evolution.chain.evolves_to[0] && (
        <>
          <h1>Evolves to {evolution.chain.evolves_to[0].species.name}</h1>

          {evolution.chain.evolves_to[0].evolves_to[0] && (
            <h1>
              Evolves to{" "}
              {evolution.chain.evolves_to[0].evolves_to[0].species.name}
            </h1>
          )}
          {evolution.chain.evolves_to[0].evolves_to[1] && (
            <h1>
              Evolves to{" "}
              {evolution.chain.evolves_to[0].evolves_to[1].species.name}
            </h1>
          )}
        </>
      )}
    </div>
  );
};

export default EvolutionChain;
