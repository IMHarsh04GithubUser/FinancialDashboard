  import React from "react";
  import { CiLight } from "react-icons/ci";
  import { MdOutlineDarkMode } from "react-icons/md";
  import { useContext } from "react";
  import { AppContext } from "../appcontext/Appcontext.jsx";

  const Theme = () => {
    const { darkMode, toggleDarkMode } = useContext(AppContext);

    return (
      <>
        
        <div>
        <div className="darkmode-container p-2 flex items-center justify-end gap-2 md:gap-5">
            <div className="darkmode-icon h-10 md:h-15 w-10 md:w-15 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer">
              {darkMode ? (
                <CiLight className="text-2xl" onClick={toggleDarkMode} />
              ) : (
                <MdOutlineDarkMode
                  className="text-2xl"
                  onClick={toggleDarkMode}
                />
              )}
            </div>
          </div>
        </div>
      </>
    );
  };

  export default Theme;
