import React, { useState } from "react";
import navConstants from "../constants/navStrings";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as MenuBar } from "../assets/icons/menu-bar.svg";
import { ReactComponent as Close } from "../assets/icons/close.svg";
import { ReactComponent as ReadMeLogo } from "../assets/icons/readme.svg";

const navlinks = navConstants.NAVLINKS;

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();

  const navigateToHome = () => navigate(navConstants.HOME);

  return (
    <nav className="flex justify-between items-center p-5 pr-16 bg-slate-950 text-white fixed top-0 w-screen z-50">
      <div className="z-50 cursor-pointer">
        <h1
          className="heading-xl highlight flex gap-2 items-center"
          onClick={navigateToHome}
        >
          <ReadMeLogo className="fill-orange-600" />
          ReadMe
        </h1>
      </div>
      <div className="hidden md:flex justify-between items-center gap-12">
        {navlinks?.map(({ label, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `para-md ${
                isActive ? "active-route highlight" : "text-white"
              } relative after:bg-orange-600 after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
      <div className="flex justify-between items-center gap-6 md:hidden">
        <div className="lg:hidden flex items-center z-50 text-white">
          <button onClick={() => setToggleMenu(!toggleMenu)}>
            {toggleMenu ? (
              <Close className="h-6 fill-white" />
            ) : (
              <MenuBar className="h-6 fill-white" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`fixed z-40 w-full  bg-slate-950 overflow-hidden flex flex-col md:hidden gap-12 top-0 left-0 duration-700 ${
          !toggleMenu ? "h-0" : "h-full"
        }`}
      >
        <div className="px-8 py-16 pt-24">
          <div className="flex flex-col items-center gap-8 font-bold tracking-wider">
            {navlinks?.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `para-md ${
                    isActive ? "active-route highlight" : "text-white"
                  } relative after:bg-orange-600 after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
