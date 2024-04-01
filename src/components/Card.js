import React from "react";

function Card({ icon, title, text }) {
  return (
    <div className="relative w-full rounded-md bg-white px-4 pb-8 pt-16">
      <div className="absolute -top-8 w-16 rounded-full bg-violet p-4 md:left-auto">
        <img src={`/images/${icon}.svg`} alt="" className="" />
      </div>
      <h2 className="mb-4 whitespace-nowrap text-xl font-bold text-gray-800">
        {title}
      </h2>
      <p className="text-sm text-gray-500">{text}</p>
    </div>
  );
}

export default Card;
