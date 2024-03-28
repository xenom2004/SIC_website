import { Link } from '@nextui-org/react';
import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
    <main className="flex-1 relative">
      <div className="h-screen flex items-center justify-center text-center relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-current "></div>
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
              <Link href='./about' > 
                <button type="button" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Learn More
                </button>
              </Link>
            </h1>
          </div>
        </section>
      </div>
    </main>
  </div>
  );
}


