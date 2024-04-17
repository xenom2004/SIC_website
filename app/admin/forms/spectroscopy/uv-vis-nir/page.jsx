const id=13;
const UVVISNIRForm =(prop)=>{

return (
    <div className="container mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold mb-4 text-center">UV-VIS-NIR Request Form</h2>
    <form  className="max-w-md mx-auto">
      <div className="mb-4">
        <label for="noOfSamples" className="block text-gray-700 text-sm font-bold mb-2">Solubility</label>
        <textarea 
          id="noOfSamples" 
          value={prop.prop?.noOfSamples}
          readOnly={true}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          placeholder="No of Samples" 
          required
        ></textarea>
      </div>

      <div className="mb-4">
        <label for="wavelengthRange" className="block text-gray-700 text-sm font-bold mb-2">Wavelength Range</label>
        <textarea 
          id="wavelengthRange" 
          value={prop.prop?.wavelengthRange}
          readOnly={true}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          placeholder="min 200nm to max 3300nm" 
          required
        ></textarea>
      </div>

      <div className="mb-4">
        <label for="specialExperiment" className="block text-gray-700 text-sm font-bold mb-2">Special Experiment</label>
        <textarea 
          id="specialExperiment" 
          value={prop.prop?.specialExperiment}
          readOnly={true}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          placeholder="if any" 
          required
        ></textarea>
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
        {/* sample code ??? */}

      </form>
    </div>
);
};

export default UVVISNIRForm;