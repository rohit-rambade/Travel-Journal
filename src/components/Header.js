import React from "react";
import headerlogo from "../data/images/header-logo.png";

const Header = () => {
  return (
    <nav className="bg-red-400 flex space-x-2 items-center p-3 justify-center font-Poppins">
      <img src={headerlogo} alt="header-logo" className="w-6 h-6" />
      <h1 className="text-white">my travel journal.</h1>
    </nav>
  );
};

export default Header;
