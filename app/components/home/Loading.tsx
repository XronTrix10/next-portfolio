import React from "react";

function card() {
  return (
    <div className="animate-pulse flex h-40 flex-col justify-between">
      <div className="">
        <div className="h-6 bg-[#414141] text-xl font-semibold mb-6 red-text rounded-lg"></div>
        <div className="h-2 m-2 bg-[#414141] text-md rounded-lg"></div>
        <div className="h-2 mr-6 ml-2 bg-[#414141] text-md rounded-lg"></div>
        <div className="h-2 mr-10 m-2 bg-[#414141] text-md rounded-lg"></div>

      </div>
      <p className="text-gray-400 bottom-0 hover:text-white">Click to View</p>
    </div>
  );
}

export default card;
