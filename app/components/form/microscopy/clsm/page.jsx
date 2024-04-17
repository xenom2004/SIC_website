"use client"
import React, { useState } from 'react';

const id = 18;

const FluorescenceMicroscopyForm = () => {
  const SETitem = (e, setVariable, variable) => {
    const formDetails = JSON.parse(localStorage.getItem("form_details")) || {};
    formDetails[id] = formDetails[id] || {};
    formDetails[id][variable] = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    localStorage.setItem("form_details", JSON.stringify(formDetails));
    setVariable(e.target.type === "checkbox" ? e.target.checked : e.target.value);
  };

  const GETitem = (def, variable) => {
    if (typeof window !== "undefined" && localStorage.getItem("form_details")) {
      const formDetails = JSON.parse(localStorage.getItem("form_details"));
      if (formDetails[id] && formDetails[id][variable]) {
        return formDetails[id][variable];
      }
    }
    return def;
  };
  const [remark,setremark]=useState(GETitem(null, 'remark'));
  const [sampleType, setSampleType] = useState(() => GETitem("", "sampleType"));
  const [numberOfSamples, setNumberOfSamples] = useState(() => GETitem("", "numberOfSamples"));
  const [visualized, setVisualized] = useState(() => GETitem(false, "visualized"));
  const [antifadeReagent, setAntifadeReagent] = useState(() => GETitem(false, "antifadeReagent"));
  const [fluorochromes, setFluorochromes] = useState(() => GETitem("", "fluorochromes"));
  const [emissionWavelength, setEmissionWavelength] = useState(() => GETitem("", "emissionWavelength"));
  const [excitationWavelength, setExcitationWavelength] = useState(() => GETitem("", "excitationWavelength"));
  const [magnification, setMagnification] = useState(() => GETitem("", "magnification"));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', { sampleType, numberOfSamples, visualized, antifadeReagent, fluorochromes, emissionWavelength, excitationWavelength, magnification });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Fluorescence Microscopy Request Form</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="grid grid-cols-2 gap-8">
          {/* Sample Type */}
          <div className="mb-4">
            <label htmlFor="sampleType" className="block text-gray-700 text-sm font-bold mb-2">Sample Type</label>
            <input 
              type="text"
              id="sampleType" 
              value={sampleType}
              onChange={(e) => SETitem(e, setSampleType, "sampleType")}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Enter sample type..." 
              required
            />
          </div>

          {/* Number of Samples */}
          <div className="mb-4">
            <label htmlFor="numberOfSamples" className="block text-gray-700 text-sm font-bold mb-2">Number of Samples</label>
            <input 
              type="number" 
              id="numberOfSamples" 
              value={numberOfSamples}
              onChange={(e) => SETitem(e, setNumberOfSamples, "numberOfSamples")}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Enter number of samples..." 
              required
            />
          </div>

          {/* Visualized in Fluorescence Microscope */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Visualized in Fluorescence Microscope?</label>
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="visualized" 
                
                checked={visualized}
                onChange={(e) => SETitem(e, setVisualized, "visualized")}
                className="form-checkbox h-5 w-5 text-gray-600" 
              />
              <label htmlFor="visualized" className="ml-2">Yes</label>
            </div>
          </div>

          {/* Antifade Reagent Used */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Antifade Reagent Used?</label>
            <div className="flex items-center">
              <input 
                type="checkbox" 
                
                id="antifadeReagent" 
                checked={antifadeReagent}
                onChange={(e) => SETitem(e, setAntifadeReagent, "antifadeReagent")}
                className="form-checkbox h-5 w-5 text-gray-600" 
              />
              <label htmlFor="antifadeReagent" className="ml-2">Yes</label>
            </div>
          </div>

          {/* Fluorochrome(s) */}
          <div className="mb-4">
            <label htmlFor="fluorochromes" className="block text-gray-700 text-sm font-bold mb-2">Fluorochrome(s)</label>
            <input
              type="text" 
              id="fluorochromes" 
              value={fluorochromes}
              onChange={(e) => SETitem(e, setFluorochromes, "fluorochromes")}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Enter fluorochromes..." 
              required
            />
          </div>

          {/* Emission Wavelength */}
          <div className="mb-4">
            <label htmlFor="emissionWavelength" className="block text-gray-700 text-sm font-bold mb-2">Emission Wavelength</label>
            <input 
              type="text"
              id="emissionWavelength" 
              value={emissionWavelength}
              onChange={(e) => SETitem(e, setEmissionWavelength, "emissionWavelength")}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Enter emission wavelength..." 
              required
            />
          </div>

          {/* Excitation Wavelength */}
          <div className="mb-4">
            <label htmlFor="excitationWavelength" className="block text-gray-700 text-sm font-bold mb-2">Excitation Wavelength</label>
            <input 
              type="text"
              id="excitationWavelength" 
              value={excitationWavelength}
              onChange={(e) => SETitem(e, setExcitationWavelength, "excitationWavelength")}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Enter excitation wavelength..." 
              required
            />
          </div>

          {/* Magnification */}
          <div className="mb-4">
            <label htmlFor="magnification" className="block text-gray-700 text-sm font-bold mb-2">Magnification</label>
            <input 
              type="text"
              id="magnification" 
              value={magnification}
              onChange={(e) => SETitem(e, setMagnification, "magnification")}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Enter magnification..." 
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
        </div>

        {/* Submit Button */}
       
      </form>
    </div>
  );
};

export default FluorescenceMicroscopyForm;
