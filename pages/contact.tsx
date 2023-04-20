export default function Contact() {
  return (
    <section>
      <div className="max-w-6xl mx-auto h-48 bg-white ">
        <h1
          className="text-5xl md:text-9xl font-bold py-20 text-cen
                md:text-left"
        >
          Contact
        </h1>
      </div>

      <div>
        <div className="relative z-10 rounded-md shadow-md bg-violet-600 p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="">
              <header className="">
                <h1 className="text-gray-50 font-semibold text-2xl">
                  Get in touch, let's talk
                </h1>
              </header>
            {/* contact info */}
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
