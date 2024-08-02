import React from "react";
import Capitalize from "./Capitalize";

const Backgrounds = {
  physical: "bg-rose-300",
  special: "bg-blue-300",
  status: "bg-neutral-300",
};

const MoveCategory = ({ category }) => {
  return (
    <h1
      className={`flex basis-4/12 justify-center rounded-lg ${Backgrounds[category]} py-1`}
    >
      <Capitalize str={category} />
    </h1>
  );
};

export default MoveCategory;
