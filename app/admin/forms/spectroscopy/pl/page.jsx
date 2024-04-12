const id=11;

const PLForm = (prop) => {


  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="mx-auto text-3xl font-bold mb-4">Photo-luminescence (Field Emission Scanning Electron Microscope) Form</h2>
      <form  className="max-w-md mx-auto">
      <div className="mb-4">
          <label htmlFor="natureOfSample" className="block text-gray-700 text-sm font-bold mb-2">
            Nature of Sample
          </label>
          <textarea
            id="natureOfSample"
            value={prop.prop?.natureOfSample}
            readOnly={true}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Kindly intimate if toxic"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="noOfSamples" className="block text-gray-700 text-sm font-bold mb-2">
            No of Sample
          </label>
          <textarea
            id="noOfSamples"
            value={prop.prop?.noOfSamples}
            readOnly={true}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="No of sample"
            required
          />
        </div>        


        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2">Conductivity</p>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              value="Conductive"
              checked={prop.prop?.isConductive}
              readOnly={true}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Conductive</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              value="nonconductive"
              checked={prop.prop?.nonconductive}
              readOnly={true}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Non-conductive</span>
          </label>
        </div>

        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2">Description of requirement</p>

          <label className="inline-flex items-center">
            <input
              type="checkbox"
              value="SEM"
              checked={prop.prop?.SEM}
              readOnly={true}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">SEM</span>
          </label>
          <label className="inline-flex items-center ml-2">
            <input
              type="checkbox"
              value="EDM"
              checked={prop.prop?.EDM}
              readOnly={true}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">EDM</span>
          </label>
          <label className="inline-flex items-center ml-2">
            <input
              type="checkbox"
              value="WDX"
              checked={prop.prop?.WDX}
              readOnly={true}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">WDX</span>
          </label>
        </div>

        <div className="mb-4">
          <label htmlFor="natureOfSample" className="block text-gray-700 text-sm font-bold mb-2">
            EDX/WDX Expected elements
          </label>
          <textarea
            id="expectedElements"
            value={prop.prop?.expectedElements}
            readOnly={true}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter..."
            required
          />
        </div>
        
        
        
      </form>
    </div>
  );
};

export default PLForm;
