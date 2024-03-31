import React, { useRef, useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Statistics = () => {
  const sectionRef = useRef();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-cover bg-bottom flex items-center justify-center mt-32 relative"
      style={{
        backgroundImage: `url('https://sic.iiti.ac.in/wp-content/uploads/2022/08/cropped-Home-1-Copy.jpg')`,
        backgroundPosition: `50% ${window.innerHeight + scrollPosition * 0.5}px`, // Updated backgroundPosition calculation
        
      }}
    >
      <div
        ref={ref}
        className="bg-gray-900 w-full h-[43vh] bg-opacity-50 p-8 rounded-lg flex items-center"
      >
        <div className="grid w-full grid-cols-3">
          <div className="text-center text-white">
            <div className="text-5xl font-bold mb-2">
              <CountUp start={inView ? 0 : null} end={100} duration={4} separator="," />+
            </div>
            <div className="text-xl">USER</div>
          </div>
          <div className="text-center text-white mx-8">
            <div className="text-5xl font-bold mb-2">
              <CountUp start={inView ? 0 : null} end={60} duration={4} />+
            </div>
            <div className="text-xl">FACULTY</div>
          </div>
          <div className="text-center text-white">
            <div className="text-5xl font-bold mb-2">
              <CountUp start={inView ? 0 : null} end={70} duration={4} />+
            </div>
            <div className="text-xl">STUDENTS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;