import React from "react";
import Image from "next/image";
import ht from "../public/images/pr1.png";
import { BsGithub, BsEye } from "react-icons/bs";

const Project = () => {
  return (
    <section
      className="
     text-black lg:pt-[60px] pt-0 min-h-[100vh]"
      id="project"
    >
      <div className="container mx-auto ">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[150px] border-violet-600 pb-2 text-center lg:text-left ">
          Projects
        </h2>

        <div
          data-aos="fade-up"
          className=" flex flex-col justify-center items-center"
        >
          <div className="flex  flex-col sm:grid sm:grid-cols-3 gap-6">
            <div className="relative icon-card">
              <Image
                src={ht}
                alt="furniture"
                className="w-[400px] h-[200px]"
                width={200}
                height={200}
              />
              <span className="absolute bg-[#ffffff] top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 ease-in-out text-gray-600 hover:opacity-80 flex flex-col items-center justify-center gap-4">
                <h1 className="text-[26px]">Weather</h1>
                <h1 className="text-[#a456b9]">React.JS/Tailwind Css</h1>
                <a
                  href="https://emwesto-website.vercel.app/"
                  target="_blank"
                  rel={"noreferrer"}
                  className="border-2 border-solid border-[#a456b9] px-6 p4-2 hover:bg-[#a456b9] hover:text-[#ffffff]"
                >
                  See More
                </a>
              </span>
            </div>
            <div className="relative">
              <Image
                src={ht}
                alt="furniture"
                className="w-[400px] h-[200px]"
                width={200}
                height={200}
              />
              <span className="absolute bg-[#ffffff] top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 ease-in-out text-gray-600 hover:opacity-80 flex flex-col items-center justify-center gap-4">
                <h1 className="text-[26px]">Weather</h1>
                <h1 className="text-[#a456b9]">React.JS/Tailwind Css</h1>
                <a
                  href="https://emwesto-website.vercel.app/"
                  target="_blank"
                  rel={"noreferrer"}
                  className="border-2 border-solid border-[#a456b9] px-6 p4-2 hover:bg-[#a456b9] hover:text-[#ffffff]"
                >
                  See More
                </a>
              </span>
            </div>
            <div className="icon-card">
              <div className="relative ">
                <Image
                  src={ht}
                  alt="furniture"
                  className="w-[400px] h-[200px]"
                  width={200}
                  height={200}
                />
                <span className="absolute bg-[#9b9696] top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 ease-in-out text-gray-600 hover:opacity-80 flex flex-col items-center justify-center gap-4">
                  <a
                    href=" "
                    target="_blank"
                    rel={"noreferrer"}
                    className=" px-8 p4-2  hover:text-[#ffffff]"
                  >
                    <BsGithub size={34} className="py-2" />
                    <BsGithub size={34} className="py-2" />
                  </a>
                </span>
              </div>
              <div className="text-center">
                <h1 className="text-[26px]">Weather</h1>
                <h1 className="text-[#a456b9]">React.JS/Tailwind Css</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
