import React from "react";
import WaveSurfer from "https://cdn.jsdelivr.net/npm/wavesurfer.js@7/dist/wavesurfer.esm.js";

const PokemonCry = ({ sound }) => {
  const wavesurfer = WaveSurfer.create({
    container: document.body,
    url: `${sound}`,
  });

  return (
    <div>
      <button onClick={() => wavesurfer.play()}>PLAY</button>
    </div>
  );
};

export default PokemonCry;
