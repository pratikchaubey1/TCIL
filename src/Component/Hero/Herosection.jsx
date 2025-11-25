import React from "react";

function Herosection() {
  return (
    <div className="mt-5 bg-white/10 flex flex-row gap-4 px-6">

      {/* LEFT SIDE */}
      <div className="w-2/3 flex flex-col gap-4">

        {/* TOP BIG CARD */}
        <div className="bg-gray-100 shadow-md w-full h-[260px] rounded-3xl"></div>

        {/* BOTTOM TWO CARDS */}
        <div className="flex flex-row gap-4">
          <div className="bg-gray-100 shadow-md w-1/2 h-[360px] rounded-3xl"></div>
          <div className="bg-gray-100 shadow-md w-1/2 h-[360px] rounded-3xl"></div>
        </div>
      </div>

      {/* RIGHT SIDE BIG CARD */}
      <div className="w-[35%]">
        <div className="bg-gray-100 shadow-md h-[630px] rounded-3xl"></div>
      </div>

    </div>
  );
}

export default Herosection;
