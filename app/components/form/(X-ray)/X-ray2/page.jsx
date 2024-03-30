"use client"
import React, { useState } from "react";
<<<<<<< HEAD
=======
const id = 3;
const XAFSForm = () => {
   // Unique identifier for the form data
>>>>>>> ad4b1009531b59f371c2d5adb41b022edcb3930a

const id = 3;

const XAFSForm = () => {
  // Function to set form data into local storage
  const SETitem = (e, setVariable, variable) => {
    const formDetails = JSON.parse(localStorage.getItem("form_details")) || {};
    formDetails[id] = formDetails[id] || {};
    formDetails[id][variable] =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    localStorage.setItem("form_details", JSON.stringify(formDetails));
    setVariable(
      e.target.type === "checkbox" ? e.target.checked : e.target.value
    );
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

  // State variables for form inputs
<<<<<<< HEAD
  const [measurementTypeXANES, setMeasurementTypeXANES] = useState(GETitem(false, "measurementTypeXANES"));
  const [measurementTypeEXAFS, setMeasurementTypeEXAFS] = useState(GETitem(false, "measurementTypeEXAFS"));
  const [measurementTypeBoth, setMeasurementTypeBoth] = useState(GETitem(false, "measurementTypeBoth"));
  const [caution, setCaution] = useState(GETitem("", "caution"));
  const [numberOfSamples, setNumberOfSamples] = useState(GETitem("", "numberOfSamples"));
  const [sampleNatureHazardous, setSampleNatureHazardous] = useState(GETitem(false, "sampleNatureHazardous"));
  const [sampleNatureHygroscopic, setSampleNatureHygroscopic] = useState(GETitem(false, "sampleNatureHygroscopic"));
  const [sampleNatureOxidises, setSampleNatureOxidises] = useState(GETitem(false, "sampleNatureOxidises"));
  const [sampleNatureNone, setSampleNatureNone] = useState(GETitem(false, "sampleNatureNone"));
  const [mdsSheetAttached, setMdsSheetAttached] = useState(GETitem(false, "mdsSheetAttached"));
  const [mdsSheetNonAttached, setMdsSheetNonAttached] = useState(GETitem(false, "mdsSheetNonAttached"));
  const [specialPrecautions, setSpecialPrecautions] = useState(GETitem("", "specialPrecautions"));
=======
  const [measurementType, setMeasurementType] = useState(
    GETitem("", "measurementType")
  );
  const [caution, setCaution] = useState(GETitem("", "caution"));
  const [numberOfSamples, setNumberOfSamples] = useState(
    GETitem("", "numberOfSamples")
  );
  const [sampleNature, setSampleNature] = useState(GETitem("", "sampleNature"));
  const [mdsSheet, setMdsSheet] = useState(GETitem("", "mdsSheet"));
  const [specialPrecautions, setSpecialPrecautions] = useState(
    GETitem("", "specialPrecautions")
  );
>>>>>>> ad4b1009531b59f371c2d5adb41b022edcb3930a

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      measurementTypeXANES,
      measurementTypeEXAFS,
      measurementTypeBoth,
      caution,
      numberOfSamples,
      sampleNatureHazardous,
      sampleNatureHygroscopic,
      sampleNatureOxidises,
      sampleNatureNone,
      mdsSheetAttached,
      mdsSheetNonAttached,
      specialPrecautions,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 max-w-md mx-auto">
        XAFS Facility Form
      </h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2">
            Measurement Type
          </p>
          <label className="inline-flex items-center">
            <input
<<<<<<< HEAD
              type="checkbox"
              checked={measurementTypeXANES}
              onChange={(e) => SETitem(e, setMeasurementTypeXANES, "measurementTypeXANES")}
              className="form-checkbox h-5 w-5 text-gray-600"
=======
              type="radio"
              value="XANES"
              checked={measurementType === "XANES"}
              onChange={(e) =>
                SETitem(e, setMeasurementType, "measurementType")
              }
              className="form-radio h-5 w-5 text-gray-600"
>>>>>>> ad4b1009531b59f371c2d5adb41b022edcb3930a
            />
            <span className="ml-2">XANES</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
<<<<<<< HEAD
              type="checkbox"
              checked={measurementTypeEXAFS}
              onChange={(e) => SETitem(e, setMeasurementTypeEXAFS, "measurementTypeEXAFS")}
              className="form-checkbox h-5 w-5 text-gray-600"
=======
              type="radio"
              value="EXAFS"
              checked={measurementType === "EXAFS"}
              onChange={(e) =>
                SETitem(e, setMeasurementType, "measurementType")
              }
              className="form-radio h-5 w-5 text-gray-600"
>>>>>>> ad4b1009531b59f371c2d5adb41b022edcb3930a
            />
            <span className="ml-2">EXAFS</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
<<<<<<< HEAD
              type="checkbox"
              checked={measurementTypeBoth}
              onChange={(e) => SETitem(e, setMeasurementTypeBoth, "measurementTypeBoth")}
              className="form-checkbox h-5 w-5 text-gray-600"
=======
              type="radio"
              value="Both"
              checked={measurementType === "Both"}
              onChange={(e) =>
                SETitem(e, setMeasurementType, "measurementType")
              }
              className="form-radio h-5 w-5 text-gray-600"
>>>>>>> ad4b1009531b59f371c2d5adb41b022edcb3930a
            />
            <span className="ml-2">Both</span>
          </label>
        </div>
        <div className="mb-4">
          <label
            htmlFor="caution"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Caution to be Measured for Absorbed
          </label>
          <textarea
            id="caution"
            value={caution}
            onChange={(e) => SETitem(e, setCaution, "caution")}
            rows="3"
            className="resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter caution..."
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="numberOfSamples"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Number of Samples
          </label>
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
        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2">
            Nature of the Samples
          </p>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={sampleNatureHazardous}
              onChange={(e) => SETitem(e, setSampleNatureHazardous, "sampleNatureHazardous")}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Hazardous</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
<<<<<<< HEAD
              type="checkbox"
              checked={sampleNatureHygroscopic}
              onChange={(e) => SETitem(e, setSampleNatureHygroscopic, "sampleNatureHygroscopic")}
              className="form-checkbox h-5 w-5 text-gray-600"
=======
              type="radio"
              value="Hygroscopic"
              checked={sampleNature === "Hygroscopic"}
              onChange={(e) => SETitem(e, setSampleNature, "sampleNature")}
              className="form-radio h-5 w-5 text-gray-600"
>>>>>>> ad4b1009531b59f371c2d5adb41b022edcb3930a
            />
            <span className="ml-2">Hygroscopic</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
<<<<<<< HEAD
              type="checkbox"
              checked={sampleNatureOxidises}
              onChange={(e) => SETitem(e, setSampleNatureOxidises, "sampleNatureOxidises")}
              className="form-checkbox h-5 w-5 text-gray-600"
=======
              type="radio"
              value="Oxidises in air"
              checked={sampleNature === "Oxidises in air"}
              onChange={(e) => SETitem(e, setSampleNature, "sampleNature")}
              className="form-radio h-5 w-5 text-gray-600"
>>>>>>> ad4b1009531b59f371c2d5adb41b022edcb3930a
            />
            <span className="ml-2">Oxidises in air</span>
          </label>
          <label className="inline-flex items-center ml">
            <input
<<<<<<< HEAD
              type="checkbox"
              checked={sampleNatureNone}
              onChange={(e) => SETitem(e, setSampleNatureNone, "sampleNatureNone")}
              className="form-checkbox h-5 w-5 text-gray-600"
=======
              type="radio"
              value="None of these"
              checked={sampleNature === "None of these"}
              onChange={(e) => SETitem(e, setSampleNature, "sampleNature")}
              className="form-radio h-5 w-5 text-gray-600"
>>>>>>> ad4b1009531b59f371c2d5adb41b022edcb3930a
            />
            <span className="ml-2">None of these</span>
          </label>
        </div>
        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2">
            MDS Sheet
          </p>
          <label className="inline-flex items-center">
            <input
<<<<<<< HEAD
              type="checkbox"
              checked={mdsSheetAttached}
              onChange={(e) => SETitem(e, setMdsSheetAttached, "mdsSheetAttached")}
              className="form-checkbox h-5 w-5 text-gray-600"
=======
              type="radio"
              value="Attached"
              checked={mdsSheet === "Attached"}
              onChange={(e) => SETitem(e, setMdsSheet, "mdsSheet")}
              className="form-radio h-5 w-5 text-gray-600"
>>>>>>> ad4b1009531b59f371c2d5adb41b022edcb3930a
            />
            <span className="ml-2">Attached</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
<<<<<<< HEAD
              type="checkbox"
              checked={mdsSheetNonAttached}
              onChange={(e) => SETitem(e, setMdsSheetNonAttached, "mdsSheetNonAttached")}
              className="form-checkbox h-5 w-5 text-gray-600"
=======
              type="radio"
              value="Non-attached"
              checked={mdsSheet === "Non-attached"}
              onChange={(e) => SETitem(e, setMdsSheet, "mdsSheet")}
              className="form-radio h-5 w-5 text-gray-600"
>>>>>>> ad4b1009531b59f371c2d5adb41b022edcb3930a
            />
            <span className="ml-2">Non-attached</span>
          </label>
        </div>
        <div className="mb-4">
          <label
            htmlFor="specialPrecautions"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Any Special Precaution while Handling the Samples
          </label>
          <textarea
            id="specialPrecautions"
            value={specialPrecautions}
            onChange={(e) =>
              SETitem(e, setSpecialPrecautions, "specialPrecautions")
            }
            rows="3"
            className="resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter special precautions..."
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

export default XAFSForm;
