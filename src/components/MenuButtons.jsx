import React from "react";
import { MdOutlineCatchingPokemon } from "react-icons/md";

const MenuButtons = ({ label, color }) => {
  return (
    <div
      className={`flex items-center px-4 py-8 rounded-3xl text-white font-bold drop-shadow-lg overflow-clip`}
      style={{ backgroundColor: `${color}` }}
    >
      <div className="relative">
        <MdOutlineCatchingPokemon
          className="absolute top-1/2 left-1/2 translate-x-3/4 -translate-y-1/2 opacity-40 z-10"
          size={132}
        />
      </div>
      <h1 className="text-xl">{label}</h1>
    </div>
  );
};

export default MenuButtons;
