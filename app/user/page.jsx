"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { getSession } from "next-auth/react";
import { Spinner } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
const order = [
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
  {
    id: 2,
    payment: 2000,
    date: "2022-02-01",
    status: "Payment Incomplete",
    details: {
      order_no: 1,
      order_date: "2022-02-01",
      instruments: [
        { name: "electron microscope", amount: "1" },
        { name: "nh-200", amount: "20" },
        { name: "positron microscope-200", amount: "2" },
      ],
    },
  },
  {
    id: 3,
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
  {
    id: 4,
    payment: 2000,
    date: "2022-02-01",
    status: "Payment Incomplete",
    details: {
      order_no: 1,
      order_date: "2022-02-01",
      instruments: [
        { name: "electron microscope", amount: "1" },
        { name: "nh-200", amount: "20" },
        { name: "positron microscope-200", amount: "2" },
      ],
    },
  },
  {
    id: 5,
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
  {
    id: 6,
    payment: 2000,
    date: "2022-02-01",
    status: "Payment Incomplete",
    details: {
      order_no: 1,
      order_date: "2022-02-01",
      instruments: [
        { name: "electron microscope", amount: "1" },
        { name: "nh-200", amount: "20" },
        { name: "positron microscope-200", amount: "2" },
      ],
    },
  },
  {
    id: 7,
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
  {
    id: 8,
    payment: 2000,
    date: "2022-02-01",
    status: "Payment Incomplete",
    details: {
      order_no: 1,
      order_date: "2022-02-01",
      instruments: [
        { name: "electron microscope", amount: "1" },
        { name: "nh-200", amount: "20" },
        { name: "positron microscope-200", amount: "2" },
      ],
    },
  },
  {
    id: 9,
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
  {
    id: 10,
    payment: 2000,
    date: "2022-02-01",
    status: "Payment Incomplete",
    details: {
      order_no: 1,
      order_date: "2022-02-01",
      instruments: [
        { name: "electron microscope", amount: "1" },
        { name: "nh-200", amount: "20" },
        { name: "positron microscope-200", amount: "2" },
      ],
    },
  },
  {
    id: 11,
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
  {
    id: 12,
    payment: 2000,
    date: "2022-02-01",
    status: "Payment Incomplete",
    details: {
      order_no: 1,
      order_date: "2022-02-01",
      instruments: [
        { name: "electron microscope", amount: "1" },
        { name: "nh-200", amount: "20" },
        { name: "positron microscope-200", amount: "2" },
      ],
    },
  },
];
export function Order_card(order) {
  return (
    <>
      <div
        onClick={() => {
          order.setselected(order.order.id);
          order.setorder_details(order.order);
        }}
        className={` rounded-xl border-1 flex flex-row px-2 mx-2 items-center  content-cenetr ${
          order.state === true ? "shadow-xl" : ""
        }`}
      >
        <div className="flex flex-col grow p-2">
          <h1 className="text-xl font-bold">Order Id: {order.order.id}</h1>
          <h1 className="text-lg">Payment: {order.order.payment}</h1>
        </div>
        <div className="px-4 ">{order.order.status}</div>
        <div className="px-4 flex align-center">{order.order.date}</div>
      </div>
    </>
  );
}
export default function Page() {
  const { data: session, status } = useSession();
  const [order_details, setorder_details] = useState(null);
  const [selected, setselected] = useState(null);
  //   console.log(session,"session")
  const router = useRouter();

  if (status === "loading") {
    return (
      <p>
        <div className="h-screen flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 bg-white z-50">
          <Spinner />
        </div>
      </p>
    );
  }

  if (status === "unauthenticated") {
    router.push("./");
  }

  return (
    <>
      <div className="p-8 mt-4 w-full  h-full flex flex-row justify-center min-h-screen align-center bg-slate-100 ">
        <div className="hidden lg:flex flex-col bg-white text-center  items-center h-full  min-h-screen w-[20%] ">
          <img
            src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="w-[70%] h-[70%] pt-4  rounded-full "
          ></img>
          <h1 className="text-center text-3xl font-bold ">
            {session.user.name}
          </h1>
          <h1 className="text-center text-sm pt-2 font-bold ">
            Indian Institute of Technology Indore
          </h1>
          <h1 className="text-center text-sm mt-2 py-2 border-y-1 w-full font-bold ">
            Profile
          </h1>
          <h1 className="grow"></h1>

          <div className="mx-2 bg-slate-200 flex flex-col align-center m-8 p-4 justify-center items-center rounded-xl  h-full w-full min h-[200px] bg-blue-200">
            <i class="fa-solid fa-cart-shopping fa-7xl fa-5x p-2 mb-2 "></i>
            <Button className="w-full bg-blue-700 text-white ">
              Place Order
            </Button>
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
                    key={ord.id}
                    st={setselected}
                    order={ord}
                    state={selected === ord.id ? true : false}
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
              {/* Order Details:{order_details.} */}
              {console.log(order_details)}

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

                  <div className="flex flex-col">
                    <p>
                      <span className="sm:text-lg text-sm font-bold mr-1">
                        Order Id:
                      </span>
                      {order_details.id}
                    </p>
                    <p>
                      <span className="sm:text-lg text-sm font-bold mr-1">
                        Order Date:{" "}
                      </span>
                      {order_details.date}
                    </p>
                  </div>
                  <div className="flex flex-col sm:text-sm text-sm ">
                    <div className="flex flex-row font-bold ">
                      <p className="grow">Instruments</p>
                      <p>amount</p>
                    </div>
                    {order_details.details.instruments.map((inst) => (
                      <div className="flex flex-row  ">
                        <p className="grow truncate ">{inst.name}</p>
                        <p className="text-wrap">{inst.amount}</p>
                      </div>
                    ))}
                    <p className="mt-12">
                      <span className="text-sm sm:text-lg font-bold mr-1 ">
                        Total Payment
                      </span>
                      {order_details.payment}
                    </p>
                  </div>
                  <div className="flex justify-center items-center  h-full">
                    {order_details.status}
                  </div>
                  {order_details.status == "Payment Incomplete" && (
                    <div className="flex flex-row items-center">
                      <Button className="w-full px-4 m-4 bg-blue-700 text-white">
                        Proceed to payment
                      </Button>
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
          <div className="lg:hidden flex flex-row items-center">
            <Button className="w-full px-4 m-4 bg-blue-700 text-white">
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
