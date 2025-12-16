import React from "react";
import { GiNinjaStar } from "react-icons/gi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SiGoogle } from "react-icons/si";

// Skill Icons
import { FaReact, FaNodeJs, FaDatabase, FaGithubAlt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiOpenai,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { FiExternalLink } from "react-icons/fi"; // external link icon

// Map for tech → icon
const techIcons = {
  React: <FaReact className="text-cyan-500" />,
  Tailwind: <SiTailwindcss className="text-sky-500" />,
  Node: <FaNodeJs className="text-green-600" />,
  OpenAI: <SiOpenai className="text-slate-700" />,
  MongoDB: <SiMongodb className="text-emerald-600" />,
  Express: <SiExpress className="text-slate-600" />,
  JavaScript: <SiJavascript className="text-yellow-500" />,
  Gemini: <SiGoogle className="text-blue-600" />,
};

function Herosection() {
  const skills = [
    {
      label: "JavaScript",
      path: "/JS",
      icon: <SiJavascript className="text-yellow-500" />,
    },
    {
      label: "React Js",
      path: "/React",
      icon: <FaReact className="text-cyan-500" />,
    },
    {
      label: "Node Js",
      path: "/Node",
      icon: <FaNodeJs className="text-green-600" />,
    },
    
    {
      label: "Tailwind Css",
      path: "/Tailwind",
      icon: <SiTailwindcss className="text-sky-500" />,
    },
    {
      label: "DBMS",
      path: "/DBMS",
      icon: <FaDatabase className="text-emerald-600" />,
    },
  ];

  const projects = [
    {
      title: "LEVEL",
      tag: "e-commerce",
      description:
        "An e-commerce website where users can browse and purchase sneakers, shirts, jeans, bags and more stylish fashion products.",
      tech: ["React", "Express", "Tailwind", "MongoDB"],
      repo: "https://github.com/pratikchaubey1/Level_only",
      // live: "https://your-level-live-link.com", // (optional)
    },
    {
      title: "Cyper Shop",
      tag: "Govt",
      description:
        "A government service interface where citizens can easily access and manage multiple official services. It bridges the communication gap between government and people. This project was developed as a freelance service platform.",
      tech: ["React", "Express", "Tailwind", "MongoDB"],
      live: "https://sshjk.in/",
      // repo: "https://github.com/your-username/cyper-shop",
    },
    {
      title: "Learning Web",
      tag: "Full AI Function",
      description:
        "An AI-powered exam preparation platform that uses Gemini to generate practice questions and create personalized daily study schedules, helping students stay consistent and exam-ready.",
      tech: ["React","Express", "Tailwind" ,"MongoDB",  "Gemini"],
      repo: "https://github.com/your-username/learning-web",
      // live: "https://your-learning-web-live-link.com", // (optional)
    },
    {
      title: "Life Spark",
      tag: "MLM",
      description:
        "Life Spark is a modern MLM (Multi-Level Marketing) platform designed to empower individuals with sustainable income opportunities and long-term growth.",
      tech: ["React","Express","Tailwind" ,"MongoDB",   ],
      repo: "https://github.com/pratikchaubey1/LifeSpark_Only",
      live: "http://31.97.73.66/", // (optional)
    },
  ];
   
   const UnComingProject = [
    {
      title: "Biopic Studio",
      description: "A modern studio website showcasing biopic films, creative works, team profiles and cinematic storytelling with smooth UI.",
       tech: ["React","Express","Tailwind" ,"MongoDB",   ],
    },
    {
     title: "Product Base Project",
    description:
      "A scalable product-based web application focused on performance, clean architecture and real-world business use cases.",
       tech: ["React","Express","Tailwind" ,"MongoDB",   ],
  },
  ]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
      className="mt-5 bg-white/10 flex flex-row gap-4 px-6"
    >
      {/* LEFT SIDE */}
      <div className="w-2/3 flex flex-col gap-4">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 90 }}
          className="relative bg-gradient-to-r from-gray-100 to-gray-200 shadow-xl hover:shadow-2xl hover:shadow-gray-400/40 w-full h-[300px] rounded-3xl p-10 transition-all"
        >
          <GiNinjaStar className="absolute top-4 right-4 text-3xl text-gray-500 animate-spin" />

          <h1 className="text-5xl font-bold ml-2 tracking-tight">
            Hello I am Pratik
          </h1>
          <div className="w-32 h-1 bg-gray-700 rounded-full ml-2 mb-4 mt-2" />

          <p className="ml-2 text-xl font-serif">
            A curious learner and web developer.
          </p>
          <p className="ml-2 text-xl font-serif">
            Currently working on modern UI, React and AI-based projects.
          </p>

          {/* Skills */}
          <div className="flex gap-3 mt-5 ml-2 flex-wrap">
            {skills.map(({ label, path, icon }) => (
              <motion.div key={label} whileHover={{ y: -2, scale: 1.05 }}>
                <Link to={path}>
                  <span className="flex items-center gap-1 px-4 py-1.5 bg-white text-gray-800 rounded-full text-sm shadow-md hover:bg-black hover:text-white">
                    {icon}
                    <span className="font-medium">{label}</span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <Link to="/About">
            <motion.button
              whileHover={{ x: 6 }}
              className="mt-6 ml-2 text-lg text-gray-900 font-semibold hover:underline"
            >
              Know More →
            </motion.button>
          </Link>
        </motion.div>

        {/* Bottom Cards */}
        <div className="flex flex-row gap-4">
          <motion.div className="bg-gray-100 shadow-md w-1/2 h-[360px] rounded-3xl" >
          </motion.div>

          <motion.div className="bg-gray-100 shadow-md w-1/2 h-[360px] rounded-3xl" ></motion.div>
        </div>
        
      </div>

      {/* RIGHT SIDE - FIXED COLOR CARD */}
      <motion.div
        className="w-[35%] flex justify-center items-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div className="relative bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-gray-200 flex flex-col max-h-[680px] overflow-y-auto">
          <div className="flex items-center gap-2 mb-6">
            <FaReact className="text-cyan-500 text-3xl" />
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Featured Projects
            </h2>
          </div>

          <div className="flex flex-col gap-5 pr-3">
            {projects.map((proj, index) => (
              <motion.div
                key={proj.title}
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl"
              >
                <div className="flex justify-between items-center">
                  {/* Left side — icon + title */}
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{techIcons[proj.tech[0]]}</span>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {proj.title}
                    </h3>
                  </div>

                  {/* Tag */}
                  <span className="bg-slate-900 text-white text-[11px] px-3 py-1 rounded-full">
                    {proj.tag}
                  </span>
                </div>

                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {proj.description}
                </p>

                {/* Tech chips */}
                <div className="flex gap-2 mt-3 flex-wrap">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-full text-[12px] font-medium"
                    >
                      {techIcons[t]} {t}
                    </span>
                  ))}
                </div>

                {/* Links: Repo + Open Site */}
                <div className="mt-4 flex items-center gap-4 flex-wrap">
                  {/* Repo link (only if exists) */}
                  {proj.repo && (
                    <a
                      href={proj.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[12px] font-medium text-slate-700 hover:text-black"
                    >
                      <FaGithubAlt className="text-sm" />
                      <span>View Repository</span>
                    </a>
                  )}

                  {/* Open Site (only if live link exists) */}
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[12px] font-medium text-blue-700 hover:text-blue-900"
                    >
                      <FiExternalLink className="text-sm" />
                      <span>Open Site</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Herosection;
