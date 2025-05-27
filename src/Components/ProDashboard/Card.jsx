import React from "react";

const Card = ({heading, parameter}) => {
    return (
  <div className="bg-white rounded-2xl shadow p-6">
    <h2 className="text-lg font-semibold text-gray-700 mb-1">{heading}</h2>
    <p className="text-[#3F51B5] text-xl">{parameter}</p>
  </div>);
};
export default Card;
