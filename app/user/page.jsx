"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { getSession } from "next-auth/react";
import { Spinner } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Order_card from "./Order";
// const forms_instrument={
//   2: (<PowderXRDForm/>),
//   3: (<XAFSForm/>),
//   1: (<SingleCrystalXRayForm/>),
//   25:(<BET/>),
//   20:(<SETitem/>),
//   13:(<UVVISNIRForm/>),
//   12:(<UVVisForm/>),
//   18:(<FluorescenceMicroscopyForm/>),
//   9: (<ChemicalDataForm/>),
//   14:(<SFMForm/>),
//   8: (<FTIRForm/>),

//   15:(<PLForm/>),
//   20:(<HPLCForm/>),
//   27:(<Elemental_analyser/>),
// }
// const transformedForms = {
//   2: { name: "PowderXRD", price: 20 },
//   3: { name: "XAFS", price: 20 },
//   1: { name: "SingleCrystalXRay", price: 20 },
//   25: { name: "BET", price: 20 },

//   13: { name: "UVVISNIR", price: 20 },
//   12: { name: "UVVis", price: 20 },
//   18: { name: "FluorescenceMicroscopy", price: 20 },
//   9: { name: "ChemicalData", price: 20 },
//   14: { name: "SFM", price: 20 },
//   8: { name: "FTIR", price: 20 },
//   20: { name: "HPLC", price: 20 },

//   15: { name: "PL", price: 20 },
//   27: { name: "Elemental_analyser", price: 20 },
// };
const transformedForms = {
  1: { name: "SingleCrystalXRay", price: 20 },
  2: { name: "PowderXRD", price: 20 },
  3: { name: "XAFS", price: 20 },
  4: { name: "NoFormAvailable", price: 20 },
  5: { name: "NoFormAvailable", price: 20 },
  6: { name: "NoFormAvailable", price: 20 },
  7: { name: "NMR", price: 20 },
  8: { name: "FTIR", price: 20 },
  9: { name: "ChemicalData", price: 20 },
  10: { name: "NoFormAvailable", price: 20 },
  11: { name: "NoFormAvailable", price: 20 },
  12: { name: "UVVis", price: 20 },
  13: { name: "UVVISNIR", price: 20 },
  14: { name: "SFM", price: 20 },
  15: { name: "PL", price: 20 },
  16: { name: "NoFormAvailable", price: 20 },
  17: { name: "NoFormAvailable", price: 20 },
  18: { name: "FluorescenceMicroscopy", price: 20 },
  19: { name: "NoFormAvailable", price: 20 },
  20: { name: "HPLC", price: 20 },
  21: { name: "NoFormAvailable", price: 20 },
  22: { name: "NoFormAvailable", price: 20 },
  23: { name: "NoFormAvailable", price: 20 },
  24: { name: "NoFormAvailable", price: 20 },
  25: { name: "BET", price: 20 },
  26: { name: "NoFormAvailable", price: 20 },
  27: { name: "Elemental_analyser", price: 20 },
  28: { name: "NoFormAvailable", price: 20 },
};

const gorder = [
  {
    id: 1,
    payment: 2000,
    date: "2022-01-01",
    status: "Pending",
    details: {
      order_no: 1,
      order_date: "2022-01-01",
      instruments: [
        { name: "we-200", amount: "1" },
        { name: "wenh-200", amount: "20" },
        { name: "electron microscope-200", amount: "2" },
      ],
    },
  },
];

export default function Page() {
  const { data: session, status } = useSession();
  const [order_details, setorder_details] = useState(null);
  const [selected, setselected] = useState(null);
  const [order, setgetorder] = useState([]);
  useEffect(() => {
    if (status == "authenticated") {
      const data = fetch(`api/User/${session.user.name}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "session":session.accessToken,
          // Add any other headers if required, like authorization token, etc.
        },
        
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json(); // Parse the JSON from the response
        })
        .then((data) => {
          // Handle the data received from the server
          // console.log(data);
          setgetorder(data.details);
          // console.log(order,"here")// For example, log the user details to the console
        })
        .catch((error) => {
          // Handle any errors that occurred during the fetch
          console.error("There was a problem with the fetch operation:", error);
        });
    }
  }, [session]);
  //   console.log(session,"session")
  const router = useRouter();

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

  return (
    <>
      <div className="p-8 mt-4 w-full  h-full flex flex-row justify-center min-h-screen align-center  ">
        <div className="hidden lg:flex flex-col bg-white text-center  items-center h-full  min-h-screen w-[20%] ">
          <img
            src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="w-[70%] h-[70%] pt-4  rounded-full "
          ></img>
          <h1 className="text-center text-3xl font-bold ">
            {session?.user?.name}
          </h1>
          <h1 className="text-center text-sm pt-2 font-bold ">
            Indian Institute of Technology Indore
          </h1>
          <h1 className="text-center text-sm mt-2 py-2 border-y-1 w-full font-bold ">
            Profile
          </h1>
          <h1 className=""></h1>

          <div className="mx-2 bg-slate-200 flex flex-col align-center m-8 p-4 justify-center items-center rounded-xl  h-full w-full min h-[200px] bg-blue-200">
            <i class="fa-solid fa-cart-shopping fa-7xl fa-5x p-2 mb-2 "></i>
            <Link href="/usageCharges">
              <Button className="w-full bg-blue-700 text-white ">
                Place Order
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-full h-full rounded-xl min-h-screen   ">
          <h1 className="text-blue-700 pl-4 text-3xl m-2 mt-0 bg-white font-bold ">
            Your Orders
          </h1>
          <div className="flex flex-col gap-y-4  lg:flex-row  rounded-xl min-h-full  m-2 gap-x-2">
            <div className="flex flex-col bg-white gap-y-2 rounded-xl min-h-full overflow-y-auto max-h-screen lg:w-[70%] w-full  ">
              <p className="ml-2 text-sm sm:text-xl font-bold italic">
                {" "}
                All orders
              </p>
              {order.length > 0 ? (
                order.map((ord) => (
                  <Order_card
                    key={ord._id}
                    st={setselected}
                    order={ord}
                    state={selected === ord._id ? true : false}
                    setselected={setselected}
                    setorder_details={setorder_details}
                  />
                ))
              ) : (
                <p className=" flex items-center justify-center h-full w-full ">
                  Loading requests..
                </p>
              )}
              {/* <div className='flex fex-row'>order 1</div> */}
            </div>
            <div className="flex flex-col bg-white h-full  rounded-xl w-full lg:w-[30%] ">
              {/* Order Details:{order_details?.} */}
              {/* {console.log(order_details, "uiu")} */}

              {order_details ? (
                <div className="m-2 p-2 lg:min-h-screen overflow-y-auto h-full lg:max-h-screen">
                  <div className="flex py-2 flex-row text-lg sm:text-2xl font-bold">
                    <span className="grow">Order Details</span>
                    <Button
                      onPress={() => {
                        setselected(null);
                        setorder_details(null);
                      }}
                    >
                      <i
                        className="text-blue-500"
                        class="fa-solid fa-rotate-right "
                      ></i>
                      close
                    </Button>
                  </div>

                  <div className="flex  flex-col">
                    <p>
                      <span className="sm:text-lg text-sm font-bold mr-1">
                        Order Id:
                      </span>
                      {order_details?._id}
                    </p>
                    <p>
                      <span className="sm:text-lg text-sm font-bold mr-1">
                        Order Date:{" "}
                      </span>
                      {order_details?.Date?.substring(0, 10)}
                    </p>
                  </div>
                  <div className="flex flex-col sm:text-sm text-sm ">
                    <div className="flex flex-row font-bold ">
                      <p className="grow">Instruments</p>
                      <p>amount</p>
                    </div>
                    {console.log(order_details?.form_details, "hii")}
                    {/* {order_details?.form_details.map((inst) => (
                      <div className="flex flex-row  ">
                        <p className="grow truncate ">{inst.name}</p>
                        <p className="text-wrap">{inst.amount}</p>
                      </div>
                    ))} */}
                    {order_details?.form_details!==undefined && (Object.keys(order_details?.form_details).map((key) => (
                      <div key={key} className="flex flex-row">
                        <p className="grow truncate">
                          {transformedForms[key]?.name}
                        </p>
                        <p className="text-wrap">
                          {order_details?.form_details[key].quantity}
                        </p>
                      </div>
                    )))}
                    <p className="mt-12">
                      <span className="text-sm sm:text-lg font-bold mr-1 ">
                        Total Payment
                      </span>
                      {order_details?.price.$numberDecimal}
                    </p>
                  </div>
                  <div className="flex justify-center items-center  h-full">
                    {order_details?.status}
                  </div>
                  {order_details?.comment != null && (
                    <div className="flex justify-center items-center text-red-500  h-full">
                      <span className="text-black font-bold ">Note:</span>{" "}
                      {order_details?.comment}
                    </div>
                  )}
                  {order_details?.status == "Payment Incomplete" && (
                    <div className="flex flex-row justify-center items-center">
                      <Link
                        href={`/user_payment/${order_details?._id}?id=${order_details?._id}`}
                      >
                        <Button className="w-full px-4 m-4 justify-center bg-blue-700 text-white">
                          Proceed to payment
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <p className="flex items-center justify-center h-full ">
                  select order to display
                </p>
              )}
            </div>
          </div>
          <div className="lg:hidden flex flex-row items-center justify-center">
          <Link href="/usageCharges">
            <Button className="w-full  align-center px-4 m-4 bg-blue-700 text-white">
              Place Order
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
