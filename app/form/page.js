"use client"
import React, { useState, useEffect } from 'react';
import  Elemental_analyser from "../components/form/elemental_analysis/page"
import BET from "../components/form/BET_surfaceAnalyser/page"
import FTIRForm from "../components/form/spectroscopy/ftir/page"
const forms_instrument={
  11:(<BET/>),
  12:(<Elemental_analyser/>),
  13:( <FTIRForm/>)
}
const FormComponent = () => {
  const [selectedInstruments, setSelectedInstruments] = useState([]);
  const gst_value=18;//in percentage (18 %)
  const [totalcharge,settotalcharge]=useState(0);
  const [totalCommercialcharge,settotalCommercialcharge]=useState(0);
  const [totalAcademiccharge,settotalAcademiccharge]=useState(0);

  useEffect(() => {
    // Retrieve data from local storage
    const storedData = localStorage.getItem('selectedInstruments');
    if (storedData) {
      // Parse the stored data
      const instruments = JSON.parse(storedData);
      setSelectedInstruments(instruments);
    }
    calculateTotalCharge();

  }, []);

  const calculateTotalCharge = () => {
    console.log("ll")
    settotalcharge(selectedInstruments.reduce((total, instrument) => total + (instrument.charge * instrument.quantity), 0));
    settotalAcademiccharge(selectedInstruments.reduce((total, instrument) => total + (instrument.academic_charge * instrument.quantity), 0));
    settotalCommercialcharge(selectedInstruments.reduce((total, instrument) => total + (instrument.commertial_charge * instrument.quantity), 0));
   
    
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
      <div>
        Total charge: {totalcharge}
      </div>
    </div>
  );
};

export default FormComponent;
