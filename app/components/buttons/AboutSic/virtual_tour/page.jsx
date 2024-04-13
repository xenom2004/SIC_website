const Page = () => {
  return (
    <div className="overflow-x-hidden mx-auto">
      <div className="h-12 text-2xl font-bold text-lightSky w-full flex justify-center items-center mt-16">
        Virtual Tour
      </div>
      <div className="mb-8 h-12 text-xl font-bold text-lightSky size-3 w-full flex justify-center items-center">
        A National Facility Indian Institute of Technology Indore
      </div>
      <div className="mx-4 md:mx-10 lg:mx-32 mb-12 lg:mb-36">
        <div className="relative" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/IDo-YS_Bq-w?si=ColSx1-n_tDKwv99"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Page;
