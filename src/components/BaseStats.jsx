import React, { useEffect, useState } from "react";

const BaseStats = ({ value, stat, color, totalValue }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (totalValue > 0) {
      setPercentage(Math.round((value / totalValue) * 100));
    }
  }, [value, totalValue]);

  return (
    <div className="flex flex-row space-x-4 items-center">
      <div className="basis-[40%]">
        <h1>{stat}</h1>
      </div>
      <div className="basis-[20%] text-black">
        <h1>{value}</h1>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="h-2 rounded-full"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
};

export default BaseStats;
