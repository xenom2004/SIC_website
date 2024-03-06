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
      <Container className="h-full flex items-center md:gap-x-5 justify-between md:justify-start">
      
        {/* Login/Register */}
        {!session && (
          <div onClick={() => signIn()} className="headerDiv cursor-pointer">
            <p className="text-sm font-semibold">Login/Register</p>
          </div>
        )}
        {/* Logout button */}
        {session && (
          <div
            onClick={() => signOut()}
            className="headerDiv px-2 gap-x-1 cursor-pointer"
          >
            <p className="text-sm font-semibold">Logout</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Header;