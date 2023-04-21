import { AiOutlineMail } from "react-icons/ai";

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
              <div className="inline-flex flex-col my-20">
                <div className="flex flex-row item-center space-x-6 rounded-md border border-[#e5e6f5] hover:border hover:border-blue-500 p-4">
                  <p className="text-gray-50 font-light text-md ">
                    <AiOutlineMail />{" "}
                    <a href="hezealice@gmail.com">hezealice@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form className="form rounded-lg bg-white p-4 flex flex-col">
            <label htmlFor="name" className="text-sm text-gray-600 mx-4">
              
              Your Name
            </label>
            <input
              type="text"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="name"
            />
          </form>
        </div>
      </div>
    </section>
  );
}
