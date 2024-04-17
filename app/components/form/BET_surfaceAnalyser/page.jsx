"use client";
import React, { useState, useEffect } from "react";
const id=25;
const BET = () => {
   

  // Function to set form data into local storage
  const SETitem = (e, setVariable, variable) => {
    const formDetails = JSON.parse(localStorage.getItem("form_details")) || {};
    formDetails[id] = formDetails[id] || {};
    formDetails[id][variable] =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    localStorage.setItem("form_details", JSON.stringify(formDetails));
    setVariable(e.target.type === "checkbox" ? e.target.checked : e.target.value);
  };

  // Function to get form data from local storage
  const GETitem = (def, variable) => {
    if (typeof window !== "undefined" && localStorage.getItem("form_details")) {
      const formDetails = JSON.parse(localStorage.getItem("form_details"));
      if (formDetails[id] && formDetails[id][variable]) {
        return formDetails[id][variable];
      }
    }
    return def;
  };

  const [sampleNature, setSampleNature] = useState(GETitem(null, "sampleNature"));
  const [sampleType, setSampleType] = useState(GETitem(null, "sampleType"));
  const [temperature, setTemperature] = useState(GETitem(null, "sampleTemperature"));
  const [rate, setRate] = useState(GETitem(null, "sampleRate"));
  const [soakTime, setSoakTime] = useState(GETitem(null, "sampleSoakTime"));
  const [desc, setDesc] = useState(GETitem(null, "sampleDesc"));
  const [remark,setremark]=useState(GETitem(null, 'remark'));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 max-w-md mx-auto">BET Surface Analyser</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <p className="block text-gray-700 text-sm font-bold mb-2">Sample Type</p>
        <label className="inline-flex items-center">
          <input
            type="radio"
            value="Powder"
            checked={sampleType === "Powder"}
            onChange={(e) => SETitem(e, setSampleType, "sampleType")}
            className="form-radio h-5 w-5 text-gray-600"
          />
          <span className="ml-2">Powder</span>
        </label>
        <label className="inline-flex items-center ml-6">
          <input
            type="radio"
            value="Pellet"
            checked={sampleType === "Pellet"}
            onChange={(e) => SETitem(e, setSampleType, "sampleType")}
            className="form-radio h-5 w-5 text-gray-600"
          />
          <span className="ml-2">Pellet</span>
        </label>

        <p className="block text-gray-700 text-sm font-bold mb-2">Sample Handling Precautions</p>
        <label className="inline-flex items-center">
          <input
            type="radio"
            value="Hazardous"
            checked={sampleNature === "Hazardous"}
            onChange={(e) => SETitem(e, setSampleNature, "sampleNature")}
            className="form-radio h-5 w-5 text-gray-600"
          />
          <span className="ml-2">Hazardous</span>
        </label>
        <label className="inline-flex items-center ml-6">
          <input
            type="radio"
            value="Non-Hazardous"
            checked={sampleNature === "Non-Hazardous"}
            onChange={(e) => SETitem(e, setSampleNature, "sampleNature")}
            className="form-radio h-5 w-5 text-gray-600"
          />
          <span className="ml-2">Non-Hazardous</span>
        </label>

        <div className="mb-4 gap-y-2 flex flex-col">
          <h1 className="block text-gray-700 text-md font-bold mb-2">Sample Degassing Conditions</h1>
          <label htmlFor="temperature" className="block text-gray-700 text-sm font-bold mb-2">
            Temperature (in C)
          </label>
          <textarea
            id="temperature"
            value={temperature}
            onChange={(e) => SETitem(e, setTemperature, "sampleTemperature")}
            rows="1"
            className="resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter temperature"
            required
          />

          <label htmlFor="rate" className="block text-gray-700 text-sm font-bold mb-2">
            Rate (in C/min)
          </label>
          <textarea
            id="rate"
            value={rate}
            onChange={(e) => SETitem(e, setRate, "sampleRate")}
            rows="1"
            className="resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Rate"
            required
          />

          <label htmlFor="soakTime" className="block text-gray-700 text-sm font-bold mb-2">
            Soak Time (in min)
          </label>
          <textarea
            id="soakTime"
            value={soakTime}
            onChange={(e) => SETitem(e, setSoakTime, "sampleSoakTime")}
            rows="1"
            className="resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Soak Time"
            required
          />

          <label htmlFor="desc" className="block text-gray-700 text-sm font-bold mb-2">
            Preliminary characterization carried out on the sample submitted with brief description of results:
          </label>
          <textarea
          
            id="desc"
            value={desc}
            onChange={(e) => SETitem(e, setDesc, "sampleDesc")}
            rows="4"
            className="resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter desc "
            required
          />
        </div>
        <div className="mb-4 mt-4">
          <label htmlFor="structureMaterial" className="block text-gray-700 text-sm font-bold mb-2">
            Any Remarks/ additional requests?
          </label>
          <input
            type="text"
            id="structureMaterial"
            value={remark}
            onChange={(e) => SETitem(e, setremark, 'remark')}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter starting material and solvent Information"
            required
          />
        </div>
       
      </form>
    </div>
  );
};

export default BET;
