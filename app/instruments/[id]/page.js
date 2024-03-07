"use client"
import { useState,useEffect } from "react";

export default function Instrument({params}) {
    const [instrument, setInstrument] = useState(null);
    
    useEffect(() => {
        const fetchInstrument = async () => {
            try {
                const response = await fetch(`/api/instruments`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch instrument: ${response.status}`);
                }
                const data = await response.json();
                setInstrument(data);
            } catch (error) {
                console.error('Error fetching instrument:', error);
            }
        };
        
        fetchInstrument();
    }, [params.id]);
    
    if (!instrument) {
        return <p>Loading instrument...</p>;
    }

    return (
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                {instrument[params.id-1].name}
                <br className="hidden lg:inline-block" />readymade gluten
              </h1>
              <p className="mb-8 leading-relaxed">
                EXAFS provides precise local structural information like bond distances, coordination number and type of neighboring atoms, and disorder in crystalline or non-crystalline systems.
                XANES provides the oxidation state of the absorbing ion, thus providing information related to charging transfer, orbital occupancy, and symmetry around the absorbing ion.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-2xl text-lg">Form Submission</button>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-2xl text-lg">Cost Calculator</button>
              </div>
              <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img className="object-cover object-center rounded" alt="hero" src="https://sic.iiti.ac.in/wp-content/uploads/2022/09/XANES.jpg" />
            </div>
          </div>
        </section>
      );
}
