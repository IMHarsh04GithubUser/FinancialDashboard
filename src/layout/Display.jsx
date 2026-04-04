import React from "react";
import {Outlet} from 'react-router-dom'

const Display = () => {
  return (
    <div className="display-container h-fit w-96 bg-[#F5F5F5] rounded-xl shadow-lg m-auto  ">
      <Outlet />
    </div>
  );
};

export default Display;
