import React from "react";
import { useNavigate } from "react-router-dom";
import navConstants from "../constants/navStrings";
import GetInTouch from "./GetInTouch";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  const navigate = useNavigate();

  const navigateToHome = () => navigate(navConstants.HOME);

  return (
    <footer className="flex flex-col md:flex-row gap-5 md:gap-20 flex-wrap justify-around  p-5 bg-slate-950 text-white">
      <div className="flex-1">
        <h1
          onClick={navigateToHome}
          className="cursor-pointer heading-lg highlight mb-2"
        >
          ReadMe
        </h1>
        <p className="para-sm text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          atque autem recusandae sint quisquam.
        </p>
      </div>
      <hr className="divider md:hidden" />
      <div className="flex-1">
        <FooterLinks />
      </div>
      <hr className="divider md:hidden" />
      <div className="flex-1">
        <GetInTouch />
      </div>
    </footer>
  );
};

export default Footer;
