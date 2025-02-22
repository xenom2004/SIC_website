const id=18;

const FluorescenceMicroscopyForm = (prop) => {


  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Fluorescence Microscopy Request Form</h2>
      <form  className="max-w-md mx-auto">
        <div className="grid grid-cols-2 gap-8">
          <div className="mb-4">
            <label for="sampleType" className="block text-gray-700 text-sm font-bold mb-2">Sample Type</label>
            <input 
              type="text"
              id="sampleType" 
              value={prop.prop?.sampleType}
              readOnly={true}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Enter sample type..." 
              required
            />
          </div>

          <div className="mb-4">
            <label for="numberOfSamples" className="block text-gray-700 text-sm font-bold mb-2">Number of Samples</label>
            <input 
              type="number" 
              id="numberOfSamples" 
              value={prop.prop?.numberOfSamples}
              readOnly={true}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Enter number of samples..." 
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Visualized in Fluorescence Microscope?</label>
            <div className="flex items-center">
              <input type="radio" id="visualizedYes" name="visualized" value={true} checked={prop.prop?.visualized === true} readOnly={true} className="form-radio h-5 w-5 text-gray-600" />
              <label htmlFor="visualizedYes" className="ml-2">Yes</label>
              <input type="radio" id="visualizedNo" name="visualized" value={false} checked={prop.prop?.visualized === false} readOnly={true} className="form-radio h-5 w-5 text-gray-600 ml-4" />
              <label htmlFor="visualizedNo" className="ml-2">No</label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Antifade Reagent Used?</label>
            <div className="flex items-center">
              <input type="radio" id="antifadeYes" name="antifade" value={true} checked={prop.prop?.antifadeReagent === true} readOnly={true}
              className="form-radio h-5 w-5 text-gray-600" />
              <label htmlFor="antifadeYes" className="ml-2">Yes</label>
              <input type="radio" id="antifadeNo" name="antifade" value={false} checked={prop.prop?.antifadeReagent === false} readOnly={true}
              className="form-radio h-5 w-5 text-gray-600 ml-4" />
              <label htmlFor="antifadeNo" className="ml-2">No</label>
            </div>
          </div>

          <div className="mb-4">
            <label for="fluorochromes" className="block text-gray-700 text-sm font-bold mb-2">Fluorochrome(s)</label>
            <input
              type="text" 
              id="fluorochromes" 
              value={prop.prop?.fluorochromes}
              readOnly={true}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Enter fluorochromes..." 
              required
            />
          </div>

          <div className="mb-4">
            <label for="emissionWavelength" className="block text-gray-700 text-sm font-bold mb-2">Emission Wavelength</label>
            <input 
              type="text"
              id="emissionWavelength" 
              value={prop.prop?.emissionWavelength}
              readOnly={true}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Enter emission wavelength..." 
              required
            />
          </div>

          <div className="mb-4">
            <label for="excitationWavelength" className="block text-gray-700 text-sm font-bold mb-2">Excitation Wavelength</label>
            <input 
              type="text"
              id="excitationWavelength" 
              value={prop.prop?.excitationWavelength}
              readOnly={true}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Enter excitation wavelength..." 
              required
            />
          </div>

          <div className="mb-4">
            <label for="magnification" className="block text-gray-700 text-sm font-bold mb-2">Magnification</label>
            <input 
              type="text"
              id="magnification" 
              value={prop.prop?.magnification}
              readOnly={true}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Enter magnification..." 
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
        </div>

      </form>
    </div>
  );
};

export default FluorescenceMicroscopyForm; 
