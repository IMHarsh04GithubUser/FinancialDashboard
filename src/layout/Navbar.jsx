import React from "react";
import Searchbar from "../components/Searchbar";
import Notification from "../components/Notification";
import Theme from "../components/Theme";
import Profile from "../components/Profile";
const Navbar = () => {
  return (
    <>
      <div className="navbar-container  h-fit px-30 py-1 m-5 w-full flex  items-center-safe justify-between">
        <Searchbar />
        <div className="right-container flex -mx-20">
          <Notification />
          <Theme />
          <Profile />
        </div>
      </div>
    </>
  );
};

export default Navbar;
