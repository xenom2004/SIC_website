"use client"
import React, { useState } from 'react';

const HPLCForm = () => {
  const [solubility, setSolubility] = useState('');
  const [numberOfComponents, setNumberOfComponents] = useState('');
  const [hazards, setHazards] = useState('');
  const [absorptionWavelength, setAbsorptionWavelength] = useState('');
  const [mobilePhase, setMobilePhase] = useState('');
  const [runTime, setRunTime] = useState('');
  const [flowType, setFlowType] = useState('isocratic'); // Default to isocratic
  const [structures, setStructures] = useState('');  

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
              onChange={(e) => setSolubility(e.target.value)}
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
              onChange={(e) => setNumberOfComponents(e.target.value)}
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
              onChange={(e) => setHazards(e.target.value)}
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
              onChange={(e) => setAbsorptionWavelength(e.target.value)}
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
              onChange={(e) => setMobilePhase(e.target.value)}
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
              onChange={(e) => setRunTime(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Enter run time..." 
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Isocratic or Gradient?</label>
            <div className="flex items-center">
              <input type="radio" id="isocratic" name="flowType" value="isocratic" checked={flowType === 'isocratic'} onChange={() => setFlowType('isocratic')} className="form-radio h-5 w-5 text-gray-600" />
              <label htmlFor="isocratic" className="ml-2">Isocratic</label>
              <input type="radio" id="gradient" name="flowType" value="gradient" checked={flowType === 'gradient'} onChange={() => setFlowType('gradient')} className="form-radio h-5 w-5 text-gray-600 ml-4" />
              <label htmlFor="gradient" className="ml-2">Gradient</label>
            </div>
          </div>

          <div className="mb-4">
            <label for="structures" className="block text-gray-700 text-sm font-bold mb-2">Structures</label>
            <textarea 
              id="structures" 
              value={structures}
              onChange={(e) => setStructures(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Provide chemical structures..." 
              required
            ></textarea>
          </div>
        </div>
        
        <div className="flex items-center justify-center mt-6">
          <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default HPLCForm; 
