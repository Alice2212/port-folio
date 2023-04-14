import Head from "next/head";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { BsTwitter, BsGithub, BsLinkedin, BsDownload } from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alice Oyekale</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      {/* home */}
      <section className="">
        {/* socials */}
        <div className="socials">
          {/* twitter link */}
          <Link href="https://twitter.com/AliceOyekale" passHref>
            <a href="https://twitter.com/AliceOyekale" target="_blank">
              <BsTwitter />
            </a>
          </Link>

          {/* github */}
          <Link href="https://github.com/Alice2212" passHref>
            <a href="https://github.com/Alice2212" target="_blank">
              <BsGithub />
            </a>
          </Link>

          {/* github */}
          <Link href="www.linkedin.com/in/oyekalealice" passHref>
            <a href="www.linkedin.com/in/oyekalealice" target="_blank">
              <BsLinkedin />
            </a>
          </Link>
        </div>

        {/* Introduction */}
        <div className="content">
          <h1>Frontend Software Engineer</h1>
          <h3>
            Hi, I'm <span className="text-rose-700">Alice</span>
          </h3>
          <a
            href="https://drive.google.com/file/d/1YblmMDW4tZs6tKt_V1DVDPaaOYvwmEe3/view?usp=share_link"
            className="btn btn-primary"
          >
            Download Resume <BsDownload />
          </a>
        </div>

        {/* div class circle */}
        <div className="profile-area">
          <div className="outer-circle">
            <span className="material-icons-sharp">design_services</span>
            <span className="material-icons-sharp">code</span>
            <span className="material-icons-sharp">code_off</span>
            <span className="material-icons-sharp">design_services</span>
          </div>
          <div className="inner-circle">
            <Image src="/../images/alice.jpg" alt="" width={500} height={500} />
          </div>
        </div>
      </section>
    </div>
  );
}
