"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";

const instrumentData = {
  "X-ray": [
    { title: "SCXRD", link: "/instruments/1" },
    { title: "PXRD", link: "/instruments/2" },
    {title: "EXAFS",link:"/instruments/3"},
    { title: "EDS/EDX", link: "/instruments/4" },
    { title: "WDS/WDX", link: "/instruments/5" },
  ],
  Microscopy: [
    { title: "FE-SEM", link: "/instruments/sem" },
    { title: "CLSM", link: "/instruments/tem" },
    { title: "AFM" , link: "/instruments/afm"},
    { title: "TIRM" , link: "/intruments/TIRM"}
  ],
  Spectroscopy: [
    { title: "NMR 500", link: "/instruments/uv-vis" },
    { title: "NMR 400", link: "/instruments/ir" },
    { title: "FT-IR", link: "/instruments/ft-ir" },
    { title: "TCSPC",link: "/instruments/tcspc"},
    { title: "CD",link: "/instruments/cd"},
    { title: "PL" , link: "/instruments/pl"},
    { title: "UV-VS" , link: "/instruments/uv-vs"},
    { title: "NIR" , link: "/instruments/xrd"},
    { title: "SF" , link: "/instruments/sf"},
  ],
  Chromatography: [
    { title: "HR-MS", link: "/instruments/gc" },
    { title: "HPLC-RP", link: "/instruments/lc" },
  ],
};

const InstrumentDropdown = ({ title, language, nestedItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href="#"
        className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
          language === "hindi" ? "font-bold" : ""
        }`}
      >
        {language === "english" ? title : <span>{/* Hindi text */}</span>}
      </a>
      {isOpen && (
        <div className="absolute left-full top-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {nestedItems.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.link}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Instruments = ({ language }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownOpen = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleDropdownOpen}
      onMouseLeave={handleDropdownClose}
    >
      <Link href="/instruments">
        <div
          id="dropdownHoverButton"
          onClick={handleDropdownClose}
          className="font-semibold px-4 py-2 bg-blue-850 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 "
        >
          {language === "english" ? (
            "Instruments"
          ) : (
            <span
              style={{
                fontSize: "1.2em",
                fontWeight: "bold",
                lineHeight: "1.5",
              }}
            >
              उपकरण
            </span>
          )}
        </div>
      </Link>

      {/* Dropdown menu */}
      <div
        id="dropdownHover"
        ref={dropdownRef}
        className={`absolute top-full left-0 ${
          isDropdownOpen ? "block" : "hidden"
        } z-10 bg-white divide-y invisible lg:visible divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownHoverButton"
        >
          <li>
            <InstrumentDropdown
              title="X-ray"
              language={language}
              nestedItems={instrumentData["X-ray"]}
            />
          </li>
          <li>
            <InstrumentDropdown
              title="Microscopy"
              language={language}
              nestedItems={instrumentData.Microscopy}
            />
          </li>
          <li>
            <InstrumentDropdown
              title="Spectroscopy"
              language={language}
              nestedItems={instrumentData.Spectroscopy}
            />
          </li>
          <li>
            <InstrumentDropdown
              title="Chromatography"
              language={language}
              nestedItems={instrumentData.Chromatography}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Instruments;