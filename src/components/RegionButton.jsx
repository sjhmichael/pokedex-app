import React from "react";
import Capitalize from "./Capitalize";

const RegionButton = ({ regionName }) => {
  const Backgrounds = {
    kanto:
      "https://archives.bulbagarden.net/media/upload/thumb/7/7d/PE_Kanto_Map.png/1920px-PE_Kanto_Map.png",
    johto: "https://archives.bulbagarden.net/media/upload/6/64/JohtoMap.png",
    hoenn: "https://archives.bulbagarden.net/media/upload/8/85/Hoenn_ORAS.png",
    sinnoh:
      "https://archives.bulbagarden.net/media/upload/0/08/Sinnoh_BDSP_artwork.png",
    unova:
      "https://archives.bulbagarden.net/media/upload/f/fc/Unova_B2W2_alt.png",
    kalos: "https://archives.bulbagarden.net/media/upload/8/8a/Kalos_alt.png",
    alola:
      "https://archives.bulbagarden.net/media/upload/0/0b/Alola_USUM_artwork.png",
    galar:
      "https://archives.bulbagarden.net/media/upload/c/ce/Galar_artwork.png",
    hisui:
      "https://archives.bulbagarden.net/media/upload/2/22/Legends_Arceus_Hisui.png",
    paldea:
      "https://archives.bulbagarden.net/media/upload/f/fd/Paldea_artwork.png",
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
