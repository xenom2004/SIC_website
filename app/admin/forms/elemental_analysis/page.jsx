const id=27;
const Elemental_analyser = (prop) => {



  return (
    <div className="container mx-auto px-4 py-8 ">
      <h2 className="text-3xl font-bold mb-4  max-w-md mx-auto">
        Single Crystal X-ray Diffraction Facility Form
      </h2>
      <form  className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="crystalInfo"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Crystal Information
          </label>
          <input
            type="text"
            id="crystalInfo"
            value={prop.prop?.crystalInfo}
            readOnly={true}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Crystal crystallized from ..."
            required
          />

        <label
            htmlFor="crystalInfo"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Crystal molecular weight
          </label>
          <input
            type="text"
            id="crystalInfo"
            value={prop.prop?.mw}
            readOnly={true}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="molecular weight"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="color"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Melting Point
          </label>
          <input
            type="text"
            id="color"
            value={prop.prop?.MP}
            readOnly={true}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter crystal melting point"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="temperature"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Boiling Point
          </label>

          <input
            type="text"
            id="temperature"
            value={prop.prop?.BP}
            readOnly={true}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter crystal boiling point"
            required
          />

            <label
            htmlFor="temperature"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Enter weight percent of Carbon,nitrogen,hydrogen and sulphur below.
          </label>
          <textarea
            type="text"
            id="temperature"
            value={prop.prop?.weight}
            rows="4"
            readOnly={true}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter weight percent of Carbon,nitrogen,hydrogen and sulphur"
            required
          />


           
        </div>
        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2">
            Stability
          </p>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              value="stable"
              checked={prop.prop?.stability}
             
              readOnly={true}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">light sensitive</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              value="air-sensitive"
            
              checked={prop.prop?.AS}
              readOnly={true}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Air-Sensitive</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              value="moisture-sensitive"
              checked={prop.prop?.MS}
             
              readOnly={true}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Moisture-Sensitive</span>
          </label>
          
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

export default Elemental_analyser;
