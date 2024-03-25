"use client"
import React, { useState } from 'react';

const FluorescenceMicroscopyForm = () => {
  const [sampleType, setSampleType] = useState('');
  const [numberOfSamples, setNumberOfSamples] = useState('');
  const [visualized, setVisualized] = useState(false); 
  const [antifadeReagent, setAntifadeReagent] = useState(false); 
  const [fluorochromes, setFluorochromes] = useState('');
  const [emissionWavelength, setEmissionWavelength] = useState('');
  const [excitationWavelength, setExcitationWavelength] = useState('');
  const [magnification, setMagnification] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (send data to server)
    console.log('Form Data:', { 
      sampleType, 
      numberOfSamples,
      visualized,
      antifadeReagent,
      fluorochromes,
      emissionWavelength,
      excitationWavelength,
      magnification
    }); 
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Fluorescence Microscopy Request Form</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="grid grid-cols-2 gap-8">
          <div className="mb-4">
            <label for="sampleType" className="block text-gray-700 text-sm font-bold mb-2">Sample Type</label>
            <input 
              type="text"
              id="sampleType" 
              value={sampleType}
              onChange={(e) => setSampleType(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Enter sample type..." 
              required
            />
          </div>

          <div className="mb-4">
            <label for="numberOfSamples" className="block text-gray-700 text-sm font-bold mb-2">Number of Samples</label>
            <input 
              type="number" 
              id="numberOfSamples" 
              value={numberOfSamples}
              onChange={(e) => setNumberOfSamples(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Enter number of samples..." 
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Visualized in Fluorescence Microscope?</label>
            <div className="flex items-center">
              <input type="radio" id="visualizedYes" name="visualized" value={true} checked={visualized === true} onChange={() => setVisualized(true)} className="form-radio h-5 w-5 text-gray-600" />
              <label htmlFor="visualizedYes" className="ml-2">Yes</label>
              <input type="radio" id="visualizedNo" name="visualized" value={false} checked={visualized === false} onChange={() => setVisualized(false)} className="form-radio h-5 w-5 text-gray-600 ml-4" />
              <label htmlFor="visualizedNo" className="ml-2">No</label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Antifade Reagent Used?</label>
            <div className="flex items-center">
              <input type="radio" id="antifadeYes" name="antifade" value={true} checked={antifadeReagent === true} onChange={() => setAntifadeReagent(true)} className="form-radio h-5 w-5 text-gray-600" />
              <label htmlFor="antifadeYes" className="ml-2">Yes</label>
              <input type="radio" id="antifadeNo" name="antifade" value={false} checked={antifadeReagent === false} onChange={() => setAntifadeReagent(false)} className="form-radio h-5 w-5 text-gray-600 ml-4" />
              <label htmlFor="antifadeNo" className="ml-2">No</label>
            </div>
          </div>

          <div className="mb-4">
            <label for="fluorochromes" className="block text-gray-700 text-sm font-bold mb-2">Fluorochrome(s)</label>
            <input
              type="text" 
              id="fluorochromes" 
              value={fluorochromes}
              onChange={(e) => setFluorochromes(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Enter fluorochromes..." 
              required
            />
          </div>

          <div className="mb-4">
            <label for="emissionWavelength" className="block text-gray-700 text-sm font-bold mb-2">Emission Wavelength</label>
            <input 
              type="text"
              id="emissionWavelength" 
              value={emissionWavelength}
              onChange={(e) => setEmissionWavelength(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Enter emission wavelength..." 
              required
            />
          </div>

          <div className="mb-4">
            <label for="excitationWavelength" className="block text-gray-700 text-sm font-bold mb-2">Excitation Wavelength</label>
            <input 
              type="text"
              id="excitationWavelength" 
              value={excitationWavelength}
              onChange={(e) => setExcitationWavelength(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Enter excitation wavelength..." 
              required
            />
          </div>

          <div className="mb-4">
            <label for="magnification" className="block text-gray-700 text-sm font-bold mb-2">Magnification</label>
            <input 
              type="text"
              id="magnification" 
              value={magnification}
              onChange={(e) => setMagnification(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Enter magnification..." 
              required
            />
          </div> 
        </div>

        <div className="flex items-center justify-center mt-6">
          <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FluorescenceMicroscopyForm; 
