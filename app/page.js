"use client"
import { Link } from '@nextui-org/react';
import React from 'react';
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '100',
  subsets: ['latin'],
})
 


export default function Home() {

  return (
    <div className="flex flex-col min-h-screen mb-12">
      <main className="flex-1 relative">
        <div className="h-screen flex items-center justify-center text-center relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-current"></div>
          <img
            className="h-full w-full object-cover"
            src="https://sic.iiti.ac.in/wp-content/uploads/2022/08/cropped-Home-1-Copy.jpg"
            alt="Welcome"
          />
          <section className="absolute top-0 left-0 w-full h-full flex items-center justify-start px-8">
            <div className="container ml-52 mb-28 text-white max-w-3xl">
              <h1 className="text-5xl font-bold mb-4 text-left font-museo-slab">Sophisticated Instrumentation</h1>
              <h1 className="text-5xl font-bold mb-4 text-left font-museo-slab">  Center</h1>
              <h1 className="drop-shadow-lg font-bold mb-4 text-left font-museo-slab">Here you can transform your inspiration into impact.</h1>
              <h1 className="font-bold mb-4 text-left font-museo-slab">
                <Link href='./about'>
                  <button type="button" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Learn More
                  </button>
                </Link>
              </h1>
            </div>
          </section>
        </div>

        {/* ---------------------------------------------------------------------------------------------------------------------- */}


        <div className="container mx-auto mt-32 mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Undergraduate programs */}
        <div className="bg-white p-8 rounded-lg flex flex-col items-center justify-center ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREt5szKKfa8Y0c-o95V04ujCr8Nr7HlwaEyAjGC3l34A&s" alt="Bulb" className="h-16 w-16 mb-4" />
          <h2 className="text-lg font-bold mb-2">Internal User</h2>
          <p className="text-lg text-center">Welcome to our state-of-the-art Instrumentation Center, where precision meets innovation. As a leading provider of instrumentation services for external users, we pride ourselves on offering a diverse range of cutting-edge instruments tailored to meet your research and analytical needs.</p>
          <Link href="/undergraduate-programs" >
            <div className="text-blue-500 hover:underline mt-4">Explore</div>
          </Link>
        </div>
        {/* Graduate programs */}
        <div className="bg-white p-8 rounded-lg flex flex-col items-center justify-center ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFQGCJOieZHFjrklBjYpTc67eZX3LrxDAouUvzwY6POQ&s" alt="Brain" className="h-16 w-16 mb-4" />
          <h2 className="text-lg font-bold mb-2">External Institution</h2>
          <p className="text-lg text-center">Welcome to our state-of-the-art Instrumentation Center, where precision meets innovation. As a leading provider of instrumentation services for external users, we pride ourselves on offering a diverse range of cutting-edge instruments tailored to meet your research and analytical needs.</p>
          <Link href="/graduate-programs">
            <div className="text-blue-500 hover:underline mt-4">Explore</div>
          </Link>
        </div>
        {/* Professional and Continuing Education */}
        <div className="bg-white p-8 rounded-lg flex flex-col items-center justify-center ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjKP4Njsdfof1uFgYQJAzpowEsCVgvdi_Fto_ZKmc7_TRZfOeEAQcASkc8xRtNR6oodZQ&usqp=CAU" alt="Book" className="h-16 w-16 mb-4" />
          <h2 className="text-lg font-bold mb-2">Company</h2>
          <p className="text-lg text-center">Welcome to our state-of-the-art Instrumentation Center, where precision meets innovation. As a leading provider of instrumentation services for external users, we pride ourselves on offering a diverse range of cutting-edge instruments tailored to meet your research and analytical needs.</p>
          <Link href="/professional-education" >
            <div className="text-blue-500 hover:underline mt-4">Explore</div>
          </Link>
        </div>
      </div>
    </div>

    {/* ----------------------------------------------------------------------------------------------------------------------------- */}
  
  
    <div className="container mx-auto mt-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">
          {/* 3-part section for image */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 p-8 flex items-center justify-center">
            {/* Add your image here */}
            <img src="https://sic.iiti.ac.in/wp-content/uploads/2022/08/cropped-IMG_20220323_150022-1.jpg" alt="Image" className="h-full w-full object-cover" />
          </div>
          {/* 2-part section for info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-lightSky p-8 text-white rounded-lg flex flex-col items-center justify-center ">
            {/* Add your info here */}
            <h2 className="text-3xl font-bold mb-2">Facilities</h2>
            <p className="text-lg text-center">
              After being established in 2009, IIT Indore took decisive initiatives to excel in the area of research and development. Among the various measures taken at that time, establishing the Sophisticated Instrumentation Center (SIC) was crucial to cutting-edge research in different departments. The significant role of SIC in the tremendous growth of the research atmosphere in IITI is palpable, with each publication coming out of research communities with the required instrumental support from SIC. IITI now stands as one of the leaders among all IITs in research output. Furthermore, with limited research facilities in central India, it is already catering to the needs of many educational institutes and industries in and around central India and lighting the curiosity towards the scientific world.
            </p> 
          </div>
       </div>
    </div>
{/* --------------------------------------------------------------------------------------------------------------------------------- */}
    
<div className="container mx-auto mt-32">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
    {/* X-ray */}
    <div className="bg-white p-8 rounded-lg flex flex-col items-center justify-center ">
      <h2 className="text-lg font-bold mb-2 text-lightSky">X-ray Instruments</h2>
      <ul className="text-lg text-center">
        <li>X-ray Diffractometer</li>
        <li>X-ray Fluorescence Spectrometer</li>
        <li>X-ray Photoelectron Spectroscopy (XPS)</li>
      </ul>
    </div>
    {/* Microscopy */}
    <div className="bg-white p-8 rounded-lg flex flex-col items-center justify-center ">
      <h2 className="text-lg font-bold mb-2 text-lightSky">Microscopy Instruments</h2>
      <ul className="text-lg text-center">
        <li>Scanning Electron Microscope (SEM)</li>
        <li>Transmission Electron Microscope (TEM)</li>
        <li>Atomic Force Microscope (AFM)</li>
      </ul>
    </div>
    {/* Spectroscopy */}
    <div className="bg-white p-8 rounded-lg flex flex-col items-center justify-center ">
      <h2 className="text-lg font-bold mb-2 text-lightSky">Spectroscopy Instruments</h2>
      <ul className="text-lg text-center">
        <li>UV-Vis Spectrophotometer</li>
        <li>FTIR Spectrometer</li>
        <li>NMR Spectrometer</li>
      </ul>
    </div>
    {/* Chromatography */}
    <div className="bg-white p-8 rounded-lg flex flex-col items-center justify-center ">
      <h2 className="text-lg font-bold mb-2 text-lightSky">Chromatography Instruments</h2>
      <ul className="text-lg text-center">
        <li>Gas Chromatography (GC)</li>
        <li>High-Performance Liquid Chromatography (HPLC)</li>
        <li>Ion Chromatography (IC)</li>
      </ul>
    </div>
  </div>
</div>




    {/* ------------------------------------------------------------------------------------------------------------------- */}
    <div className="bg-lightSky py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center mt-32">
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-roboto-thin text-white mb-4">We have very high quality instruments</h2>
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-roboto-thin text-white mb-4">Want to use our instruments?</h2>
  <Link href='/usageCharges'>
  <button className="bg-lightSky text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 border border-white hover:bg-white hover:text-lightSky">Click Here</button>
  </Link>
</div>




    {/* ------------------------------------------------------------------------------------------------------------------ */}
    <div className="container mx-auto mt-32">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
    {/* First Section */}
    <div className="sm:col-span-2 lg:col-span-2 bg-blue-500 text-white p-8 rounded-lg">
      <h2 className="text-4xl ">We offer a training program for interns and freshers. Want to join our well-known training program?</h2>
    </div>
    {/* Second Section */}
    <div className="sm:col-span-2 lg:col-span-4 bg-white text-black p-8 rounded-lg flex flex-col justify-between items-start"> {/* Change items-start */}
      <div>
        <h2 className="text-xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-lg">
          Our training programs are designed to equip you with the skills and knowledge needed to succeed in the field of instrumentation. With experienced instructors and state-of-the-art facilities, we provide a comprehensive learning experience tailored to your needs.
        </p>
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
        Learn More
      </button>
    </div>
  </div>
</div>





    {/* ---------------------------------------------------------------------------------------------------------------------- */}
      </main>
    </div>
  );
}



