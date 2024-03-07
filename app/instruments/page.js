"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';


const InstrumentCard = ({ instrument }) => {
  return (
    <div className="border rounded-md p-4 shadow-md mb-4">
      <Link href={`/instruments/${instrument.id}`}>
       
          <h2 className="text-lg font-semibold mb-2">{instrument.name}</h2>
          <p className="text-gray-600 mb-2">ID: {instrument.id}</p>
          <p className={`text-sm ${getStatusColor(instrument.status)} mb-2`}>
            Status: {instrument.status}
          </p>
          <p className="text-gray-700">{instrument.info}</p>
        
      </Link>
    </div>
  );
};


const getStatusColor = (status) => {
  switch (status) {
    case 'working':
      return 'text-green-500';
    case 'calibrating':
      return 'text-yellow-500';
    case 'maintenance':
      return 'text-red-500';
    case 'offline':
      return 'text-gray-500';
    default:
      return 'text-gray-500';
  }
};


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
      <h1 className="text-2xl font-bold mb-4">Instruments</h1>
      {instruments.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {instruments.map((instrument) => (
            <InstrumentCard key={instrument.id} instrument={instrument} />
          ))}
        </div>
      ) : (
        <p>Loading instruments...</p>
      )}
    </div>
  );
};

export default InstrumentList;
