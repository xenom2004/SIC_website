import React from "react";

const Page = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl text-lightSky font-bold  mb-8">
        Our Collaborators
      </h2>
      <div className="grid grid-cols-2 gap-8">
        {/* First Column */}
        <div>
          {/* Academic Institutions */}
          <div className="flex flex-col space-y-4 bg-gray-100 p-4">
            <h3 className="text-xl font-semibold text-gray-700">
              Academic Institutions
            </h3>
            <ul className="list-disc pl-4">
              <li>BARC, Mumbai</li>
              <li>Banaras Hindu University</li>
              <li>Delhi University</li>
              <li>Guru Nanak Dev University Punjab</li>
              <li>IIT Bombay</li>
              <li>IIT Madras</li>
              <li>IIT Mandi</li>
              <li>IIT Patna</li>
              <li>IIT Gandhinagar</li>
              <li>GITAM University</li>
              <li>Jammu University</li>
              <li>MS University Baroda</li>
              <li>NIPER Mohali</li>
              <li>NIT Rourkela and others</li>
              <li>Institute of Himalayan Bio resource Technology (IHBT)</li>
              <li>Pune University</li>
              <li>Pinnacle Biomedical Research Institute (PBRI)</li>
              <li>Devi Ahilya Vishwavidyalaya</li>
              <li>
                Shri Govindram Seksaria Institute of Technology and Science
              </li>
              <li>NMU Jalgaon</li>
              <li>RD University Jabalpur</li>
              <li>Central University Sagar</li>
              <li>
                Guru Ghasidas Vishwavidyalaya Central University, Bilaspur
              </li>
              <li>SRM University</li>
              <li>University College Trivandrum</li>
            </ul>
          </div>
        </div>

        {/* Second Column */}
        <div className="grid grid-rows-2 gap-8">
          {/* Industries */}
          <div className="flex flex-col space-y-4 bg-gray-100 p-4">
            <h3 className="text-xl font-semibold text-gray-700">Industries</h3>
            <ul className="list-disc pl-4">
              <li>Gharda Chemicals</li>
              <li>Glenmark Pharmaceuticals</li>
              <li>Piramal Healthcare Mumbai</li>
              <li>Lupin Pharmaceutical Pvt. Ltd.</li>
              <li>Mimani Wires Pvt. Ltd.</li>
              <li>Choksi Labs Ltd.</li>
              <li>UV Resins Pvt. Ltd.</li>
              <li>Impress Chemicals Pvt. Ltd.</li>
            </ul>
          </div>

          {/* International */}
          <div className="flex flex-col space-y-4 bg-gray-100 p-4">
            <h3 className="text-xl font-semibold text-gray-700">
              International
            </h3>
            <ul className="list-disc pl-4">
              <li>Universität Stuttgart, Germany</li>
              <li>Jehangirnagar University, Bangladesh</li>
              <li>Dhaka University, Bangladesh</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
