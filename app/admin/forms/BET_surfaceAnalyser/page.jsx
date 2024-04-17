const id=25;
const BET = (prop) => {

  console.log(prop.prop,"admin")

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4  max-w-md mx-auto">
        BET Surface Analyser
      </h2>
      <form  className="max-w-md mx-auto">

      <p className="block text-gray-700 text-sm font-bold mb-2">
            Sample Type
          </p>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="Powder"
              checked={prop.prop?.sampleType === "Powder"}
              readOnly={true}
              className="form-radio h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Powder</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              value="Pellet"
              checked={prop.prop?.sampleType === "Pellet"}
              readOnly={true}
              className="form-radio h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Pellet</span>
          </label>


      <p className="block text-gray-700 text-sm font-bold mb-2">
            Sample handling Precautions
          </p>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="Hazardous"
              checked={prop.prop?.sampleNature === "Hazardous"}
              readOnly={true}
              className="form-radio h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Hazardous</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              value="Non-Hazardous"
              checked={prop.prop?.sampleNature === "Non-Hazardous"}
              readOnly={true}
              className="form-radio h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Non-Hazardous</span>
          </label>
        
        <div className="mb-4 gap-y-2 flex flex-col ">
            <h1 className="block text-gray-700 text-md font-bold mb-2">Sample Degassing Conditions</h1>
          <label
            htmlFor="specialPrecautions"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Temperature (in C)
            
          </label>
          <textarea
            id="specialPrecautions"
            value={prop.prop?.sampleTemperature}
            readOnly={true}
            rows="1"
            className="resize-none appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter temperature"
            disabled={true}
            required
          />

        <label
            htmlFor="specialPrecautions"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Rate (in C/min)
            
          </label>
          <textarea
            id="specialPrecautions"
            value={prop.prop?.sampleRate}
            readOnly={true}
            rows="1"
            className="resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Rate"
            required
          />

            <label
            htmlFor="specialPrecautions"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Soak Time (in min)
            
            
          </label>
          <textarea
            id="specialPrecautions"
            value={prop.prop?.sampleSoakTime}
            readOnly={true}
            rows="1"
            className="resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Soak Time"
            required
          />

        <label
            htmlFor="specialPrecautions"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
             Preliminary characterization carried out on the sample submitted with brief
                description of results:
            
            
          </label>
          <textarea
            id="specialPrecautions"
            value={prop.prop?.sampleDesc}
            readOnly={true}
            rows="4"
            className="resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter desc "
            required
          />
        </div>
        <div className="mb-4 mt-4">
          <label htmlFor="structureMaterial" className="block text-gray-700 text-sm font-bold mb-2">
            Any Remarks/ additional requests?
          </label>
          <input
            type="text"
            id="structureMaterial"
            value={prop.prop?.remark}
            // onChange={(e) => SETitem(e, setremark, 'remark')}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter starting material and solvent Information"
            required
          />
        </div>

      </form>
    </div>
  );
};

export default BET;
