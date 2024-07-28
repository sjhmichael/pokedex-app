import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const DamageRelation = ({ type }) => {
  const [pokemonType, setPokemonType] = useState([]);

  useEffect(() => {
    if (type) {
      axios.get(`https://pokeapi.co/api/v2/type/${type}`).then((response) => {
        setPokemonType(response.data);
      });
    }
  }, [type]);

  console.log(pokemonType);

  return (
    <div>
      <h1 className="text-black text-xl font-medium">Type Defenses</h1>

      <div className="flex flex-col space-y-4 mt-4">
        <div>
          <h1>Double Damage From</h1>
          {pokemonType.damage_relations?.double_damage_from.map(
            (items, index) => (
              <div key={index}>{items.name}</div>
            )
          )}
        </div>

        <div className="">
          <h1>Double Damage To</h1>
          {pokemonType.damage_relations?.double_damage_to.map(
            (items, index) => (
              <div key={index}>{items.name}</div>
            )
          )}
        </div>

        <div className="">
          <h1>Half Damage From</h1>
          {pokemonType.damage_relations?.half_damage_from.map(
            (items, index) => (
              <div key={index}>{items.name}</div>
            )
          )}
        </div>

        <div className="">
          <h1>Half Damage To</h1>
          {pokemonType.damage_relations?.half_damage_to.map((items, index) => (
            <div key={index}>{items.name}</div>
          ))}
        </div>

        <div className="">
          <h1>No Damage From</h1>
          {pokemonType.damage_relations?.no_damage_from.map((items, index) => (
            <div key={index}>{items.name}</div>
          ))}
        </div>

        <div className="">
          <h1>No Damage To</h1>
          {pokemonType.damage_relations?.no_damage_to.map((items, index) => (
            <div key={index}>{items.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DamageRelation;
