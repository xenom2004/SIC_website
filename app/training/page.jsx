"use client";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { getSession } from "next-auth/react";
import { Spinner } from "@nextui-org/react";
import Link from "next/link";

export default function Page() {
  const { data: session, status } = useSession();
  {
    console.log(session);
  }
  const router = useRouter();

  if (status === "loading") {
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-white z-50">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <header className="body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src="logo2-removebg-preview (1).png"
              className="h-16 pt-5 px-10"
              alt=""
              srcSet=""
            />
          </a>

          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          ></svg>
        </div>
      </header>
      <section className="body-font">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-5 py-8">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="mx-6 sm:mx-24 title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-600">
              Announcement of Skill Development Training Program (SDTP)
              <p className="title-font md:text-2xl py-2 text-gray-700">
                A National Facility Indian Institute of Technology Indore
              </p>
            </h1>
            <h1 className="mx-6 sm:mx-24 md:text-3xl text-gray-900">
              <br className="hidden lg:inline-block" />
              SDTP Coordinator
              <p className="title-font md:text-2xl text-blue-600">
                Prof. Apurba K. Das
              </p>
            </h1>
            <div className="container mx-6 sm:mx-24 py-4">
              <h3 className="title-font md:text-2xl text-red-600">
                Training on Sophisticated Analytical Instruments
              </h3>
              <div className="py-2"></div>
              <table className="table-auto w-full">
                <tbody>
                  <tr>
                    <td className="border bg-gray-100 px-4 sm:px-28 py-2">
                      SDTP Trainer
                    </td>
                    <td className="border bg-gray-100 px-4 sm:px-28 py-2">
                      Instruments
                    </td>
                    <td className="border bg-gray-100 px-4 sm:px-28 py-2">
                      Department/Laboratory
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 sm:px-28 py-2">
                      1. Kinny Pandey
                    </td>
                    <td className="border px-4 sm:px-28 py-2 text-blue-700">
                      NMR, SCXRD, FT-IR, CD,BET
                    </td>
                    <td className="border px-4 sm:px-28 py-2 text-blue-700">
                      SIC – A National Facility
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 sm:px-28 py-2">
                      2. Ghanashyam Bhavsar
                    </td>
                    <td className="border px-4 sm:px-28 py-2 text-blue-700">
                      LC-MS, GC-MS, HPLC
                    </td>
                    <td className="border px-4 sm:px-28 py-2 text-blue-700">
                      SIC – A National Facility
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 sm:px-28 py-2">
                      3. Dr. Ravinder
                    </td>
                    <td className="border px-4 sm:px-28 py-2 text-blue-700">
                      CLSM, AFM
                    </td>
                    <td className="border px-4 sm:px-28 py-2 text-blue-700">
                      SIC – A National Facility
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 sm:px-28 py-2">
                      4. Er. Atul Singh
                    </td>
                    <td className="border px-4 sm:px-28 py-2 text-blue-700">
                      TGA, DSC, CHNS-O, FE-SEM
                    </td>
                    <td className="border px-4 sm:px-28 py-2 text-blue-700">
                      SIC – A National Facility
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3 className="title-font lg:text-xl py-8 mx-6 sm:mx-24 text">
              Date and Time
              <p className="title-font sm:text-sm py-2 text-red-700">
                Starting from February 10, 2022. and from 11am to 5 pm
              </p>
            </h3>
            <h3 className="title-font lg:text-xl py-2 mx-6 sm:mx-24 text">
              Registration Fee (In ₹.INR Including GST)
              <p className="title-font sm:text-sm py-2 text-blue-700">
                <Link href="https://drive.google.com/file/d/1B751Vi1cWHBrV1YIcu2NfIO0vyIYKwQn/view?usp=sharing">
                  Brochure
                </Link>
              </p>
            </h3>
            <h3 className="title-font lg:text-xl py-2 mx-6 sm:mx-24 text">
              For Registration kindly follow the link below Application form and
              Payment.
              <p className="title-font sm:text-sm py-2 text-blue-700">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfLYsTwCdywujwLzSSsvPRTBedt65Q9Pg8X4x7Kg5MEU4C_sw/viewform">
                  Application Form
                </Link>
              </p>
              <p className="title-font sm:text-sm text-blue-700">
                <Link href="https://forms.eduqfix.com/indoreiit/add?formType=4599113494952032">
                  Pay Now
                </Link>
              </p>
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}
