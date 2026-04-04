import React from "react";
import "../index.css";
import { useContext } from "react";
import { AppContext } from "../appcontext/Appcontext";
const Profile = () => {
  const { darkMode } = useContext(AppContext);
  return (
    <div>
      <div className="profile-container p-2 flex items-center justify-end gap-2 md:gap-5">
        <div
          className={
            darkMode
              ? "profile-icon h-10 md:h-15 w-10 md:w-15 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer"
              : " profile-icon h-10 md:h-15 w-10 md:w-15 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer"
          }
        >
          <span>👤</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
