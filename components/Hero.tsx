import Image from "next/image";
import Link from "next/link";
import { BsTwitter, BsGithub, BsLinkedin, BsDownload } from "react-icons/bs";

export const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center  justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0 lg:max-w-[32rem] lg:text-left text-center">
          <h1 className="text-4xl lg:text-6xl ">
            Hi, I'm <span className="text-violet-800">Alice </span>
            <br />
            <span className="text-2xl"> Frontend Developer </span>
          </h1>

          <p className="py-2">
            A Frontend Software Engineer, structuring and building the
            client-side websites and Web Applications
          </p>

          <div className="flex py-5 justify-center lg:justify-start">
            <Link href="">
              <a
                href="https://twitter.com/AliceOyekale"
                target="_blank"
                className="h-10 w-10 rounded-full hover:bg-violet-600 flex items-center justify-center cursor-pointer"
              >
                <BsTwitter />
              </a>
            </Link>

            {/* github */}
            <Link href="">
              <a
                href="https://github.com/Alice2212"
                target="_blank"
                className="h-10 w-10 rounded-full hover:bg-violet-600 flex items-center justify-center cursor-pointer"
              >
                <BsGithub />
              </a>
            </Link>

            {/* github */}
            <Link href="">
              <a
                href="https:linkedin.com/in/oyekalealice"
                target="_blank"
                className="h-10 w-10 rounded-full hover:bg-violet-600 flex items-center justify-center cursor-pointer"
              >
                <BsLinkedin />
              </a>
            </Link>
          </div>
          <button
            type="button"
            className="py-2.5 px-4 mr-2 mb-2 text-md font-medium text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200  focus:z-10 focus:ring-4 focus:ring-gray-200 hover:border-2 hover:bg-violet-600 hover:text-white w-[50%]"
          >
            <a
              href="https://drive.google.com/file/d/1YblmMDW4tZs6tKt_V1DVDPaaOYvwmEe3/view?usp=share_link"
              target="_blank"
            >
              Download CV 
              {/* <BsDownload size={20} className="mr-4 mt-1" /> */}
            </a>
          </button>

          {/* <a
            href="https://drive.google.com/file/d/1YblmMDW4tZs6tKt_V1DVDPaaOYvwmEe3/view?usp=share_link"
            target="_blank"
            className="flex lg:w-[40rem] justify-center lg:justify-start btn bg-violet-600  border-2 border-violet text-white px-6 py-3 hover:bg-transparent rounded-md"
          >
            <BsDownload className="mr-4 mt-1" /> Download CV
          </a> */}
        </div>

        <div className="hero-img">
          <Image
            src={"/images/alice.jpg"}
            width={400}
            height={400}
            alt="coding illustration"
            className="lgw-[80%] lg:ml-auto ml-0 mx-auto"
          />
        </div>
      </div>
    </section>
  );
};
