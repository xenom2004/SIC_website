
"use client";
import React, { useEffect, useState } from "react";


    
  
const BET = () => {
    const [sampleNature, setSampleNature] = useState(null
      );
    
      const [sampleType, setsampleType] = useState(null
      );
      const [temperature, settemperature] = useState(null
      );
      const [Rate, setRate] = useState(null
      );
      const [Soaktime, setSoaktime] = useState(null
      );
      const [desc, setdesc] = useState(null
      );


    const [user, setUser] = useState(null);
    const[loading,setLoading]=useState(false);
    useEffect(() => {
      const fetchInstruments = async () => {
        try {
          const response = await fetch('/api/User');
          if (!response.ok) {
            throw new Error(`Failed to fetch instruments: ${response.status}`);
          }
          const data = await response.json();
          setSampleNature(data?.order[0][0].sampleNature);
          setsampleType(data?.order[0][0].sampleType);
          settemperature(data?.order[0][0].temperature);
          setSoaktime(data?.order[0][0].Soaktime);
          setdesc(data?.order[0][0].desc);
          setRate(data?.order[0][0].Rate);
          setUser(data);
        } catch (error) {
          console.error('Error fetching instruments:', error);
        }
        setLoading(true);
     
      };
  
      fetchInstruments();
    }, []);


  

  
  if(loading===false || user===null)
  {
    return(<>
    Loading.......
    </>)

  }
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4  max-w-md mx-auto">
        BET Surface Analyser
      </h2>
      <form  className="max-w-md mx-auto">
        <p className="block text-gray-700 text-sm font-bold mb-2">
          Sample Type
        </p>
        <label className="inline-flex items-center">
          <input
            type="radio"
            value="Powder"
            checked={sampleType === "Powder"}
            
            className="form-radio h-5 w-5 text-gray-600"
          />
          <span className="ml-2">Powder</span>
        </label>
        <label className="inline-flex items-center ml-6">
          <input
            type="radio"
            value="Pellet"
            checked={sampleType === "Pellet"}
            
            className="form-radio h-5 w-5 text-gray-600"
          />
          <span className="ml-2">Pellet</span>
        </label>

        <p className="block text-gray-700 text-sm font-bold mb-2">
          Sample handling Precautions
        </p>
        <label className="inline-flex items-center">
          <input
            type="radio"
            value="Hazardous"
            checked={sampleNature === "Hazardous"}
            
            className="form-radio h-5 w-5 text-gray-600"
          />
          <span className="ml-2">Hazardous</span>
        </label>
        <label className="inline-flex items-center ml-6">
          <input
            type="radio"
            value="Non-Hazardous"
            checked={sampleNature === "Non-Hazardous"}
            
            className="form-radio h-5 w-5 text-gray-600"
          />
          <span className="ml-2">Non-Hazardous</span>
        </label>

        <div className="mb-4 gap-y-2 flex flex-col ">
          <h1 className="block text-gray-700 text-md font-bold mb-2">
            Sample Degassing Conditions
          </h1>
          <label
            htmlFor="specialPrecautions"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Temperature (in C)
          </label>
          <textarea
            id="specialPrecautions"
            value={temperature}
           
            rows="1"
            className="resize-none appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter temperature"
            required
          />

          <label
            htmlFor="specialPrecautions"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Rate (in C/min)
          </label>
          <textarea
            id="specialPrecautions"
            value={Rate}
           
            rows="1"
            className="resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Rate"
            required
          />

          <label
            htmlFor="specialPrecautions"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Soak Time (in min)
          </label>
          <textarea
            id="specialPrecautions"
            value={Soaktime}
           
            rows="1"
            className="resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Soak Time"
            required
          />

          <label
            htmlFor="specialPrecautions"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Preliminary characterization carried out on the sample submitted
            with brief description of results:
          </label>
          <textarea
            id="specialPrecautions"
            value={desc}
           
            rows="4"
            className="resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter desc "
            required
          />
        </div>
        <div className="flex items-center justify-center mt-6">
        
        </div>
      </form>
    </div>
  );
};

export default BET;
