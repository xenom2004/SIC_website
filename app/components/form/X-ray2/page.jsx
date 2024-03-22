"use client";
import React, { useState } from "react";

const XAFSForm = () => {
  const [measurementType, setMeasurementType] = useState("");
  const [caution, setCaution] = useState("");
  const [numberOfSamples, setNumberOfSamples] = useState("");
  const [sampleNature, setSampleNature] = useState("");
  const [mdsSheet, setMdsSheet] = useState("");
  const [specialPrecautions, setSpecialPrecautions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log("Form submitted:", {
      measurementType,
      caution,
      numberOfSamples,
      sampleNature,
      mdsSheet,
      specialPrecautions,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4  max-w-md mx-auto">
        XAFS Facility Form
      </h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2">
            Measurement Type
          </p>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="XANES"
              checked={measurementType === "XANES"}
              onChange={() => setMeasurementType("XANES")}
              className="form-radio h-5 w-5 text-gray-600"
            />
            <span className="ml-2">XANES</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              value="EXAFS"
              checked={measurementType === "EXAFS"}
              onChange={() => setMeasurementType("EXAFS")}
              className="form-radio h-5 w-5 text-gray-600"
            />
            <span className="ml-2">EXAFS</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              value="Both"
              checked={measurementType === "Both"}
              onChange={() => setMeasurementType("Both")}
              className="form-radio h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Both</span>
          </label>
        </div>
        <div className="mb-4">
          <label
            htmlFor="caution"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Caution to be Measured for Absorbed
          </label>
          <textarea
            id="caution"
            value={caution}
            onChange={(e) => setCaution(e.target.value)}
            rows="3"
            className="resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter caution..."
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="numberOfSamples"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Number of Samples
          </label>
          <input
            type="number"
            id="numberOfSamples"
            value={numberOfSamples}
            onChange={(e) => setNumberOfSamples(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter number of samples..."
            required
          />
        </div>
        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2">
            Nature of the Samples
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
              value="Hygroscopic"
              checked={sampleNature === "Hygroscopic"}
              onChange={() => setSampleNature("Hygroscopic")}
              className="form-radio h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Hygroscopic</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              value="Oxidises in air"
              checked={sampleNature === "Oxidises in air"}
              onChange={() => setSampleNature("Oxidises in air")}
              className="form-radio h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Oxidises in air</span>
          </label>
          <label className="inline-flex items-center ml">
            <input
              type="radio"
              value="None of these"
              checked={sampleNature === "None of these"}
              onChange={() => setSampleNature("None of these")}
              className=" form-radio h-5 w-5 text-gray-600"
            />
            <span className="ml-2">None of these</span>
          </label>
        </div>
        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2">
            MDS Sheet
          </p>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="Attached"
              checked={mdsSheet === "Attached"}
              onChange={() => setMdsSheet("Attached")}
              className="form-radio h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Attached</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              value="Non-attached"
              checked={mdsSheet === "Non-attached"}
              onChange={() => setMdsSheet("Non-attached")}
              className="form-radio h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Non-attached</span>
          </label>
        </div>
        <div className="mb-4">
          <label
            htmlFor="specialPrecautions"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Any Special Precaution while Handling the Samples
          </label>
          <textarea
            id="specialPrecautions"
            value={specialPrecautions}
            onChange={(e) => setSpecialPrecautions(e.target.value)}
            rows="3"
            className="resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter special precautions..."
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

export default XAFSForm;
