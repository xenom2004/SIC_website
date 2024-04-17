"use client";
import { Link } from "@nextui-org/react";
import React from "react";

import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Statistics from "./components/Statistics";
import { Roboto } from "next/font/google";
import MyCarousel from "./components/MyCarousel";
const roboto = Roboto({
  weight: "100",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen mt-[-100px] ">
      <main className="flex-1 relative mb-[-88.5px] ">
        <div className="h-screen flex items-center justify-center text-center relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-current"></div>
          <img
            className="h-full w-full object-cover"
            src="https://sic.iiti.ac.in/wp-content/uploads/2022/08/cropped-Home-1-Copy.jpg"
            alt="Welcome"
          />
          <section className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-8">
            <div className="container text-white max-w-3xl">
              <h1 className="text-5xl font-bold mb-4 text-center md:text-left font-museo-slab">
                Sophisticated Instrumentation Center
              </h1>
              <h2 className="text-2xl font-bold mb-4 text-center md:text-left font-museo-slab">
                Here you can transform your inspiration into impact.
              </h2>
              <div className="flex justify-center md:justify-start">
                <Link href="./about">
                  <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-600 text-white  font-bold py-2 px-4 rounded"
                  >
                    Learn More
                  </button>
                  </Link>
                  <Link href="https://sic.iiti.ac.in/software-used-for-data-processing-and-development">
                  <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-600 text-white mx-4 font-bold py-2 px-4 rounded"
                  >
                    Software Download
                  </button>
                </Link>
              </div>
              
              <div className="flex justify-center md:justify-start my-4">
                <Link href="./help" className="text-white-600">
                Need help navigating the site? Click Here
                </Link>
              </div>
            </div>
          </section>
        </div>
        {/* ---------------------------------------------------------------------------------------------------------------------- */}
        <div className="container  mt-32 mb-24 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Undergraduate programs */}
            <div className="bg-white p-8 rounded-lg flex flex-col items-center justify-center ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREt5szKKfa8Y0c-o95V04ujCr8Nr7HlwaEyAjGC3l34A&s"
                alt="Bulb"
                className="h-16 w-16 mb-4"
              />
              <h2 className="text-lg text-lightSky font-bold mb-2">
                Internal User
              </h2>
              <p className="text-justify text-lg text-lightSky text-center">
                Welcome to our state-of-the-art Instrumentation Center, where
                precision meets innovation. As a leading provider of
                instrumentation services for external users, we pride ourselves
                on offering a diverse range of cutting-edge instruments tailored
                to meet your research and analytical needs.
              </p>
              <Link href="/undergraduate-programs">
                <button className="rounded-full hover:bg-lightSky  hover:text-white bg-white text-lightSky font-semibold py-2 px-4 mt-4 transition duration-300 ease-in-out">
                  Explore
                </button>
              </Link>
            </div>
            {/* Graduate programs */}
            <div className="bg-white p-8 rounded-lg flex flex-col items-center justify-center ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFQGCJOieZHFjrklBjYpTc67eZX3LrxDAouUvzwY6POQ&s"
                alt="Brain"
                className="h-16 w-16 mb-4"
              />
              <h2 className="text-lg text-lightSky font-bold mb-2">
                External Institution
              </h2>
              <p className="text-justify text-lg text-lightSky text-center">
                Welcome to our state-of-the-art Instrumentation Center, where
                precision meets innovation. As a leading provider of
                instrumentation services for external users, we pride ourselves
                on offering a diverse range of cutting-edge instruments tailored
                to meet your research and analytical needs.
              </p>
              <Link href="/graduate-programs">
                <button className="rounded-full hover:bg-lightSky  hover:text-white bg-white text-lightSky  font-semibold py-2 px-4 mt-4 transition duration-300 ease-in-out">
                  Explore
                </button>
              </Link>
            </div>
            {/* Professional and Continuing Education */}
            <div className="bg-white p-8 rounded-lg flex flex-col items-center justify-center ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjKP4Njsdfof1uFgYQJAzpowEsCVgvdi_Fto_ZKmc7_TRZfOeEAQcASkc8xRtNR6oodZQ&usqp=CAU"
                alt="Book"
                className="h-16 w-16 mb-4"
              />
              <h2 className="text-lg text-lightSky font-bold mb-2">Industry</h2>
              <p className="text-justify text-lg text-lightSky text-center">
                Welcome to our state-of-the-art Instrumentation Center, where
                precision meets innovation. As a leading provider of
                instrumentation services for external users, we pride ourselves
                on offering a diverse range of cutting-edge instruments tailored
                to meet your research and analytical needs.
              </p>
              <Link href="/professional-education">
                <button className="rounded-full hover:bg-lightSky  hover:text-white bg-white text-lightSky  font-semibold py-2 px-4 mt-4 transition duration-300 ease-in-out">
                  Explore
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------------------------------------------------------------------------- */}
        <div className="container mt-32 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* 3-part section for image */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-2 p-0 flex items-center justify-center">
              {/* Add your image here */}
              <img
                src="https://sic.iiti.ac.in/wp-content/uploads/2022/08/cropped-IMG_20220323_150022-1.jpg"
                alt="Image"
                className="h-full w-full object-cover rounded-lg"
                style={{ margin: 0 }} // Set margin to 0
              />
            </div>
            {/* 2-part section for info */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-lightSky p-8 text-white rounded-lg flex flex-col items-center justify-center">
              {/* Add your info here */}
              <h2 className="text-3xl font-bold mb-2 ">Facilities</h2>
              <p className="text-lg text-justify">
                After being established in 2009, IIT Indore took decisive
                initiatives to excel in the area of research and development.
                Among the various measures taken at that time, establishing the
                Sophisticated Instrumentation Center (SIC) was crucial to
                cutting-edge research in different departments. The significant
                role of SIC in the tremendous growth of the research atmosphere
                in IITI is palpable, with each publication coming out of
                research communities with the required instrumental support from
                SIC. IITI now stands as one of the leaders among all IITs in
                research output. Furthermore, with limited research facilities
                in central India, it is already catering to the needs of many
                educational institutes and industries in and around central
                India and lighting the curiosity towards the scientific world.
              </p>
            </div>
          </div>
        </div>
        ;
        {/* --------------------------------------------------------------------------------------------------------------------------------- */}
        <div className="container mt-32 mx-auto">
          <div className="grid grid-cols-1 text-lightSky sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
            {/* X-ray */}
            <div className="bg-white p-8 rounded-lg flex flex-col items-center justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3843/3843138.png"
                alt="Bulb"
                className="h-16 w-16 mb-4"
              />
              <h2 className="text-xl font-bold mb-2 text-lightSky">
                X-ray Instruments
              </h2>
              <ul className="text-lg">
                <Link href="/instruments/1">
                  <li>Single Crystal X-ray Diffraction Facility</li>
                </Link>
                <br />
                <Link href="/instruments/2">
                  <li>Powder X-ray Diffraction Facility</li>
                </Link>
                <br />
                <Link href="/instruments/3">
                  <li>X-ray Absorption Fine Structure</li>
                </Link>
                <br />
                <Link href="/instruments/4">
                  <li>Energy Dispersive X-Ray Spectroscopy</li>
                </Link>
              </ul>
            </div>
            {/* Microscopy */}
            <div className="bg-white p-8 rounded-lg flex flex-col items-center justify-center">
              <img
                src="https://media.istockphoto.com/id/1285266765/vector/microscope-vector-icon-illustration-in-flat-style-on-white-isolated-background.jpg?s=612x612&w=0&k=20&c=dxgQyjcI4CiAAk_D8vbr1wl_XvDkhgu_-2huiCJTkto="
                alt="Bulb"
                className="h-16 w-16 mb-4"
              />
              <h2 className="text-xl font-bold mb-2 text-lightSky">
                Microscopy Instruments
              </h2>
              <ul className="text-lg">
                <Link href="/instruments/15">
                  <li>Scanning Electron Microscopy (FE-SEM)</li>
                </Link>

                <br />
                <Link href="/instruments/16">
                  <li>Atomic Force Microscopy (AFM)</li>
                </Link>
                <br />
                <Link href="/instruments/17">
                  <li>
                    Total Internal Reflection Fluorescence Microscopy(TIRFM)
                  </li>
                </Link>

                <br />
                <Link href="/instruments/18">
                  <li>Confocal Microscopy</li>
                </Link>
                <br />
              </ul>
            </div>
            {/* Spectroscopy */}
            <div className="bg-white p-8 rounded-lg flex flex-col items-center justify-center">
              <img
                src="https://media.istockphoto.com/id/1351228656/vector/shaker-laboratory-device-color-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=Fh4TPmLFCcOQqJrCh7OthlmQF74wXrDhNIP_6EeStfQ="
                alt="Bulb"
                className="h-16 w-16 mb-4"
              />
              <h2 className="text-xl font-bold mb-2 text-lightSky">
                Spectroscopy Instruments
              </h2>
              <ul className="text-lg">
                <Link href="/instruments/6">
                  {" "}
                  <li>Nuclear Magnetic Resonance(NMR) 500MHz</li>
                </Link>
                <br />
                <Link href="/instruments/7">
                  <li>Nuclear Magnetic Resonance(NMR) 400MHz</li>
                </Link>
              </ul>
            </div>
            {/* Chromatography */}
            <div className="bg-white p-8 rounded-lg flex flex-col items-center justify-center">
              <img
                src="data:image/png;base64,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"
                alt="Bulb"
                className="h-16 w-16 mb-4"
              />
              <h2 className="text-xl font-bold mb-2 text-lightSky">
                Chromatography Instruments
              </h2>
              <ul className="text-lg">
                <Link href="/instruments/19">
                  {" "}
                  <li>HR-MS</li>
                </Link>
                <br />
                <Link href="/instruments/20">
                  <li>High Performance Liquid Chromatography (HPLC)</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------------------------------------------------------------- */}
        <div className="bg-lightSky py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center mt-32">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-roboto-thin text-white mb-4">
            Explore Our Exceptional Instrumentation
          </h2>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-roboto-thin text-white mb-4">
            Interested in Utilizing Our Premium Instruments?
          </h2>
          <Link href="/instruments">
            <button className="bg-lightSky text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 border border-white hover:bg-white hover:text-lightSky">
              Learn More
            </button>
          </Link>
        </div>
        {/* ------------------------------------------------------------------------------------------------------------------- */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center mt-32">
          <h2 className="text-3xl font-roboto-thin text-ligthSky mb-8">
            How To Use Our Instruments?
          </h2>
          <div className="bg-white shadow-lg rounded-lg w-full max-w-5xl px-8 py-12">
            <div className="flex flex-wrap items-center justify-center -mx-3">
              <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-6">
                <div className="bg-lightSky text-white px-6 py-3 rounded-l-md font-medium hover:bg-white hover:text-lightSky hover:scale-105 transition-all duration-300 flex items-center justify-between">
                  Usage Charges
                  <svg
                    className="inline-block w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-6">
                <div className="bg-lightSky text-white px-6 py-3 font-medium hover:bg-white hover:text-lightSky hover:scale-105 transition-all duration-300 flex items-center justify-between">
                  Login
                  <svg
                    className="inline-block w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-6">
                <div className="bg-lightSky text-white px-6 py-3 font-medium hover:bg-white hover:text-lightSky hover:scale-105 transition-all duration-300 flex items-center justify-between">
                  Create Profile
                  <svg
                    className="inline-block w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-6">
                <div className="bg-lightSky text-white px-6 py-3 font-medium hover:bg-white hover:text-lightSky hover:scale-105 transition-all duration-300 flex items-center justify-between">
                  Book Instrument
                  <svg
                    className="inline-block w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-6">
                <div className="bg-lightSky text-white px-6 py-3 font-medium hover:bg-white hover:text-lightSky hover:scale-105 transition-all duration-300 flex items-center justify-between">
                  Send Cover Letter
                  <svg
                    className="inline-block w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-6">
                <div className="bg-lightSky text-white px-6 py-3 font-medium hover:bg-white hover:text-lightSky hover:scale-105 transition-all duration-300 flex items-center justify-between">
                  Pay
                  <svg
                    className="inline-block w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-6">
                <div className="bg-lightSky text-white px-6 py-3 rounded-r-md font-medium hover:bg-white hover:text-lightSky hover:scale-105 transition-all duration-300 flex items-center justify-between">
                  Send Sample
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------------------------------------------------------------ */}
        <div className="container mx-auto mt-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {/* Second Section */}
            <div
              className="sm:col-span-2 lg:col-span-4 bg-white text-black p-8 rounded-lg flex flex-col justify-between items-start"
              style={{ order: "2" }}
            >
              {/* Change items-start */}
              <div>
                <h2 className="text-xl font-bold mb-4">
                  Why Choose Our Program?
                </h2>
                <p className="text-lg">
                  Our training programs are meticulously crafted to provide you
                  with the essential skills and knowledge required to excel in
                  the instrumentation field. Backed by seasoned instructors and
                  cutting-edge facilities, we offer an immersive learning
                  journey tailored to meet your specific career aspirations. Our
                  comprehensive curriculum covers both theoretical concepts and
                  practical hands-on experience, ensuring that you graduate
                  fully equipped to tackle real-world challenges in the
                  industry.
                </p>
              </div>
              <Link href="/training">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
                  Explore Further
                </button>
              </Link>
            </div>
            {/* First Section */}
            <div
              className="sm:col-span-2 lg:col-span-2 bg-lightSky text-white p-8 rounded-lg flex flex-col items-center justify-center"
              style={{ order: "1" }}
            >
              {/* Add items-center */}
              <h2 className="text-4xl mb-8">
                Discover Our Renowned Training Program for Interns and Fresh
                Graduates
              </h2>
            </div>
          </div>
        </div>
        ;
        {/* ---------------------------------------------------------------------------------------------------------------------- */}
        <Statistics />
        {/* ----------------------------------------------------------------------------------------------------------------- */}
        {/* ------------------------------------------------------------------------------------------------------------------- */}
      </main>
    </div>
  );
}
