"use client";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Instruments from "./buttons/Instruments/Instruments";
import About from "./buttons/AboutSic/page";

const Header = () => {
  const { data: session, status } = useSession();

  const handleSignIn = () => {
    signIn();
  };

  const handleSignOut = () => {
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
      <header className="text-gray-100 bg-lightSky body-font shadow-md fixed w-full z-50 top-0">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <div className="flex items-center text-white">
            <div className="h-16 px-10 bg-white rounded-full animate-pulse"></div>
            <span className="text-xl font-bold ml-2 bg-white rounded-full animate-pulse w-40 h-6"></span>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="text-gray-100 bg-lightSky body-font shadow-md fixed w-full z-50 top-0 mb-12">
      <nav className="container px-6 py-4 mx-auto flex flex-wrap items-center justify-between">
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
            <Link href="/" className="font-semibold hover:text-white mr-4">
              Home
            </Link>
            <Link
              href="/usageCharges"
              className="font-semibold hover:text-white mr-4"
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
                className="font-semibold hover:text-white mr-4"
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
              className="font-semibold px-4 py-2 bg-gray-800 text-white hover:bg-gray-900 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Menu
            </button>
            {/* Conditionally render dropdown content based on state */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-52 bg-gray-800 py-2 text-center">
                <Link href="/" className="block px-8 py-2 text-white">
                  Home
                </Link>
                <Instruments />
                <About />
                <Link
                  href="/usageCharges"
                  className="block px-8 py-2 text-white"
                >
                  Usage Charges
                </Link>
                {session && (
                  <Link href="/user" className="block px-8 py-2 text-white">
                    Orders
                  </Link>
                )}
                {session ? (
                  <Link
                    href="/profile"
                    className="block px-8 text-center py-2 text-white"
                  >
                    Profile
                  </Link>
                ) : (
                  <button
                    onClick={handleSignIn}
                    className="block px-20 py-2 text-center text-white"
                  >
                    Login/Register
                  </button>
                )}
                {session && (
                  <button
                    onClick={handleSignOut}
                    className="block px-20 py-2 text-center text-white"
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
