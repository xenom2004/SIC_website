"use client"
import React, { useState } from "react";

const id = 13; // Unique ID for this form

const UVVISNIRForm = () => {
    const SETitem = (e, setVariable, variable) => {
        var formDetails = JSON.parse(localStorage.getItem("form_details")) || {};
        formDetails[id] = formDetails[id] || {};
        formDetails[id][variable] = e.target.value;
        localStorage.setItem("form_details", JSON.stringify(formDetails));
        setVariable(e.target.value);
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

    const [noOfSamples, setNoOfSamples] = useState(GETitem("", "noOfSamples"));
    const [wavelengthRange, setWavelengthRange] = useState(GETitem("", "wavelengthRange"));
    const [specialExperiment, setSpecialExperiment] = useState(GETitem("", "specialExperiment"));
    const [remark,setremark]=useState(GETitem(null, 'remark'));

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data: ', { noOfSamples, wavelengthRange, specialExperiment });
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-4 text-center">UV-VIS-NIR Request Form</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="mb-4">
                    <label htmlFor="noOfSamples" className="block text-gray-700 text-sm font-bold mb-2">No of Samples</label>
                    <textarea
                        id="noOfSamples"
                        value={noOfSamples}
                        onChange={(e) => SETitem(e, setNoOfSamples, "noOfSamples")}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="No of Samples"
                        required
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label htmlFor="wavelengthRange" className="block text-gray-700 text-sm font-bold mb-2">Wavelength Range</label>
                    <textarea
                        id="wavelengthRange"
                        value={wavelengthRange}
                        onChange={(e) => SETitem(e, setWavelengthRange, "wavelengthRange")}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="min 200nm to max 3300nm"
                        required
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label htmlFor="specialExperiment" className="block text-gray-700 text-sm font-bold mb-2">Special Experiment</label>
                    <textarea
                        id="specialExperiment"
                        value={specialExperiment}
                        onChange={(e) => SETitem(e, setSpecialExperiment, "specialExperiment")}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="If any"
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

            </form>
        </div>
    );
};

export default UVVISNIRForm;
