"use client";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const ChargeCalculator = () => {
  const [instruments, setInstruments] = useState([]);
  const [selectedInstruments, setSelectedInstruments] = useState([]);

  useEffect(() => {
    const fetchInstruments = async () => {
      try {
        const response = await fetch('/api/instruments'); // Replace '/api/instruments' with your actual API endpoint
        if (!response.ok) {
          throw new Error(`Failed to fetch instruments: ${response.status}`);
        }
        const data = await response.json();
        setInstruments(data);
      } catch (error) {
        console.error('Error fetching instruments:', error);
      }
    };

    fetchInstruments();
  }, []);

  const handleInstrumentChange = (instrument) => {
    const index = selectedInstruments.findIndex((item) => item.id === instrument.id);
    if (index === -1) {
      setSelectedInstruments([...selectedInstruments, { ...instrument, quantity: 1 }]);
    } else {
      const updatedInstruments = [...selectedInstruments];
      updatedInstruments.splice(index, 1);
      setSelectedInstruments(updatedInstruments);
    }
  };

  const handleQuantityChange = (instrument, quantity) => {
    const updatedInstruments = selectedInstruments.map(item => {
      if (item.id === instrument.id) {
        return { ...item, quantity };
      }
      return item;
    });
    setSelectedInstruments(updatedInstruments);
  };

  const calculateTotalCharge = () => {
    return selectedInstruments.reduce((total, instrument) => total + (instrument.charge * instrument.quantity), 0);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">Select Instruments:</h2>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Instrument Name</th>
            <th className="px-4 py-2">Charge (₹)</th>
            <th className="px-4 py-2">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {instruments.map((instrument) => (
            <tr key={instrument.id}>
              <td className="border px-4 py-2">{instrument.id}</td>
              <td className="border px-4 py-2">{instrument.name}</td>
              <td className="border px-4 py-2">{instrument.charge}</td>
              <td className="border px-4 py-2 flex items-center">
                <button
                  onClick={() => handleQuantityChange(instrument, (selectedInstruments.find(item => item.id === instrument.id)?.quantity || 1) - 1)}
                  disabled={(selectedInstruments.find(item => item.id === instrument.id)?.quantity || 1) <= 1}
                  className="mr-2"
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span className="w-12 text-center">
                  {selectedInstruments.find(item => item.id === instrument.id)?.quantity || 1}
                </span>
                <button
                  onClick={() => handleQuantityChange(instrument, (selectedInstruments.find(item => item.id === instrument.id)?.quantity || 1) + 1)}
                  className="ml-2"
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </td>
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
        <p className="text-xl font-semibold">₹{calculateTotalCharge()}</p>
      </div>
    </div>
  );
};

export default ChargeCalculator;
