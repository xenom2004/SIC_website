"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useSession } from "next-auth/react";
// import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Spinner,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";

import { Elemental_analyser } from "../components/form/elemental_analysis/page";

const Row = ({
  instrument,
  selectedInstruments,
  setSelectedInstruments,
  handleQuantityChange,
  handleInstrumentChange,
  current_charge,
}) => {
  return (
    <>
      <tr className="mx-auto " key={instrument.id}>
        <td className="hidden sm:table-cell hover:bg-slate-100 border px-4 py-2">
          {instrument.id}
        </td>
        <td className="hover:bg-slate-100 border px-4 py-2">
          {instrument.name}
        </td>
        <td
          className={` ${current_charge === "academic" ? "table-cell" : "hidden"} md:table-cell text-center hover:bg-slate-100 border px-4 py-2`}
        >
          {instrument.academic_charge}
        </td>
        <td
          className={` ${current_charge === "commercial" ? "table-cell" : "hidden"} md:table-cell text-center hover:bg-slate-100 border px-4 py-2`}
        >
          {instrument.commercial_charge}
        </td>
        <td
          className={` ${current_charge === "charge" ? "table-cell" : "hidden"} md:table-cell text-center hover:bg-slate-100 border px-4 py-2`}
        >
          {instrument.charge}
        </td>
        <td className=" text-center hover:bg-slate-100 border px-4 py-2 flex items-center">
          <button
            onClick={() =>
              handleQuantityChange(
                instrument,
                (selectedInstruments.find((item) => item.id === instrument.id)
                  ?.quantity || 1) - 1
              )
            }
            disabled={
              (selectedInstruments.find((item) => item.id === instrument.id)
                ?.quantity || 1) <= 1
            }
            className="mr-2"
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className="w-12 text-center">
            {selectedInstruments.find((item) => item.id === instrument.id)
              ?.quantity || 1}
          </span>
          <button
            onClick={() =>
              handleQuantityChange(
                instrument,
                (selectedInstruments.find((item) => item.id === instrument.id)
                  ?.quantity || 1) + 1
              )
            }
            className="ml-2"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </td>
        <td className="border px-4 py-2">
          <div className="relative">
            {instrument.status === "working" && (
              <input
                type="checkbox"
                checked={selectedInstruments.some(
                  (item) => item.id === instrument.id
                )}
                onChange={() => handleInstrumentChange(instrument)}
              />
            )}

            {instrument.status !== "working" && <div>NA</div>}
          </div>
        </td>
      </tr>
    </>
  );
};
const ChargeCalculator = () => {
  const [profile, setprofile] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(true);
  const { data: session, status } = useSession();
  const [instruments, setInstruments] = useState([]);
  const [selectedInstruments, setSelectedInstruments] = useState([]);
  const [totalcharge, settotalcharge] = useState(0);
  const [totalCommercialcharge, settotalCommercialcharge] = useState(0);
  const [totalAcademiccharge, settotalAcademiccharge] = useState(0);
  const [current_charge, setcurrent_charge] = useState("commercial");
  const gst_value = 18; //in percentage (18 %)
  const [formDataExists, setFormDataExists] = useState(false);

  useEffect(() => {
    const fetchInstruments = async () => {
      try {
        const response = await fetch("/api/instruments"); // Replace '/api/instruments' with your actual API endpoint
        if (!response.ok) {
          throw new Error(`Failed to fetch instruments: ${response.status}`);
        }
        const data = await response.json();

        setInstruments(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching instruments:", error);
        setIsLoading(false);
      }
    };

    fetchInstruments();
  }, []);

  useEffect(() => {
    const selectedInstrumentsData = localStorage.getItem("selectedInstruments");
    if (selectedInstrumentsData) {
      setSelectedInstruments(JSON.parse(selectedInstrumentsData));
      setFormDataExists(true);
    }
    setIsLoading2(false);
  }, []);

  const handleContinueFilling = () => {
    if (status == "unauthenticated") {
      alert("Please login to continue");
    } else {
      router.push("/form");
    }
  };

  useEffect(() => {
    calculateTotalCharge();
  }, [selectedInstruments]);

  const handleInstrumentChange = (instrument) => {
    const index = selectedInstruments.findIndex(
      (item) => item.id === instrument.id
    );
    if (index === -1) {
      setSelectedInstruments([
        ...selectedInstruments,
        { ...instrument, quantity: 1 },
      ]);
    } else {
      const updatedInstruments = [...selectedInstruments];
      updatedInstruments.splice(index, 1);
      setSelectedInstruments(updatedInstruments);
    }
  };

  const handleQuantityChange = (instrument, quantity) => {
    const updatedInstruments = selectedInstruments.map((item) => {
      if (item.id === instrument.id) {
        return { ...item, quantity };
      }
      return item;
    });
    setSelectedInstruments(updatedInstruments);
  };

  const calculateTotalCharge = () => {
    // console.log("ll")
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
          total + instrument.commercial_charge * instrument.quantity,
        0
      )
    );
  };
  const gst = (val, percent) => {
    return (((1 / 100) * percent * val * 1000) | 0) / 1000;
  };
  const gst_total = (val, percent) => {
    return gst(val, percent) + val;
  };

  const handlePayNowClick = () => {
    localStorage.removeItem("selectedInstruments");
    localStorage.removeItem("form_details");
    if (selectedInstruments.length === 0) {
      alert("Please select at least one instrument.");
    } else {
      if (status === "unauthenticated") {
        alert("Please login to continue");
      } else {
        // Clear old data from localStorage

        // Serialize and store new data
        const serializedData = JSON.stringify(selectedInstruments);
        localStorage.setItem("selectedInstruments", serializedData);

        // Redirect to form page
        router.push("/form");
      }
    }
  };

  if (isLoading || isLoading2) {
    return (
      <div className="h-screen flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 bg-white z-50">
        <Spinner />
      </div>
    );
  }
  return (
    <div className=" flex flex-col items-center justify-center px-4 py-8  ">
      <table className="w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th
              scope="colgroup"
              className="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400"
            >
              Category of User:
            </th>
            <th
              scope="col"
              className={`${current_charge === "charge" ? "table-cell" : "hidden"} md:table-cell py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400`}
            >
              IITI Community
            </th>
            <th
              scope="col"
              className={`${current_charge === "academic" ? "table-cell" : "hidden"} md:table-cell py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400`}
            >
              Academic Institutions
            </th>
            <th
              scope="col"
              className={`${current_charge === "commercial" ? "table-cell" : "hidden"} md:table-cell py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400`}
            >
              Commercial/ Industry
            </th>
          </tr>
        </thead>
        <tbody className=" bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
          <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
            <th
              scope="row"
              className="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div className="flex items-center justify-center">
                Instrument Charges (In Rs.):
              </div>
            </th>
            <td
              className={`${current_charge === "charge" ? "table-cell" : "hidden"}  md:table-cell py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white`}
            >
              <div className=" h-full p-2 border rounded-md">{totalcharge}</div>
            </td>
            <td
              className={`${current_charge === "academic" ? "table-cell" : "hidden"} md:table-cell  py-4 px-6 text-sm font-medium text-center text-gray-500 whitespace-nowrap dark:text-white`}
            >
              <div className=" h-full p-2 border rounded-md">
                {totalAcademiccharge}
              </div>
            </td>
            <td
              className={`${current_charge === "commercial" ? "table-cell" : "hidden"} md:table-cell py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white`}
            >
              <div className=" h-full p-2 border rounded-md">
                {totalCommercialcharge}
              </div>
            </td>
          </tr>
          <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
            <th
              scope="row"
              className="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div className="flex items-center justify-center">
                GST (In Rs.):
              </div>
            </th>
            <td
              className={`${current_charge === "charge" ? "table-cell" : "hidden"} md:table-cell py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white`}
            >
              <div className=" h-full p-2 border rounded-md">
                {gst(totalcharge, gst_value)}
              </div>
            </td>
            <td
              className={`${current_charge === "academic" ? "table-cell" : "hidden"} md:table-cell py-4 px-6 text-sm font-medium text-center text-gray-500 whitespace-nowrap dark:text-white`}
            >
              <div className=" h-full p-2 border rounded-md">
                {gst(totalAcademiccharge, gst_value)}
              </div>
            </td>
            <td
              className={`${current_charge === "commercial" ? "table-cell" : "hidden"} md:table-cell py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white`}
            >
              <div className=" h-full p-2 border rounded-md">
                {gst(totalCommercialcharge, gst_value)}
              </div>
            </td>
          </tr>
          <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
            <th
              scope="row"
              className="py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div className="flex items-center justify-center">
                Total Charges (In Rs.):
              </div>
            </th>
            <td
              className={`${current_charge === "charge" ? "table-cell" : "hidden"} md:table-cell py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white`}
            >
              <div className=" h-full p-2 border rounded-md">
                {gst_total(totalcharge, gst_value)}
              </div>
            </td>
            <td
              className={`${current_charge === "academic" ? "table-cell" : "hidden"} md:table-cell py-4 px-6 text-sm font-medium text-center text-gray-500 whitespace-nowrap dark:text-white`}
            >
              <div className=" h-full p-2 border rounded-md">
                {gst_total(totalAcademiccharge, gst_value)}
              </div>{" "}
            </td>
            <td
              className={`${current_charge === "commercial" ? "table-cell" : "hidden"} md:table-cell py-4 px-6 text-sm font-medium text-center text-gray-900 whitespace-nowrap dark:text-white`}
            >
              <div className=" h-full p-2 border rounded-md">
                {gst_total(totalCommercialcharge, gst_value)}
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div>
        <Link
          href="/SIC - Fee Structure.pdf"
          locale="false"
          className="text-blue-600 hover:underline"
        >
          Click Here for detailed fee structure{" "}
        </Link>
      </div>

      <div className="sm:px-2   sm:mx-0 ">
        <h2 className="text-3xl font-bold mb-4 text-lightSky text-center pt-4">
          Select Instruments:
        </h2>
        <table className=" table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="hidden sm:table-cell text-center px-4 py-2">#</th>

              <th className="sm:px-4 sm:py-2 px-0 ">Instrument Name</th>
              <th className="md:hidden">
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered">{current_charge}</Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Action event example"
                    onAction={(key) => setcurrent_charge(key)}
                  >
                    <DropdownItem key="academic">
                      academic Charge (₹)
                    </DropdownItem>
                    <DropdownItem key="commercial">
                      commercial/industrial Charge (₹)
                    </DropdownItem>
                    <DropdownItem key="charge">Charge (₹)</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </th>
              <th className={`hidden   md:table-cell text-center px-4 py-2`}>
                academic Charge (₹)
              </th>
              <th className={`hidden md:table-cell text-center px-4 py-2`}>
                commercial/industrial Charge (₹)
              </th>
              <th className={`hidden   md:table-cell text-center px-4 py-2`}>
                Charge (₹)
              </th>
              <th className="text-center px-4 py-2">Quantity</th>
              <th className="text-center px-4 py-2">select</th>
            </tr>
          </thead>
          <tbody>
            {instruments.map((instrument) => (
              <Row
                instrument={instrument}
                setSelectedInstruments={setSelectedInstruments}
                selectedInstruments={selectedInstruments}
                handleQuantityChange={handleQuantityChange}
                handleInstrumentChange={handleInstrumentChange}
                current_charge={current_charge}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8">
        <h2 className="text-3xl text-lightSky font-bold mb-4">
          Total Charges:
        </h2>
        <p className="text-xl px-20 font-semibold mb-4">₹{totalcharge}</p>
      </div>
      <div>
        {!session ? (
          <>
            <Button onPress={onOpen} color="success">
              Proceed Further
            </Button>
            <Modal
              backdrop="opaque"
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              motionProps={{
                variants: {
                  enter: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.3,
                      ease: "easeOut",
                    },
                  },
                  exit: {
                    y: -20,
                    opacity: 0,
                    transition: {
                      duration: 0.2,
                      ease: "easeIn",
                    },
                  },
                },
              }}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Proceed Further
                    </ModalHeader>
                    <ModalBody>
                      <p>
                        To smoothen the process of SIC, we have incorporated
                        many new changes in the website.
                      </p>
                      <p>You need to Login to proceed.</p>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Link href="/login">
                        <Button color="primary" onPress={onClose}>
                          Log In
                        </Button>
                      </Link>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </>
        ) : (
          <div>
            {false ? (
              <>
                <Button onPress={onOpen} color="success">
                  Pay Now
                </Button>
                <Modal
                  backdrop="opaque"
                  isOpen={isOpen}
                  onOpenChange={onOpenChange}
                  motionProps={{
                    variants: {
                      enter: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.3,
                          ease: "easeOut",
                        },
                      },
                      exit: {
                        y: -20,
                        opacity: 0,
                        transition: {
                          duration: 0.2,
                          ease: "easeIn",
                        },
                      },
                    },
                  }}
                >
                  <ModalContent>
                    {(onClose) => (
                      <>
                        <ModalHeader className="flex flex-col gap-1">
                          Complete Profile
                        </ModalHeader>
                        <ModalBody>
                          <p>
                            To smoothen the process of SIC, we have incorporated
                            many new changes in the website.
                          </p>
                          <p>You need to complete the profile to proceed.</p>
                          <p>It helps to speed up the process.</p>
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            color="danger"
                            variant="light"
                            onPress={onClose}
                          >
                            Close
                          </Button>
                          <Link href="/profile">
                            <Button color="primary" onPress={onClose}>
                              Profile
                            </Button>
                          </Link>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </>
            ) : (
              <>
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={handlePayNowClick}
                >
                  Proceed Furthur
                </button>
                {formDataExists ? (
                  <button
                    onClick={handleContinueFilling}
                    className="ml-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Continue Filling
                  </button>
                ) : (
                  <></>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChargeCalculator;
