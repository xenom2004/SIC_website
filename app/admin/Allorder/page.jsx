// // import { useState } from "react"; // Needed for conditional rendering
"use client"
import BET from "../order/page";
import HPLCForm from "../forms/chromatography/hplc/page";
import { useSession } from 'next-auth/react';// Needed for fetching form details from the session
const forms_instrument = {
  25: <BET />,
  20: (props) => <HPLCForm prop={props} />,
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


