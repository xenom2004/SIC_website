import React, { useState } from 'react';

const ChemicalDataForm = () => {

  const [amount, setAmount] = useState('');
  const [solubility, setSolubility] = useState({
    D2O: false,
    CD3COCH3: false,
    MeOD: false,
    Other: false,
  });

  const [molecularFormula, setMolecularFormula] = useState('');
  const [molecularStructure, setMolecularStructure] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (send data to server)
    console.log('Form Data:', { amount, solubility, molecularFormula, molecularStructure });
  };

  const handleSolubilityChange = (solvent) => {
    setSolubility({
      ...solubility,
      [solvent]: !solubility[solvent], 
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="mx-auto text-3xl font-bold mb-4">NMR Form</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">
            Amount (mg)
          </label>
          <textarea
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter amount..."
            required
          />
        </div>

        {/* Solubility Section */}
        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2">Solubility</p>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              value="D2O"
              checked={solubility.D2O}
              onChange={() => handleSolubilityChange('D2O')}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">D2O</span>
          </label>
          {/* ... (Existing D2O checkbox) */}
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              value="CD3COCH3"
              checked={solubility.CD3COCH3}
              onChange={() => handleSolubilityChange('CD3COCH3')}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">CD3COCH3</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              value="MeOD"
              checked={solubility.MeOD}
              onChange={() => handleSolubilityChange('MeOD')}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">MeOD</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              value="Other"
              checked={solubility.Other}
              onChange={() => handleSolubilityChange('Other')}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Other</span>
          </label>
        </div>


        <div className="mb-4">
          <label htmlFor="molecularFormula" className="block text-gray-700 text-sm font-bold mb-2">
            Molecular Formula
          </label>
          <textarea
            id="molecularFormula"
            value={molecularFormula}
            onChange={(e) => setMolecularFormula(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter molecular formula..."
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="molecularStructure" className="block text-gray-700 text-sm font-bold mb-2">
            Molecular Structure
          </label>
          <textarea
            id="molecularStructure"
            value={molecularStructure}
            onChange={(e) => setMolecularStructure(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter molecular structure..."
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

export default ChemicalDataForm;