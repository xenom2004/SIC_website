"use client"
import React, { useState } from 'react';

const id = 1;

const SingleCrystalXRayForm = () => {
  // Function to set form data into local storage
  const SETitem = (e, setVariable, variable) => {
    const formDetails = JSON.parse(localStorage.getItem('form_details')) || {};
    formDetails[id] = formDetails[id] || {};
    formDetails[id][variable] = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    localStorage.setItem('form_details', JSON.stringify(formDetails));
    setVariable(e.target.type === 'checkbox' ? e.target.checked : e.target.value);
  };

  // Function to get form data from local storage
  const GETitem = (def, variable) => {
    if (typeof window !== 'undefined' && localStorage.getItem('form_details')) {
      const formDetails = JSON.parse(localStorage.getItem('form_details'));
      if (formDetails[id] && formDetails[id][variable]) {
        return formDetails[id][variable];
      }
    }
    return def;
  };

  // State variables for form inputs
  const [crystalInfo, setCrystalInfo] = useState(() => GETitem('', 'crystalInfo'));
  const [color, setColor] = useState(() => GETitem('', 'color'));
  const [temperature, setTemperature] = useState(() => GETitem('', 'temperature'));
  // const [stability, setStability] = useState({
  //   stable: GETitem(null, 'stable'),
  //   'air-sensitive': GETitem(null, 'air-sensitive'),
  //   'moisture-sensitive': GETitem(null, 'moisture-sensitive'),
  // });
  const [stability_stable,setstability_stable]=useState(GETitem(null, 'stability_stable'))
  const [stability_air_sensitive,setstability_air_sensitive]=useState(GETitem(null, 'stability_air_sensitive'))
  const [stability_moisture_sensitive,setstability_moisture_sensitive]=useState(GETitem(null, 'stability_moisture_sensitive'))

  const [IR,setIR]=useState(GETitem(null, 'IR'));
  const [NMR,setNMR]=useState(GETitem(null, 'NMR'));
  const [Mass_spectrum,setMass_spectrum]=useState(GETitem(null, 'Mass_spectrum'));
  const [remark,setremark]=useState(GETitem(null, 'remark'));
  // const [otherTechniques, setOtherTechniques] = useState({
  //   IR: GETitem(null, 'IR'),
  //   NMR: GETitem(null, 'NMR'),
  //   'Mass Spectrum': GETitem(null, 'Mass Spectrum'),
  // });
  const [structureMaterial, setStructureMaterial] = useState(() => GETitem('', 'structureMaterial'));

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log('Form submitted:', {
      crystalInfo,
      color,
      temperature,
      stability,
      otherTechniques,
      structureMaterial,
    });
  };

  // Handle change in stability checkboxes
  const handleStabilityChange = (selectedStability) => {
    const updatedStability = { ...stability };
    updatedStability[selectedStability] = !updatedStability[selectedStability];
    setStability(updatedStability);
    SETitem(
      { target: { checked: !stability[selectedStability] } },
      () => {},
      selectedStability
    );
  };

  // Handle change in other techniques checkboxes
  const handleTechniquesChange = (selectedTechnique) => {
    const updatedTechniques = otherTechniques.includes(selectedTechnique)
      ? otherTechniques.filter((item) => item !== selectedTechnique)
      : [...otherTechniques, selectedTechnique];
    setOtherTechniques(updatedTechniques);
    SETitem(
      { target: { checked: updatedTechniques.includes(selectedTechnique) } },
      () => {},
      'otherTechniques'
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 max-w-md mx-auto">
        Single Crystal X-ray Diffraction Facility Form
      </h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="crystalInfo" className="block text-gray-700 text-sm font-bold mb-2">
            Crystal Information
          </label>
          <input
            type="text"
            id="crystalInfo"
            value={crystalInfo}
            onChange={(e) => SETitem(e, setCrystalInfo, 'crystalInfo')}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter crystal information..."
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="color" className="block text-gray-700 text-sm font-bold mb-2">
            Color
          </label>
          <input
            type="text"
            id="color"
            value={color}
            onChange={(e) => SETitem(e, setColor, 'color')}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter crystal color..."
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="temperature" className="block text-gray-700 text-sm font-bold mb-2">
            Temperature
          </label>
          <input
            type="text"
            id="temperature"
            value={temperature}
            onChange={(e) => SETitem(e, setTemperature, 'temperature')}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter temperature..."
            required
          />
        </div>
        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2">Stability</p>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={stability_stable}
              
              onChange={(e) => SETitem(e, setstability_stable, 'stability_stable')}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Stable</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              
              checked={stability_air_sensitive}
              onChange={(e) => SETitem(e, setstability_air_sensitive, 'stability_air_sensitive')}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Air-Sensitive</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              
              checked={stability_moisture_sensitive}
              onChange={(e) => SETitem(e, setstability_moisture_sensitive, 'stability_moisture_sensitive')}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Moisture-Sensitive</span>
          </label>
        </div>
        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2">
            Other Techniques Used for Characterization
          </p>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              value="IR"
              
              checked={IR}
              onChange={(e) => SETitem(e, setIR, 'IR')}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">IR</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              value="NMR"
              
              checked={NMR}
              onChange={(e) => SETitem(e,setNMR, 'NMR')}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">NMR</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              value="Mass Spectrum"
              
              checked={Mass_spectrum}
              onChange={(e) => SETitem(e, setMass_spectrum, 'Mass_Spectrum')}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Mass Spectrum</span>
          </label>
        </div>
        <div className="mb-4 mt-4">
          <label htmlFor="structureMaterial" className="block text-gray-700 text-sm font-bold mb-2">
            Starting Materials and Solvent Information
          </label>
          <input
            type="text"
            id="structureMaterial"
            value={structureMaterial}
            onChange={(e) => SETitem(e, setStructureMaterial, 'structureMaterial')}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter starting material and solvent Information"
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

export default SingleCrystalXRayForm;
