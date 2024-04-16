"use client";
import React, { useState, useEffect } from "react";

import { usePathname, useSearchParams } from "next/navigation";
import HPLCForm from "../../admin/forms/chromatography/hplc/page";
import Elemental_analyser from "../../admin/forms/elemental_analysis/page";
import PLForm from "../../admin/forms/microscopy/fe-sem/page";
import FTIRForm from "../../admin/forms/spectroscopy/ftir/page";
import ChemicalDataForm from "../../admin/forms/spectroscopy/nmr/page";
import SFMForm from "../../admin/forms/spectroscopy/sfm/page";
import FluorescenceMicroscopyForm from "../../admin/forms/microscopy/clsm/page";
import UVVisForm from "../../admin/forms/spectroscopy/uv-vis/page";
import UVVISNIRForm from "../../admin/forms/spectroscopy/uv-vis-nir/page";
// import SETitem from '../../admin/forms/chromatography/hplc/page';
import PowderXRDForm from "../../admin/forms/X-ray3/page";
import BET from "../../admin/forms/BET_surfaceAnalyser/page";
import SingleCrystalXRayForm from "../../admin/forms/X-ray/page";
import XAFSForm from "../../admin/forms/X-ray2/page";
import NMR from "../../admin/forms/spectroscopy/nmr/page";
import FESEMForm from "../../admin/forms/microscopy/fe-sem/page";
import { Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { set } from "mongoose";
// import BuyProduct from "../../components/razorpay/BuyProduct"
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
// };
const forms_instrument = {
  1: (prop) => {
    return <SingleCrystalXRayForm prop={prop} />;
  },
  2: (prop) => {
    return <PowderXRDForm prop={prop} />;
  },
  3: (prop) => {
    return <XAFSForm prop={prop} />;
  },
  4: (prop) => {
    return <div>No Form Available</div>;
  },
  5: (prop) => {
    return <div>No Form Available</div>;
  },
  6: (prop) => {
    return <div>No Form Available</div>;
  },
  7: (prop) => {
    return <NMR prop={prop} />;
  },
  8: (prop) => {
    return <FTIRForm prop={prop} />;
  },
  9: (prop) => {
    return <ChemicalDataForm prop={prop} />;
  },
  10: (prop) => {
    return <div>No Form Available</div>;
  },
  11: (prop) => {
    return <div>No Form Available</div>;
  },
  12: (prop) => {
    return <UVVisForm prop={prop} />;
  },
  13: (prop) => {
    return <UVVISNIRForm prop={prop} />;
  },
  14: (prop) => {
    return <SFMForm prop={prop} />;
  },
  15: (prop) => {
    return <FESEMForm prop={prop} />;
  },
  16: (prop) => {
    return <div>No Form Available</div>;
  },
  17: (prop) => {
    return <div>No Form Available</div>;
  },
  18: (prop) => {
    return <FluorescenceMicroscopyForm prop={prop} />;
  },
  19: (prop) => {
    return <div>No Form Available</div>;
  },
  20: (prop) => {
    return <HPLCForm prop={prop} />;
  },
  21: (prop) => {
    return <div>No Form Available</div>;
  },
  22: (prop) => {
    return <div>No Form Available</div>;
  },
  23: (prop) => {
    return <div>No Form Available</div>;
  },
  24: (prop) => {
    return <div>No Form Available</div>;
  },
  25: (prop) => {
    return <BET prop={prop} />;
  },
  26: (prop) => {
    return <div>No Form Available</div>;
  },
  27: (prop) => {
    return <Elemental_analyser prop={prop} />;
  },
  28: (prop) => {
    return <div>No Form Available</div>;
  },
};

const OrderDetails = () => {
  const [order, setOrder] = useState(null);
  const [comment, setComment] = useState("");
  const [submittedComments, setSubmittedComments] = useState([]);
  const pathname = usePathname();
  const [loader, setLoader] = useState(0);
  const searchParams = useSearchParams();
  const orderID = searchParams.get("id");
  const [state, setstate] = useState("");
  const [display, setdisplay] = useState(true);
  const { data: session, status } = useSession();

  const router = useRouter();

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await fetch(`/api/orderId/${orderID}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch order details");
        }
        const data = await response.json();
        setOrder(data.order);
        console.log(data.order, "opoop");
        setstate(data.order.status);
      } catch (error) {
        console.error("Error fetching order details:", error);
      }
    };

    fetchOrder();
  }, [orderID]);

  const handleReject = async () => {
    // Handle reject logic
    const data = { status: "Rejected", comment: comment };
    const isReady = window.confirm("Are you sure you want to submit?");
    if (isReady) {
      setstate("Rejected");
      console.log(data);
      const res = await fetch(`/api/orderId/${orderID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw new Error("Failed to fetch order details");
      }
      alert("success");
    } else {
      setstate("Pending");
    }
  };
  const makePayment = async ({ productId = null, order1 }) => {
    const key = process.env.RAZORPAY_API_KEY;
    console.log(order1, "prop here");
    console.log(key);
    // Make API call to the serverless API
    try {
      const data = await fetch(
        `/api/razorpay/${order1._id}/${session.accessToken}`
      );
      setLoader(0);
      console.log(data, "data here");
      const { order } = await data.json();
      console.log(order, "ifhiuhfgouied");
      const options = {
        key: key,
        name: "SIC",
        currency: order.currency,
        amount: order.amount,
        order_id: order.id,
        description: "RazorPay Payment",
        handler: async function (response) {
          if (response.length == 0) return <Loading />;
          console.log(response);
          const data = await fetch("/api/paymentVerify", {
            method: "POST",

            body: JSON.stringify({
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              sessionname: session.user.name,
              token: session.accessToken,
            }),
          });
          const res = await data.json();
          if (res?.message == "success") {
            console.log("Here");
            const update = await fetch(`/api/orderId/update`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",

                // Add any other headers you need
              },
              body: JSON.stringify({
                id: order1._id,
                accessToken: session.accessToken,
                name: session.user.name,
              }),
            });
            // console.log(update,"update")
            //   router.push("/paymentSuccess?paymentid="+response.razorpay_payment_id)
            alert("successful payment done");
            router.push("/user");
          }
        },
        prefill: {
          name: "debasish",
          email: "rishubapudi@gmail.com",
          contact: "000000000",
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
      paymentObject.on("payment.failed", function (response) {
        alert("Payment failed. Please try again. Contact support for help");
      });
    } catch (er) {
      console.log(er, "ttttt");
      setLoader(0);
    }
  };
  const handlepaymnent = async () => {
    setLoader(1);
    console.log(order);
    const price = 100;
    makePayment({ productId: orderID, order1: order });
  };

  if (!order || loader === 1) {
    return (
      <div className="h-screen flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 bg-white z-50">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="w-full px-24 mx-auto bg-white shadow-lg p-4 rounded-md mt-8">
      <h1 className="text-2xl font-bold mb-4">
        Name: {order.name.charAt(0).toUpperCase() + order.name.slice(1)}
      </h1>

      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Form Details:</h2>
        <p>
          {console.log(order, "kio")}
          {Object.keys(order?.form_details).map((key) => {
            return forms_instrument[key](order?.form_details[key]);
          })}
        </p>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Status:</h2>
        <p>{order.status}</p>
      </div>

      {state === "Payment Incomplete" && (
        <>
          <div className="flex justify-center mt-4">
            <button
              onClick={handlepaymnent}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Confirm Payment
            </button>
          </div>
        </>
      )}
      {/* {
        (state==="Payment Incomplete"||state==="Payment Completed"||state==="Rejected") && (
          <>
          <div>
            <h2 className="text-lg font-semibold mb-2">Status:</h2>
            <p>{order.status}</p>
          </div>
          
          </>
        )
      } */}
    </div>
  );
};

export default OrderDetails;
