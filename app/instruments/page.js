"use client";
import React from "react";
import Link from "next/link";
import { Spinner } from "@nextui-org/react";

const InstrumentCard = ({ instrument }) => {
  const sliceInfo = (info) => {
    // console.log(info,"loki",instrument.name)
    const words = info.split(" ");
    return words.slice(0, 10).join(" ") + "...";
  };
  // console.log(instrument,"i")

  const getStatusColor = (status) => {
    switch (status) {
      case "working":
        return "text-green-500";
      case "calibrating":
        return "text-yellow-500";
      case "unavailable":
        return "text-red-500";
      case "offline":
        return "text-gray-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="border rounded-md shadow-md mb-6 overflow-hidden transition-transform duration-300 hover:scale-105">
      <Link href={`/instruments/${instrument.id}`}>
        <div className="w-full h-80 relative">
          <img
            src={instrument.image}
            alt={instrument.name}
            className="w-full h-full object-cover object-center absolute inset-0"
          />
        </div>
      </Link>
      <div className="p-4">
        <h2 className="text-xl text-lightSky font-semibold mb-2">
          {instrument.name}
        </h2>
        <p className="text-gray-600 mb-2">ID: {instrument.id}</p>
        <p className={`text-sm ${getStatusColor(instrument.status)} mb-2`}>
          Status: {instrument.status}
        </p>
        <p className="text-gray-700">{sliceInfo(instrument.info)}</p>
      </div>
    </div>
  );
};

const InstrumentList = () => {
  const [loading, setLoading] = React.useState(true);
  const [instruments, setInstruments] = React.useState([]);

  React.useEffect(() => {
    const fetchInstruments = async () => {
      try {
        const response = await fetch("/api/instruments");
        if (!response.ok) {
          throw new Error(`Failed to fetch instruments: ${response.status}`);
        }
        const data = await response.json();
        // console.log(data,"huhuu")
        setInstruments(data);
        setLoading(false); // Set loading to false after fetching
      } catch (error) {
        console.error("Error fetching instruments:", error);
      }
    };

    fetchInstruments();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-lightSky font-bold mb-8">
        Instruments Live Status
      </h1>
      {loading ? (
        <div className="h-screen flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 bg-white z-50">
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
