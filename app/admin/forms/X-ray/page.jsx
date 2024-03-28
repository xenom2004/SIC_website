const id=1;

const SingleCrystalXRayForm = (prop) => {

  return (
    <div className="container mx-auto px-4 py-8 ">
      <h2 className="text-3xl font-bold mb-4  max-w-md mx-auto">
        Single Crystal X-ray Diffraction Facility Form
      </h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
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
            value={prop.prop.crystalInfo}
            readOnly={true}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter crystal information..."
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="color"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Color
          </label>
          <input
            type="text"
            id="color"
            value={prop.prop.color}
            readOnly={true}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter crystal color..."
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="temperature"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Temperature
          </label>
          <input
            type="text"
            id="temperature"
            value={prop.prop.temperature}
            readOnly={true}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter temperature..."
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
              checked={prop.prop.stability.includes("stable")}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Stable</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              value="air-sensitive"
              checked={prop.prop.stability.includes("air-sensitive")}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Air-Sensitive</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              value="moisture-sensitive"
              checked={prop.prop.stability.includes("moisture-sensitive")}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Moisture-Sensitive</span>
          </label>
        </div>
        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2">
            Other Techniques Used for Characterization
          </p>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              value="IR"
              checked={prop.prop.otherTechniques.includes("IR")}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">IR</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              value="NMR"
              checked={prop.prop.otherTechniques.includes("NMR")}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">NMR</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              value="Mass Spectrum"
              checked={prop.prop.otherTechniques.includes("Mass Spectrum")}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Mass Spectrum</span>
          </label>
          <div className="mb-4 mt-4">
            <label
              htmlFor="crystalInfo"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Starting Materials and Solvent Information
            </label>
            <input
              type="text"
              id="crystalInfo"
              value={prop.prop.structureMaterial}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter starting material and solvent Information"
              required
            />
          </div>
        </div>
        <div className="flex items-center justify-center mt-6">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SingleCrystalXRayForm;
