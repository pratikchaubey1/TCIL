import { Link } from "react-router-dom";
import { useState } from "react"; // ✅ ADDED
import tcil from "../../assets/tcil.png";
import logo from "../../assets/logo-azadi.jpg";

function Navbar() {
  // ✅ ADDED (language state)
  const [lang, setLang] = useState("en");

  // ✅ ADDED (toggle function)
  const toggleLanguage = () => {
    const select = document.querySelector(".goog-te-combo");
    if (!select) return;

    const nextLang = lang === "en" ? "hi" : "en";
    select.value = nextLang;
    select.dispatchEvent(new Event("change"));
    setLang(nextLang);
  };

  return (
    <header className="w-full font-sans">
      {/* ===== TOP UTILITY BAR ===== */}
      <div className=" text-sm">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center px-4 py-1 ">
          <div className="text-sm">
            <div className="max-w-[1200px] mx-auto flex justify-between items-center px-4 py-2">
              {/* LEFT SIDE */}
              <div className="flex items-center gap-4 text-blue-700 whitespace-nowrap ">
                {/* <a href="#">Skip to main content</a>
                <a href="#">Accessibility Help</a> */}

                {/* SINGLE LANGUAGE BUTTON */}
                <button
                  onClick={toggleLanguage}
                  className="hover:underline font-semibold"
                >
                  {lang === "en" ? "हिंदी" : "English"}
                </button>

                {/* <span>A-</span>
                <span>A</span>
                <span className="px-1 py-0.5 bg-black text-white">A</span> */}
              </div>

              {/* RIGHT SIDE */}
              {/* <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Search"
                  className="border border-black py-1 px-2 text-sm rounded-sm"
                />
                <img src={logo} alt="Azadi" className="h-8" />
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* ===== LOGO BAR ===== */}
      <div className="border-b">
        <div className="max-w-[1200px] mx-auto flex items-center gap-4 px-4 py-4">
          <div className="h-14 w-14 rounded-full border-blue-700 flex items-center justify-center font-bold text-blue-700">
            <img src={tcil} alt="" />
          </div>

          <div>
            <h1 className="text-xl font-semibold text-blue-700 leading-tight">
              Telecommunications Consultants India Limited
            </h1>
            <p className="text-sm text-blue-600">
              (A Government of India Enterprise)
            </p>
          </div>
        </div>
      </div>

      {/* ===== MENU BAR ===== */}
      <nav className="bg-blue-700">
        <div className="max-w-[1200px] mx-auto px-4">
          <ul className="flex justify-end items-center text-white text-sm h-10">
            <li className="px-3 h-full flex items-center hover:bg-blue-800">
              <Link to="/"></Link>
            </li>

            <li className="px-3 h-full flex items-center hover:bg-blue-800">
              <Link to="/about">About Us</Link>
            </li>

            <li className="px-3 h-full flex items-center hover:bg-blue-800">
              <Link to="/services">Services</Link>
            </li>

            <li className="px-3 h-full flex items-center hover:bg-blue-800">
              <Link to="/business">Business Information</Link>
            </li>

            <li className="px-3 h-full flex items-center hover:bg-blue-800">
              <Link to="/tender">Tender</Link>
            </li>

            <li className="px-3 h-full flex items-center hover:bg-blue-8a00">
              <Link to="/career">Career</Link>
            </li>

            <li className="px-3 h-full flex items-center hover:bg-blue-800">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
