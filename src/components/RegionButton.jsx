import React from "react";
import Capitalize from "./Capitalize";
import Kanto from "../assets/Regions/1920px-PE_Kanto_Map.png";
import Alola from "../assets/Regions/Alola_USUM_artwork.png";
import Galar from "../assets/Regions/Galar_artwork.png";
import Hoenn from "../assets/Regions/Hoenn_ORAS.png";
import Johto from "../assets/Regions/JohtoMap.png";
import Kalos from "../assets/Regions/Kalos_alt.png";
import Hisui from "../assets/Regions/Legends_Arceus_Hisui.png";
import Paldea from "../assets/Regions/Paldea_artwork.png";
import Sinnoh from "../assets/Regions/Sinnoh_BDSP_artwork.png";
import Unova from "../assets/Regions/Unova_B2W2_alt.png";

const RegionButton = ({ regionName }) => {
  const Backgrounds = {
    kanto: Kanto,
    johto: Johto,
    hoenn: Hoenn,
    sinnoh: Sinnoh,
    unova: Unova,
    kalos: Kalos,
    alola: Alola,
    galar: Galar,
    hisui: Hisui,
    paldea: Paldea,
  };

  return (
    <div className="flex rounded-2xl p-8 h-28 w-full items-center font-semibold text-xl mt-4 bg-cover bg-center overflow-clip">
      <h1 className="z-10 text-white">
        <Capitalize str={regionName} />
      </h1>

      <div className="relative w-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[528px]">
          <img src={`${Backgrounds[regionName]}`} />
          <div className="bg-gradient-to-r from-gray-900/80 w-full inset-0 absolute" />
        </div>
      </div>
    </div>
  );
};

export default RegionButton;
