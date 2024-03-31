"use client"
import React, { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
// import HPLCForm from "../forms/chromatography/hplc/page";
import Elemental_analyser from "../forms/elemental_analysis/page";
import PLForm from "../forms/spectroscopy/pl/page"
import FTIRForm from '../forms/spectroscopy/ftir/page';
import ChemicalDataForm from '../forms/spectroscopy/tcspc/page';
import SFMForm from '../forms/spectroscopy/sfm/page';
import FluorescenceMicroscopyForm from '../forms/microscopy/clsm/page';
import UVVisForm from '../forms/spectroscopy/uv-vis/page';
import UVVISNIRForm from '../forms/spectroscopy/uv-vis-nir/page';
import HPLCForm from '../forms/chromatography/hplc/page';
import PowderXRDForm from '../forms/X-ray3/page';
import BET from '../forms/BET_surfaceAnalyser/page';
import SingleCrystalXRayForm from '../forms/X-ray/page';
import XAFSForm from '../forms/X-ray2/page';
import NMR from '../forms/spectroscopy/nmr/page';
import FESEMForm from '../forms/microscopy/fe-sem/page';  
// import 
// const forms_instrument = {
//   2: (prop) => { return (<PowderXRDForm prop={prop} />) },
//   3: (prop) => { return (<XAFSForm prop={prop} />) },
//   1: (prop) => { return (<SingleCrystalXRayForm prop={prop} />) },
//   25: (prop) => { return (<BET prop={prop} />) },
//   20: (prop) => { return (<SETitem prop={prop} />) },
//   13: (prop) => { return (<UVVISNIRForm prop={prop} />) },
//   12: (prop) => { return (<UVVisForm prop={prop} />) },
//   18: (prop) => { return (<FluorescenceMicroscopyForm prop={prop} />) },
//   9: (prop) => { return (<ChemicalDataForm prop={prop} />) },
//   14: (prop) => { return (<SFMForm prop={prop} />) },
//   8: (prop) => { return (<FTIRForm prop={prop} />) },
//   15: (prop) => { return (<PLForm prop={prop} />) },
//   27: (prop) => { return (<Elemental_analyser prop={prop} />) },
//   4:(prop)=>{return (<div>No Form Available</div>)}
  
  
// };

const forms_instrument = {
  1: (prop) => { return (<SingleCrystalXRayForm prop={prop} />) },
  2: (prop) => { return (<PowderXRDForm prop={prop} />) },
  3: (prop) => { return (<XAFSForm prop={prop} />) },
  4: (prop) => { return (<div>No Form Available</div>) },
  5: (prop) => { return (<div>No Form Available</div>) },
  6: (prop) => { return (<div>No Form Available</div>) },
  7: (prop) => { return (<NMR prop={prop} />) },
  8: (prop) => { return (<FTIRForm prop={prop} />) },
  9: (prop) => { return (<ChemicalDataForm prop={prop} />) },
  10: (prop) => { return (<div>No Form Available</div>) },
  11: (prop) => { return (<div>No Form Available</div>) },
  12: (prop) => { return (<UVVisForm prop={prop} />) },
  13: (prop) => { return (<UVVISNIRForm prop={prop} />) },
  14: (prop) => { return (<SFMForm prop={prop} />) },
  15: (prop) => { return (<FESEMForm prop={prop} />) },
  16: (prop) => { return (<div>No Form Available</div>) },
  17: (prop) => { return (<div>No Form Available</div>) },
  18: (prop) => { return (<FluorescenceMicroscopyForm prop={prop} />) },
  19: (prop) => { return (<div>No Form Available</div>) },
  20: (prop) => { return (<HPLCForm prop={prop} />) },
  21: (prop) => { return (<div>No Form Available</div>) },
  22: (prop) => { return (<div>No Form Available</div>) },
  23: (prop) => { return (<div>No Form Available</div>) },
  24: (prop) => { return (<div>No Form Available</div>) },
  25: (prop) => { return (<BET prop={prop} />) },
  26: (prop) => { return (<div>No Form Available</div>) },
  27: (prop) => { return (<Elemental_analyser prop={prop} />) },
  28: (prop) => { return (<div>No Form Available</div>) },
};


const OrderDetails = () => {
  const [order, setOrder] = useState(null);
  const [comment, setComment] = useState("");
  const [submittedComments, setSubmittedComments] = useState([]);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const orderID = searchParams.get('id');
  const [state,setstate]=useState("");
  const [display,setdisplay]=useState(true);
  
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await fetch(`/api/orderId/${orderID}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch order details');
        }
        const data = await response.json();
        setOrder(data);
        console.log(data,"uioghjyb")
        setstate(data.status)
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    };

    fetchOrder();
  }, [orderID]);

  

  const handleReject = async () => {
    // Handle reject logic
    const data={"status":"Rejected","comment":comment}
    const isReady = window.confirm("Are you sure you want to submit?");
    if(isReady){
      setstate("Rejected");
      console.log(data);
      const res=await fetch(`/api/orderId/${orderID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        
      })
      if (!res.ok) {
        throw new Error('Failed to fetch order details');
      }
      alert("success")

    }
    else{
      setstate("Pending");

    }
  };

  const handleAccept = async () => {
    const data={"status":"Payment Incomplete","comment":comment}
    const isReady = window.confirm("Are you sure you want to submit?");
    if(isReady){
      setstate("Payment Incomplete");
   
      const res=await fetch(`/api/orderId/${orderID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        
      })
      if (!res.ok) {
        throw new Error('Failed to fetch order details');
      }
      alert("success")

    }
    else{
      setstate("Pending");

    }
  };

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full px-24 mx-auto bg-white shadow-lg p-4 rounded-md mt-8">
      <h1 className="text-2xl font-bold mb-4">{order.name}</h1>
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Form Details:</h2>
        <p>
          {console.log(order,"kio")}
          {Object.keys(order.form_details).map((key) => {
            return forms_instrument[key](order.form_details[key]);
          })}
        </p>
      </div>
      
      {(state==="Pending") && (<>
        <div>
        <h2 className="text-lg font-semibold mb-2">Status:</h2>
        <p>{order.status}</p>
      </div>
        <div className="mt-4">
        <label htmlFor="comments" className="block text-lg font-semibold mb-2">Comments:</label>
        <textarea id="comments" value={comment} onChange={(e) => setComment(e.target.value)} className="w-full h-24 border-gray-300  hover:border-slate-100  rounded-md focus:ring-blue-500 focus:border-blue-500" />
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={handleAccept} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2">Accept</button>
        <button onClick={handleReject} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Reject</button>
        
      </div>
      </>

      )}
      {
        (state==="Payment Incomplete"||state==="Payment Completed"||state==="Rejected") && (
          <>
          <div>
            <h2 className="text-lg font-semibold mb-2">Status:</h2>
            <p>{order.status}</p>
          </div>
          
          </>
        )
      }
      
      
      
    </div>
  );
};

export default OrderDetails;
