"use client";
import React, { useState, useEffect } from 'react';

const id = 11; // Unique ID for this form

const PL = () => {
  const SETitem = (e, setVariable, variable) => {
    const formDetails = JSON.parse(localStorage.getItem('form_details')) || {};
    formDetails[id] = formDetails[id] || {};
    formDetails[id][variable] = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    localStorage.setItem('form_details', JSON.stringify(formDetails));
    setVariable(e.target.type === 'checkbox' ? e.target.checked : e.target.value);
  };

  const GETitem = (def, variable) => {
    if (typeof window !== 'undefined' && localStorage.getItem('form_details')) {
      const formDetails = JSON.parse(localStorage.getItem('form_details'));
      if (formDetails[id] && formDetails[id][variable]) {
        return formDetails[id][variable];
      }
    }
    return def;
  };

  const [natureOfSample, setNatureOfSample] = useState(() => GETitem('', 'natureOfSample'));
  const [noOfSamples, setNoOfSamples] = useState(() => GETitem('', 'noOfSamples'));
  const [isConductive, setIsConductive] = useState(() => GETitem(false, 'isConductive'));
  const [isNonConductive, setIsNonConductive] = useState(() => GETitem(false, 'isNonConductive'));
  const [SEM, setSEM] = useState(() => GETitem(false, 'SEM'));
  const [EDM, setEDM] = useState(() => GETitem(false, 'EDM'));
  const [WDX, setWDX] = useState(() => GETitem(false, 'WDX'));
  const [expectedElements, setExpectedElements] = useState(() => GETitem('', 'expectedElements'));

  useEffect(() => {
    localStorage.setItem('form_details', JSON.stringify({
      [id]: {
        natureOfSample,
        noOfSamples,
        isConductive,
        isNonConductive,
        SEM,
        EDM,
        WDX,
        expectedElements
      }
    }));
  }, [natureOfSample, noOfSamples, isConductive, isNonConductive, SEM, EDM, WDX, expectedElements]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', { natureOfSample, noOfSamples, isConductive, isNonConductive, SEM, EDM, WDX, expectedElements });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="mx-auto text-3xl font-bold mb-4">Photo-luminescence (Field Emission Scanning Electron Microscope) Form</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="natureOfSample" className="block text-gray-700 text-sm font-bold mb-2">
            Nature of Sample
          </label>
          <textarea
            id="natureOfSample"
            value={natureOfSample}
            onChange={(e) => setNatureOfSample(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Kindly intimate if toxic"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="noOfSamples" className="block text-gray-700 text-sm font-bold mb-2">
            No of Sample
          </label>
          <textarea
            id="noOfSamples"
            value={noOfSamples}
            onChange={(e) => setNoOfSamples(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="No of sample"
            required
          />
        </div>

        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2">Conductivity</p>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              disabled={true}
              checked={isConductive}
              onChange={() => setIsConductive(!isConductive)}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Conductive</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              disabled={true}
              checked={isNonConductive}
              onChange={() => setIsNonConductive(!isNonConductive)}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Non-conductive</span>
          </label>
        </div>

        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2">Description of requirement</p>

          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={SEM}
              disabled={true}
              onChange={() => setSEM(!SEM)}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">SEM</span>
          </label>
          <label className="inline-flex items-center ml-2">
            <input
              type="checkbox"
              checked={EDM}
              disabled={true}
              onChange={() => setEDM(!EDM)}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">EDM</span>
          </label>
          <label className="inline-flex items-center ml-2">
            <input
              type="checkbox"
              checked={WDX}
              disabled={true}
              onChange={() => setWDX(!WDX)}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">WDX</span>
          </label>
        </div>

        <div className="mb-4">
          <label htmlFor="expectedElements" className="block text-gray-700 text-sm font-bold mb-2">
            EDX/WDX Expected elements
          </label>
          <textarea
            id="expectedElements"
            value={expectedElements}
            onChange={(e) => setExpectedElements(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter..."
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

export default PL;
