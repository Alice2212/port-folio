import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <header className="navbar text-white fixed w-full z-10 ">
      <nav className="flex items-center flex-wrap p-3  top-0  w-[85%] m-auto cursor-pointer">
        <Link href="/" passHref className="inline-flex items-center p-2 mr-4 ">
          <Image
            src={"/images/logo-1.png"}
            alt="coding illustration"
            className="text-white"
            width={100}
            height={100}
          />
          {/* <span className="text-xl  font-bold uppercase tracking-wide">AO</span> */}
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
              fill="white"
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
              stroke="white"
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
            <Link href="" passHref>
              <span className="nav-item lg:inline-flex lg:w-auto w-full px-6 py-2 rounded font-light  items-center justify-center hover:text-white  hover:-translate-y-1 hover:scale-110 duration-300">
                Home
              </span>
            </Link>
            <Link href="/#about">
              <span className="nav-item lg:inline-flex lg:w-auto w-full px-6 py-2 rounded font-light  items-center justify-center hover:text-white  hover:-translate-y-1 hover:scale-110 duration-300">
                About
              </span>
            </Link>
            <Link href="/#skill" passHref>
              <span className="nav-item lg:inline-flex lg:w-auto w-full px-6 py-2 rounded font-light  items-center justify-center hover:text-white  hover:-translate-y-1 hover:scale-110 duration-300">
                Skill
              </span>
            </Link>
            <Link href="/#project" passHref>
              <span className="nav-item lg:inline-flex lg:w-auto w-full px-6 py-2 rounded font-light items-center justify-center hover:text-white  hover:-translate-y-1 hover:scale-110  duration-300">
                Project
              </span>
            </Link>
            <Link href="/#contact" passHref>
              <span className="nav-item lg:inline-flex lg:w-auto w-full px-6 py-2 rounded  font-light items-center justify-center hover:text-white  hover:-translate-y-1 hover:scale-110  duration-300">
                Contact
              </span>
            </Link>
          </div>
       
        </div>
      </nav>
    </header>
  );
};
