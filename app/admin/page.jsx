"use client";
import React from "react";
import {
  Autocomplete,
  AutocompleteSection,
  AutocompleteItem,
} from "@nextui-org/react";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import PendingReqC from "./component/PendingReqC";
import InstrumentCardComp from "./component/InstrumentC";
// import Footer from "./components/footer"

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import { Textarea } from "@nextui-org/react";

const InstrumentCard = ({ instrument }) => {
  // {console.log(instrument)}
  return (
    <div className=" flex border rounded-md p-4  shadow-md mb-4">
      <Link href={`/instruments/${instrument.id}`}>
        <div className="flex flex-row gap-x-8 items-center ">
          <p className="text-gray-600 mb-2 flex-0">{instrument.id}</p>
          <h2 className="text-lg font-semibold mb-2 grow">{instrument.name}</h2>

          <p className={`text-sm  ${getStatusColor(instrument.status)} mb-2`}>
            Status: {instrument.status}
          </p>
        </div>
      </Link>
    </div>
  );
};

export function RequestCard({ req }) {
  const objectIdObject = req._id;
  const hexString = objectIdObject.toString().match(/[a-fA-F0-9]{24}/)[0];

  return (
    <div className="flex items-center bg-blue-300 rounded-xl flex-row w-full p-2 ">
      <div className="flex grow">
        <img
          className="rounded-full w-[50px] h-[50px]"
          src={req.image}
          alt="img"
        ></img>
        <div className="flex flex-col pl-8">
          <h1 className="text-black font-bold text-xs items-center">
            {req.loginType}
          </h1>
          <h1 className="text-black text-2xl items-center">
            {limit(req.name)}
          </h1>
        </div>
      </div>
      <button  className="mr-8 bg-black text-white w-[100px] text-center rounded-xl">
        <Link href={`admin/${hexString}?id=${hexString}`}>View</Link>
      </button>
    </div>
  );
}

const getStatusColor = (status) => {
  switch (status) {
    case "working":
      return "text-green-500";
    case "calibrating":
      return "text-yellow-500";
    case "maintenance":
      return "text-red-500";
    case "offline":
      return "text-gray-500";
    default:
      return "text-gray-500";
  }
};

const limit = (name) => {
  if (name.length > 20) {
    return name.slice(0, 20) + "...";
  }
  return name;
};
export function App({ people }) {
  // {console.log(people,"itemff")}
  const d = [];
  if (people) {
    const d = people.item;
    return (
      <Autocomplete
        defaultItems={d}
        label=""
        placeholder="Search a person"
        className="max-w-xs"
      >
        {(req) => <AutocompleteItem key={req.id}>{req.name}</AutocompleteItem>}
      </Autocomplete>
    );
  }
  return <div></div>;
}
const admin = () => {
  const [state, setstate] = useState("stats");
  const [instruments, setInstruments] = useState([]);
  const [peoplereq, setpeoplereq] = useState([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [new_inst_desc, setnew_inst_desc] = useState("");
  const [new_inst_name, setnew_inst_name] = useState("");
  const [new_inst_imagelink, setnew_inst_imagelink] = useState("");
  const [new_inst_status, setnew_inst_status] = useState("active");
  const add_ins_button = useRef(null);

  // const [activeOrders, setActiveOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch('/api/Pendingrequest');
                
                if (!response.ok) {
                    throw new Error('Failed to fetch orders');
                   
                }
                const data = await response.json();
                console.log(data,"my res");

                setpeoplereq(data);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch orders');
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);


  const AddInstrument = async () => {
    try {
      const response = await fetch("/api/addinstruments", {
        method: "POST",
        body: JSON.stringify({
          name: new_inst_name,
          description: new_inst_desc,
          image: new_inst_imagelink,
          status: new_inst_status,
        }),
      });
      const res = await response.json();
      // if (!response.ok) {
      //   throw new Error(`Failed to add instruments: ${response.status}`);
      // }
      if (res.status === "error") {
        alert("Enter both name and description");
      }
      if (res.status === "success") {
        alert("Instrument Added successfully, refresh to view changes");
      }
      console.log(res, "success");
    } catch (error) {
      console.error("Error adding instruments:", error);
    }
    add_ins_button.current.click();
    console.log("successfullly");
  };
  useEffect(() => {
    const fetchInstruments = async () => {
      try {
        const response = await fetch("/api/instruments");
        if (!response.ok) {
          throw new Error(`Failed to fetch instruments: ${response.status}`);
        }
        const data = await response.json();
        setInstruments(data);
      } catch (error) {
        console.error("Error fetching instruments:", error);
      }
    };
    const fetchRequest = async () => {
      try {
        const response = await fetch("/api/Pendingrequest");
        if (!response.ok) {
          throw new Error(`Failed to fetch request: ${response.status}`);
        }
        const data = await response.json();
        setpeoplereq(data);
      } catch (error) {
        console.error("Error fetching instruments:", error);
      }
    };

    fetchInstruments();
    // fetchRequest();
  }, []);

  return (
    <div className="bg-blue-100 h-fit  w-full">
      <div className="bg-black bg-opacity-25 h-[1000px] md:[800px]  lg:h-fit md:p-8 md:m-8 m-2 p-2 rounded-xl">
        <div className="flex flex-col md:flex-row w-full md:h-full h-fit  z-10">
          <div className="bg-white  flex flex-row md:flex-col h-fit md:h-full md:min-h-screen min-w-[20%]">
            <h1 className=" hidden md:flex px-2 items-center h-12 flex flex-row hover:border-blue-300 border-2 hover:bg-blue-100 text-xl text-blue-700">
              <i
                className="fa-brands fa-hive fa-3xl "
                style={{ color: "black" }}
              ></i>
              <p className="ml-4 justify-center">DashBoard</p>
            </h1>
            <h1
              onClick={() => setstate("stats")}
              className={`${
                state === "stats" ? "bg-blue-200" : "bg-white"
              } px-2 items-center h-12 flex flex-row hover:border-blue-300 border-2 hover:bg-blue-100 text-xl text-blue-700`}
            >
              <i
                className="fa-solid fa-chart-simple fa-3xl "
                style={{ color: "black" }}
              ></i>{" "}
              <button className="ml-4 justify-center">Stats</button>
            </h1>
            <h1
              onClick={() => setstate("instruments")}
              className={`px-2 ${
                state === "instruments" ? "bg-blue-200" : "bg-white"
              } items-center h-12 flex flex-row hover:border-blue-300 border-2 hover:bg-blue-100 text-xl text-blue-700`}
            >
              <i
                className="fa-solid fa-fax fa-3xl "
                style={{ color: "black" }}
              ></i>{" "}
              <button className="ml-4 justify-center">Instruments</button>
            </h1>
            <h1
              onClick={() => setstate("cost")}
              className={`px-2 ${
                state === "cost" ? "bg-blue-200" : "bg-white"
              }  items-center h-12 flex flex-row hover:border-blue-300 border-2 hover:bg-blue-100 text-xl text-blue-700`}
            >
              <i
                className="fa-solid fa-calculator fa-3xl "
                style={{ color: "black" }}
              ></i>{" "}
              <button className="ml-4 justify-center">Cost</button>
            </h1>
            <h1
              onClick={() => setstate("request")}
              className={`px-2 ${
                state === "request" ? "bg-blue-200" : "bg-white"
              }  items-center h-12 flex flex-row hover:border-blue-300 border-2 hover:bg-blue-100 text-xl text-blue-700`}
            >
              <i
                className="fa-solid fa-person-circle-question fa-3xl "
                style={{ color: "black" }}
              ></i>{" "}
              <button className="ml-4 justify-center">Pending Request</button>
            </h1>
          </div>

          {state === "stats" && (
            <div className="ml-2 lg:grid flex-col flex    lg:grid-cols-2 gap-4 w-full h-screen">
              <div className="bg-custompurple rounded-xl p-4 gap-y-2 flex flex-col w-full min-h-[400px] ">
                <div className="flex flex-row  ">
                  <p className="text-black grow  text-md">Pending request</p>
                  {/* <App people={{ item: peoplereq }} /> */}
                </div>
                <div className="gap-y-2  flex flex-col rounded-xl bg-white p-4 w-full max-h-[350px] overflow-y-auto  h-full">
                  {peoplereq.length > 0 ? (
                    peoplereq.map((req) => (
                      <RequestCard key={req.id} req={req} />
                    ))
                  ) : (
                    <p className=" flex items-center justify-center h-full w-full ">
                      Loading requests..
                    </p>
                  )}
                </div>
              </div>

              <div className="bg-custompurple rounded-xl p-4 gap-y-2 flex flex-col w-full min-h-[400px]">
                <div className="flex flex-row  ">
                  <p className="text-black grow  text-md">Check Instruents</p>
                  <App people={{ item: instruments }} />
                </div>
                <div className="gap-y-2 flex flex-col rounded-xl bg-white p-4 w-full max-h-[350px] overflow-y-auto  h-full">
                  {instruments.length > 0 ? (
                    instruments.map((req) => (
                      <InstrumentCard key={req.id} instrument={req} />
                    ))
                  ) : (
                    <p className=" flex items-center justify-center h-full w-full ">
                      Loading instruments..
                    </p>
                  )}
                </div>
              </div>

              <div className=" bg-custompurple items-center justify-center flex col-span-2 w-full h-full">
                <div className="flex flex-row items-center gap-x-8 justify-center">
                  <div className="flex flex-col bg-slate-300 rounded-xl  p-4">
                    <h1 className="test-green-600 text-center">
                      Payment completed
                    </h1>
                    <h1 className="text-5xl font-bold text-center">2</h1>
                  </div>
                  <div className="flex  bg-slate-300 rounded-xl p-4 flex-col">
                    <h1 className="test-black  text-center">Pending Request</h1>
                    <h1 className="text-5xl font-bold text-center">6</h1>
                  </div>
                </div>
              </div>
            </div>
          )}
          {state === "request" && (
            <div className="bg-custompurple rounded-xl p-4 ml-2 flex flex-col w-full min-h-[400px] ">
              <div className="flex flex-row  ">
                <p className="text-black grow  text-md">Pending request</p>
                {/* <App people={{ item: peoplereq }} /> */}
              </div>
              <div className="gap-y-2  flex flex-col rounded-xl bg-white p-4 w-full mt-4 overflow-y-auto max-h-[550px]  h-full">
                {peoplereq.length > 0 ? (
                  peoplereq.map((req) => <PendingReqC key={req.id} req={req} />)
                ) : (
                  <p className=" flex items-center justify-center h-full w-full ">
                    Loading requests..
                  </p>
                )}
              </div>

              {/* <PendingReqC /> */}
            </div>
          )}
          {state === "instruments" && (
            <div className="bg-custompurple rounded-xl  p-4 ml-2 flex flex-col w-full min-h-[600px] ">
              <div className="flex flex-row  ">
                <p className="text-black grow  text-md">Check Instruents</p>
                <App people={{ item: instruments }} />
              </div>
              <div className="gap-y-2 mt-2 flex flex-col rounded-xl bg-white p-4 w-full max-h-[500px] overflow-y-auto  h-full">
                {instruments.length > 0 ? (
                  instruments.map((req) => (
                    <InstrumentCardComp key={req.id} instrument={req} />
                  ))
                ) : (
                  <p className=" flex items-center justify-center h-full w-full ">
                    Loading instruments..
                  </p>
                )}
              </div>

              <>
                <Button className="h-[80px] my-4" onPress={onOpen}>
                  Add Instruments
                </Button>
                <Modal
                  isOpen={isOpen}
                  onOpenChange={onOpenChange}
                  isDismissable={false}
                  isKeyboardDismissDisabled={true}
                >
                  <ModalContent>
                    {(onClose) => (
                      <>
                        <ModalHeader className="flex flex-col gap-1">
                          Modal Title
                        </ModalHeader>
                        <ModalBody>
                          <Textarea
                            label="name"
                            placeholder="Enter instrument name"
                            className="max-w-xs"
                            onChange={(e) => setnew_inst_name(e.target.value)}
                          />
                          <Textarea
                            label="Description"
                            placeholder="Enter your description"
                            className="max-w-xs"
                            onChange={(e) => setnew_inst_desc(e.target.value)}
                          />
                          <Textarea
                            label="image"
                            placeholder="Enter instrument image_link"
                            className="max-w-xs"
                            onChange={(e) =>
                              setnew_inst_imagelink(e.target.value)
                            }
                          />
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            color="danger"
                            variant="light"
                            onPress={onClose}
                          >
                            Close
                          </Button>
                          <Button color="primary" onPress={AddInstrument}>
                            ADD
                          </Button>
                          <Button
                            ref={add_ins_button}
                            className=" hidden"
                            color="primary"
                            onPress={onClose}
                          >
                            Action
                          </Button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default admin;
