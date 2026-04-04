import React from "react";
import { useContext } from "react";
import { AppContext } from "../appcontext/Appcontext";

const Searchbar = () => {
  const { darkMode, setSearch } = useContext(AppContext);
  return (
    <div
      className={
        darkMode
          ? " mx-2 md:mx-56 w-full md:w-115 rounded-xl px-3 py-2 shadow-sm bg-[#232836] focus-within:ring-2 focus-within:ring-blue-500 transition"
          : "mx-2 md:mx-56 w-full md:w-115 rounded-xl px-3 py-2 shadow-sm bg-white focus-within:ring-2 focus-within:ring-blue-500 transition"
      }
    >
      <input
        type="text"
        placeholder="Search..."
        className={
          darkMode
            ? "outline-none w-full bg-transparent text-white placeholder-gray-400 h-8  text-sm md:text-lg"
            : "outline-none w-full bg-transparent text-gray-700 placeholder-gray-400 h-8 text-sm md:text-lg placeholder:px-2"
        }
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;


