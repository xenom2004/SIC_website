"use client"
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useSession } from 'next-auth/react';
// import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { useRouter } from 'next/navigation'


import { Elemental_analyser} from "../components/form/elemental_analysis/page"

const Row=({instrument,selectedInstruments,setSelectedInstruments,handleQuantityChange,handleInstrumentChange,current_charge})=>{
  

  return (

    <>
    
    <tr className=" " key={instrument.id}>
              <td className=" text-center hover:bg-slate-100 border px-4 py-2">{instrument.id}</td>
              <td className=" text-center hover:bg-slate-100 border px-4 py-2">{instrument.name}</td>
              <td className={` ${current_charge==="academic"?"table-cell":"hidden"} md:table-cell text-center hover:bg-slate-100 border px-4 py-2`}>{instrument.academic_charge}</td>
              <td className={` ${current_charge==="commercial"?"table-cell":"hidden"} md:table-cell text-center hover:bg-slate-100 border px-4 py-2`}>{instrument.commertial_charge}</td>
              <td className={` ${current_charge==="charge"?"table-cell":"hidden"} md:table-cell text-center hover:bg-slate-100 border px-4 py-2`}>{instrument.charge}</td>
              <td className=" text-center hover:bg-slate-100 border px-4 py-2 flex items-center">
                <button
                  onClick={() => handleQuantityChange(instrument, (selectedInstruments.find(item => item.id === instrument.id)?.quantity || 1) - 1)}
                  disabled={(selectedInstruments.find(item => item.id === instrument.id)?.quantity || 1) <= 1}
                  className="mr-2"
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span className="w-12 text-center">
                  {selectedInstruments.find(item => item.id === instrument.id)?.quantity || 1}
                </span>
                <button
                  onClick={() => handleQuantityChange(instrument, (selectedInstruments.find(item => item.id === instrument.id)?.quantity || 1) + 1)}
                  className="ml-2"
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </td>
              <td className="border px-4 py-2">
                <input
                  type="checkbox"
                  checked={selectedInstruments.some((item) => item.id === instrument.id)}
                  onChange={() => handleInstrumentChange(instrument)}
                />
              </td>
            </tr>
    </>
  )

}
const ChargeCalculator = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true); 
  const { data: session, status } = useSession();
  const [instruments, setInstruments] = useState([]);
  const [selectedInstruments, setSelectedInstruments] = useState([]);
  const [totalcharge,settotalcharge]=useState(0);
  const [totalCommercialcharge,settotalCommercialcharge]=useState(0);
  const [totalAcademiccharge,settotalAcademiccharge]=useState(0);
  const [current_charge,setcurrent_charge]=useState("commercial");
  const gst_value=18;//in percentage (18 %)
  const [formDataExists, setFormDataExists] = useState(false);

  useEffect(() => {
    const fetchInstruments = async () => {
      try {
        const response = await fetch('/api/instruments'); // Replace '/api/instruments' with your actual API endpoint
        if (!response.ok) {
          throw new Error(`Failed to fetch instruments: ${response.status}`);
        }
        const data = await response.json();
        setInstruments(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching instruments:', error);
        setIsLoading(false);
      }
    };

    fetchInstruments();
    
  }, []);

  useEffect(() => {
    const selectedInstrumentsData = localStorage.getItem('selectedInstruments');
    if (selectedInstrumentsData) {
      setSelectedInstruments(JSON.parse(selectedInstrumentsData));
      setFormDataExists(true);
    }
    setIsLoading(false);
  }, []);

  const handleContinueFilling = () => {
    if(status=="unauthenticated"){
      alert("Please login to continue");}
      else{
        router.push('/form');
      }
  };


  
  useEffect(() => {
    calculateTotalCharge();
  },[selectedInstruments])

  const handleInstrumentChange = (instrument) => {
    const index = selectedInstruments.findIndex((item) => item.id === instrument.id);
    if (index === -1) {
      setSelectedInstruments([...selectedInstruments, { ...instrument, quantity: 1 }]);
    } else {
      const updatedInstruments = [...selectedInstruments];
      updatedInstruments.splice(index, 1);
      setSelectedInstruments(updatedInstruments);
    }
  };

  const handleQuantityChange = (instrument, quantity) => {
    const updatedInstruments = selectedInstruments.map(item => {
      if (item.id === instrument.id) {
        return { ...item, quantity };
      }
      return item;
    });
    setSelectedInstruments(updatedInstruments);
  };

  const calculateTotalCharge = () => {
    // console.log("ll")
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


  const handlePayNowClick = () => {
    localStorage.removeItem('selectedInstruments');
    localStorage.removeItem('form_details');
    if (selectedInstruments.length === 0) {
      alert('Please select at least one instrument.');
    } else {
      if (status === "unauthenticated") {
        alert("Please login to continue");
      } else {
        // Clear old data from localStorage
  
        
        // Serialize and store new data
        const serializedData = JSON.stringify(selectedInstruments);
        localStorage.setItem('selectedInstruments', serializedData);
        
        // Redirect to form page
        router.push('/form');
      }
    }
  };
  

  if(isLoading)
  {
    return (

        <div className='flex justify-center items-center h-screen'>
        <div role="status ">
            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
        </div>
        </div>
    
    );
  }
  return (
    <div className=" flex flex-col items-center justify-center px-4 py-8  ">
      <table className="w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                            <thead className="bg-gray-100 dark:bg-gray-700">
                                
                                <tr>
                                    <th scope="colgroup" className="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                        Category of User:
                                    </th>
                                    <th scope="col" className={`${current_charge==="charge"?"table-cell":"hidden"} md:table-cell py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400`}>
                                        IITI Community
                                    </th>
                                    <th scope="col" className={`${current_charge==="academic"?"table-cell":"hidden"} md:table-cell py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400`}>
                                        Academic Institutions
                                    </th>
                                    <th scope="col" className={`${current_charge==="commercial"?"table-cell":"hidden"} md:table-cell py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400`}>
                                        Commercial/ Industry
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <th scope="row" className="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                        <div className="flex items-center justify-center">
                                            Instrument Charges (In Rs.):
                                        </div>
                                    </th>
                                    <td className={`${current_charge==="charge"?"table-cell":"hidden"}  md:table-cell py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white`}>
                                        <div  className=" h-full p-2 border rounded-md">{totalcharge}</div>
                                    </td>
                                    <td className={`${current_charge==="academic"?"table-cell":"hidden"} md:table-cell  py-4 px-6 text-sm font-medium text-center text-gray-500 whitespace-nowrap dark:text-white`}>
                                    <div  className=" h-full p-2 border rounded-md">{totalAcademiccharge}</div>
                                        
                                    </td>
                                    <td className={`${current_charge==="commercial"?"table-cell":"hidden"} md:table-cell py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white`}>
                                    <div  className=" h-full p-2 border rounded-md">{totalCommercialcharge}</div>
                                 
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <th scope="row" className="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                        <div className="flex items-center justify-center">
                                            GST (In Rs.):
                                        </div>
                                    </th>
                                    <td className={`${current_charge==="charge"?"table-cell":"hidden"} md:table-cell py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white`}>
                                    <div  className=" h-full p-2 border rounded-md">{gst(totalcharge,gst_value)}</div>
                                    </td>
                                    <td className={`${current_charge==="academic"?"table-cell":"hidden"} md:table-cell py-4 px-6 text-sm font-medium text-center text-gray-500 whitespace-nowrap dark:text-white`}>
                                    <div  className=" h-full p-2 border rounded-md">{gst(totalAcademiccharge,gst_value)}</div>
                                    </td>
                                    <td className={`${current_charge==="commercial"?"table-cell":"hidden"} md:table-cell py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white`}>
                                    <div  className=" h-full p-2 border rounded-md">{gst(totalCommercialcharge,gst_value)}</div>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <th scope="row" className="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                        <div className="flex items-center justify-center">
                                            Total Charges (In Rs.):
                                        </div>
                                    </th>
                                    <td className={`${current_charge==="charge"?"table-cell":"hidden"} md:table-cell py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white`}>
                                    <div  className=" h-full p-2 border rounded-md">{gst_total(totalcharge,gst_value)}</div>
                                    </td>
                                    <td className={`${current_charge==="academic"?"table-cell":"hidden"} md:table-cell py-4 px-6 text-sm font-medium text-center text-gray-500 whitespace-nowrap dark:text-white`}>
                                    <div  className=" h-full p-2 border rounded-md">{gst_total(totalAcademiccharge,gst_value)}</div>                                    </td>
                                    <td className={`${current_charge==="commercial"?"table-cell":"hidden"} md:table-cell py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white`}>
                                    <div  className=" h-full p-2 border rounded-md">{gst_total(totalCommercialcharge,gst_value)}</div>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
      <div className='px-2 '>                  
      <h2 className="text-3xl font-bold mb-4 text-center pt-4">Select Instruments:</h2>
      <table className=" table-auto w-full border-collapse">
        <thead>
          <tr className='bg-gray-100'>
            <th className=" text-center px-4 py-2">#</th>
            
            <th className="   text-center px-4 py-2">Instrument Name</th>
            <th className='md:hidden'>
                  <Dropdown>
            <DropdownTrigger>
              <Button 
                variant="bordered" 
              >
                {current_charge}⌄
              </Button>
            </DropdownTrigger>
            <DropdownMenu 
              aria-label="Action event example" 
              onAction={(key) => setcurrent_charge(key)}
            >
              <DropdownItem key="academic">academic Charge (₹)</DropdownItem>
              <DropdownItem key="commercial">commercial/industrial Charge (₹)</DropdownItem>
              <DropdownItem key="charge">Charge (₹)</DropdownItem>
              
            </DropdownMenu>
          </Dropdown>
            </th>
            <th className={`hidden   md:table-cell text-center px-4 py-2`}>academic Charge (₹)</th>
            <th className={`hidden md:table-cell text-center px-4 py-2`}>commercial/industrial Charge (₹)</th>
            <th className={`hidden   md:table-cell text-center px-4 py-2`}>Charge (₹)</th>
            <th className="text-center px-4 py-2">Quantity</th>
            <th className="text-center px-4 py-2">select</th>
          </tr>
        </thead>
        <tbody>
          {instruments.map((instrument) => (
            <Row instrument={instrument} setSelectedInstruments={setSelectedInstruments} selectedInstruments={selectedInstruments}
            handleQuantityChange={handleQuantityChange} handleInstrumentChange={handleInstrumentChange} current_charge={current_charge}/>
            
            
          ))}
        </tbody>
      </table>
      </div>
      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4">Total Charges:</h2>
        <p className="text-xl font-semibold">₹{totalcharge}</p>
      </div>
      <div>
      <button 
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handlePayNowClick}
      >
        Pay Now
      </button>
      {formDataExists ? (
        <button onClick={handleContinueFilling} className='ml-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Continue Filling</button>
      ) : (
        <></>
      )}
      </div>
     
    </div>
  );
};

export default ChargeCalculator;

