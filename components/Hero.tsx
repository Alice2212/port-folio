import Image from "next/image";
import Link from "next/link";
import { BsTwitter, BsGithub, BsLinkedin, BsDownload } from "react-icons/bs";

export const Hero = () => {
  return (
    <section className="bg-primary text-white pt-32 pb-3 px-5">
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
            className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
          >
            <a
              href="https://drive.google.com/file/d/1YblmMDW4tZs6tKt_V1DVDPaaOYvwmEe3/view?usp=share_link"
              target="_blank"
            >
              Download CV
            </a>
          </button>
        </div>

        <div className="hero-img">
          <Image
            src={"/images/alice.jpg"}
            width={400}
            height={400}
            alt="coding illustration"
            className=" lg:ml-auto ml-0 mx-auto rounded-full lg:mr-3"
          />
        </div>
      </div>
    </section>
  );
};
