import React from "react";

const Profile = () => {
  return (
    <div>
      <div className="profile-container p-2 flex items-center justify-end gap-5">
        <div className="profile-icon h-15 w-15 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer">
          <span>👤</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
