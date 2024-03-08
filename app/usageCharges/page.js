"use client"
import React, { useState } from 'react';

const instrumentsData = [
  { id: 1, name: 'Instrument 1', charge: 10 },
  { id: 2, name: 'Instrument 2', charge: 15 },
  { id: 3, name: 'Instrument 3', charge: 20 },
  // Add more instruments as needed
];

const ChargeCalculator = () => {
  const [selectedInstruments, setSelectedInstruments] = useState([]);

  const handleInstrumentChange = (instrument) => {
    const index = selectedInstruments.findIndex((item) => item.id === instrument.id);
    if (index === -1) {
      setSelectedInstruments([...selectedInstruments, instrument]);
    } else {
      const updatedInstruments = [...selectedInstruments];
      updatedInstruments.splice(index, 1);
      setSelectedInstruments(updatedInstruments);
    }
  };

  const calculateTotalCharge = () => {
    return selectedInstruments.reduce((total, instrument) => total + instrument.charge, 0);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">Select Instruments:</h2>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Instrument Name</th>
            <th className="px-4 py-2">Charge ($)</th>
          </tr>
        </thead>
        <tbody>
          {instrumentsData.map((instrument) => (
            <tr key={instrument.id}>
              <td className="border px-4 py-2">{instrument.id}</td>
              <td className="border px-4 py-2">{instrument.name}</td>
              <td className="border px-4 py-2">{instrument.charge}</td>
              <td className="border px-4 py-2">
                <input
                  type="checkbox"
                  checked={selectedInstruments.some((item) => item.id === instrument.id)}
                  onChange={() => handleInstrumentChange(instrument)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4">Total Charges:</h2>
        <p className="text-xl font-semibold">${calculateTotalCharge()}</p>
      </div>
    </div>
  );
};

export default ChargeCalculator;
