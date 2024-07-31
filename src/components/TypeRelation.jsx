import React from "react";
import Capitalize from "./Capitalize";
import Type from "./Type";

const TypeRelation = ({ type_1, type_2 }) => {
  const typeChart = {
    normal: {
      normal: 1,
      fighting: 2,
      flying: 1,
      poison: 1,
      ground: 1,
      rock: 1,
      bug: 1,
      ghost: 0,
      steel: 1,
      fire: 1,
      water: 1,
      grass: 1,
      electric: 1,
      psychic: 1,
      ice: 1,
      dragon: 1,
      dark: 1,
      fairy: 1,
    },
    fighting: {
      normal: 1,
      fighting: 1,
      flying: 2,
      poison: 1,
      ground: 1,
      rock: 0.5,
      bug: 0.5,
      ghost: 1,
      steel: 1,
      fire: 1,
      water: 1,
      grass: 1,
      electric: 1,
      psychic: 2,
      ice: 1,
      dragon: 1,
      dark: 0.5,
      fairy: 2,
    },
    flying: {
      normal: 1,
      fighting: 0.5,
      flying: 1,
      poison: 1,
      ground: 0,
      rock: 2,
      bug: 0.5,
      ghost: 1,
      steel: 1,
      fire: 1,
      water: 1,
      grass: 0.5,
      electric: 2,
      psychic: 1,
      ice: 2,
      dragon: 1,
      dark: 1,
      fairy: 1,
    },
    poison: {
      normal: 1,
      fighting: 0.5,
      flying: 1,
      poison: 0.5,
      ground: 2,
      rock: 1,
      bug: 0.5,
      ghost: 1,
      steel: 1,
      fire: 1,
      water: 1,
      grass: 0.5,
      electric: 2,
      psychic: 1,
      ice: 2,
      dragon: 1,
      dark: 1,
      fairy: 1,
    },
    ground: {
      normal: 1,
      fighting: 1,
      flying: 1,
      poison: 0.5,
      ground: 1,
      rock: 0.5,
      bug: 1,
      ghost: 1,
      steel: 1,
      fire: 1,
      water: 2,
      grass: 2,
      electric: 0,
      psychic: 2,
      ice: 1,
      dragon: 1,
      dark: 1,
      fairy: 0.5,
    },
    rock: {
      normal: 0.5,
      fighting: 2,
      flying: 0.5,
      poison: 0.5,
      ground: 2,
      rock: 1,
      bug: 1,
      ghost: 1,
      steel: 2,
      fire: 0.5,
      water: 2,
      grass: 2,
      electric: 1,
      psychic: 1,
      ice: 1,
      dragon: 1,
      dark: 1,
      fairy: 1,
    },
    bug: {
      normal: 1,
      fighting: 0.5,
      flying: 2,
      poison: 1,
      ground: 0.5,
      rock: 2,
      bug: 1,
      ghost: 1,
      steel: 1,
      fire: 2,
      water: 1,
      grass: 0.5,
      electric: 1,
      psychic: 1,
      ice: 1,
      dragon: 1,
      dark: 1,
      fairy: 1,
    },
    ghost: {
      normal: 0,
      fighting: 0,
      flying: 1,
      poison: 0.5,
      ground: 1,
      rock: 1,
      bug: 0.5,
      ghost: 2,
      steel: 1,
      fire: 1,
      water: 1,
      grass: 1,
      electric: 1,
      psychic: 1,
      ice: 1,
      dragon: 1,
      dark: 2,
      fairy: 1,
    },
    steel: {
      normal: 0.5,
      fighting: 2,
      flying: 0.5,
      poison: 0,
      ground: 2,
      rock: 0.5,
      bug: 0.5,
      ghost: 1,
      steel: 0.5,
      fire: 2,
      water: 1,
      grass: 0.5,
      electric: 1,
      psychic: 0.5,
      ice: 0.5,
      dragon: 0.5,
      dark: 1,
      fairy: 0.5,
    },
    fire: {
      normal: 1,
      fighting: 1,
      flying: 1,
      poison: 1,
      ground: 2,
      rock: 2,
      bug: 0.5,
      ghost: 1,
      steel: 0.5,
      fire: 0.5,
      water: 2,
      grass: 0.5,
      electric: 1,
      psychic: 1,
      ice: 0.5,
      dragon: 1,
      dark: 1,
      fairy: 0.5,
    },
    water: {
      normal: 1,
      fighting: 1,
      flying: 1,
      poison: 1,
      ground: 1,
      rock: 1,
      bug: 1,
      ghost: 1,
      steel: 0.5,
      fire: 0.5,
      water: 0.5,
      grass: 2,
      electric: 2,
      psychic: 1,
      ice: 0.5,
      dragon: 1,
      dark: 1,
      fairy: 1,
    },
    grass: {
      normal: 1,
      fighting: 1,
      flying: 2,
      poison: 2,
      ground: 0.5,
      rock: 1,
      bug: 2,
      ghost: 1,
      steel: 1,
      fire: 2,
      water: 0.5,
      grass: 0.5,
      electric: 0.5,
      psychic: 1,
      ice: 2,
      dragon: 1,
      dark: 1,
      fairy: 1,
    },
    electric: {
      normal: 1,
      fighting: 1,
      flying: 0.5,
      poison: 1,
      ground: 2,
      rock: 1,
      bug: 1,
      ghost: 1,
      steel: 0.5,
      fire: 1,
      water: 1,
      grass: 1,
      electric: 0.5,
      psychic: 1,
      ice: 1,
      dragon: 1,
      dark: 1,
      fairy: 1,
    },
    psychic: {
      normal: 1,
      fighting: 0.5,
      flying: 1,
      poison: 1,
      ground: 1,
      rock: 1,
      bug: 2,
      ghost: 2,
      steel: 1,
      fire: 1,
      water: 1,
      grass: 1,
      electric: 1,
      psychic: 0.5,
      ice: 1,
      dragon: 1,
      dark: 2,
      fairy: 1,
    },
    ice: {
      normal: 1,
      fighting: 2,
      flying: 1,
      poison: 1,
      ground: 1,
      rock: 2,
      bug: 1,
      ghost: 1,
      steel: 1,
      fire: 2,
      water: 1,
      grass: 1,
      electric: 1,
      psychic: 1,
      ice: 2,
      dragon: 1,
      dark: 1,
      fairy: 1,
    },
    dragon: {
      normal: 1,
      fighting: 1,
      flying: 1,
      poison: 1,
      ground: 1,
      rock: 1,
      bug: 1,
      ghost: 1,
      steel: 1,
      fire: 0.5,
      water: 0.5,
      grass: 0.5,
      electric: 0.5,
      psychic: 1,
      ice: 2,
      dragon: 2,
      dark: 1,
      fairy: 2,
    },
    dark: {
      normal: 1,
      fighting: 2,
      flying: 1,
      poison: 1,
      ground: 1,
      rock: 1,
      bug: 2,
      ghost: 0.5,
      steel: 1,
      fire: 1,
      water: 1,
      grass: 1,
      electric: 1,
      psychic: 0,
      ice: 1,
      dragon: 1,
      dark: 0.5,
      fairy: 2,
    },
    fairy: {
      normal: 1,
      fighting: 0.5,
      flying: 1,
      poison: 2,
      ground: 1,
      rock: 1,
      bug: 0.5,
      ghost: 1,
      steel: 2,
      fire: 1,
      water: 1,
      grass: 1,
      electric: 1,
      psychic: 1,
      ice: 1,
      dragon: 0,
      dark: 0.5,
      fairy: 1,
    },
  };

  const calculateEffectiveness = (attackType, defendType1, defendType2) => {
    const effectiveness1 = typeChart[defendType1][attackType];
    const effectiveness2 = defendType2 ? typeChart[defendType2][attackType] : 1;

    return effectiveness1 * effectiveness2;
  };

  const attackTypes = Object.keys(typeChart); // Get all attacking types

  const categorizedTypes = attackTypes.reduce(
    (acc, attackType) => {
      const effectiveness = calculateEffectiveness(attackType, type_1, type_2);

      if (effectiveness === 0) {
        acc.immune.push({ type: attackType, effectiveness });
      } else if (effectiveness <= 0.5) {
        acc.resistant.push({ type: attackType, effectiveness });
      } else if (effectiveness >= 2) {
        acc.weak.push({ type: attackType, effectiveness });
      } else {
        acc.normal.push({ type: attackType, effectiveness });
      }

      return acc;
    },
    { normal: [], weak: [], immune: [], resistant: [] }
  );

  return (
    <div>
      <h2 className="font-medium text-xl">Type Effectiveness</h2>

      <div className="mt-4 space-y-6">
        <div>
          <h1 className="font-bold">Damaged normally by</h1>
          <div className="grid grid-cols-3 gap-3 mt-2">
            {categorizedTypes.normal.map((entry) => (
              <Type pokemonType={entry} key={entry.type} />
            ))}
          </div>
        </div>

        <div>
          <h1 className="font-bold">Weak to</h1>
          <div className="grid grid-cols-3 gap-3 mt-2">
            {categorizedTypes.weak.map((entry) => (
              <Type pokemonType={entry} key={entry.type} />
            ))}
          </div>
        </div>

        <div>
          <h1 className="font-bold">Immune to</h1>
          <div className="grid grid-cols-3 gap-3 mt-2">
            {categorizedTypes.immune.map((entry) => (
              <Type pokemonType={entry} key={entry.type} />
            ))}
          </div>
        </div>

        <div>
          <h1 className="font-bold">Resistant to</h1>
          <div className="grid grid-cols-3 gap-3 mt-2">
            {categorizedTypes.resistant.length > 0 ? (
              categorizedTypes.resistant.map((entry) => (
                <Type pokemonType={entry} key={entry.type} />
              ))
            ) : (
              <div>None</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeRelation;
