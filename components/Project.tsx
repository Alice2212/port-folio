import React from "react";
import Image from "next/image";
import adviceImg from "../public/images/advice.png";
import edusiteImg from "../public/images/edusite.png";
import hotel from "../public/images/hotel.png";
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
          className=" flex flex-col justify-center items-center mx-auto"
        >
          <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-1 gap-8 mx-auto">
             {/* card 1 */}
             <div className="icon-card w-full mx-auto grow">
              <div className="relative flex items-center justify-center">
                <Image
                  src={hotel}
                  alt="random advice"
                  className="pb-6"
                  width={600}
                  height={400}
                />
                {/* <span className="absolute bg-[#9e9c9c] top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 ease-in-out text-gray-600 hover:opacity-80 flex flex-col items-center justify-center gap-4"></span> */}
              </div>
              <div className="text-center">
                <p className="text-[14px] py-2">
                  A responsive hotel landing page built with html, css
                </p>
                <div className=" flex flex-wrap justify-center items-center text-center gap-y-2  gap-5 lg:gap-2 mx-auto">
                  <span className="border-2 border-solid border-[#a456b9] px-6 p4-2 hover:bg-[#a456b9] hover:text-[#ffffff]  cursor-pointer">
                    <a
                      href="https://hotel-website-alice2212.vercel.app/"
                      target="_blank"
                    >
                      live Demo
                    </a>
                  </span>
                  <span className="border-2 border-solid border-[#a456b9] px-6 p4-2 hover:bg-[#a456b9] hover:text-[#ffffff] cursor-pointer">
                    <a
                      href="https://github.com/Alice2212/hotel-website"
                      target="_blank"
                    >
                      Github
                    </a>
                  </span>
                </div>
              </div>
            </div>
            {/* card 2 */}

            <div className="icon-card w-full mx-auto grow">
              <div className="relative flex items-center justify-center">
                <Image
                  src={edusiteImg}
                  alt="education landing page"
                  className="pb-6"
                  width={600}
                  height={400}
                />
              </div>
              <div className="text-center">
                <p className="text-[14px] py-2">
                  Edusite ia a responsive education landing page built with
                  react and tailwind
                </p>
                <div className=" flex flex-wrap justify-center items-center text-center gap-y-2  gap-5 lg:gap-2 mx-auto">
                  <span className="border-2 border-solid border-[#a456b9] px-6 p4-2 hover:bg-[#a456b9] hover:text-[#ffffff]  cursor-pointer">
                    <a href="https://edusite-alice.vercel.app/" target="_blank">
                      live Demo
                    </a>
                  </span>
                  <span className="border-2 border-solid border-[#a456b9] px-6 p4-2 hover:bg-[#a456b9] hover:text-[#ffffff] cursor-pointer">
                    <a
                      href="https://github.com/Alice2212/edusite.git"
                      target="_blank"
                    >
                      Github
                    </a>
                  </span>
                </div>
              </div>
            </div>

            {/* card 3 */}
            <div className="icon-card w-full mx-auto grow">
              <div className="relative flex items-center justify-center">
                <Image
                  src={adviceImg}
                  alt="random advice"
                  className="pb-6"
                  width={600}
                  height={400}
                />
              </div>
              <div className="text-center">
                <p className="text-[14px] py-2">
                  A responsive app that generate random quotes of advice built
                  with HTML5, CSS, Javascript and an API
                </p>
                <div className=" flex flex-wrap justify-center items-center text-center gap-y-2  gap-5 lg:gap-2 mx-auto">
                  <span className="border-2 border-solid border-[#a456b9] px-6 p4-2 hover:bg-[#a456b9] hover:text-[#ffffff]  cursor-pointer">
                    <a
                      href="https://generate-advice-application.netlify.app/"
                      target="_blank"
                    >
                      live Demo
                    </a>
                  </span>
                  <span className="border-2 border-solid border-[#a456b9] px-6 p4-2 hover:bg-[#a456b9] hover:text-[#ffffff] cursor-pointer">
                    <a
                      href="https://github.com/Alice2212/Advice-generator-app.git"
                      target="_blank"
                    >
                      Github
                    </a>
                  </span>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
