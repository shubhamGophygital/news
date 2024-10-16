import React from "react";
import { useNavigate } from "react-router-dom";
import navConstants from "../constants/navStrings";
import GetInTouch from "./GetInTouch";
import FooterLinks from "./FooterLinks";
import { ReactComponent as ReadMeLogo } from "../assets/icons/readme.svg";

const Footer = () => {
  const navigate = useNavigate();

  const navigateToHome = () => navigate(navConstants.HOME);

  return (
    <footer className="flex flex-col md:flex-row gap-5 md:gap-20 flex-wrap justify-around  p-5 bg-slate-950 text-white">
      <div className="flex-1">
        <h1
          className="heading-xl highlight flex gap-2 items-center mb-2 cursor-pointer"
          onClick={navigateToHome}
        >
          <ReadMeLogo className="fill-orange-600" />
          ReadMe
        </h1>
        <p className="para-sm text-white">Stay Informed, Stay Ahead.</p>
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
