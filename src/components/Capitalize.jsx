import React from "react";

const Capitalize = ({ str }) => {
  const capitalizeFirstChar = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return <div>{capitalizeFirstChar(str)}</div>;
};

export default Capitalize;
