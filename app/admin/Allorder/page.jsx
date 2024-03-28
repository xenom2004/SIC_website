// // import { useState } from "react"; // Needed for conditional rendering
"use client"
import BET from "../order/page";
import HPLCForm from "../forms/chromatography/hplc/page";
import { useSession } from 'next-auth/react';// Needed for fetching form details from the session
import XAFSForm from "../forms/X-ray2/page";
import SingleCrystalXRayForm from "../forms/X-ray/page";
import Elemental_analyser from "../forms/elemental_analysis/page";
import FluorescenceMicroscopyForm from "../forms/microscopy/clsm/page";
import FTIRForm from "../../components/form/spectroscopy/ftir/page";
import ChemicalDataForm from "../forms/spectroscopy/nmr/page";
import PLForm from "../forms/microscopy/fe-sem/page"
import SFMForm from "../forms/spectroscopy/sfm/page";
import UVVisForm from "../forms/spectroscopy/uv-vis/page";
import UVVISNIRForm from "../forms/spectroscopy/uv-vis-nir/page";
import FESEMForm from "../forms/microscopy/fe-sem/page";


const forms_instrument = {
  1: (props)=><SingleCrystalXRayForm prop={props}/>,
  3: (props)=><XAFSForm prop={props}/>,
  7: (props)=><ChemicalDataForm prop={props}/>,
  8: (props)=><FTIRForm prop={props}/>,
  11:(props)=><PLForm prop={props}/>,
  12: (props)=><UVVisForm prop={props}/>,
  13: (props)=><UVVISNIRForm prop={props}/>,
  14:(props)=><SFMForm prop={props}/>,
  15: (props)=><FESEMForm prop={props}/>,
  18:(props)=><FluorescenceMicroscopyForm prop={props}/>,
  25: (props) => <BET prop={props}/>,
  20: (props) => <HPLCForm prop={props} />,
  27:(props)=><Elemental_analyser prop={props}/>,
};

async function getData(session) {

  const timestamp = Date.now();
  const res = await fetch(`http://localhost:3000/api/User?t=${timestamp}`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache', 
    },
    body:JSON.stringify({"usersession":session.user})
  })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  // console.log(data[0],"on data")
 
  return data[0]
}
 
export default async function Page() {
  const { data: session, status } = useSession();
  const form_details= await getData(session)
  
  // console.log(form_details,"order")
 
  return <main>
    {form_details?.order && Object.keys(form_details.order).map((key) => (
  Object.keys(form_details.order[key].forms).map((key2) =>{
    return (<div>
      {forms_instrument[key2](form_details.order[key].forms[key2])}
      {/* <HPLCForm prop={form_details.order[key].forms[key2]}/> */}
      </div>);
    
  })

      // <p key={key}>{console.log(form_details.order[key].forms,"lol")} </p>
    ))}
  </main>
}


