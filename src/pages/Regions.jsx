import axios from "axios";
import React, { useEffect, useState } from "react";
import Capitalize from "../components/Capitalize";
import { Navigate, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { MdCatchingPokemon } from "react-icons/md";
import Kanto from "../assets/Regions/Kanto.png";
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
      .catch((error) => console.log(error));
  }, []);

  const regionInfo = () => {
    navigate("/");
  };

  console.log(region);

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
              // <div className="flex rounded-2xl p-8 h-28 w-full items-center font-semibold text-xl mt-4 bg-cover bg-center overflow-clip">
              //   <h1 className="z-10 text-white">
              //     <Capitalize str={item.name} />
              //   </h1>

              //   <div className="relative w-full">
              //     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[528px]">
              //       <img
              //         src={
              //           "https://archives.bulbagarden.net/media/upload/thumb/7/7d/PE_Kanto_Map.png/1920px-PE_Kanto_Map.png"
              //         }
              //       />
              //       <div className="bg-gradient-to-r from-gray-900/80 w-full inset-0 absolute" />
              //     </div>
              //   </div>
              // </div>
              <RegionButton regionName={item.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Regions;
