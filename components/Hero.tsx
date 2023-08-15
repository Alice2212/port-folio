import Image from "next/image";
import Link from "next/link";
import { BsTwitter, BsGithub, BsLinkedin, BsDownload } from "react-icons/bs";

export const Hero = () => {
  return (
    <section className="home text-black pt-12">
      <div className="container mx-auto flex flex-wrap items-center  justify-center md:justify-between">
        <div className="hero-info md:pb-0 lg:max-w-[32rem] lg:text-left text-center order-2 lg:order-1">
          <h1 className="text-4xl lg:text-5xl ">
            Hi, I&apos;m <span className="text-violet-600">Alice </span>
            <br/>
            <span className="text-2xl"> Frontend Developer </span>
          </h1>

          <p className="py-2">
            A Frontend Software Engineer, structuring and building the
            client-side websites and Web Applications
          </p>

          <div className="flex py-4 justify-center lg:justify-start ">
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
            // className="inline-block shrink-0 rounded-md border border-white bg-white px-12 py-3 text-xl font-medium text-violet-600 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-purple-600"
            className="inline-block shrink-0 rounded-md border border-violet-600 bg-white px-12 py-3 text-xl font-medium text-violet-600 transition hover:bg-violet-600 hover:text-white focus:outline-none focus:ring active:text-purple-600"
          >
            <a
              href="https://drive.google.com/file/d/1DPLPLJhHoNMgbssxPTJLfKjW72fJblMP/view?usp=sharing"
              target="_blank"
            >
              <span className="inline-flex justify-between items-center">
                Download CV <BsDownload className="mx-4" />
              </span>
            </a>
          </button>
        </div>

        <div className="hero-img order-1 lg:order-2 lg:pb-0 pb-12">
          <Image
            src={"/images/alice.jpg"}
            width={300}
            height={300}
            alt="coding illustration"
            className=" lg:ml-auto ml-0 mx-auto rounded-full lg:mr-3"
          />
        </div>
      </div>
    </section>
  );
};
