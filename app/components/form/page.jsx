"use client";
import React, { useState } from "react";

const SingleCrystalXRayForm = () => {
  const [crystalInfo, setCrystalInfo] = useState("");
  const [color, setColor] = useState("");
  const [temperature, setTemperature] = useState("");
  const [stability, setStability] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log("Form submitted:", {
      crystalInfo,
      color,
      temperature,
      stability,
    });
  };

  const handleStabilityChange = (selectedStability) => {
    if (stability.includes(selectedStability)) {
      setStability(stability.filter((item) => item !== selectedStability));
    } else {
      setStability([...stability, selectedStability]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">
        Single Crystal X-ray Diffraction Facility Form
      </h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="crystalInfo"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Crystal Information
          </label>
          <input
            type="text"
            id="crystalInfo"
            value={crystalInfo}
            onChange={(e) => setCrystalInfo(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter crystal information..."
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="color"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Color
          </label>
          <input
            type="text"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter crystal color..."
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="temperature"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Temperature
          </label>
          <input
            type="text"
            id="temperature"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter temperature..."
            required
          />
        </div>
        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2">
            Stability
          </p>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              value="stable"
              checked={stability.includes("stable")}
              onChange={() => handleStabilityChange("stable")}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Stable</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              value="air-sensitive"
              checked={stability.includes("air-sensitive")}
              onChange={() => handleStabilityChange("air-sensitive")}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Air-Sensitive</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              value="moisture-sensitive"
              checked={stability.includes("moisture-sensitive")}
              onChange={() => handleStabilityChange("moisture-sensitive")}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Moisture-Sensitive</span>
          </label>
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

export default SingleCrystalXRayForm;
