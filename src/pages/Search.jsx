import React, { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdCatchingPokemon } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import News from "../components/News";

function Search() {
  const navigate = useNavigate();
  const query = useRef();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    navigate(`/pokemon/${query.current.value.toLowerCase()}`);
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      <div className="max-w-[480px] w-full min-h-[700px] overflow-clip relative border-gray-200 border-2">
        <div className="absolute z-[-1] left-[55%] top-[-120px]">
          <MdCatchingPokemon className="fill-gray-300/30" size={300} />
        </div>

        <div className="px-4 pt-32 flex flex-col w-full rounded-xl pb-24 border-b-[1px] border-gray-300 bg-white drop-shadow-md">
          <h1 className="font-bold text-3xl text-black text-balance">
            What Pokemon are you looking for?
          </h1>

          <form className="text-white mt-8 relative" onSubmit={handleSubmit}>
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <FaSearch className="fill-black" size={14} />
            </div>
            <input
              ref={query}
              type="text"
              name="Search movies..."
              className="w-full rounded-full bg-gray-100 p-3 px-6 text-sm block pl-10 text-gray-900"
              placeholder="Search Pokemon, Moves, Abilities, etc"
            />
          </form>
        </div>
        <News />
      </div>
    </div>
  );
}

export default Search;
