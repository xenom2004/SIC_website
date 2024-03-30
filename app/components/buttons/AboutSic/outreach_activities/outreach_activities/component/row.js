import React from 'react';

const Row = (props) => {
  return (
    <>
      <div className="lg:w-1/2 sm:w-full p-2">
        <div className="relative aspect-w-1 aspect-h-1">
          <img
            src={props.image}
            className="w-full h-full object-cover object-center rounded-lg shadow-md"
            alt="Image"
          />
        </div>
      </div>
      <div className="lg:w-1/2 sm:w-full p-2 flex flex-col justify-between">
        <div className="w-full h-full hover:bg-lightSky rounded-lg shadow-md hover:text-white text-lightSky text-center p-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">{props.date}</h2>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">{props.first}</h2>
          <p className="mt-2 text-sm sm:text-base">{props.second}</p>
          <p className="mt-2 text-sm sm:text-base">{props.third}</p>
        </div>
      </div>
    </>
  );
};

export default Row;

