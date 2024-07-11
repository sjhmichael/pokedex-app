import React from "react";

const FlavorText = ({ str }) => {
  const text = (str) => {
    return <p className="text-sm text-gray-600">{str}</p>;
  };
  return <div>{text(str)}</div>;
};

export default FlavorText;
