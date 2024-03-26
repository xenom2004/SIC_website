"use client"
import { useEffect } from "react";
import BET from "../order/page";
import HPLCForm from "../forms/chromatography/hplc/page";
const forms_instrument = {
  25: <BET />,
  20: (p)=>{return (<HPLCForm prop={p}/>)},
  
};
import React, { useState } from "react";

const All = () => {
  const [form_details,setform_details]=useState(null);
  useEffect(() => {
    const fetchInstruments = async () => {
      try {
        const response = await fetch('/api/User');
        if (!response.ok) {
          throw new Error(`Failed to fetch instruments: ${response.status}`);
        }
        const data = await response.json();
       
        // setUser(data);
        setform_details(data);
        console.log(data,"my orders");
        console.log(form_details,"my orders form_details");
      } catch (error) {
        console.error('Error fetching instruments:', error);
      }
      // setLoading(true);
   
    };

    fetchInstruments();
  }, []);
  return (
  <div>
{/* hello{console.log(form_details,"here")} */}
{form_details?.order && Object.keys(form_details.order).map((key) => (
  Object.keys(form_details.order[key].forms).map((key2) =>{
    return (<div>
      {forms_instrument[key2](form_details.order[key].forms[key2])}
      {/* <HPLCForm prop={form_details.order[key].forms[key2]}/> */}
      </div>);
    
  })

      // <p key={key}>{console.log(form_details.order[key].forms,"lol")} </p>
    ))}
  </div>
  )
};

export default All;
