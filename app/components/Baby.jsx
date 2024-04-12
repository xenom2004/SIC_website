export default function Baby() {
  return (
    <>
      <div className="flex flex-col gap-y-4">
        <div className="mb-32 md:mb-24 lg:mb-24 xl:mb-24">
          <Header />
        </div>
        <div className="" style={{ minHeight: "825px" }}>
          {children}
        </div>
        <div className="mt-0">
          <Footer />
        </div>
      </div>
    </>
  );
}
