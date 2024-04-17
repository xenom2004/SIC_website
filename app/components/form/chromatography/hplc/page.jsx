"use client"
import React, { useState } from 'react';
const id=20;
const HPLCForm = () => {
  
  
  const SETitem=(e,setvariable,variable)=>{
      var formDetails = JSON.parse(localStorage.getItem("form_details")) || {};
      formDetails[id] = formDetails[id] || {};
      formDetails[id][variable]= e.target.value;
      localStorage.setItem("form_details", JSON.stringify(formDetails));
      setvariable(e.target.value)

  }
  const GETitem=(def,variable)=>{

    
    if (typeof window !== "undefined" && localStorage.getItem("form_details")) {
        const formDetails = JSON.parse(localStorage.getItem("form_details"));
        if (formDetails[id] && formDetails[id][variable]) {
            return formDetails[id][variable];
        }
        
    }
    return def;
}
  const [solubility, setSolubility] = useState(GETitem(null,"solubility"));
  const [numberOfComponents, setNumberOfComponents] = useState(GETitem(null,"numberOfComponents"));
  const [hazards, setHazards] = useState(GETitem(null,"hazards"));
  const [absorptionWavelength, setAbsorptionWavelength] = useState(GETitem(null,"absorptionWavelength"));

  const [mobilePhase, setMobilePhase] = useState(GETitem(null,"mobilePhase"));
  const [runTime, setRunTime] = useState(GETitem(null,"runTime"));
  const [flowType, setFlowType] = useState(GETitem(null,"flowType")); // Default to isocratic
  const [structures, setStructures] = useState(GETitem(null,"structures"));  
  const [remark,setremark]=useState(GETitem(null, 'remark'));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (send data to server)
    console.log('Form Data:', { 
      solubility, 
      numberOfComponents,
      hazards,
      absorptionWavelength,
      mobilePhase,
      runTime,
      flowType,
      structures
    }); 
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 text-center">HPLC Analysis Request Form</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="grid grid-cols-2 gap-8">
          <div className="mb-4">
            <label for="solubility" className="block text-gray-700 text-sm font-bold mb-2">Solubility</label>
            <textarea 
              id="solubility" 
              value={solubility}
              onChange={(e) => SETitem(e,setSolubility,"solubility")}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Describe solubility..." 
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label for="numberOfComponents" className="block text-gray-700 text-sm font-bold mb-2">No. of Components</label>
            <input 
              type="number" 
              id="numberOfComponents" 
              value={numberOfComponents}
              onChange={(e) => SETitem(e,setNumberOfComponents,"numberOfComponents")}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Enter number of components..." 
              required
            />
          </div>

          <div className="mb-4">
            <label for="hazards" className="block text-gray-700 text-sm font-bold mb-2">Hazards</label>
            <textarea 
              id="hazards" 
              value={hazards}
              onChange={(e) => SETitem(e,setHazards,"hazards")}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Enter hazard information..." 
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label for="absorptionWavelength" className="block text-gray-700 text-sm font-bold mb-2">Wavelength of Absorption</label>
            <input 
              type="text" 
              id="absorptionWavelength" 
              value={absorptionWavelength}
              onChange={(e) => SETitem(e,setAbsorptionWavelength,"absorptionWavelength")}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Enter absorption wavelength..." 
              required
            />
          </div>

          <div className="mb-4">
            <label for="mobilePhase" className="block text-gray-700 text-sm font-bold mb-2">Mobile Phase</label>
            <textarea
              id="mobilePhase"
              value={mobilePhase}
              onChange={(e) => SETitem(e,setMobilePhase,"mobilePhase")}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Describe mobile phase..." 
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label for="runTime" className="block text-gray-700 text-sm font-bold mb-2">Run Time</label>
            <input 
              type="text" 
              id="runTime" 
              value={runTime}
              onChange={(e) => SETitem(e,setRunTime,"runTime")}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Enter run time..." 
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Isocratic or Gradient?</label>
            <div className="flex items-center">
              <input type="radio" id="isocratic" name="flowType" value="isocratic" checked={flowType === 'isocratic'} onChange={(e) => SETitem(e,setFlowType,"flowType")} className="form-radio h-5 w-5 text-gray-600" />
              <label htmlFor="isocratic" className="ml-2">Isocratic</label>
              <input type="radio" id="gradient" name="flowType" value="gradient" checked={flowType === 'gradient'} onChange={(e) => SETitem(e,setFlowType,"flowType")} className="form-radio h-5 w-5 text-gray-600 ml-4" />
              <label htmlFor="gradient" className="ml-2">Gradient</label>
            </div>
          </div>

          <div className="mb-4">
            <label for="structures" className="block text-gray-700 text-sm font-bold mb-2">Structures</label>
            <textarea 
              id="structures" 
              value={structures}
              onChange={(e) => SETitem(e,setStructures,"structures")}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Provide chemical structures..." 
              required
            ></textarea>
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
        
       
      </form>
    </div>
  );
};

export default HPLCForm; 
