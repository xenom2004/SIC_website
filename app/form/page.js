"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";

import { Spinner } from "@nextui-org/react";
import HPLCForm from "../components/form/chromatography/hplc/page";
import Elemental_analyser from "../components/form/elemental_analysis/page";
import PLForm from "../components/form/microscopy/fe-sem/page";
import FTIRForm from "../components/form/spectroscopy/ftir/page";
import ChemicalDataForm from "../components/form/spectroscopy/tcspc/page";
import NMR from "../components/form/spectroscopy/nmr/page";
import SFMForm from "../components/form/spectroscopy/sfm/page";
import FluorescenceMicroscopyForm from "../components/form/microscopy/clsm/page";
import UVVisForm from "../components/form/spectroscopy/uv-vis/page";
import UVVISNIRForm from "../components/form/spectroscopy/uv-vis-nir/page";

import PowderXRDForm from "../components/form/(X-ray)/X-ray3/page";
import BET from "../components/form/BET_surfaceAnalyser/page";
import SingleCrystalXRayForm from "../components/form/(X-ray)/X-ray/page";
import XAFSForm from "../components/form/(X-ray)/X-ray2/page";
import PL from "../components/form/spectroscopy/pl/page";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const forms_instrument = {
  2: <PowderXRDForm />,
  3: <XAFSForm />,
  1: <SingleCrystalXRayForm />,
  25: <BET />,

  13: <UVVISNIRForm />,
  12: <UVVisForm />,
  18: <FluorescenceMicroscopyForm />,
  9: <ChemicalDataForm />,
  14: <SFMForm />,
  8: <FTIRForm />,
  25: <BET />,
  15: <PLForm />,
  11: <PL />,
  7: <NMR />,
  20: <HPLCForm />,
  27: <Elemental_analyser />,
};

const FormComponent = () => {
  const [loader, setLoader] = useState(0);
  const router = useRouter();
  const { data: session, status } = useSession();
  const [selectedInstruments, setSelectedInstruments] = useState([]);
  const gst_value = 18; //in percentage (18 %)
  const [totalcharge, settotalcharge] = useState(0);
  const [totalCommercialcharge, settotalCommercialcharge] = useState(0);
  const [totalAcademiccharge, settotalAcademiccharge] = useState(0);
  const calculateTotalCharge = () => {
    // console.log("ll",selectedInstruments)
    settotalcharge(
      selectedInstruments.reduce(
        (total, instrument) => total + instrument.charge * instrument.quantity,
        0
      )
    );
    settotalAcademiccharge(
      selectedInstruments.reduce(
        (total, instrument) =>
          total + instrument.academic_charge * instrument.quantity,
        0
      )
    );
    settotalCommercialcharge(
      selectedInstruments.reduce(
        (total, instrument) =>
          total + instrument.commertial_charge * instrument.quantity,
        0
      )
    );
  };
  useEffect(() => {
    // Retrieve data from local storage
    const storedData = localStorage.getItem("selectedInstruments");
    if (storedData) {
      // Parse the stored data
      const instruments = JSON.parse(storedData);

      setSelectedInstruments(instruments);
    }
    calculateTotalCharge();
  }, []);

  useEffect(() => {
    // Retrieve data from local storage

    calculateTotalCharge();
  }, [selectedInstruments]);

  const add_number = (obj, key, selectedInstruments) => {
    // console.log("lol",selectedInstruments);
    // console.log(obj,"lop",selectedInstruments)
    selectedInstruments.forEach((ele) => {
      if (ele["id"] == key) {
        obj["quantity"] = ele.quantity;
      }
    });
    return obj;
  };

  const send = async (e) => {
    setLoader(1);
    e.preventDefault();

    // Extract form data
    const mysession = session.user; // assuming 'usersession' is the key in localStorage
    const formData = JSON.parse(localStorage.getItem("form_details"));
    console.log(formData, "form");
    const new_form_data = {};
    // console.log(formData,"initiadddl")

    for (let key in formData) {
      if (formData.hasOwnProperty(key)) {
        // console.log(key, formData[key],"o");
        new_form_data[key] = add_number(
          formData[key],
          key,
          JSON.parse(localStorage.getItem("selectedInstruments"))
        );
      }
    }
    // console.log(new_form_data,"final")
    // const new_form_data=add_number(formData["20"],"20",JSON.parse(localStorage.getItem("selectedInstruments")));

    console.log(new_form_data, "jiji");
    // assuming 'form_details' is the key in localStorage
    const final_data = JSON.stringify({
      usersession: mysession,
      formData: JSON.stringify(new_form_data),
    });
    console.log(final_data, "final");

    try {
      // Send POST request to server
      const response = await fetch("/api/User", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: final_data,
      });

      // Check if request was successful
      const d = await response.json();
      if (response.ok && d.status === "success") {
        console.log("Form submitted successfully");
        setLoader(0);
        alert("form submitted successfully");

        // You can handle success actions here, e.g., redirect user to another page
      } else if (d.status === "fail") {
        setLoader(0);
        alert("Please complete profile details.");
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

  const gst = (val, percent) => {
    return (((1 / 100) * percent * val * 1000) | 0) / 1000;
  };
  const gst_total = (val, percent) => {
    return gst(val, percent) + val;
  };

  if (status === "loading") {
    return (
      <div className="h-screen flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 bg-white z-50">
        <Spinner />
      </div>
    );
  }

  if (status === "unauthenticated") {
    router.push("./");
  }
  if (loader) {
    return (
      <div className="h-screen flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 bg-white z-50">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="container mx-auto md:py-20 py-10">
      <div className="mx-auto mb-8">
        <h2 className="text-2xl text-center font-bold p-4 mx-auto">
          Selected Instruments:
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {selectedInstruments.map((instrument, index) => {
          return (
            <div
              key={index}
              className="p-4 border rounded-md w-full sm:w-1/2 md:w-1/3"
            >
              {forms_instrument[instrument.id]}
            </div>
          );
        })}
      </div>

      <div className="text-center text-4xl font-bold mt-8">
        Total charge: {totalcharge}
      </div>

      <div className="flex justify-center mt-4">
        <Button
          onClick={send}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Send for verification
        </Button>
      </div>
    </div>
  );
};

export default FormComponent;
