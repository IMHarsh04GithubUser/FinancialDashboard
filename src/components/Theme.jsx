import React from "react";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";

const Theme = () => {
  return (
    <div>
      <div className="darkmode-container p-2 flex items-center justify-end gap-5">
        <div className="darkmode-icon h-15 w-15 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer"></div>
      </div>
    </div>
  );
};

export default Theme;
