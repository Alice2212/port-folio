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
                    width="24"
                    height="24"
                    className="text-gray-50"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/Alice2212"
                  target="_blank"
                  className="h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer"
                >
                  <svg
                    width="24"
                    height="24"
                    className="text-gray-50"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="https:linkedin.com/in/oyekalealice"
                  target="_blank"
                  className="h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer"
                >
                  <svg
                    width="24"
                    height="24"
                    className="text-gray-50"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
                      fill="currentColor"
                    />
                    <path
                      d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                      fill="currentColor"
                    />
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
                rows="4"
                name="message"
                className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-violet-60 resize-none"
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
