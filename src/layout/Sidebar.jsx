import "../index.css";
import Logo from "../components/Logo";
import SideBarContent from "../components/SideBarContent";
import Role from "../components/Role";
import { useContext } from "react";
import { AppContext } from "../appcontext/Appcontext";

const Sidebar = () => {
  const { darkMode } = useContext(AppContext);
  return (
    <div
      className={
        darkMode
          ? "bg-[#232836] h-screen w-70 py-15 rounded-r-2xl shadow-lg flex flex-col gap-10"
          : "h-screen w-70 py-15 bg-[#FFFFFF] rounded-r-2xl shadow-lg flex flex-col gap-10"
      }
    >
      <Logo />
      <div className={darkMode?"body1 w-full h-1.5":"divider w-full h-1.5 bg-gray-200 "}></div>
      <br />
      <SideBarContent />
      <Role />
    </div>
  );
};

export default Sidebar;
