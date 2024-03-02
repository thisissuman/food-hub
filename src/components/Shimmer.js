import React from "react";

const Shimmer = () => {
  return (
    <div className="relative shadow-md bg-white rounded-md h-56 overflow-hidden w-80 mx-auto m-10">
      <div className="animate-pulse bg-gray-400 h-40 w-50"></div>
      <div className="p-8">
        <div className="animate-pulse bg-gray-300 h-6 w-full mb-4 rounded-full"></div>
        <div className="animate-pulse bg-gray-300 h-6 w-2/5 mb-4 rounded-full"></div>

        <div className="animate-pulse bg-gray-300 h-4 w-full my-6 rounded-full"></div>
        <div className="animate-pulse bg-gray-300 h-4 w-full my-2 rounded-full"></div>
        <div className="animate-pulse bg-gray-300 h-4 w-full my-2 rounded-full"></div>
        <div className="animate-pulse bg-gray-300 h-4 w-full my-2 rounded-full"></div>
        <div className="animate-pulse bg-gray-300 h-4 w-2/5 my-2 rounded-full"></div>
      </div>
    </div>
  );
};

export default Shimmer;
