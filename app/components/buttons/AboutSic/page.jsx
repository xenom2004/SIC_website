"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useTranslation } from "../../../TranslationalContext";

  
const About = (prop) => {
  const { translate, setLanguage } = useTranslation();

  const language=prop.language
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
      <Link href="/about">
        <div
          id="dropdownHoverButton"
          onClick={handleDropdownClose}
          className="font-semibold px-4 py-2 bg-blue-850 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 "
        >
          {
            <span
              style={{
                fontSize: "1.2em",
                fontWeight: "bold",
                lineHeight: "1.5",
              }}
            >
              {translate("temp1")} 
              
            </span>
          }
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
             
              
                <span
                  style={{
                    fontSize: "1.1em",
                    fontWeight: "bold",
                    lineHeight: "1.5",
                  }}
                >
                 {translate("temp84")} 
                </span>
              
            </a>
          </li>
          <li>
            <a
              href="/components/buttons/AboutSic/Collaborators"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
             
                <span
                  style={{
                    fontSize: "1.1em",
                    fontWeight: "bold",
                    lineHeight: "1.5",
                  }}
                >
                    {translate("temp85")} 
             
                </span>
            
            </a>
          </li>
          <li>
            <a
              href="/components/buttons/AboutSic/outreach_activities/outreach_activities"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
             
                <span
                  style={{
                    fontSize: "1.1em",
                    fontWeight: "bold",
                    lineHeight: "1.5",
                  }}
                >
                    {translate("temp86")} 
                 
                </span>
              
            </a>
            <a
              href="/team"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
             
                <span
                  style={{
                    fontSize: "1.1em",
                    fontWeight: "bold",
                    lineHeight: "1.5",
                  }}
                >
                    {translate("temp87")} 
                 
                </span>
              
            </a>

            <a
              href="/training"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
             
                <span
                  style={{
                    fontSize: "1.1em",
                    fontWeight: "bold",
                    lineHeight: "1.5",
                  }}
                >
                    {translate("temp88")} 
                
                </span>
              
            </a>

            <a
              href="https://drive.google.com/file/d/1rpH2MmpYilbapkYzZpIcfUuHfsfDeHAW/view?usp=sharing"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              
                <span
                  style={{
                    fontSize: "1.1em",
                    fontWeight: "bold",
                    lineHeight: "1.5",
                  }}
                >
                    {translate("temp89")} 
                 
                </span>
              
            </a>
            <a
              href="/help"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              
                <span
                  style={{
                    fontSize: "1.1em",
                    fontWeight: "bold",
                    lineHeight: "1.5",
                  }}
                >
                    {translate("temp90")} 
                
                </span>
              
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
