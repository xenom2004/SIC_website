"use client";
import {NextUIProvider} from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";


const Layout = ({ children }) => {
  return (
   
        <SessionProvider><NextUIProvider>{children}</NextUIProvider></SessionProvider>

  );
};

export default Layout;