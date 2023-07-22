import React, { useEffect, useRef, useState } from "react";

const MobileMenu = ({ ismenuOpen, setMenuOpen, toggleMenu }: any) => {
  console.log("ismenuOpen:", ismenuOpen);
  const drawerRef = useRef<any>(null);

  return (
    <div
      id="modal"
      ref={drawerRef}
      className={`sm:hidden block ${
        !ismenuOpen ? " -translate-x-full" : ""
      } w-1/2 sm:w-3/12 h-screen transition ease-linear duration-100  sticky top-0 bg-red-500`}
    >
      <div className="flex relative  ">
        <button
          onClick={toggleMenu}
          className={`absolute transition ease-linear  ${
            !ismenuOpen ? "-right-10 top-2" : "right-1 top-1"
          }   `}
        >
          <img
            className={`w-8 ${!ismenuOpen ? "rotate-180" : ""}`}
            src="https://admin.zaincare.com/e526d78f94c64365705d.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
