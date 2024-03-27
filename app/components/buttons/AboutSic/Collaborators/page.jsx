const page = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Our Collaborators
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-gray-700">
            Academic Institutions
          </h3>
          <ul className="list-disc pl-4">
            <li>Item 1</li>
            <li>BARC, Mumbai</li>
            <li>Banaras Hindu University</li>
            <li>Delhi University</li>
            <li>Guru Nanak Dev University Punjab</li>
            <li>IIT Bombay</li>
            {/* Truncated list for brevity */}
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-gray-700">Industries</h3>
          <ul className="list-disc pl-4">
            <li>Gharda Chemicals</li>
            <li>Glenmark Pharmaceuticals</li>
            <li>Piramal Healthcare Mumbai</li>
            <li>Lupin Pharmaceutical Pvt. Ltd.</li>
            <li>Mimani Wires Pvt. Ltd.</li>
            {/* Truncated list for brevity */}
          </ul>
          <h3 className="text-xl font-semibold text-gray-700 mt-4">
            International
          </h3>
          <ul className="list-disc pl-4">
            <li>Universität Stuttgart, Germany</li>
            <li>Jehangirnagar University, Bangladesh</li>
            <li>Dhaka University, Bangladesh</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default page;
