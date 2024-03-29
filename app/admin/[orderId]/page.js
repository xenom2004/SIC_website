"use client"
import React, { useState, useEffect } from 'react';
 
import { useRouter, usePathname, useSearchParams,useNavigation } from 'next/navigation'
import HPLCForm from "../forms/chromatography/hplc/page"
import Elemental_analyser from "../forms/elemental_analysis/page"
import PLForm from "../forms/microscopy/fe-sem/page"
import FTIRForm from '../forms/spectroscopy/ftir/page';
import ChemicalDataForm from '../forms/spectroscopy/nmr/page'
import SFMForm from '../forms/spectroscopy/sfm/page'
import FluorescenceMicroscopyForm  from '../forms/microscopy/clsm/page'
import UVVisForm from '../forms/spectroscopy/uv-vis/page'
import UVVISNIRForm from '../forms/spectroscopy/uv-vis-nir/page'
import SETitem from '../forms/chromatography/hplc/page'
import PowderXRDForm from '../forms/X-ray3/page'
import BET from '../forms/BET_surfaceAnalyser/page'
import SingleCrystalXRayForm from '../forms/X-ray/page'
import XAFSForm from '../forms/X-ray2/page'

const forms_instrument={
    2: (prop)=>{return (<PowderXRDForm prop={prop}/>)},
    3: (prop)=>{return (<XAFSForm prop={prop}/>)},
    1: (prop)=>{{console.log(prop,"ser")}return (<SingleCrystalXRayForm prop={prop}/>)},
    25:(prop)=>{return  (<BET prop={prop}/>)},
    20:(prop)=>{return  (<SETitem prop={prop}/>)},
    13:(prop)=>{return  (<UVVISNIRForm prop={prop}/>)},
    12:(prop)=>{return  (<UVVisForm prop={prop}/>)},
    18:(prop)=>{return  (<FluorescenceMicroscopyForm prop={prop}/>)},
    9: (prop)=>{return ( <ChemicalDataForm prop={prop}/>)},
    14:(prop)=>{return  (<SFMForm prop={prop}/>)},
    8: (prop)=>{return (<FTIRForm prop={prop}/>)},
    25:(prop)=>{return  (<BET prop={prop}/>)},
    15:(prop)=>{return  (<PLForm prop={prop}/>)},
    13:(prop)=>{return  ( <FTIRForm prop={prop}/>)},
    20:(prop)=>{return  (<HPLCForm prop={prop}/>)},
    27:(prop)=>{return  (<Elemental_analyser prop={prop}/>)},
  }

const OrderDetails = ({ params }) => {
    const [order, setOrder] = useState(null);
    // const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const orderID = searchParams.get('id');

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await fetch(`/api/orderId/${orderID}`,{
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                       
                    },
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch order details');
                }
                const data = await response.json();
                // console.log(data,"hiihygyug");
                setOrder(data);
            } catch (error) {
                console.error('Error fetching order details:', error);
            }
        };

        fetchOrder();
    }, [params.orderId]);


    console.log(params);
    if (!order) {
        return <div>Loading...
          {console.log("hi")}
        </div>;
    }

    return (
        <div className="w-full px-24 mx-auto bg-white shadow-lg p-4 rounded-md mt-8">
          {console.log("hiinnnnnnnnn",order)}
            <h1 className="text-2xl font-bold mb-4">{order.name}</h1>
            <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Form Details:</h2>
                <p>{console.log(order.form_details,"hhuu")}
                {Object.keys(order.form_details).map((key) => {
                        
                        return forms_instrument[key](order.form_details[key]);
                    })}
                {/* <HPLCForm prop={order.form_details[20]}/> */}
                </p>
            </div>
            <div>
            {console.log("hi")}
                <h2 className="text-lg font-semibold mb-2">Status:</h2>
                <p>{order.status}</p>
            </div>
        </div>
    );
};

export default OrderDetails;
