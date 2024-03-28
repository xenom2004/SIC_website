"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {Spinner} from "@nextui-org/react";



const InstrumentCard = ({ instrument }) => {
  const sliceInfo = (info) => {
    const words = info.split(' ');
    return words.slice(0, 10).join(' ') + '...';
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

  return (
    <div className="border rounded-md p-8 shadow-md mb-6 flex flex-col">
      <Link href={`/instruments/${instrument.id}`}>
        <div className="mb-6 flex justify-center">
          <img
            src={instrument.image}
            alt={instrument.name}
            className="w-full h-100 object-cover rounded-md"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">{instrument.name}</h2>
          <p className="text-gray-600 mb-2">ID: {instrument.id}</p>
          <p className={`text-sm ${getStatusColor(instrument.status)} mb-2`}>
            Status: {instrument.status}
          </p>
          <p className="text-gray-700">{sliceInfo(instrument.info)}</p>
        </div>
      </Link>
    </div>
  );
};

const InstrumentList = () => {
  const [loading, setLoading] = useState(true);
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
        setLoading(false); // Set loading to false after fetching
      } catch (error) {
        console.error('Error fetching instruments:', error);
      }
    };

    fetchInstruments();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Instruments</h1>
      {loading ? (
          <div className="h-screen flex items-center justify-center">
          <Spinner />
          </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instruments.map((instrument) => (
            <InstrumentCard key={instrument.id} instrument={instrument} />
          ))}
        </div>
      )}
    </div>
  );
};

export default InstrumentList;
