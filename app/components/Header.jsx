"use client";

import React, { useEffect, useState } from "react";
import Container from "./Container";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { data: session } = useSession();

  const handleSignIn = () => {
    signIn();
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <header className="text-gray-600 bg-blue-100 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            src="logo2-removebg-preview (1).png"
            className="h-16 pt-5 px-10"
            alt=""
          />
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-blue-900 cursor-pointer">
            Home
          </Link>
          <Link
            href="/instruments"
            className="mr-5 hover:text-blue-900 cursor-pointer"
          >
            Instruments
          </Link>
          <Link
            href="/about"
            className="mr-5 hover:text-blue-900 cursor-pointer"
          >
            AboutSIC
          </Link>
          <Link
            href="/usageCharges"
            className="mr-5 hover:text-blue-900 cursor-pointer"
          >
            Usage Charges
          </Link>
        </nav>
        <Container className="h-full flex items-center justify-between md:justify-end">
          {/* Login/Register */}
          {!session && (
            <div onClick={handleSignIn} className="headerDiv cursor-pointer">
              <button className="text-sm font-semibold px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
                Login/Register
              </button>
            </div>
          )}
          {/* Logout button */}
          {session && (
            <div onClick={handleSignOut} className="headerDiv cursor-pointer">
              <button className="text-sm font-semibold px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105">
                Logout
              </button>
            </div>
          )}
        </Container>
      </div>
    </header>
  );
};

export default Header;
