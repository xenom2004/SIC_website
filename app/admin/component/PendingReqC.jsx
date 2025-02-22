"use client"
import React from "react";
import Link from "next/link";
const limit = (name) => {
  if (name.length > 20) {
    return name.slice(0, 20) + "...";
  }
  return name;
};

const PendingReqC = ({ req }) => {
  const objectIdObject = req._id;
  const hexString = objectIdObject.toString().match(/[a-fA-F0-9]{24}/)[0];
  return (
    <div>
      <div className="flex items-center bg-blue-300 rounded-xl flex-row w-full p-2 ">
        <div className="flex grow">
          {/* <img
            className="hidden sm:flex rounded-full w-[50px] h-[50px]"
            src={req.image}
            alt="img"
          ></img> */}
          <button className="mr-8 p-2  text-black h-fit  lg:w-[200px] md:w-[100px] hidden sm:flex flex-col text-center rounded-xl">
          <span className="align-left font-bold">order ID:</span> {hexString}
        </button>
          <div className="flex flex-col pl-8">
            <h1 className="text-black font-bold text-xs items-center">
              {req.loginType}
            </h1>
            <h1 className="text-black lg:text-3xl md:text-2xl sm:text-xl items-center">
              {limit(req.name)}
            </h1>
          </div>
        </div>
        <button className="mr-8 p-2 bg-black text-white h-fit  lg:w-[200px] md:w-[100px]  text-center rounded-xl">
          {req.status}
        </button>
        
        <Link href={`admin/${hexString}?id=${hexString}`}>

        <button className="mr-8 p-2 bg-black text-blue-300 sm:text-white lg:w-[200px] h-fit md:w-[100px] text-center rounded-xl">
          View
        </button></Link>
      </div>
    </div>
  );
};

export default PendingReqC;

