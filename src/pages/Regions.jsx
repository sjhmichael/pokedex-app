import axios from "axios";
import React, { useEffect, useState } from "react";
import Capitalize from "../components/Capitalize";
import { Navigate, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { MdCatchingPokemon } from "react-icons/md";
import RegionButton from "../components/RegionButton";

function Regions() {
  const navigate = useNavigate();
  const [region, setRegion] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/region`)
      .then((response) => {
        setRegion(response.data.results);
      })
      .catch((error) => console.log("Error fetching move data:", error));
  }, []);

  const regionInfo = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="w-full h-full flex items-center justify-center">
        <div className="max-w-[480px] w-full min-h-[700px] px-4 pt-16 overflow-clip space-y-8">
          <div className="flex flex-row mx-auto">
            <button>
              <FaArrowLeft
                size={24}
                className="fill-black"
                onClick={() => regionInfo()}
              />
            </button>
          </div>

          <div className="relative">
            <div className="absolute z-[-1] left-[55%] top-[-250px]">
              <MdCatchingPokemon
                className="fill-gray-300/30 pokeBall"
                size={300}
              />
            </div>
          </div>

          <div>
            <h1 className="font-bold text-3xl text-black text-balance mb-8">
              Regions
            </h1>

            {/* Regions list */}

            {region.map((item) => (
              <RegionButton regionName={item.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Regions;
