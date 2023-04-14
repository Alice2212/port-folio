import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap bg-slate-100 p-3 sticky top-0 border-b border-violet-600">
        <Link href="/" passHref>
          <a href="" className="inline-flex items-center p-2 mr-4 ">
            <span className="text-xl text-slate-700 font-bold uppercase tracking-wide">
              Alice Oyekale
            </span>
          </a>
        </Link>

        {/* hamburger icon  */}
        <button
          className=" inline-flex p-3 hover:bg-violet-600 rounded lg:hidden text-slate-700 ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          {active ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        <div
          className={`${
            active ? "" : "hidden"
          } w-full lg:inline-flex lg:flex-grow lg:w-auto `}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto font-Poppins">
            <Link href="/" passHref>
              <a
                href=" "
                className="lg:inline-flex lg:w-auto w-full px-4 py-2 rounded text-slate-700 font-light  items-center justify-center hover:text-white  hover:-translate-y-1 hover:scale-110 hover:bg-violet-600 duration-300"
              >
                Home
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-4 py-2 rounded text-slate-700 font-light  items-center justify-center hover:text-white  hover:-translate-y-1 hover:scale-110 hover:bg-violet-600 duration-300">
                About
              </a>
            </Link>
            <Link href="/" passHref>
              <a
                href=" "
                className="lg:inline-flex lg:w-auto w-full px-4 py-2 rounded text-slate-700 font-light  items-center justify-center hover:text-white  hover:-translate-y-1 hover:scale-110 hover:bg-violet-600 duration-300"
              >
                Skill
              </a>
            </Link>
            <Link href="/" passHref>
              <a
                href=" "
                className="lg:inline-flex lg:w-auto w-full px-4 py-2 rounded text-slate-700 font-light items-center justify-center hover:text-white  hover:-translate-y-1 hover:scale-110 hover:bg-violet-600 duration-300"
              >
                Project
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
