import React, { useEffect, useState } from "react";
import axios from "axios";
import Capitalize from "./Capitalize";
import MoveType from "./MoveType";
import MoveCategory from "./MoveCategory";

const PokemonMoves = ({ moveName }) => {
  const [moves, setMoves] = useState([]);

  useEffect(() => {
    const fetchMoves = async () => {
      try {
        const request = await Promise.all(
          moveName.map((item) => {
            axios
              .get(`https://pokeapi.co/api/v2/move/${item.move.name}`)
              .then((response) =>
                setMoves((prevMoves) => [...prevMoves, response.data])
              );
          })
        );
      } catch (error) {
        console.error("Error fetching move data:", error);
      }
    };

    fetchMoves();
  }, [moveName]);

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-6 rounded-lg px-5 py-2 bg-gray-100 justify-between w-full font-medium mb-2">
        <h1 className="col-span-3">Move</h1>
        <h1 className="flex justify-end">Power</h1>
        <h1 className="flex justify-end">Acc.</h1>
        <h1 className="flex justify-end">PP</h1>
      </div>
      {moves.map((move) => (
        <div>
          <div
            key={move.id}
            className="grid grid-cols-6 rounded-lg px-5 justify-between w-full"
          >
            <h1 className="col-span-3 font-medium">
              <Capitalize str={move.name} />
            </h1>
            <h1 className="flex justify-end">
              {move.power ? move.power : "-"}
            </h1>
            <h1 className="flex justify-end">
              {move.accuracy ? move.accuracy : "-"}
            </h1>
            <h1 className="flex justify-end">{move.pp ? move.pp : "-"}</h1>

            <div className="flex justify-between col-span-6 mt-2 space-x-3">
              <MoveType type={move.type.name} />
              {/* <h1
                className={`flex basis-4/12 justify-center rounded-lg bg-gray-100 py-1`}
              >
                <Capitalize str={move.damage_class.name} />
              </h1> */}
              <MoveCategory category={move.damage_class.name} />
            </div>
          </div>

          <div className="border-b-[1px] border-gray-300 col-span-6 my-4" />
        </div>
      ))}
    </div>
  );
};

export default PokemonMoves;
