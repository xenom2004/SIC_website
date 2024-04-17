export default function Page() {
  return (
    <div className="bg-gray-100 text-gray-800 font-body">
      <div className="container mx-auto py-6 px-4 md:px-8">
        <h1 className="text-3xl font-bold text-center text-blue-700">
          About SIC
        </h1>
      </div>

      <main className="container mx-auto my-12 px-4 md:px-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            The Sophisticated Instrumentation Center (SIC)
          </h2>
          <p className="text-lg">
            The Sophisticated Instrumentation Center (SIC) was established in
            September 2011 with institute funding to expedite the research
            program at IIT Indore. SIC has now emerged as one of the first such
            centers in the country, providing extensive analytical instrument
            support to the users of the research fraternity across the country.
            A major advantage of SIC is its accessibility to the students within
            the institute as well as to other institutes and industries. A very
            healthy ratio of students to the time availability on instruments
            and the quick analysis of external samples makes it a very useful
            facility.
          </p>
        </section>
        <section className="mb-12 flex flex-col md:flex-row items-center">
          <section className="mb-12 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 pr-8">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">
                Our Mission
              </h2>
              <p className="text-lg mb-0">
                Providing data recording facilities and expertise in different
                state-of-the-art instruments, all under one section to
                facilitate high-quality data analysis to academia and
                industries.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://cdn-icons-png.freepik.com/512/1628/1628615.png"
                alt="Mission Statement"
                className="rounded-lg w-60"
              />
            </div>
          </section>

          <section className="mb-12 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 pr-8">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">
                Our Vision
              </h2>
              <p className="text-lg mb-0">
                To be amongst the top analytical instrument laboratories in the
                world in terms of cost, efficiency, and range of services.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-8 flex justify-center">
              <img
                src="https://cdn-icons-png.freepik.com/512/5419/5419089.png"
                alt="Vision Statement"
                className="rounded-lg w-60 md:w-auto"
              />
            </div>
          </section>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            SIC's Mission and Goals
          </h2>
          <ul className="list-disc pl-6 text-lg">
            <li>
              To support and foster the research enterprise in all branches of
              science and engineering at the Indian Institute of Technology
              Indore (IITI).
            </li>
            <li>
              To foster growth and competitiveness of the local industries by
              providing services in the identified gaps to make Indian
              industrial products as per global standards.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Research Areas
          </h2>
          <ul className="list-disc pl-6 text-lg">
            <li>
              Fundamental Research in Inorganic Chemistry, Organic Chemistry,
              Organometallic Chemistry
            </li>
            <li>Various aspects of Material Science</li>
            <li>Bio-Science and Engineering, including work on biosensors</li>
            <li>Surface Science and Engineering</li>
            <li>Condensed Matter Physics</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            SIC's Functions
          </h2>
          <ul className="list-disc pl-6 text-lg">
            <li>
              SIC has been operating with 32 instruments funded by the institute
              exclusively and recording data for all departments of the
              institute.
            </li>
            <li>
              SIC is continuously supporting academic programs including Ph.D.,
              Masters & Bachelor of technology. students by giving hands-on
              training with the instruments by providing them the opportunity to
              analyze their own samples.
            </li>
            <li>
              SIC so far supported various projects funded by external agencies
              total valued above INR 48.0 crores.
            </li>
            <li>
              The center has been supporting various industrial organizations
              across India to develop their bestselling products using SIC
              sample testing facility.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            SIC's Progress and Evolution
          </h2>
          <ul className="list-disc pl-6 text-lg">
            <li>
              In the year 2011, the facility started functioning in our
              2-satellite temporary campuses viz., IET & PACL campus with a
              total of 18 instruments.
            </li>
            <li>
              Since 2013, 8 more high-end instruments were added to facilitate
              the research at IITI.
            </li>
            <li>
              In 2014, the facility was shifted to the permanent campus at
              Simrol and became an integral part of IITI.
            </li>
            <li>
              With the gradual addition of more instruments, the facility is now
              working with a total 35 instruments and planning to expand this
              number in the near future.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
