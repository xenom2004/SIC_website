"use client";
import React, { useEffect, useState } from "react";

const BET = () => {
  const [sampleNature, setSampleNature] = useState(
    typeof window !== "undefined" && localStorage.getItem("sampleNature")
      ? localStorage.getItem("sampleNature")
      : null
  );

  const [sampleType, setsampleType] = useState(
    typeof window !== "undefined" && localStorage.getItem("sampleType")
      ? localStorage.getItem("sampleType")
      : null
  );
  const [temperature, settemperature] = useState(
    typeof window !== "undefined" && localStorage.getItem("sampletemperature")
      ? localStorage.getItem("sampletemperature")
      : null
  );
  const [Rate, setRate] = useState(
    typeof window !== "undefined" && localStorage.getItem("sampleRate")
      ? localStorage.getItem("sampleRate")
      : null
  );
  const [Soaktime, setSoaktime] = useState(
    typeof window !== "undefined" && localStorage.getItem("sampleSoaktime")
      ? localStorage.getItem("sampleSoaktime")
      : null
  );
  const [desc, setdesc] = useState(
    typeof window !== "undefined" && localStorage.getItem("sampledesc")
      ? localStorage.getItem("sampledesc")
      : null
  );
  
  const formData = {
    id:25,
    sampleNature,
    sampleType,
    temperature,
    Rate,
    Soaktime,
    desc,
  };
  const form_details={
    25:{formData}
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Extract form data
    const formData = {
      sampleNature,
      sampleType,
      Soaktime,
      temperature,
      Rate,
      desc,
    };

    try {
      // Send POST request to server
      const response = await fetch("/api/User", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Check if request was successful
      if (response.ok) {
        console.log("Form submitted successfully");
        // You can handle success actions here, e.g., redirect user to another page
      } else {
        // Handle server errors or other issues
        console.error("Failed to submit form:", response.statusText);
        // You can display an error message to the user
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
      // Handle network errors or other exceptions
      // You can display an error message to the user
    }
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
            onChange={() => (
              localStorage.setItem("sampleType", "Powder"),
              setsampleType("Powder")
            )}
            className="form-radio h-5 w-5 text-gray-600"
          />
          <span className="ml-2">Powder</span>
        </label>
        <label className="inline-flex items-center ml-6">
          <input
            type="radio"
            value="Pellet"
            checked={sampleType === "Pellet"}
            onChange={() => (
              localStorage.setItem("sampleType", "Pellet"),
              setsampleType("Pellet")
            )}
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
            onChange={() => (
              localStorage.setItem("sampleNature", "Hazardous"),
              setSampleNature("Hazardous")
            )}
            className="form-radio h-5 w-5 text-gray-600"
          />
          <span className="ml-2">Hazardous</span>
        </label>
        <label className="inline-flex items-center ml-6">
          <input
            type="radio"
            value="Non-Hazardous"
            checked={sampleNature === "Non-Hazardous"}
            onChange={() => (
              localStorage.setItem("sampleNature", "Non-Hazardous"),
              setSampleNature("Non-Hazardous")
            )}
            className="form-radio h-5 w-5 text-gray-600"
          />
          <span className="ml-2">Non-Hazardous</span>
        </label>

        <div className="mb-4 gap-y-2 flex flex-col ">
          <h1 className="block text-gray-700 text-md font-bold mb-2">
            Sample Degassing Conditions
          </h1>
          <label
            htmlFor="specialPrecautions"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Temperature (in C)
          </label>
          <textarea
            id="specialPrecautions"
            value={temperature}
            onChange={(e) => (
              localStorage.setItem("sampletemperature", e.target.value),
              settemperature(e.target.value)
            )}
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
            onChange={(e) => (
              localStorage.setItem("sampleRate", e.target.value),
              setRate(e.target.value)
            )}
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
            onChange={(e) => (
              localStorage.setItem("sampleSoaktime", e.target.value),
              setSoaktime(e.target.value)
            )}
            rows="1"
            className="resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Soak Time"
            required
          />

          <label
            htmlFor="specialPrecautions"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Preliminary characterization carried out on the sample submitted
            with brief description of results:
          </label>
          <textarea
            id="specialPrecautions"
            value={desc}
            onChange={(e) => (
              localStorage.setItem("sampledesc", e.target.value),
              setdesc(e.target.value)
            )}
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
