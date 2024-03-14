"use client";

import React, { useEffect, useState } from "react";
import Container from "./Container";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { data: session, status } = useSession();

  const handleSignIn = () => {
    signIn();
  };

  const handleSignOut = () => {
    signOut();
  };

  // Render loading spinner while session is being fetched
  if (status === "loading") {
    return (
      <header className="text-gray-100 bg-gradient-to-r from-blue-700 to-indigo-800 body-font shadow-md fixed w-full z-50 top-0">
        {" "}
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
    <header className="text-gray-100 bg-gradient-to-r from-blue-700 to-indigo-800 body-font shadow-md fixed w-full z-50 top-0">
      {" "}
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <Link href="/" className="flex items-center text-white mb-4 md:mb-0">
          <img
            src="https://citc.iiti.ac.in/wp-content/uploads/2021/12/IITILogo.png"
            className="h-16 px-10"
            alt="Company Logo"
          />
          <span className="text-xl font-bold ml-2">
            Sophisticated Instrumentation Center
          </span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base">
          <Link href="/" className="mr-5 hover:text-white">
            Home
          </Link>
          <Link href="/instruments" className="mr-5 hover:text-white">
            Instruments
          </Link>
          <Link href="/about" className="mr-5 hover:text-white">
            About SIC
          </Link>
          <Link href="/usageCharges" className="mr-5 hover:text-white">
            Usage Charges
          </Link>
          {session && (
            <Link href="/user" className="mr-5 hover:text-white">
              Orders
            </Link>
          )}
        </nav>
        <div className="flex items-center">
          {session && (
            <Link href="/profile">
              <button className="text-sm font-semibold px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 mr-4">
                Profile
              </button>
            </Link>
          )}
          {/* Logout button */}
          {session && (
            <button
              onClick={handleSignOut}
              className="text-sm font-semibold px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Logout
            </button>
          )}
          {/* Login/Register */}
          {!session && (
            <button
              onClick={handleSignIn}
              className="text-sm font-semibold px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 mr-4"
            >
              Login/Register
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
