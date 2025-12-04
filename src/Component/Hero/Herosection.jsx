import React from "react";
import { GiNinjaStar } from "react-icons/gi";
import { Link } from "react-router-dom";
function Herosection() {
  const skills = [
    { label: "React Js", path: "/React" },
    { label: "Node Js", path: "/Node" },
    { label: "JavaScript", path: "/JS" },
    { label: "Tailwind Css", path: "/Tailwind" },
    { label: "UI/UX", path: "/UI" },
    { label: "DBMS", path: "/DBMS" },
  ];
  return (
    <div className="mt-5 bg-white/10 flex flex-row gap-4 px-6">    
      {/* LEFT SIDE */}
      <div className="w-2/3 flex flex-col gap-4">
        {/* TOP BIG CARD */}
        <div className="relative bg-gradient-to-r from-gray-100 to-gray-200 shadow-xl hover:shadow-2xl hover:shadow-gray-400/40 w-full h-[300px] rounded-3xl p-10 transition-all">
          <GiNinjaStar className="absolute top-4 right-4 text-3xl text-gray-500 animate-spin duration-1000 ease-in-out" />

          <h1 className="text-4xl font-bold ml-2">Hello I am Pratik</h1>
          <div className="w-32 h-1 bg-gray-600 rounded-full ml-2 mb-4"></div>

          <p className="ml-2 text-lg font-serif">
            A curious learner and web developer,
          </p>
          <p className="ml-2 text-lg font-serif">
            Currently working on modern UI, React and AI-based projects.
          </p>

          <div className="flex gap-3 mt-4 ml-2 flex-wrap">
            {skills.map(({ label, path }) => (
              <Link key={label} to={path}>
                <span
                  className="
                    px-3 py-1 bg-white text-gray-700 rounded-full text-sm shadow-md
                    transition-all duration-300 cursor-pointer
                    hover:bg-black hover:text-white hover:scale-110 hover:shadow-xl
                  "
                >
                  {label}
                </span>
              </Link>
            ))}
          </div>
          <Link to='/About'>
          <button className="mt-6 ml-2 text-gray-800 font-medium hover:underline hover:tracking-wide transition-all">
            Know More →
          </button>
          </Link>
        </div>

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
