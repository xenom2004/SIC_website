"use client"
import React, { useState, useEffect } from "react";
import {Spinner} from "@nextui-org/react";


export default function Instrument({ params }) {
  const [instrument, setInstrument] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInstrument = async () => {
      try {
        const response = await fetch(`/api/instruments`);
        if (!response.ok) {
          throw new Error(`Failed to fetch instrument: ${response.status}`);
        }
        const data = await response.json();
        setInstrument(data[params.id - 1]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInstrument();
  }, [params.id]);

  if (loading) {
    return    <div className="h-screen flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 bg-white z-50">
    <Spinner />
  </div>;

  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!instrument) {
    return <p>Instrument not found</p>;
  }

  return (
    <section className="text-gray-600 body-font mx-auto">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          {instrument.name}
        </h1>
        <p className="mb-8 leading-relaxed">
          {instrument.info}
          </p>
        <div className="flex justify-center mb-8">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg mr-4">
            Form Submission
          </button>
          <button className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-full text-lg">
            Cost Calculator
          </button>
        </div>
      </div>
      <div className="border rounded-md p-8 shadow-md mb-6 flex flex-col">
        <img
          className="w-full h-100 object-cover rounded-md"
          alt="instrument"
          src={instrument.image}
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </div>

    </div>
  </section>
);
}
