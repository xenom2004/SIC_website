
const id=20;
const HPLCForm = (prop) => {
  // console.log(prop,"hellooooo")
 


  

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 text-center">HPLC Analysis Request Form</h2>
      <form  className="max-w-md mx-auto">
        <div className="grid grid-cols-2 gap-8">
          <div className="mb-4">
            <label for="solubility" className="block text-gray-700 text-sm font-bold mb-2">Solubility</label>
            <textarea 
              id="solubility" 
              value={prop.prop?.solubility}
              readOnly={true}
              // onChange={(e) => SETitem(e,setSolubility,"solubility")}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Describe solubility..." 
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label for="numberOfComponents" className="block text-gray-700 text-sm font-bold mb-2">No. of Components</label>
            <input 
              type="number" 
              id="numberOfComponents" 
              value={prop.prop?.numberOfComponents}
              readOnly={true}
              // onChange={(e) => SETitem(e,setNumberOfComponents,"numberOfComponents")}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Enter number of components..." 
              required
            />
          </div>

          <div className="mb-4">
            <label for="hazards" className="block text-gray-700 text-sm font-bold mb-2">Hazards</label>
            <textarea 
              id="hazards" 
              value={prop.prop?.hazards}
              readOnly={true}
              // onChange={(e) => SETitem(e,setHazards,"hazards")}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Enter hazard information..." 
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label for="absorptionWavelength" className="block text-gray-700 text-sm font-bold mb-2">Wavelength of Absorption</label>
            <input 
              type="text" 
              id="absorptionWavelength" 
              value={prop.prop?.absorptionWavelength}
              readOnly={true}
              // onChange={(e) => SETitem(e,setAbsorptionWavelength,"absorptionWavelength")}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Enter absorption wavelength..." 
              required
            />
          </div>

          <div className="mb-4">
            <label for="mobilePhase" className="block text-gray-700 text-sm font-bold mb-2">Mobile Phase</label>
            <textarea
              id="mobilePhase"
              value={prop.prop?.mobilePhase}
              readOnly={true}
              // onChange={(e) => SETitem(e,setMobilePhase,"mobilePhase")}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Describe mobile phase..." 
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label for="runTime" className="block text-gray-700 text-sm font-bold mb-2">Run Time</label>
            <input 
              type="text" 
              id="runTime" 
              value={prop.prop?.runTime}
              readOnly={true}
              // onChange={(e) => SETitem(e,setRunTime,"runTime")}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Enter run time..." 
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Isocratic or Gradient?</label>
            <div className="flex items-center">
              <input type="radio" id="isocratic" readOnly={true}  name="flowType" value="isocratic" checked={prop.prop?.flowType === 'isocratic'} className="form-radio h-5 w-5 text-gray-600" />
              <label htmlFor="isocratic" className="ml-2">Isocratic</label>
              <input type="radio" id="gradient" name="flowType" value="gradient" readOnly={true}  checked={prop.prop?.flowType === 'gradient'}  className="form-radio h-5 w-5 text-gray-600 ml-4" />
              <label htmlFor="gradient" className="ml-2">Gradient</label>
            </div>
          </div>

          <div className="mb-4">
            <label for="structures" className="block text-gray-700 text-sm font-bold mb-2">Structures</label>
            <textarea 
              id="structures" 
              value={prop.prop?.structures}
              readOnly={true}
              // onChange={(e) => SETitem(e,setStructures,"structures")}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Provide chemical structures..." 
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
        </div>
        
        
      </form>
    </div>
  );
};

export default HPLCForm; 
