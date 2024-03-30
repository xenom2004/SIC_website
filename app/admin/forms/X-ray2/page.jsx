const id=3;
const XAFSForm = (prop) => {

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4  max-w-md mx-auto">
        XAFS Facility Form
      </h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2">
            Measurement Type
          </p>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="XANES"
              checked={prop.prop.measurementType === "XANES"}
              readOnly={true}
              className="form-radio h-5 w-5 text-gray-600"
            />
            <span className="ml-2">XANES</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              value="EXAFS"
              checked={prop.prop.measurementType === "EXAFS"}
              readOnly={true}
              className="form-radio h-5 w-5 text-gray-600"
            />
            <span className="ml-2">EXAFS</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              value="Both"
              checked={prop.prop.measurementType === "Both"}
              readOnly={true}
              className="form-radio h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Both</span>
          </label>
        </div>
        <div className="mb-4">
          <label
            htmlFor="caution"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Caution to be Measured for Absorbed
          </label>
          <textarea
            id="caution"
            value={prop.prop.caution}
            readOnly={true}
            rows="3"
            className="resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter caution..."
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="numberOfSamples"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Number of Samples
          </label>
          <input
            type="number"
            id="numberOfSamples"
            value={prop.prop.numberOfSamples}
            readOnly={true}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter number of samples..."
            required
          />
        </div>
        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2">
            Nature of the Samples
          </p>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="Hazardous"
              checked={prop.prop.sampleNature === "Hazardous"}
              readOnly={true}
              className="form-radio h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Hazardous</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              value="Hygroscopic"
              checked={prop.prop.sampleNature === "Hygroscopic"}
              readOnly={true}
              className="form-radio h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Hygroscopic</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              value="Oxidises in air"
              checked={prop.prop.sampleNature === "Oxidises in air"}
              readOnly={true}
              className="form-radio h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Oxidises in air</span>
          </label>
          <label className="inline-flex items-center ml">
            <input
              type="radio"
              value="None of these"
              checked={prop.prop.sampleNature === "None of these"}
              readOnly={true}
              className=" form-radio h-5 w-5 text-gray-600"
            />
            <span className="ml-2">None of these</span>
          </label>
        </div>
        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2">
            MDS Sheet
          </p>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="Attached"
              checked={prop.prop.mdsSheet === "Attached"}
              readOnly={true}
              className="form-radio h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Attached</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              value="Non-attached"
              checked={prop.prop.mdsSheet === "Non-attached"}
              readOnly={true}
              className="form-radio h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Non-attached</span>
          </label>
        </div>
        <div className="mb-4">
          <label
            htmlFor="specialPrecautions"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Any Special Precaution while Handling the Samples
          </label>
          <textarea
            id="specialPrecautions"
            value={sprop.prop.pecialPrecautions}
            readOnly={true}
            rows="3"
            className="resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter special precautions..."
            required
          />
        </div>
        
      </form>
    </div>
  );
};

export default XAFSForm;
