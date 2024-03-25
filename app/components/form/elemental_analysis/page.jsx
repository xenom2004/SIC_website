"use client";
import React, { useState, useEffect } from "react";

const Elemental_analyser = () => {
  const [crystalInfo, setCrystalInfo] = useState("");
  const [stability, setStability] = useState([]);
  const [BP, setBP] = useState("");
  const [MP, setMP] = useState("");
  const [mw, setmw] = useState("");
  const [weight, setweight] = useState("");
  const [store, setstore] = useState("");
  // Load data from localStorage when the component mounts

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("form_data"));
    setstore(storedData);
    if (storedData) {
      console.log("Present");
      setCrystalInfo(storedData.crystalInfo || "");
      setStability(storedData.stability || []);
      setBP(storedData.BP || "");
      setMP(storedData.MP || "");
      setmw(storedData.mw || "");
      setweight(storedData.weight || "");
    }
  }, []);

  // Update localStorage whenever form data changes
  useEffect(() => {
    const formData = {
      crystalInfo,
      stability,
      BP,
      MP,
      mw,
      weight,
    };
    localStorage.setItem("form_data", JSON.stringify(formData));
  }, [crystalInfo, stability, BP, MP, mw, weight]);

  // Function to handle stability changes
  const handleStabilityChange = (selectedStability) => {
    if (stability.includes(selectedStability)) {
      setStability(stability.filter((item) => item !== selectedStability));
    } else {
      setStability([...stability, selectedStability]);
    }
  };

  // Function to handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", {
  //     crystalInfo,
  //     BP,
  //     MP,
  //     weight,
  //     stability,
  //   });
  //   // You can clear localStorage here if needed
  //   // localStorage.removeItem("form_data");
  // };

  return (
    <div className="container mx-auto px-4 py-8 ">
      <h2 className="text-3xl font-bold mb-4  max-w-md mx-auto">
        Single Crystal X-ray Diffraction Facility Form
      </h2>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="crystalInfo"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Crystal Information
            <h1>{crystalInfo}</h1>
          </label>
          <input
            type="text"
            id="crystalInfo"
            value={crystalInfo}
            onChange={(e) => setCrystalInfo(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Crystal crystallized from ..."
            required
          />

          <label
            htmlFor="crystalInfo"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Crystal molecular weight
          </label>
          <input
            type="text"
            id="crystalInfo"
            value={mw}
            onChange={(e) => setmw(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="molecular weight"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="color"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Melting Point
          </label>
          <input
            type="text"
            id="color"
            value={MP}
            onChange={(e) => setMP(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter crystal melting point"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="temperature"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Boiling Point
          </label>

          <input
            type="text"
            id="temperature"
            value={BP}
            onChange={(e) => setBP(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter crystal boiling point"
            required
          />

          <label
            htmlFor="temperature"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Enter weight percent of Carbon,nitrogen,hydrogen and sulphur below.
          </label>
          <textarea
            type="text"
            id="temperature"
            value={weight}
            rows="4"
            onChange={(e) => setweight(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter weight percent of Carbon,nitrogen,hydrogen and sulphur"
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
            <span className="ml-2">light sensitive</span>
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

export default Elemental_analyser;
