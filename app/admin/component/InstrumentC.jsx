"use client"
import Link from "next/link";
const getStatusColor = (status) => {
  switch (status) {
    case 'working':
      return 'text-green-500';
    case 'calibrating':
      return 'text-yellow-500';
    case 'maintenance':
      return 'text-red-500';
    case 'offline':
      return 'text-gray-500';
    default:
      return 'text-gray-500';
  }
};
const limit = (name) => {
  if (name.length > 20) {
    return name.slice(0, 20) + "...";
  }
  return name;
};
const InstrumentCardComp = ({ instrument }) => {
    // {console.log(instrument)}
    return (
      <div className=" flex border rounded-md p-4  shadow-md mb-4">
        <Link href={`/instruments/${instrument.id}`}>
          <div className='flex flex-row gap-x-8 items-center '> 

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
  export default InstrumentCardComp