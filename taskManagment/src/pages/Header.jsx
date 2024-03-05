import React, { useState } from "react";
import logo from "../assets/logo-mobile.svg";
import iconUp from "../assets/icon-chevron-up.svg";
import iconDown from "../assets/icon-chevron-down.svg";
const Header = () => {
  const [openDropDown, setOpenDropDown] = useState(false);
  return (
    <div className="p-4 fixed left-9 bg-white dark:bg-[#2b2c37] z-50 ring-0">
      <header className="flex justify-between dark:text-white items-center">
        {/* lett side */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <img src={logo} className="h-6 w-6" alt="logo" srcset="" />
          <h3 className="hidden md:inline-block font-bold font-sans md:text-4xl">
            RahimTask
          </h3>
          <div className="flex items-center">
            <h3 className="text-xl md:text-2xl max-w-[200px] truncate">
              Board Name
            </h3>
            <img
              src={openDropDown ? iconUp : iconDown}
              alt="dropdown"
              srcset=""
              className="w-3 ml-2 md:hidden cursor-pointer "
              onClick={() => setOpenDropDown((state) => !state)}
            />
          </div>
        </div>
        {/* right side */}
        <div className="flex space-x-4 items-center md:space-x-6">
          <button className="button">+ Add New Task</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
