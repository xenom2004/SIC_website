import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">About Us</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-8 mb-8">
          <img
            src="https://cdn.pixabay.com/photo/2017/02/16/10/20/target-2070972_640.png" // Replace with your actual image source
            alt="About Us"
            className="rounded-lg shadow-md"
            style={{ width: '100%', maxWidth: '400px', height: 'auto' }} // Adjust image size here
          />
        </div>
        <div className="md:w-1/2 md:pl-8 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in velit nec sem ultricies
            vestibulum non sit amet est. Sed auctor nulla nec nibh mattis, in consequat elit tristique.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700 mb-4">
            Sed auctor nulla nec nibh mattis, in consequat elit tristique. Mauris malesuada nunc a odio
            efficitur, ut efficitur orci lobortis. Ut pulvinar odio velit, a cursus magna fermentum vel.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Integrity</li>
            <li>Innovation</li>
            <li>Customer Satisfaction</li>
            <li>Teamwork</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
