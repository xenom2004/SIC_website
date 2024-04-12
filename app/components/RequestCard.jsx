import React from "react";
import Link from "next/link";
const limit = (name) => {
  if (name.length > 20) {
    return name.slice(0, 20) + "...";
  }
  return name;
};
export default function RequestCard({ req }) {
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
      <button className="mr-8 bg-black text-white w-[100px] text-center rounded-xl">
        <Link href={`admin/${hexString}?id=${hexString}`}>View</Link>
      </button>
    </div>
  );
}
