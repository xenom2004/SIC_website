"use client"
import React, { useState, useEffect } from 'react';

const id = 7;

const NMR = () => {
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
  const [remark,setremark]=useState(GETitem(null, 'remark'));
  const [amount, setAmount] = useState(() => GETitem('', 'amount'));
  const [D2O, setD2O] = useState(() => GETitem(false, 'D2O'));
  const [CD3COCH3, setCD3COCH3] = useState(() => GETitem(false, 'CD3COCH3'));
  const [MeOD, setMeOD] = useState(() => GETitem(false, 'MeOD'));
  const [Other, setOther] = useState(() => GETitem(false, 'Other'));
  const [molecularFormula, setMolecularFormula] = useState(() => GETitem('', 'molecularFormula'));
  const [molecularStructure, setMolecularStructure] = useState(() => GETitem('', 'molecularStructure'));

  useEffect(() => {
    const handleStorageChange = () => {
      setD2O(GETitem(false, 'D2O'));
      setCD3COCH3(GETitem(false, 'CD3COCH3'));
      setMeOD(GETitem(false, 'MeOD'));
      setOther(GETitem(false, 'Other'));
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', { amount, D2O, CD3COCH3, MeOD, Other, molecularFormula, molecularStructure });
  };

  const handleSolubilityChange = (solvent) => {
    switch (solvent) {
      case 'D2O':
        setD2O(prev => !prev);
        SETitem({ target: { type: 'checkbox', checked: !D2O } }, setD2O, 'D2O');
        break;
      case 'CD3COCH3':
        setCD3COCH3(prev => !prev);
        SETitem({ target: { type: 'checkbox', checked: !CD3COCH3 } }, setCD3COCH3, 'CD3COCH3');
        break;
      case 'MeOD':
        setMeOD(prev => !prev);
        SETitem({ target: { type: 'checkbox', checked: !MeOD } }, setMeOD, 'MeOD');
        break;
      case 'Other':
        setOther(prev => !prev);
        SETitem({ target: { type: 'checkbox', checked: !Other } }, setOther, 'Other');
        break;
      default:
        break;
    }
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
            onChange={(e) => SETitem(e, setAmount, 'amount')}
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
              
              checked={D2O}
              onChange={() => handleSolubilityChange('D2O')}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">D2O</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              
              checked={CD3COCH3}
              onChange={() => handleSolubilityChange('CD3COCH3')}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">CD3COCH3</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              checked={MeOD}
              
              onChange={() => handleSolubilityChange('MeOD')}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">MeOD</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              checked={Other}
              
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
            onChange={(e) => SETitem(e, setMolecularFormula, 'molecularFormula')}
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
            onChange={(e) => SETitem(e, setMolecularStructure, 'molecularStructure')}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter molecular structure..."
            required
          />
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

export default NMR;
