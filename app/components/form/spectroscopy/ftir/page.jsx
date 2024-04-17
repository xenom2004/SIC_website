"use client";
import React, { useState, useEffect } from "react";

const id = 8;

const FTIRForm = () => {
  

  const SETitem = (e, setVariable, variable) => {
    const formDetails = JSON.parse(localStorage.getItem("form_details")) || {};
    formDetails[id] = formDetails[id] || {};
    formDetails[id][variable] = e.target.value;
    localStorage.setItem("form_details", JSON.stringify(formDetails));
    setVariable(e.target.value);
  };

  const SETitem2 = (e, setVariable, variable) => {
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

  // const [checkboxState, setCheckboxState] = useState(() => {
  //   const savedCheckboxState = JSON.parse(localStorage.getItem("checkboxState")) || {};
  //   return savedCheckboxState;
  // });
  const [remark,setremark]=useState(GETitem(null, 'remark'));
  const [checkboxState, setCheckboxState] = useState(GETitem("", "checkboxState"));
  const [solubility, setSolubility] = useState(() => GETitem("", "solubility"));
  const [hazards, setHazards] = useState(() => GETitem("", "hazards"));
  const [calibrationConcentration, setCalibrationConcentration] = useState(() => GETitem("", "calibrationConcentration"));
  const [molecularFormula, setMolecularFormula] = useState(() => GETitem("", "molecularFormula"));
  const [molecularWeight, setMolecularWeight] = useState(() => GETitem("", "molecularWeight"));
  const [excitationWavelength, setExcitationWavelength] = useState(() => GETitem("", "excitationWavelength"));
  const [rangeOfScan, setRangeOfScan] = useState(() => GETitem("", "rangeOfScan"));
  const [specialRequest, setSpecialRequest] = useState(() => GETitem("", "specialRequest"));
  const [solid,setsolid]=useState(()=>GETitem("", "solid"));
  const [liquid,setliquid]=useState(()=>GETitem("", "liquid"));
  const [ATR,setATR]=useState(()=>GETitem("", "ATR"));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", {
      solubility,
      hazards,
      calibrationConcentration,
      molecularFormula,
      molecularWeight,
      excitationWavelength,
      rangeOfScan,
      specialRequest,
      checkboxState,
    });
  };

  const handleCheckboxChange = (option) => {
    setCheckboxState((prevState) => {
      const updatedCheckboxState = { ...prevState, [option]: !prevState[option] };
      localStorage.setItem("checkboxState", JSON.stringify(updatedCheckboxState));
      return updatedCheckboxState;
    });
  };

  useEffect(() => {
    const savedCheckboxState = JSON.parse(localStorage.getItem("checkboxState")) || {};
    setCheckboxState(savedCheckboxState);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Additional Analysis Request Form
      </h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="grid grid-cols-2 gap-8">
          {/* Solubility */}
          <div className="mb-4">
            <label htmlFor="solubility" className="block text-gray-700 text-sm font-bold mb-2">
              Solubility
            </label>
            <textarea
              id="solubility"
              value={solubility}
              onChange={(e) => SETitem(e, setSolubility, "solubility")}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Specify solvent"
              required
            ></textarea>
          </div>

          {/* Hazards */}
          <div className="mb-4">
            <label htmlFor="hazards" className="block text-gray-700 text-sm font-bold mb-2">
              Hazards
            </label>
            <textarea
              id="hazards"
              value={hazards}
              onChange={(e) => SETitem(e, setHazards, "hazards")}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter hazard information..."
            ></textarea>
          </div>

          {/* Calibration Concentration */}
          <div className="mb-4">
            <label htmlFor="calibrationConcentration" className="block text-gray-700 text-sm font-bold mb-2">
              Calibration Concentration
            </label>
            <textarea
              id="calibrationConcentration"
              value={calibrationConcentration}
              onChange={(e) => SETitem(e, setCalibrationConcentration, "calibrationConcentration")}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Calibration Concentration..."
              required
            ></textarea>
          </div>

          {/* Molecular Formula */}
          <div className="mb-4">
            <label htmlFor="molecularFormula" className="block text-gray-700 text-sm font-bold mb-2">
              Molecular Formula
            </label>
            <textarea
              id="molecularFormula"
              value={molecularFormula}
              onChange={(e) => SETitem(e, setMolecularFormula, "molecularFormula")}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Molecular Formula..."
              required
            ></textarea>
          </div>

          {/* Molecular Weight */}
          <div className="mb-4">
            <label htmlFor="molecularWeight" className="block text-gray-700 text-sm font-bold mb-2">
              Molecular Weight
            </label>
            <textarea
              id="molecularWeight"
              value={molecularWeight}
              onChange={(e) => SETitem(e, setMolecularWeight, "molecularWeight")}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Molecular Weight..."
              required
            ></textarea>
          </div>

          {/* Excitation Wavelength */}
          <div className="mb-4">
            <label htmlFor="excitationWavelength" className="block text-gray-700 text-sm font-bold mb-2">
              Excitation Wavelength
            </label>
            <textarea
              id="excitationWavelength"
              value={excitationWavelength}
              onChange={(e) => SETitem(e, setExcitationWavelength, "excitationWavelength")}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Excitation Wavelength..."
              required
            ></textarea>
          </div>

          {/* Range of Scan */}
          <div className="mb-4">
            <label htmlFor="rangeOfScan" className="block text-gray-700 text-sm font-bold mb-2">
              Range Of Scan
            </label>
            <textarea
              id="rangeOfScan"
              value={rangeOfScan}
              onChange={(e) => SETitem(e, setRangeOfScan, "rangeOfScan")}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter range of scan..."
              required
            ></textarea>
          </div>

          {/* Special Request */}
          <div className="mb-4">
            <label htmlFor="specialRequest" className="block text-gray-700 text-sm font-bold mb-2">
              Special Request
            </label>
            <textarea
              id="specialRequest"
              value={specialRequest}
              onChange={(e) => SETitem(e, setSpecialRequest, "specialRequest")}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter special request..."
            ></textarea>
          </div>
        </div>

        {/* Request Analysis */}
        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2">Request Analysis</p>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              value="Solid"
              
              checked={solid}
              onChange={(e) => SETitem2(e, setsolid, "solid")}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Solid (KBr Pallet)</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              value="Liquid"
              
              checked={liquid}
              onChange={(e) => SETitem2(e, setliquid, "liquid")}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Liquid (Liquid Cells)</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              value="ATR"
              
              checked={ATR}
              onChange={(e) => SETitem2(e, setATR, "ATR")}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">ATR</span>
          </label>
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

        {/* Submit Button */}
        
      </form>
    </div>
  );
};

export default FTIRForm;
