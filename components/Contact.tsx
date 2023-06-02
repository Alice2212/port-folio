export const Contacts = () => {
  return (
    <>
      <div className=" bg-slate-300" id="contact">
        <section className="bg-slate-300">
          <div className="m-auto lg:grid lg:min-h-screen lg:grid-cols-12">
            <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
              <img
                alt="Night"
                src="https://t3.ftcdn.net/jpg/01/66/20/20/360_F_166202087_NCjcwcu1EwOKZKbMNyEFXGiYDiwGGkkU.jpg"
                className="absolute inset-0 h-full w-full object-cover opacity-10"
              />

              <div className="hidden lg:relative lg:block lg:p-12">
                <h2 className="mt-[20%] text-9xl font-bold text-white sm:text-3xl md:text-6xl">
                  Get in Touch
                </h2>

                <p className="mt-4 leading-relaxed text-white/90 ">
                  Have a project? I would love to hear
                </p>
              </div>
            </section>

            <main
              aria-label="Main"
              className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
            >
              <div className="max-w-xl lg:max-w-3xl">
                <div className="relative -mt-16 block lg:hidden">
                  <h1 className="mt-2 text-4xl font-bold text-white sm:text-3xl md:text-4xl">
                    Get in Touch
                  </h1>

                  <p className="mt-4 leading-relaxed text-gray-500 lg:visible invisible">
                    Have a project? I would love to hear
                  </p>
                </div>

                <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <span className="text-sm text-gray-700 ">
                      Got a project you would like me to work on? I will love to
                      hear from you
                    </span>
                  </div>
                  <div className="col-span-6 ">
                    <label
                      htmlFor="Name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>

                    <input
                      type="name"
                      id="Name"
                      name="name"
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2.5 focus:outline-violet-500"
                    />
                  </div>

                  <div className="col-span-6 ">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>

                    <input
                      type="email"
                      id="Email"
                      name="email"
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2.5 focus:outline-violet-500"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>

                    <textarea
                      rows={6}
                      id="message"
                      name="message"
                      className="mt-1 w-full p-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm resize-none focus:outline-violet-500"
                    ></textarea>
                  </div>

                  <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button className="inline-block shrink-0 rounded-md border border-violet-600 bg-violet-600 px-12 py-3 text-[16px] font-medium text-white transition hover:bg-transparent hover:text-gray-700 focus:outline-none focus:ring  active:text-blue-500">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </main>
          </div>
        </section>
      </div>
    </>
  );
};
