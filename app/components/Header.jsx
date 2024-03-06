"use client";

import React, { useEffect, useState } from "react";
import Container from "./Container";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

import Link from "next/link";

const Header = () => {
  const { data: session } = useSession();

  return (
    <div className="bg-bodyColor h-20 top-0 sticky z-50">
      <Container className="h-full flex items-center justify-between md:justify-end">
        {/* Login/Register */}
        {!session && (
          <div onClick={() => signIn()} className="headerDiv cursor-pointer">
            <button className="text-sm font-semibold px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
              Login/Register
            </button>
          </div>
        )}
        {/* Logout button */}
        {session && (
          <div onClick={() => signOut()} className="headerDiv cursor-pointer">
            <button className="text-sm font-semibold px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105">
              Logout
            </button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Header;
