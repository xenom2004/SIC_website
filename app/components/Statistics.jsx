import React, { useRef } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Statistics = () => {
  const sectionRef = useRef();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px',
  });

  return (
    <div
      ref={sectionRef}
      className="bg-cover bg-center  flex items-center justify-center mt-32"
      style={{
        backgroundImage: `url('https://sic.iiti.ac.in/wp-content/uploads/2022/08/cropped-Home-1-Copy.jpg')`,
      }}
    >
      <div ref={ref} className="bg-gray-900   w-full h-[35vh] bg-opacity-50 p-8 rounded-lg flex  items-center">
        <div className="grid w-full grid-cols-3">
          <div className="text-center text-white">
            <div className="text-5xl font-bold mb-2">
              <CountUp start={inView ? 0 : null} end={10000} duration={2} separator="," />+
            </div>
            <div className="text-xl">STUDENTS</div>
          </div>
          <div className="text-center text-white mx-8">
            <div className="text-5xl font-bold mb-2">
              <CountUp start={inView ? 0 : null} end={600} duration={2} />+
            </div>
            <div className="text-xl">FACULTY</div>
          </div>
          <div className="text-center text-white">
            <div className="text-5xl font-bold mb-2">
              <CountUp start={inView ? 0 : null} end={700} duration={2} />+
            </div>
            <div className="text-xl">STAFF</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;