"use client";
import React, { useState, useEffect } from "react";
const id = 27;
const Elemental_analyser = () => {
  const SETitem = (e, setvariable, variable) => {
    var formDetails = JSON.parse(localStorage.getItem("form_details")) || {};
    formDetails[id] = formDetails[id] || {};
    formDetails[id][variable] = e.target.value;
    localStorage.setItem("form_details", JSON.stringify(formDetails));
    setvariable(e.target.value);
  };
  const SETitem2 = (e, setVariable, variable) => {
    const formDetails = JSON.parse(localStorage.getItem("form_details")) || {};
    formDetails[id] = formDetails[id] || {};
    formDetails[id][variable] =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    localStorage.setItem("form_details", JSON.stringify(formDetails));
    setVariable(
      e.target.type === "checkbox" ? e.target.checked : e.target.value
    );
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
  const [crystalInfo, setCrystalInfo] = useState(GETitem(null, "crystalInfo"));
  const [stability, setStability] = useState(GETitem(false, "stability"));
  const [BP, setBP] = useState(GETitem(null, "BP"));
  const [MP, setMP] = useState(GETitem(null, "MP"));
  const [mw, setmw] = useState(GETitem(null, "mw"));
  const [weight, setweight] = useState(GETitem(null, "weight"));
  const [store, setstore] = useState(GETitem(null, "store"));
  const [AS, setAS] = useState(GETitem(false, "AS"));
  const [MS, setMS] = useState(GETitem("", "MS"));
  // Load data from localStorage when the component mounts

  // Update localStorage whenever form data changes

  // Function to handle stability changes

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
        CNHS Elemental Elemental analyser
      </h2>
      <form className="max-w-md mx-auto">
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
            onChange={(e) => SETitem(e, setCrystalInfo, "crystalInfo")}
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
            onChange={(e) => SETitem(e, setmw, "mw")}
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
            onChange={(e) => SETitem(e, setMP, "MP")}
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
            onChange={(e) => SETitem(e, setBP, "BP")}
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
            onChange={(e) => SETitem(e, setweight, "weight")}
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
              value="stability"
              checked={stability}
              onChange={(e) => SETitem2(e, setStability, "stability")}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">light sensitive</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              value="air-sensitive"
              checked={AS}
              onChange={(e) => SETitem2(e, setAS, "AS")}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Air-Sensitive</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              value="moisture-sensitive"
              checked={MS}
              onChange={(e) => SETitem2(e, setMS, "MS")}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Moisture-Sensitive</span>
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
      </form>
    </div>
  );
};

export default Elemental_analyser;
