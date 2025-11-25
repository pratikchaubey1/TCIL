import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Aboutme from "./Aboutme";
import MenuSection from "./MenuSection";

function Navbar() {
  return (
    <nav className="font-poppins bg-white/90 justify-between text-gray-900 overflow-x-hidden ">
      <div className=" w-full h-20 z-50 transition-colors duration-500 bg-transparent">
        
        {/* Left + Center + Right container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-3 flex justify-between items-center relative">

          {/* LEFT — About me */}
          <div className="absolute left-4 sm:left-6 top-4 sm:top-6 z-10">
            <Aboutme />
          </div>

          {/* CENTER — Logo */}
          <div className="mx-auto">
            <Logo />
          </div>

          {/* RIGHT — Menu Section */}
          <div className="absolute right-4 sm:right-6 top-4 sm:top-6 z-10">
            <MenuSection />
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
