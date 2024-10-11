import React from "react";
import { useNavigate } from "react-router-dom";
import navConstants from "../constants/navStrings";
import GetInTouch from "./GetInTouch";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  const navigate = useNavigate();

  const navigateToHome = () => navigate(navConstants.HOME);

  return (
    <footer className="flex flex-col md:flex-row gap-5 md:gap-20 flex-wrap justify-around  p-5 bg-green-300 ">
      <div className="flex-[1]">
        <h1 onClick={navigateToHome} className="cursor-pointer">
          LOGO
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          atque autem recusandae sint quisquam.
        </p>
      </div>
      <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:hidden" />
      <div className="flex-[1]">
        <FooterLinks />
      </div>
      <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:hidden" />
      <div className="flex-[1]">
        <GetInTouch />
      </div>
    </footer>
  );
};

export default Footer;
