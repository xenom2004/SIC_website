"use client"
import React, { useState } from 'react';

const id = 11; // Unique ID for this form

const PLForm = () => {
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
  const [conductive, setConductive] = useState(() => ({
    conductive: false,
    nonconductive: false,
  }));
  const [description, setDescription] = useState(() => ({
    SEM: false,
    EDM: false,
    WDX: false,
  }));
  const [expectedElements, setExpectedElements] = useState(() => GETitem('', 'expectedElements'));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', { natureOfSample, noOfSamples, conductive, description, expectedElements });
  };

  const handleConductiveChange = (option) => {
    setConductive({
      ...conductive,
      [option]: !conductive[option],
    });
  };

  const handleDescriptionChange = (option) => {
    setDescription({
      ...description,
      [option]: !description[option],
    });
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
            onChange={(e) => SETitem(e, setNatureOfSample, 'natureOfSample')}
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
            onChange={(e) => SETitem(e, setNoOfSamples, 'noOfSamples')}
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
              value="Conductive"
              checked={conductive.conductive}
              onChange={() => handleConductiveChange('conductive')}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Conductive</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              value="nonconductive"
              checked={conductive.nonconductive}
              onChange={() => handleConductiveChange('nonconductive')}
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
              value="SEM"
              checked={description.SEM}
              onChange={() => handleDescriptionChange('SEM')}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">SEM</span>
          </label>
          <label className="inline-flex items-center ml-2">
            <input
              type="checkbox"
              value="EDM"
              checked={description.EDM}
              onChange={() => handleDescriptionChange('EDM')}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">EDM</span>
          </label>
          <label className="inline-flex items-center ml-2">
            <input
              type="checkbox"
              value="WDX"
              checked={description.WDX}
              onChange={() => handleDescriptionChange('WDX')}
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
            onChange={(e) => SETitem(e, setExpectedElements, 'expectedElements')}
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

export default PLForm;
