"use client";
import { useState } from "react";
export default function Footer() {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== "undefined" && localStorage.getItem("language")) {
      // If localStorage is available and 'language' item is set
      var language = localStorage.getItem("language");
      // Do something with the 'language' variable
      // console.log("Language stored in localStorage:", language);
      return language;
    } else {
      
      return "english";
      // If localStorage is not available or 'language' item is not set
    }
  });
  return (
    <footer className="text-gray-300 bg-gray-800 body-font mt-0">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-wrap">
          <div className="lg:w-1/4 md:w-1/2 w-full">
            <div className="title-font font-medium text-white tracking-widest text-sm mb-3">
              {/* Sophisticated Instrumentation Center – A National Facility */}
              {language === "english"
                ? "Sophisticated Instrumentation Center"
                : " विशिष्ट उपकरण केंद्र"}
            </div>
            <p className="leading-relaxed">
              Indian Institute of Technology Indore
            </p>
            <p className="leading-relaxed">Khandwa Road, Simrol – 453552</p>
            <p className="leading-relaxed">
              Phone: +91 (731) 6603311 3311/3543/3541
            </p>
            <p className="leading-relaxed">Email: sic@iiti.ac.in</p>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full mt-4 lg:mt-0">
            <nav className="list-none mb-6">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact us
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Term and Conditions
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/2 md:w-1/2 w-full mt-4 lg:mt-0">
            <div className="relative" style={{ height: "320px" }}>
              {" "}
              {/* Adjusted height here */}
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                id="gmap_canvas"
                src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=sic-A%20Nationa%20Facility%20simrol+(SIC%20IIT%20Indore)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-center sm:text-left text-gray-400 text-sm mb-2 sm:mb-0">
            © 2024 SIC - A National Facility of IIT Indore
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a href="#" className="text-gray-400 hover:text-white">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="ml-3 text-gray-400 hover:text-white">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a href="#" className="ml-3 text-gray-400 hover:text-white">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a href="#" className="ml-3 text-gray-400 hover:text-white">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
