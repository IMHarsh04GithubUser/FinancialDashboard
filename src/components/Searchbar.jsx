import React from "react";

const Searchbar = () => {
  return (
    <div className=" mx-45 w-1/2 rounded-xl px-3 py-2 shadow-sm bg-white focus-within:ring-2 focus-within:ring-blue-500 transition">
      <input
        type="search"
        name=""
        id=""
        placeholder="Search..."
        className="outline-none w-full bg-transparent text-gray-700 placeholder-gray-400 h-8 placeholder:text-lg placeholder:px-2"
      />
    </div>
  );
};

export default Searchbar;
