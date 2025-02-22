const id=9;

const ChemicalDataForm = (prop) => {


  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="mx-auto text-3xl font-bold mb-4 text-center">Time-Correlated Single Photon Counting (TCSPC)</h2>
      <form  className="max-w-md mx-auto">
      <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">
            Amount (mg)
          </label>
          <textarea
            id="amount"
            value={prop.prop?.amount}
            readOnly={true}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter amount..."
            required
          />
        </div>

        {/* Solubility Section */}
        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2">Solubility</p>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              value="D2O"
              checked={prop.prop?.D2O}
              readOnly={true}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">D2O</span>
          </label>
          {/* ... (Existing D2O checkbox) */}
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              value="CD3COCH3"
              checked={prop.prop?.CD3COCH3}
              readOnly={true}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">CD3COCH3</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              value="MeOD"
              checked={prop.prop?.MeOD}
              readOnly={true}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">MeOD</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              value="Other"
              checked={prop.prop?.Other}
              readOnly={true}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Other</span>
          </label>
        </div>


        <div className="mb-4">
          <label htmlFor="molecularFormula" className="block text-gray-700 text-sm font-bold mb-2">
            Molecular Formula
          </label>
          <textarea
            id="molecularFormula"
            value={prop.prop?.molecularFormula}
            readOnly={true}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter molecular formula..."
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="molecularStructure" className="block text-gray-700 text-sm font-bold mb-2">
            Molecular Structure
          </label>
          <textarea
            id="molecularStructure"
            value={prop.prop?.molecularStructure}
            readOnly={true}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter molecular structure..."
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

export default ChemicalDataForm;
