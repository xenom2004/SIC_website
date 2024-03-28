import { Link } from '@nextui-org/react';
import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 relative">
        <div className="h-screen flex items-center justify-center text-center relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <img
            className="h-full w-full object-cover"
            src="https://sic.iiti.ac.in/wp-content/uploads/2022/08/cropped-Home-1-Copy.jpg"
            alt="Welcome"
          />
          <section className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="container mx-auto px-8 text-white">
              <h1 className="text-5xl font-bold mb-4" role="heading" aria-level="1">Sophisticated Instrumentation Center</h1>
              <p className="text-lg mb-8">
                The Sophisticated Instrumentation Center (SIC) — A National Facility was established in September 2011 to expedite the research program at IIT Indore. It is now a national facility providing services such as data recording facilities and expertise in different state-of-the-art instruments to academia and industry from all parts of the country and some international centers. Furthermore, it is catering to the needs of many educational institutes and industries in and around central India and satisfying the need of scientific world, academia and industries with equal importance and emphasis. It is also engaged in spreading awareness among researchers, academia and industries for the probable use of the facility among diverse users to make the facility a part of our mutual co-existence to enhance quality of researches and products in industries with elan.
              </p>
              <Link href='./about'> 
                <button type="button" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Learn More
                </button>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}


