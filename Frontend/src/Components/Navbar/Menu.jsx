import React, { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { id: 1, name: "About Us", path: "/about" },
    { id: 2, name: "Services", path: "/services" },
    { id: 3, name: "Business Information", path: "/business" },
  ];

  const tenderItems = [
    { id: 1, name: "Tender (NIT) ", path: "/tender" },
    { id: 1, name: "Vender Potal ", path: "/tender" },
    { id: 1, name: "Vender Empanelment-OEM/SI/Start/-up ", path: "/tender" },
    { id: 1, name: "Integrity Pact  ", path: "/tender" },
    { id: 4, name: "List of Banned Suppliers", path: "/List" },
  ];

  return (
    <nav className="bg-blue-600 px-6 items-center justify-between">
      <ul className="flex items-center gap-8 text-white font-medium h-12">
        {menuItems.map((item) => (
          <li key={item.id} className="hover:bg-blue-700 px-3 py-2 rounded">
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}

        {/* Tender Dropdown */}
        <li className="relative px-3 py-2 rounded cursor-pointer">
          <span
            className="flex items-center gap-1 hover:bg-red-700"
            onClick={() => setOpen(!open)}
          >
            Tender
            <svg
              className="w-4 h-4 transition-transform duration-200"
              style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              viewBox="0 0 35 35"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </span>

          {open && (
            <ul className="absolute top-full left-0 mt-1 w-83 bg-white text-black shadow-lg rounded z-50">
              {tenderItems.map((item) => (
                <li
                  key={item.id}
                  className="px-4 py-3 hover:bg-blue-400"
                  onClick={() => setOpen(false)} // option click pe close
                >
                  <Link
                    to={item.path}
                    className="text-md flex items-center whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
