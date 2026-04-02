import React from "react";
import Logo from "../components/Logo";
import SideBarContent from "../components/SideBarContent";
import Role from "../components/Role";

const Sidebar = () => {
  return (
    <div className="h-screen w-70 py-15 bg-[#FFFFFF] rounded-r-2xl shadow-lg flex flex-col gap-10">
      <Logo />
      <div className="divider w-full h-1.5 bg-gray-200 "></div>
      <br />
      <SideBarContent />
      <Role />
    </div>
  );
};

export default Sidebar;
