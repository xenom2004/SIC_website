"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";

const About = () => {
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
          className="text-white  bg-blue-780 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          About SIC
        </div>
      </Link>

      {/* Dropdown menu */}
      <div
        id="dropdownHover"
        ref={dropdownRef}
        className={`absolute top-full left-0 ${
          isDropdownOpen ? "block" : "hidden"
        } z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
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
              Virtual Tour
            </a>
          </li>
          <li>
            <a
              href="/components/buttons/AboutSic/Collaborators"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Our Collaborators
            </a>
          </li>
          <li>
            <a
              href="/components/buttons/AboutSic/outreach_activities/outreach_activities"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              OutReach activities
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
