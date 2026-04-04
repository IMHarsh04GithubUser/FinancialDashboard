import React from "react";

const Notification = () => {
  return (
    <div>
    <div className="notifications-container p-2 flex items-center justify-end gap-2 md:gap-5">
        <div className="notification-icon h-10 md:h-15 w-10 md:w-15 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer">
          🔔
        </div>
      </div>
    </div>
  );
};

export default Notification;
