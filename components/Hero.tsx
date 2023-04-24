import Image from "next/image";
import Link from "next/link";
import { BsTwitter, BsGithub, BsLinkedin, BsDownload } from "react-icons/bs";

export const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I am <span className="text-accent">Alice </span>
            <br />
            Frontend Developer
          </h1>

          <p className="py-5">
            I am proficient in JavaScript, React.js and Tailwind CSS
          </p>

          <div className="flex py-5 justify-between max-w-[20%] ">
            <Link href="">
              <a
                href="https://twitter.com/AliceOyekale"
                target="_blank"
                className="h-10 w-10 rounded-full hover:bg-violet-500 flex items-center justify-center cursor-pointer"
              >
                <BsTwitter />
              </a>
            </Link>

            {/* github */}
            <Link href="">
              <a
                href="https://github.com/Alice2212"
                target="_blank"
                className="h-10 w-10 rounded-full hover:bg-violet-500 flex items-center justify-center cursor-pointer"
              >
                <BsGithub />
              </a>
            </Link>

            {/* github */}
            <Link href="">
              <a
                href="https:linkedin.com/in/oyekalealice"
                target="_blank"
                className="h-10 w-10 rounded-full hover:bg-violet-500 flex items-center justify-center cursor-pointer"
              >
                <BsLinkedin />
              </a>
            </Link>
          </div>

          <a
            href="https://drive.google.com/file/d/1YblmMDW4tZs6tKt_V1DVDPaaOYvwmEe3/view?usp=share_link"
            target="_blank"
            className="flex max-w-[40%] btn bg-accent  border-2 border-violet text-white px-6 py-3 hover:bg-transparent"
          >
            <BsDownload  className="mr-4 mt-1"/> Download CV
          </a>
        </div>

        <div className="hero-img">
          <Image
            src={"/images/alice.jpg"}
            width={400}
            height={400}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};
