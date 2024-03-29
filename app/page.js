"use client"
import { Link } from '@nextui-org/react';
import React from 'react';
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";



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


        <div className="container mx-auto mt-28 mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Undergraduate programs */}
        <div className="bg-white p-8 rounded-lg flex flex-col items-center justify-center shadow-md">
          <img src="https://cdn0.iconfinder.com/data/icons/colourful-education/250/bulb-512.png" alt="Bulb" className="h-16 w-16 mb-4" />
          <h2 className="text-lg font-bold mb-2">Internal User</h2>
          <p className="text-lg text-center">Welcome to our state-of-the-art Instrumentation Center, where precision meets innovation. As a leading provider of instrumentation services for external users, we pride ourselves on offering a diverse range of cutting-edge instruments tailored to meet your research and analytical needs.</p>
          <Link href="/undergraduate-programs" passHref>
            <div className="text-blue-500 hover:underline mt-4">Explore</div>
          </Link>
        </div>
        {/* Graduate programs */}
        <div className="bg-white p-8 rounded-lg flex flex-col items-center justify-center shadow-md">
          <img src="https://cdn-icons-png.flaticon.com/512/6969/6969728.png" alt="Brain" className="h-16 w-16 mb-4" />
          <h2 className="text-lg font-bold mb-2">External Institution</h2>
          <p className="text-lg text-center">Welcome to our state-of-the-art Instrumentation Center, where precision meets innovation. As a leading provider of instrumentation services for external users, we pride ourselves on offering a diverse range of cutting-edge instruments tailored to meet your research and analytical needs.</p>
          <Link href="/graduate-programs" passHref>
            <div className="text-blue-500 hover:underline mt-4">Explore</div>
          </Link>
        </div>
        {/* Professional and Continuing Education */}
        <div className="bg-white p-8 rounded-lg flex flex-col items-center justify-center shadow-md">
          <img src="https://png.pngtree.com/png-vector/20230105/ourmid/pngtree-book-icon-vector-image-png-image_6552370.png" alt="Book" className="h-16 w-16 mb-4" />
          <h2 className="text-lg font-bold mb-2">Company</h2>
          <p className="text-lg text-center">Welcome to our state-of-the-art Instrumentation Center, where precision meets innovation. As a leading provider of instrumentation services for external users, we pride ourselves on offering a diverse range of cutting-edge instruments tailored to meet your research and analytical needs.</p>
          <Link href="/professional-education" passHref>
            <div className="text-blue-500 hover:underline mt-4">Explore</div>
          </Link>
        </div>
      </div>
    </div>

    {/* ----------------------------------------------------------------------------------------------------------------------------- */}
  
  
    <div className="container mx-auto mt-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">
    {/* 3-part section for image */}
    <div className="col-span-1 sm:col-span-2 lg:col-span-2 p-8 flex items-center justify-center">
      {/* Add your image here */}
      <img src="https://sic.iiti.ac.in/wp-content/uploads/2022/08/cropped-IMG_20220323_150022-1.jpg" alt="Image" className="h-full w-full object-cover" />
    </div>
    {/* 2-part section for info */}
    <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-white p-8 rounded-lg flex flex-col items-center justify-center shadow-md">
      {/* Add your info here */}
      <h2 className="text-2xl font-bold mb-2">Facilities</h2>
      <p className="text-lg text-center">
        After being established in 2009, IIT Indore took decisive initiatives to excel in the area of research and development. Among the various measures taken at that time, establishing the Sophisticated Instrumentation Center (SIC) was crucial to cutting-edge research in different departments. The significant role of SIC in the tremendous growth of the research atmosphere in IITI is palpable, with each publication coming out of research communities with the required instrumental support from SIC. IITI now stands as one of the leaders among all IITs in research output. Furthermore, with limited research facilities in central India, it is already catering to the needs of many educational institutes and industries in and around central India and lighting the curiosity towards the scientific world.
      </p>
    </div>
  </div>
</div>
{/* --------------------------------------------------------------------------------------------------------------------------------- */}
    

    {/* ------------------------------------------------------------------------------------------------------------------- */}
      </main>
    </div>
  );
}



