"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";

const About = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [language, uselanguage] = useState("english");
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
      <Link href="/about">
        <div
          id="dropdownHoverButton"
          onClick={handleDropdownClose}
          className="font-semibold px-4 py-2 bg-blue-850 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 "
        >
          {language === "english" ? (
            "About SIC"
          ) : (
            <span
              style={{
                fontSize: "1.2em",
                fontWeight: "bold",
                lineHeight: "1.5",
              }}
            >
              एसआईसी के बारे में
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
        } z-10 bg-white divide-y invisible lg:visible divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownHoverButton"
        >
          <li>
            <a
              href="/components/buttons/AboutSic/virtual_tour"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {language === "english" ? (
                "Virtual Tour"
              ) : (
                <span
                  style={{
                    fontSize: "1.1em",
                    fontWeight: "bold",
                    lineHeight: "1.5",
                  }}
                >
                  आभासी दौरा
                </span>
              )}
            </a>
          </li>
          <li>
            <a
              href="/components/buttons/AboutSic/Collaborators"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {language === "english" ? (
                "Our Collaborators"
              ) : (
                <span
                  style={{
                    fontSize: "1.1em",
                    fontWeight: "bold",
                    lineHeight: "1.5",
                  }}
                >
                  हमारे साथी
                </span>
              )}
            </a>
          </li>
          <li>
            <a
              href="/components/buttons/AboutSic/outreach_activities/outreach_activities"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {language === "english" ? (
                "Outreach Activities"
              ) : (
                <span
                  style={{
                    fontSize: "1.1em",
                    fontWeight: "bold",
                    lineHeight: "1.5",
                  }}
                >
                  आउटरीच गतिविधियाँ
                </span>
              )}
            </a>
            <a
              href="/team"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {language === "english" ? (
                "Faculty and Staff"
              ) : (
                <span
                  style={{
                    fontSize: "1.1em",
                    fontWeight: "bold",
                    lineHeight: "1.5",
                  }}
                >
                  आउटरीच गतिविधियाँ
                </span>
              )}
            </a>

            <a
              href="/training"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {language === "english" ? (
                "Training"
              ) : (
                <span
                  style={{
                    fontSize: "1.1em",
                    fontWeight: "bold",
                    lineHeight: "1.5",
                  }}
                >
                  आउटरीच गतिविधियाँ
                </span>
              )}
            </a>

            <a
              href="https://drive.google.com/file/d/1rpH2MmpYilbapkYzZpIcfUuHfsfDeHAW/view?usp=sharing"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {language === "english" ? (
                "Our Quality policy"
              ) : (
                <span
                  style={{
                    fontSize: "1.1em",
                    fontWeight: "bold",
                    lineHeight: "1.5",
                  }}
                >
                  आउटरीच गतिविधियाँ
                </span>
              )}
            </a>
            <a
              href="/help"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {language === "english" ? (
                "Help"
              ) : (
                <span
                  style={{
                    fontSize: "1.1em",
                    fontWeight: "bold",
                    lineHeight: "1.5",
                  }}
                >
                  आउटरीच गतिविधियाँ
                </span>
              )}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
