"use client";
import React, { useState } from "react";
const id=2;
const PowderXRDForm = () => {
  

  // Function to set form data into local storage
  const SETitem = (e, setVariable, variable) => {
    const formDetails = JSON.parse(localStorage.getItem("form_details")) || {};
    formDetails[id] = formDetails[id] || {};
    formDetails[id][variable] = e.target.type === "checkbox" ? e.target.checked : e.target.value;
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

  // State variable for samples
  const [samples, setSamples] = useState([
    { srNo: 1, sampleCode: "", description: "" },
    { srNo: 2, sampleCode: "", description: "" },
    { srNo: 3, sampleCode: "", description: "" },
  ]);

  // Function to add a new sample
  const handleAddSample = () => {
    const newSample = {
      srNo: samples.length + 1,
      sampleCode: "",
      description: "",
    };
    setSamples([...samples, newSample]);
  };

  // Function to handle changes in sample input fields
  const handleSampleChange = (index, field, value) => {
    const updatedSamples = [...samples];
    updatedSamples[index][field] = value;
    setSamples(updatedSamples);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log("Form submitted:", samples);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">
        Powder X-ray Diffraction (P-XRD) Facility
      </h2>
      <form onSubmit={handleSubmit}>
        <table className="w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Sr No</th>
              <th className="border px-4 py-2">Sample Identification Code</th>
              <th className="border px-4 py-2">Sample Description</th>
            </tr>
          </thead>
          <tbody>
            {samples.map((sample, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{sample.srNo}</td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    value={sample.sampleCode}
                    onChange={(e) =>
                      handleSampleChange(index, "sampleCode", e.target.value)
                    }
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </td>
                <td className="border px-4 py-2">
                  <textarea
                    value={sample.description}
                    onChange={(e) =>
                      handleSampleChange(index, "description", e.target.value)
                    }
                    rows="4"
                    className="resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end mt-4">
          <button
            type="button"
            onClick={handleAddSample}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Sample
          </button>
        </div>
        <div className="flex justify-center mt-6">
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

export default PowderXRDForm;
