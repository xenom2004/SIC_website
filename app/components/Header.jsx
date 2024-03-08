"use client";

import React, { useEffect, useState } from "react";
import Container from "./Container";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { data: session } = useSession();
  {
    console.log(session, "thi sis my session");
  }

  const handleSignIn = () => {
    signIn();
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <header className="text-gray-100 bg-gradient-to-r from-blue-700 to-indigo-800 body-font shadow-md">
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
        </nav>
        <div className="flex items-center">
          {/* Login/Register */}
          {!session && (
            <button
              onClick={handleSignIn}
              className="text-sm font-semibold px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 mr-4"
            >
              Login/Register
            </button>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
