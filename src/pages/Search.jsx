import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdCatchingPokemon } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    navigate(`/pokemon/${query.toLowerCase()}`);
    setQuery("");
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[360px] min-h-[700px] overflow-clip relative border-gray-100 border-2 rounded-3xl">
        <div className="absolute z-[-1] left-[150px] top-[-80px]">
          <MdCatchingPokemon className="fill-gray-300/30" size={300} />
        </div>

        <div className="px-4 mt-32 flex flex-col w-full">
          <h1 className="font-bold text-3xl text-black text-balance">
            What Pokemon are you looking for?
          </h1>

          <form className="text-white mt-8 relative" onSubmit={handleSubmit}>
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <FaSearch className="fill-black" size={14} />
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              name="Search movies..."
              className="w-full rounded-full bg-gray-100 p-2 px-6 text-sm block pl-10 text-gray-900"
              placeholder="Search Pokemon, Moves, Abilities, etc"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;
