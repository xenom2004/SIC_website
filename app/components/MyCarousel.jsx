import React, { useState,useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MyCarousel = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Delay between slides in milliseconds
    centerMode: true, // Center the slides
    pauseOnHover: true, // Pause autoplay on hover
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Number of slides to show on smaller screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Number of slides to show on even smaller screens
        },
      },
    ],
  };

  const sliderRefValue = useRef(null);

  const handleMouseEnter = () => {
    if (sliderRefValue.current) {
      sliderRefValue.current.slickPause();
    }
  };

  const handleMouseLeave = () => {
    if (sliderRefValue.current) {
      sliderRefValue.current.slickPlay();
    }
  };

  return (
    <div className='flex justify-center'>
    <div 
    onMouseEnter={handleMouseEnter} 
    onMouseLeave={handleMouseLeave} 
    className="grid grid-cols-3 gap-4 sm:grid-cols-2 xs:grid-cols-1 border-2 border-gray-300 rounded-lg p-4">
    <Slider ref={setSliderRef} {...settings}>
    <div>
  <img src="/instruments/atomic_forces_microscropy(afm).png" alt="Image 1" className="h-48 object-contain" />
</div>
<div>
  <img src="/instruments/bet_surface_area_analyzer.png" alt="Image 2" className="h-48 object-contain" />
</div>
<div>
  <img src="/instruments/chns_elemental_analyser.png" alt="Image 3" className="h-48 object-contain" />
</div>
<div>
  <img src="/instruments/circular_dichroism_spectropolarimeter(cd).png" alt="Image 4" className="h-48 object-contain" />
</div>
<div>
  <img src="/instruments/confocal_microscropy.png" alt="Image 5" className="h-48 object-contain" />
</div>
<div>
  <img src="/instruments/Differential_scanning_calorimetry(DSC).png" alt="Image 6" className="h-48 object-contain" />
</div>
<div>
  <img src="/instruments/energy_dispersive_x-ray_spectroscopy.png" alt="Image 7" className="h-48 object-contain" />
</div>
<div>
  <img src="/instruments/Fourier_transform_infrared_spectrometer(ft-ir).png" alt="Image 8" className="h-48 object-contain" />
</div>
<div>
  <img src="/instruments/gas_chromatography-Mass_spectrometer(GC_MS).png" alt="Image 9" className="h-48 object-contain" />
</div>
<div>
  <img src="/instruments/high_performance_liquid_chromatography(hplc).png" alt="Image 10" className="h-48 object-contain" />
</div>
<div>
  <img src="/instruments/HR-MS.png" alt="Image 11" className="h-48 object-contain" />
</div>
<div>
  <img src="/instruments/lyophilizer.png" alt="Image 12" className="h-48 object-contain" />
</div>
<div>
  <img src="/instruments/microwave_reactor.png" alt="Image 13" className="h-48 object-contain" />
</div>
<div>
  <img src="/instruments/nuclear_magnetic_resonance(nmr)_500mhz.jpg" alt="Image 14" className="h-48 object-contain" />
</div>
<div>
  <img src="/instruments/Nuclear_magnetic_resonance(nmr)_400mhz.png" alt="Image 15" className="h-48 object-contain" />
</div>
<div>
  <img src="/instruments/Photo_luminescence(pl).png" alt="Image 16" className="h-48 object-contain" />
</div>
<div>
  <img src="/instruments/Power_X-ray_Diffraction.png" alt="Image 17" className="h-48 object-contain" />
</div>
<div>
  <img src="/instruments/scanning_electron_microscropy(FE-SEM).png" alt="Image 18" className="h-48 object-contain" />
</div>
<div>
  <img src="/instruments/scxrd.png" alt="Image 19" className="h-48 object-contain" />
</div>
<div>
  <img src="/instruments/spectroelectro_chemical_cell(sec).jpg" alt="Image 20" className="h-48 object-contain" />
</div>
<div>
  <img src="/instruments/spectrofluorometer.png" alt="Image 21" className="h-48 object-contain" />
</div>
<div>
  <img src="/instruments/thermogravimetric_analyer(tga).png" alt="Image 22" className="h-48 object-contain" />
</div>
<div>
  <img src="/instruments/Time-correlated_single_photon_counting(TCSPC).png" alt="Image 23" className="h-48 object-contain" />
</div>
<div>
  <img src="/instruments/total_internal_reflection_fluorescence_microscrope.png" alt="Image 24" className="h-48 object-contain" />
</div>
<div>
  <img src="/instruments/UV-Visble.png" alt="Image 25" className="h-48 object-contain" />
</div>
<div>
  <img src="/instruments/UVVISNIR.png" alt="Image 26" className="h-48 object-contain" />
</div>
<div>
  <img src="/instruments/Wavelength_dispersive_spectroscropy.jpg" alt="Image 27" className="h-48 object-contain" />
</div>
<div>
  <img src="/instruments/XANES.jpg" alt="Image 28" className="h-48 object-contain" />
</div>


      {/* Add more slides as needed */}
    </Slider>
    </div>
    </div>
  );
};

export default MyCarousel;