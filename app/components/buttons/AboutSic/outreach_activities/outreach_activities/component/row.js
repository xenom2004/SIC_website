import React from 'react';

const Row = (props) => {
  return (
    <>
      <div className="lg:w-1/2 sm:w-full p-2">
        <div className="relative aspect-w-1 aspect-h-1">
          <img
            src={props.image}
            className="w-full h-full object-cover object-center rounded-lg opacity-75 hover:opacity-100"
            alt="Image"
          />
        </div>
      </div>
      <div className="lg:w-1/2 sm:w-full p-2 flex flex-col justify-between">
        <div className="w-full h-full object-cover object-center rounded-lg opacity-75 hover:opacity-100 bg-gray-800 text-white text-center">
        <h2 className="text-2xl font-bold mt-4 mb-4">{props.date}</h2>
          <h2 className="text-2xl font-bold mt-4 mb-4">{props.first}</h2>
          <p className="mt-2 text-sm">{props.second}</p>
          <p className="mt-2">{props.third}</p>
        </div>
      </div>
    </>
  );
};

export default Row;
