import "../index.css";
import Logo from "../components/Logo";
import SideBarContent from "../components/SideBarContent";
import Role from "../components/Role";
import { useContext } from "react";
import { AppContext } from "../appcontext/Appcontext";

const Sidebar = () => {
  const { darkMode, sidebarOpen, toggleSidebar } = useContext(AppContext);
  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
      <div
        className={`${
          sidebarOpen ? "block" : "hidden"
        } md:block fixed md:relative z-50 md:z-auto overflow-y-auto no-scrollbar ${
          darkMode
            ? "bg-[#232836] h-screen w-64 md:w-70 py-15 rounded-r-2xl shadow-lg flex flex-col gap-10"
            : "h-screen w-64 md:w-70 py-15 bg-[#FFFFFF] rounded-r-2xl shadow-lg flex flex-col gap-10"
        }`}
      >
        <Logo />
        <div className={darkMode?"body1 w-full h-1.5":"divider w-full h-1.5 bg-gray-200 "}></div>
        <br />
        <SideBarContent />
        <Role />
      </div>
    </>
  );
};

export default Sidebar;
