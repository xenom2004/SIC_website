const id=8;

const FTIRForm = (prop) => {


console.log(prop.prop,"lo")
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Additional Analysis Request Form
      </h2>
      <form className="max-w-md mx-auto">
        <div className="grid grid-cols-2 gap-8">
          <div className="mb-4">
            <label
              for="solubility"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Solubility
            </label>
            <textarea
              id="solubility"
              value={prop.prop?.solubility}
              readOnly={true}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Specify solvent"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              for="hazards"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Hazards
            </label>
            <textarea
              id="hazards"
              value={prop.prop?.hazards}
              readOnly={true}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter hazard information..."
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              for="calibrationConcentration"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Calibration Concentration
            </label>
            <textarea
              id="calibrationConcentration"
              value={prop.prop?.calibrationConcentration}
              readOnly={true}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Calibration Concentration..."
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              for="molecularFormula"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Molecular Formula
            </label>
            <textarea
              id="molecularFormula"
              value={prop.prop?.molecularFormula}
              readOnly={true}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Molecular Formula..."
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              for="molecularWeight"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Molecular Weight
            </label>
            <textarea
              id="molecularWeight"
              value={prop.prop?.molecularWeight}
              readOnly={true}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Molecular Weight..."
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              for="excitationWavelength"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Excitation Wavelength
            </label>
            <textarea
              id="excitationWavelength"
              value={prop.prop?.excitationWavelength}
              readOnly={true}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Excitation Wavelength..."
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              for="rangeOfScan"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Range Of Scan
            </label>
            <textarea
              id="rangeOfScan"
              value={prop.prop?.rangeOfScan}
              readOnly={true}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter range of scan..."
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              for="specialRequest"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Special Request
            </label>
            <textarea
              id="specialRequest"
              value={prop.prop?.specialRequest}
              readOnly={true}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter special request..."
            ></textarea>
          </div>
        </div>

        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2">
            Request Analysis
          </p>
          <label className="inline-flex items-center">
  <input
    type="checkbox"
    value="Solid"
    checked={prop.prop?.solid}
    readOnly={true}
    className="form-checkbox h-5 w-5 text-gray-600"
  />
  <span className="ml-2">Solid (KBr Pallet)</span>
</label>

<label className="inline-flex items-center ml-6">
  <input
    type="checkbox"
    value="Liquid"
    checked={prop.prop?.liquid}
    readOnly={true}
    className="form-checkbox h-5 w-5 text-gray-600"
  />
  <span className="ml-2">Liquid (Liquid Cells)</span>
</label>

<label className="inline-flex items-center ml-6">
  <input
    type="checkbox"
    value="ATR"
    checked={prop.prop?.ATR}
    readOnly={true}
    className="form-checkbox h-5 w-5 text-gray-600"
  />
  <span className="ml-2">ATR</span>
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

export default FTIRForm;
