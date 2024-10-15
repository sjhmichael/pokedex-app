import React, { useEffect, useState } from "react";
import axios from "axios";
import Capitalize from "./Capitalize";
import MoveType from "./MoveType";
import MoveCategory from "./MoveCategory";
import Spinner from "./Spinner";

const PokemonMoves = ({ moveName }) => {
  const [moves, setMoves] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMoves = async () => {
      try {
        const movePromises = moveName.map((item) => {
          setLoading(true);
          return axios.get(item.move.url);
        });

        const responses = await Promise.allSettled(movePromises);

        const validMoves = responses
          .filter((result) => result.status === "fulfilled") // Keep only successful responses
          .map((result) => result.value.data); // Extract the data from successful responses

        setMoves(validMoves);
        setLoading(false);
      } catch (error) {
        console.error("Error in PokemonMoves:", error);
      }
    };

    fetchMoves();
  }, [moveName]);

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
      <div className="flex flex-col">
        <div className="grid grid-cols-6 rounded-lg px-5 py-2 bg-gray-100 justify-between w-full font-medium mb-2">
          <h1 className="col-span-3">Move</h1>
          <h1 className="flex justify-end">Power</h1>
          <h1 className="flex justify-end">Acc.</h1>
          <h1 className="flex justify-end">PP</h1>
        </div>
        {moves.map((move) => (
          <div key={move.id}>
            <div className="grid grid-cols-6 rounded-lg px-5 justify-between w-full">
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
                <MoveCategory category={move.damage_class.name} />
              </div>
            </div>

            <div className="border-b-[1px] border-gray-300 col-span-6 my-4" />
          </div>
        ))}
      </div>
    );
  }
};

export default PokemonMoves;
