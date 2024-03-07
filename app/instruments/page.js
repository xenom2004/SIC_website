"use client"
import React, { useState, useEffect } from 'react';

const InstrumentList = () => {
  const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    const fetchInstruments = async () => {
      try {
        const response = await fetch('/api/instruments');
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

  return (
    <div>
      <h1>Instruments</h1>
      {instruments.length > 0 ? (
        <ul>
          {instruments.map((instrument) => (
            <li key={instrument.id}>
              ID: {instrument.id} - Name: {instrument.name} - Status: {instrument.status}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading instruments...</p>
      )}
    </div>
  );
};

export default InstrumentList;
