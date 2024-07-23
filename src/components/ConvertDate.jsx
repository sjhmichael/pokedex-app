import React from "react";

const ConvertDate = ({ dateString }) => {
  const convertDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };

  return <div>{convertDate(dateString)}</div>;
};

export default ConvertDate;
