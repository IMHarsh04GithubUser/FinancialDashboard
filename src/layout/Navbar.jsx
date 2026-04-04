import React from "react";
import { useContext } from "react";
import { AppContext } from "../appcontext/Appcontext";
import Searchbar from "../components/Searchbar";
import Notification from "../components/Notification";
import Theme from "../components/Theme";
import Profile from "../components/Profile";

const Navbar = () => {
  const { toggleSidebar } = useContext(AppContext);
  return (
    <>
      <div className="navbar-container h-fit px-4 md:px-30 py-1 m-5 w-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            onClick={toggleSidebar}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <Searchbar />
        </div>
        <div className="right-container flex -mx-4 md:-mx-20">
          <Notification />
          <Theme />
          <Profile />
        </div>
      </div>
    </>
  );
};

export default Navbar;
