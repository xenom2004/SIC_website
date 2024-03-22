import React, { useState } from 'react';

const FTIRForm = () => {
  const [solubility, setSolubility] = useState('');
  const [hazards, setHazards] = useState('');
  const [calibrationConcentration, setCalibrationConcentration] = useState('');
  const [molecularFormula, setMolecularFormula] = useState('');
  const [molecularWeight, setMolecularWeight] = useState('');
  const [excitationWavelength, setExcitationWavelength] = useState('');
  const [rangeOfScan, setRangeOfScan] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [analysisOptions, setAnalysisOptions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (send data to server)
    console.log('Form Data:', { 
      solubility, 
      hazards, 
      calibrationConcentration, 
      molecularFormula,
      molecularWeight, 
      excitationWavelength, 
      rangeOfScan,
      specialRequest,
      analysisOptions 
    }); 
  };

  const handleAnalysisChange = (option) => {
    if (analysisOptions.includes(option)) {
      setAnalysisOptions(analysisOptions.filter((item) => item !== option));
    } else {
      setAnalysisOptions([...analysisOptions, option]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Additional Analysis Request Form</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="grid grid-cols-2 gap-8">
        <div className="mb-4">
          <label for="solubility" className="block text-gray-700 text-sm font-bold mb-2">Solubility</label>
          <textarea 
            id="solubility" 
            value={solubility}
            onChange={(e) => setSolubility(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            placeholder="Specify solvent" 
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label for="hazards" className="block text-gray-700 text-sm font-bold mb-2">Hazards</label>
          <textarea 
            id="hazards" 
            value={hazards}
            onChange={(e) => setHazards(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            placeholder="Enter hazard information..." 
          ></textarea>
        </div>
        <div className="mb-4">
          <label for="calibrationConcentration" className="block text-gray-700 text-sm font-bold mb-2">Calibration Concentration</label>
          <textarea 
            id="calibrationConcentration" 
            value={calibrationConcentration}
            onChange={(e) => setCalibrationConcentration(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            placeholder="Enter Calibration Concentration..." 
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label for="molecularFormula" className="block text-gray-700 text-sm font-bold mb-2">Molecular Formula</label>
          <textarea 
            id="molecularFormula" 
            value={molecularFormula}
            onChange={(e) => setMolecularFormula(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            placeholder="Enter Molecular Formula..." 
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label for="molecularWeight" className="block text-gray-700 text-sm font-bold mb-2">Molecular Weight</label>
          <textarea 
            id="molecularWeight" 
            value={molecularWeight}
            onChange={(e) => setMolecularWeight(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            placeholder="Enter Molecular Weight..." 
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label for="excitationWavelength" className="block text-gray-700 text-sm font-bold mb-2">Excitation Wavelength</label>
          <textarea 
            id="excitationWavelength" 
            value={excitationWavelength}
            onChange={(e) => setExcitationWavelength(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            placeholder="Enter Excitation Wavelength..." 
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label for="rangeOfScan" className="block text-gray-700 text-sm font-bold mb-2">Range Of Scan</label>
          <textarea 
            id="rangeOfScan" 
            value={rangeOfScan}
            onChange={(e) => setRangeOfScan(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            placeholder="Enter range of scan..." 
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label for="specialRequest" className="block text-gray-700 text-sm font-bold mb-2">Special Request</label>
          <textarea 
            id="specialRequest" 
            value={specialRequest}
            onChange={(e) => setSpecialRequest(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            placeholder="Enter special request..." 
          ></textarea>
        </div>
        </div>
      
        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2">Request Analysis</p>
          <label className="inline-flex items-center">
            <input type="checkbox" value="Solid" checked={analysisOptions.includes('Solid')} onChange={() => handleAnalysisChange('Solid')} className="form-checkbox h-5 w-5 text-gray-600" />
            <span className="ml-2">Solid (KBr Pallet)</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input type="checkbox" value="Liquid" checked={analysisOptions.includes('Liquid')} onChange={() => handleAnalysisChange('Liquid')} className="form-checkbox h-5 w-5 text-gray-600" />
            <span className="ml-2">Liquid (Liquid Cells)</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input type="checkbox" value="ATR" checked={analysisOptions.includes('ATR')} onChange={() => handleAnalysisChange('ATR')} className="form-checkbox h-5 w-5 text-gray-600" />
            <span className="ml-2">ATR</span>
          </label>
        </div>

        <div className="flex items-center justify-center mt-6">
          <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FTIRForm;
