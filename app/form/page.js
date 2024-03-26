"use client"
import React, { useState, useEffect } from 'react';
import { Button } from '@nextui-org/react';
import  Elemental_analyser from "../components/form/elemental_analysis/page"
import BET from "../components/form/BET_surfaceAnalyser/page"
import FTIRForm from "../components/form/spectroscopy/ftir/page"
import HPLCForm from "../components/form/chromatography/hplc/page"

const forms_instrument={
  25:(<BET/>),
  12:(<Elemental_analyser/>),
  13:( <FTIRForm/>),
  20:(<HPLCForm/>),
}
const FormComponent = () => {
  const [selectedInstruments, setSelectedInstruments] = useState([]);
  const gst_value=18;//in percentage (18 %)
  const [totalcharge,settotalcharge]=useState(0);
  const [totalCommercialcharge,settotalCommercialcharge]=useState(0);
  const [totalAcademiccharge,settotalAcademiccharge]=useState(0);
  const calculateTotalCharge = () => {
    // console.log("ll",selectedInstruments)
    settotalcharge(selectedInstruments.reduce((total, instrument) => total + (instrument.charge * instrument.quantity), 0));
    settotalAcademiccharge(selectedInstruments.reduce((total, instrument) => total + (instrument.academic_charge * instrument.quantity), 0));
    settotalCommercialcharge(selectedInstruments.reduce((total, instrument) => total + (instrument.commertial_charge * instrument.quantity), 0));

   
    
  };
  useEffect( () => {
    // Retrieve data from local storage
    const storedData = localStorage.getItem('selectedInstruments');
    if (storedData) {
      // Parse the stored data
      const instruments =  JSON.parse(storedData);
      
      setSelectedInstruments(instruments);
      
    }
    calculateTotalCharge();

  }, []);


  useEffect( () => {
    // Retrieve data from local storage
    
    calculateTotalCharge();

  }, [selectedInstruments]);


  const send= async (e) => {
    e.preventDefault();

    // Extract form data
    const formData = localStorage.getItem('form_details');
    
    console.log(formData,"lop")
    try {
      // Send POST request to server
      const response = await fetch("/api/User", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Check if request was successful
      if (response.ok) {
        console.log("Form submitted successfully");
        alert("form submitted successfully");

        // You can handle success actions here, e.g., redirect user to another page
      } else {
        // Handle server errors or other issues
        console.error("Failed to submit form:", response.statusText);
        // You can display an error message to the user
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
      // Handle network errors or other exceptions
      // You can display an error message to the user
    }
  };

  const gst=(val,percent)=>{
    return ((((1/100)*percent*val)*1000) | 0)/1000;

  }
  const gst_total=(val,percent)=>{
    return gst(val,percent)+val;
  }



  return (
    <div className="container">
      <h2 className='text-2xl text-center font-bold p-4'>Selected Instruments:</h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 p-x-4 '>
        {/* <><BET/></> */}
      {selectedInstruments.map((instrument, index) => {
        return (forms_instrument[instrument.id]);
   
})}


      </div>
      <div className='text-center text-4xl font-bold '>
        Total charge: {totalcharge}
      </div>
      <div className='flex justify-center mt-4'>
      <Button onClick={send} className='text-center px-auto text-2xl hover:bg-green-500 justify-center flex  '>Send for verification</Button></div>
      
    </div>
  );
};

export default FormComponent;
