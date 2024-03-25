"use client"
import React,{useState} from "react"

const UVVISNIRForm =()=>{
    const [noOfSamples, setNoOfSamples]=useState('');
    const [wavelengthRange, setWavelengthRange]=useState('');
    const [specialExperiment, setSpecialExperiment]=useState('');
}

const handleSubmit=(e)=>{
    e.preventDefault();

    console.log('Form Data: ',{noOfSamples,wavelengthRange,specialExperiment});
};

return (
    <div className="container mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold mb-4 text-center">UV-VIS-NIR Request Form</h2>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label for="noOfSamples" className="block text-gray-700 text-sm font-bold mb-2">Solubility</label>
        <textarea 
          id="noOfSamples" 
          value={noOfSamples}
          onChange={(e) => setNoOfSamples(e.target.value)}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          placeholder="No of Samples" 
          required
        ></textarea>
      </div>

      <div className="mb-4">
        <label for="wavelengthRange" className="block text-gray-700 text-sm font-bold mb-2">Wavelength Range</label>
        <textarea 
          id="wavelengthRange" 
          value={wavelengthRange}
          onChange={(e) => setWavelengthRange(e.target.value)}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          placeholder="min 200nm to max 3300nm" 
          required
        ></textarea>
      </div>

      <div className="mb-4">
        <label for="specialExperiment" className="block text-gray-700 text-sm font-bold mb-2">Special Experiment</label>
        <textarea 
          id="specialExperiment" 
          value={specialExperiment}
          onChange={(e) => setSpecialExperiment(e.target.value)}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          placeholder="if any" 
          required
        ></textarea>
      </div>
        {/* sample code ??? */}

      </form>
    </div>
);

export default UVVISNIRForm;