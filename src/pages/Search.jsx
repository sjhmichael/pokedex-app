import React, { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdCatchingPokemon } from "react-icons/md";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import News from "../components/News";
import MenuButtons from "../components/MenuButtons";

function Search() {
  const navigate = useNavigate();
  const query = useRef();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    navigate(`/pokemon/${query.current.value.toLowerCase()}`);
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="max-w-[480px] w-full min-h-[700px] overflow-clip relative bg-gray-100">
        <div className="px-4 pt-32 flex flex-col w-full rounded-xl pb-16 border-b-[1px] border-gray-300 bg-white drop-shadow-md">
          {/* pokemon background logo */}
          <div className="relative">
            <div className="absolute z-[-1] left-[55%] top-[-250px]">
              <MdCatchingPokemon
                className="fill-gray-300/30 pokeBall"
                size={300}
              />
            </div>
          </div>
          <h1 className="font-bold text-3xl text-black text-balance">
            What Pokemon are you looking for?
          </h1>

          <form className="text-white mt-8 relative" onSubmit={handleSubmit}>
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <FaSearch className="fill-black" size={18} />
            </div>
            <input
              ref={query}
              type="text"
              className="w-full rounded-full bg-gray-100 p-3 text-sm block pl-12 text-gray-900"
              placeholder="Search Pokemon, Moves, Abilities, etc"
            />
          </form>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <MenuButtons label={"Pokedex"} color={"#34d399"} />
            <MenuButtons label={"Moves"} color={"#f87171"} />
            <MenuButtons label={"Abilities"} color={"#0ea5e9"} />
            <MenuButtons label={"Items"} color={"#facc15"} />
            <MenuButtons label={"Locations"} color={"#6d28d9"} />
            <MenuButtons label={"Type Charts"} color={"#b45309"} />
          </div>
        </div>
        <News />
      </div>
    </div>
  );
}

export default Search;
