"use client";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Instruments from "./buttons/Instruments/Instruments";
import About from "./buttons/AboutSic/page";
import { Switch } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const Header = () => {
  const { data: session, status } = useSession();
  const [checked, setChecked] = useState(true);
  const router = useRouter();
  const [language, setLanguage] = useState(() => {
    if (typeof window !== "undefined" && localStorage.getItem("language")) {
      // If localStorage is available and 'language' item is set
      var language = localStorage.getItem("language");
      // Do something with the 'language' variable
      // console.log("Language stored in localStorage:", language);

      return language;
    } else {
      // console.log(
      //   "Language not stored in localStorage or localStorage not available."
      // );
      return "english";
      // If localStorage is not available or 'language' item is not set
    }
  });
  const [first, Usefirst] = useState("1");
  const [lang, setlang] = useState();
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const storedLanguage = localStorage.getItem("language");
  //     if (storedLanguage) {
  //       localStorage.removeItem("language");
  //       localStorage.setItem("language", "english");
  //     } else {
  //       // If language is not stored, set default language to English and store in localStorage
  //       setChecked(true);
  //       localStorage.setItem("language", "english");
  //     }
  //   } else {
  //     localStorage.setItem("language", "english");
  //   }
  // }, [localStorage.getItem("language")]);
  // useEffect(() => {
  //   // Update language preference based on switch state
  //   setLanguage(checked ? "english" : "hindi");
  //   checked
  //     ? localStorage.setItem("language", "english")
  //     : localStorage.setItem("language", "hindi");
  // }, [checked]);

  const handleChange = () => {
    setChecked(!checked);
    let langi = null;
    console.log(localStorage.getItem("language"));
    if (localStorage.getItem("language") != null) {
      localStorage.setItem("language", language);
      langi = language;
    } else {
      langi = localStorage.getItem("language");
    }

    if (langi === "english") {
      setLanguage("hindi");
      localStorage.setItem("language", "hindi");
      router.push("/");
      console.log("here in my");
    } else {
      setLanguage("english");
      localStorage.setItem("language", "english");

      router.push("/");
    }
    // Toggle switch state
    window.location.reload();
  };

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
      <nav className="container px-4 md:px-6 py-4 mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img
            src="https://citc.iiti.ac.in/wp-content/uploads/2021/12/IITILogo.png"
            className="h-16 px-10"
            alt="Company Logo"
          />
          <span className="text-xl font-bold">
            {language === "english" ? (
              "Sophisticated Instrumentation Center"
            ) : (
              <span style={{ fontWeight: "bold", fontSize: "1.2em" }}>
                विशिष्ट उपकरण केंद्र
              </span>
            )}
          </span>
        </Link>

        {/* Navigation links for large and extra-large screens */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/"
            className={`font-semibold px-4 py-2 bg-blue-850 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 ${language === "hindi" ? "font-bold" : ""}`}
            style={
              language === "hindi"
                ? { fontWeight: "bold", fontSize: "1.2em", lineHeight: "1.5" }
                : {}
            }
          >
            <button>{language === "english" ? "Home" : "होम"}</button>
          </Link>

          {/* Usage Charges Link */}
          {/* Instruments */}
          <div className="mr-4">
            <Instruments language={language} />
          </div>

          <Link
            href="/usageCharges"
            className={`font-semibold px-4 py-2 bg-blue-850 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 ${language === "hindi" ? "font-bold" : ""}`}
            style={
              language === "hindi"
                ? { fontWeight: "bold", fontSize: "1.2em", lineHeight: "1.5" }
                : {}
            }
          >
            <button>
              {language === "english" ? "Usage Charges" : "उपयोग शुल्क"}
            </button>
          </Link>

          {/* About */}
          <div className="mr-4">
            <About language={language} />
          </div>

          {/* Orders */}
          {session && (
            <Link
              href={session?.user?.isAdmin === "admin" ? "/admin" : "/profile"}
            >
              <button
                className={`font-semibold px-4 py-2 bg-blue-850 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 ${language === "hindi" ? "font-bold" : ""}`}
                style={
                  language === "hindi"
                    ? {
                        fontWeight: "bold",
                        fontSize: "1.2em",
                        lineHeight: "1.5",
                      }
                    : {}
                }
              >
                {language === "english" ? "Profile" : "प्रोफ़ाइल"}
              </button>
            </Link>
          )}

          {/* Profile or Sign In/Register */}
          {session ? (
            <Link
              href="/user"
              className={`font-semibold px-4 py-2 bg-blue-850 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 ${language === "hindi" ? "font-bold" : ""}`}
              style={
                language === "hindi"
                  ? {
                      fontWeight: "bold",
                      fontSize: "1.2em",
                      lineHeight: "1.5",
                    }
                  : {}
              }
            >
              {" "}
              <button>{language === "english" ? "Orders" : "आदेश"}</button>
            </Link>
          ) : (
            <button
              onClick={handleSignIn}
              className={`font-semibold px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 ${language === "hindi" ? "font-bold" : ""}`}
              style={
                language === "hindi"
                  ? {
                      fontWeight: "bold",
                      fontSize: "1.2em",
                      lineHeight: "1.5",
                    }
                  : {}
              }
            >
              {language === "english" ? "Login/Register" : "लॉगिन/रजिस्टर"}
            </button>
          )}

          {/* Logout */}
          {session && (
            <button
              onClick={handleSignOut}
              className={`font-semibold px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105 ${language === "hindi" ? "font-bold" : ""}`}
              style={
                language === "hindi"
                  ? {
                      fontWeight: "bold",
                      fontSize: "1.2em",
                      lineHeight: "1.5",
                    }
                  : {}
              }
            >
              {language === "english" ? "Logout" : "लॉग आउट"}
            </button>
          )}

          <span className="px-4 hidden">
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            ></Switch>
          </span>
        </div>

        {/* Responsive dropdown menu for small and medium screens */}
        <div className="flex lg:hidden relative justify-end">
          <button
            onClick={toggleDropdown}
            className="font-semibold px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Menu
          </button>
          {/* Conditionally render dropdown content based on state */}
          {isDropdownOpen && (
            <div className="absolute top-full right-0 w-52 bg-gray-800 py-2 text-center">
              <Link
                onClick={toggleDropdown}
                href="/"
                className="block px-8 font-semibold py-2 bg-blue-850 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
              >
                <button>Home</button>
              </Link>

              <div onClick={toggleDropdown}>
                <Instruments language={language} />
              </div>
              <div onClick={toggleDropdown}>
                <About language={language} />
              </div>

              <Link
                onClick={toggleDropdown}
                href="/usageCharges"
                className="block px-8 font-semibold py-2 bg-blue-850 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
              >
                <button>Usage Charges</button>
              </Link>
              {session && (
                <Link
                  onClick={toggleDropdown}
                  href={
                    session?.user?.isAdmin === "admin" ? "/admin" : "/profile"
                  }
                  className="block px-8 font-semibold py-2 bg-blue-850 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <button>Profile</button>
                </Link>
              )}

              {session ? (
                <Link
                  onClick={toggleDropdown}
                  href="/user"
                  className="block px-8 font-semibold py-2 bg-blue-850 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <button>Orders</button>
                </Link>
              ) : (
                <button
                  onClick={handleSignIn}
                  className="block px-20 font-semibold py-2 bg-blue-850 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Login/Register
                </button>
              )}
              {session && (
                <button
                  onClick={handleSignOut}
                  className="block px-20 font-semibold py-2 bg-blue-850 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Logout
                </button>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
