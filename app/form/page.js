"use client"
import React, { useState, useEffect } from 'react';

const FormComponent = () => {
  const [selectedInstruments, setSelectedInstruments] = useState([]);

  useEffect(() => {
    // Retrieve data from local storage
    const storedData = localStorage.getItem('selectedInstruments');
    if (storedData) {
      // Parse the stored data
      const instruments = JSON.parse(storedData);
      setSelectedInstruments(instruments);
    }
  }, []);

  return (
    <div className="container">
      <h2>Selected Instruments:</h2>
      <ul>
        {selectedInstruments.map((instrument, index) => (
          <li key={index}>
            <strong>ID:</strong> {instrument.id}, <strong>Name:</strong> {instrument.name}, <strong>Quantity:</strong> {instrument.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormComponent;
