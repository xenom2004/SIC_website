import React, { useState,useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MyCarousel = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1000, // Delay between slides in milliseconds
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
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <Slider ref={setSliderRef} {...settings}>
      <div>
        <img src="/Tred-G.svg.png" alt="Image 1" />
      </div>
      <div>
        <img src="/Rectangle 70.png" alt="Image 2" />
      </div>
      <div>
        <img src="/untitled.png" alt="Image 3" />
      </div>
      <div>
        <img src="/1.jpg" alt="Image 2" />
      </div>

      {/* Add more slides as needed */}
    </Slider>
    </div>
  );
};

export default MyCarousel;