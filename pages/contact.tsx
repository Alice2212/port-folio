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
              {/* socials section */}
              <div className="social-icons flex flex-row space-x-8">
                <a
                  href="https://twitter.com/AliceOyekale"
                  target="_blank"
                  className="h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    className="text-gray-50"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.5 8.778c-.441.196-.916.328-1.414.388.509-.305.898-.787 1.083-1.362-.476.282-1.003.487-1.564.597-.448-.479-1.089-.778-1.796-.778-1.59 0-2.758 1.483-2.399 3.023-2.045-.103-3.86-1.083-5.074-2.572-.645 1.106-.334 2.554.762 3.287-.403-.013-.782-.124-1.114-.308-.027 1.14.791 2.207 1.975 2.445-.346.094-.726.116-1.112.042.313.978 1.224 1.689 2.3 1.709-1.037.812-2.34 1.175-3.647 1.021 1.09.699 2.383 1.106 3.773 1.106 4.572 0 7.154-3.861 6.998-7.324.482-.346.899-.78 1.229-1.274z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/Alice2212"
                  target="_blank"
                  className="h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    className="text-gray-50"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" />
                  </svg>
                </a>
                <a
                  href="https:linkedin.com/in/oyekalealice"
                  target="_blank"
                  className="h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    className="text-gray-50"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" />
                  </svg>
                </a>
              </div>
            </div>

            <form className="form rounded-lg bg-white p-4 flex flex-col">
              <label htmlFor="name" className="text-sm text-gray-600 mx-4">
                Your Name
              </label>
              <input
                type="text"
                className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-violet-600"
                name="name"
              />

              <label
                htmlFor="email"
                className="text-sm text-grey-600 mx-4 mt-4"
              >
                Email
              </label>
              <input
                type="text"
                className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-violet-600"
              />

              <label
                htmlFor="message"
                className="text-sm text=grey-600 mx-4 mt-4"
              >
                Message
              </label>
              <textarea
                
                name="message"
                className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-violet-600 resize-none"
              ></textarea>
              <button
                type="submit"
                className="bg-violet-600 rounded-md w-1/2 mx-4 mt-8 py-4 text-gray-50 text-md font-bold self-center"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
