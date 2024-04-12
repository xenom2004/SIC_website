"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";

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
            <a
              href="#"
              className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                language === "hindi" ? "font-bold" : ""
              }`}
            >
              {language === "english" ? (
                "X-ray"
              ) : (
                <span
                  style={{
                    fontSize: "1.1em",
                    fontWeight: "bold",
                    lineHeight: "1.5",
                  }}
                >
                  एक्स-रे
                </span>
              )}
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                language === "hindi" ? "font-bold" : ""
              }`}
            >
              {language === "english" ? (
                "Microscopy"
              ) : (
                <span
                  style={{
                    fontSize: "1.1em",
                    fontWeight: "bold",
                    lineHeight: "1.5",
                  }}
                >
                  माइक्रोस्कोपी
                </span>
              )}
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                language === "hindi" ? "font-bold" : ""
              }`}
            >
              {language === "english" ? (
                "Spectroscopy"
              ) : (
                <span
                  style={{
                    fontSize: "1.1em",
                    fontWeight: "bold",
                    lineHeight: "1.5",
                  }}
                >
                  स्पेक्ट्रोस्कोपी
                </span>
              )}
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                language === "hindi" ? "font-bold" : ""
              }`}
            >
              {language === "english" ? (
                "Chromatography"
              ) : (
                <span
                  style={{
                    fontSize: "1.1em",
                    fontWeight: "bold",
                    lineHeight: "1.5",
                  }}
                >
                  क्रोमैटोग्राफी
                </span>
              )}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Instruments;
