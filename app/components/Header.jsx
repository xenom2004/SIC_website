"use client";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Instruments from "./buttons/Instruments/Instruments";
import About from "./buttons/AboutSic/page";

const Header = () => {
  const { data: session, status } = useSession();

  const handleSignIn = () => {
    setIsDropdownOpen(!isDropdownOpen);
    signIn();
  };

  const handleSignOut = () => {
    setIsDropdownOpen(!isDropdownOpen);
    signOut();
  };

  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Render loading spinner while session is being fetched
  if (status === "loading") {
    return (
      <header className="fixed  text-gray-100 bg-lightSky body-font shadow-md w-full z-50 top-0 mb-12">
        <div className="container px-6 py-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center text-white mb-4">
            <div className="h-16 px-10 bg-white rounded-full animate-pulse"></div>
            <span className="text-xl font-bold ml-2 bg-white rounded-full animate-pulse w-40 h-6"></span>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="text-gray-100 bg-lightSky body-font shadow-md fixed w-full z-50 top-0 mb-12">
      <nav className="container px-6 py-4 mx-auto flex flex-wrap items-center justify-between ">
        <Link href="/" className="flex items-center mb-4 ">
          <img
            src="https://citc.iiti.ac.in/wp-content/uploads/2021/12/IITILogo.png"
            className="h-16 px-10"
            alt="Company Logo"
          />
          <span className="text-xl font-bold">
            Sophisticated Instrumentation Center
          </span>
        </Link>

        {/* Navigation links for large screens */}
        <div className=" md:flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className="font-semibold px-4 py-2 bg-blue-850 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Home
            </Link>
            <Link
              href="/usageCharges"
              className="font-semibold px-4 py-2 bg-blue-850 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Usage Charges
            </Link>
            <span className="mr-4">
              <Instruments />
            </span>
            <span className="mr-4">
              <About />
            </span>
            {session && (
              <Link
                href="/user"
                className="font-semibold px-4 py-2 bg-blue-850 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Orders
              </Link>
            )}
            {session ? (
              <Link href="/profile">
                <button className="font-semibold px-4 py-2 bg-blue-850 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
                  Profile
                </button>
              </Link>
            ) : (
              <button
                onClick={handleSignIn}
                className="font-semibold px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Login/Register
              </button>
            )}
            {session && (
              <button
                onClick={handleSignOut}
                className="font-semibold px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Logout
              </button>
            )}
          </div>

          {/* Responsive dropdown menu for small screens */}
          <div className="md:hidden relative">
            <button
              onClick={toggleDropdown}
              className="font-semibold px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Menu
            </button>
            {/* Conditionally render dropdown content based on state */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-52 bg-gray-800 py-2 text-center">
                <Link
                  onClick={toggleDropdown}
                  href="/"
                  className="block px-8 font-semibold  py-2 bg-blue-850 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Home
                </Link>
                <div onClick={toggleDropdown}>
                  <Instruments />
                </div>
                <div onClick={toggleDropdown}>
                  <About />
                </div>
                <Link
                  onClick={toggleDropdown}
                  href="/usageCharges"
                  className="block px-8 font-semibold  py-2 bg-blue-850 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Usage Charges
                </Link>
                {session && (
                  <Link
                    onClick={toggleDropdown}
                    href="/user"
                    className="block px-8 font-semibold py-2 bg-blue-850 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Orders
                  </Link>
                )}
                {session ? (
                  <Link
                    href="/profile"
                    onClick={toggleDropdown}
                    className="block   px-8 font-semibold py-2 bg-blue-850 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Profile
                  </Link>
                ) : (
                  <button
                    onClick={handleSignIn}
                    className="block px-20  font-semibold py-2 bg-blue-850 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Login/Register
                  </button>
                )}
                {session && (
                  <button
                    onClick={handleSignOut}
                    className="block   px-20 font-semibold  py-2 bg-blue-850 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Logout
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
