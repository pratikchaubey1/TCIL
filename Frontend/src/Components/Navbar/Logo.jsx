import React from "react";
import tcil from "../../assets/tcil.png";

function Logo() {
  return (
    <div className="flex items-center gap-3 py-10 px-40">
      {/* Logo */}
      <img src={tcil} alt="TCIL Logo" className="h-16 w-auto" />

      {/* Text Section */}
      <div className="flex flex-col">
        <h1 className="text-2xl text-blue-600 font-semibold">
          Telecommunications Consultants India Limited
        </h1>
        <p className="text-xl text-blue-600">
          (A Government of India Enterprise)
        </p>
      </div>
    </div>
  );
}

export default Logo;
