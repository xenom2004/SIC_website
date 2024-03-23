"use client";
import React, { useState } from "react";

const BET = () => {

  const [sampleNature, setSampleNature] = useState("");
  const [sampleType,setsampleType]=useState("");
  const [temperature,settemperature]=useState("");
  const [Rate,setRate]=useState("");
  const [Soaktime,setSoaktime]=useState("");
  const [desc,setdesc]=useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log("Form submitted:", {
      sampleNature,
       sampleType,
      Soaktime,
      temperature,
      Rate,
      desc,
      
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4  max-w-md mx-auto">
        BET Surface Analyser
      </h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">

      <p className="block text-gray-700 text-sm font-bold mb-2">
            Sample Type
          </p>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="Powder"
              checked={sampleType === "Powder"}
              onChange={() => setsampleType("Powder")}
              className="form-radio h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Powder</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              value="Pellet"
              checked={sampleType === "Pellet"}
              onChange={() => setsampleType("Pellet")}
              className="form-radio h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Pellet</span>
          </label>


      <p className="block text-gray-700 text-sm font-bold mb-2">
            Sample handling Precautions
          </p>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="Hazardous"
              checked={sampleNature === "Hazardous"}
              onChange={() => setSampleNature("Hazardous")}
              className="form-radio h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Hazardous</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              value="Non-Hazardous"
              checked={sampleNature === "Non-Hazardous"}
              onChange={() => setSampleNature("Non-Hazardous")}
              className="form-radio h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Non-Hazardous</span>
          </label>
        
        <div className="mb-4 gap-y-2 flex flex-col ">
            <h1 className="block text-gray-700 text-md font-bold mb-2">Sample Degassing Conditions</h1>
          <label
            htmlFor="specialPrecautions"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Temperature (in C)
            
          </label>
          <textarea
            id="specialPrecautions"
            value={temperature}
            onChange={(e) => settemperature(e.target.value)}
            rows="1"
            className="resize-none appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter temperature"
            required
          />

        <label
            htmlFor="specialPrecautions"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Rate (in C/min)
            
          </label>
          <textarea
            id="specialPrecautions"
            value={Rate}
            onChange={(e) => setRate(e.target.value)}
            rows="1"
            className="resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Rate"
            required
          />

            <label
            htmlFor="specialPrecautions"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Soak Time (in min)
            
            
          </label>
          <textarea
            id="specialPrecautions"
            value={Soaktime}
            onChange={(e) => setSoaktime(e.target.value)}
            rows="1"
            className="resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Soak Time"
            required
          />

        <label
            htmlFor="specialPrecautions"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
             Preliminary characterization carried out on the sample submitted with brief
                description of results:
            
            
          </label>
          <textarea
            id="specialPrecautions"
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
            rows="4"
            className="resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter desc "
            required
          />
        </div>
        <div className="flex items-center justify-center mt-6">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BET;
