"use client";
import React, { useState, useEffect } from "react";
import { Spinner } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function Instrument({ params }) {
  const [instrument, setInstrument] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { data: session, status } = useSession();
  const [instrument_status, setinstrument_status] = useState("available");
  const [dataFetched, setDataFetched] = useState(false);
  const updatestatus = async (key) => {
    var result = confirm("Are you sure you want update?");
    setDataFetched(!dataFetched);
    if (result) {
      try {
        const response = await fetch("/api/instruments/update", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            instrument: instrument,
            updatedstatus: key,
          }),
        });
        console.log("lop", response);
        const res = await response.json();
        if (res.status === "success") {
          setinstrument_status(key);

          alert("successfully updated instrumnets status");
        } else {
          alert("Failure in instrument update");
        }
      } catch (error) {
        console.log(error);
      }
    }
    setinstrument_status(key);
  };
  useEffect(() => {
    const fetchInstrument = async () => {
      try {
        const response = await fetch(`/api/instruments`);
        if (!response.ok) {
          throw new Error(`Failed to fetch instrument: ${response.status}`);
        }
        const data = await response.json();
        console.log(data[params.id - 1]);
        setInstrument(data[params.id - 1]);
        setinstrument_status(data[params.id - 1].status);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInstrument();
  }, [params.id, dataFetched]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 bg-white z-50">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!instrument) {
    return <p>Instrument not found</p>;
  }
  if (status === "loading") {
    return (
      <div className="h-screen flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 bg-white z-50">
        Loading
      </div>
    );
  }
  // console.log(session?, "lop")

  return (
    <section className="text-gray-600 body-font mx-auto ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-lightSky">
            {instrument.name}
          </h1>
          <p className="mb-8 leading-relaxed">{instrument.info}</p>
          <div className="flex justify-center mb-8">
            <Link href="/usageCharges">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg mr-4">
                Form Submission
              </button>
            </Link>
            <Link href="/usageCharges">
              <button className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-full text-lg">
                Cost Calculator
              </button>
            </Link>
            {session && session.user.isAdmin === "admin" && (
              <>
                <div className="ml-4">
                  <Dropdown>
                    <DropdownTrigger>
                      <Button
                        className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-full text-lg"
                        radius="full"
                      >
                        {instrument_status !== null
                          ? instrument_status
                          : "working"}
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                      onAction={(key) => {
                        updatestatus(key);
                      }}
                      aria-label="Single selection example"
                      variant="flat"
                      disallowEmptySelection
                    >
                      <DropdownItem key="working">working</DropdownItem>
                      <DropdownItem key="unavailable">unavailable</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="border rounded-md p-8 shadow-md mb-6 flex flex-col">
          <img
            className="w-full h-84 object-cover rounded-md"
            alt="instrument"
            src={instrument.image}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>
      </div>
    </section>
  );
}
