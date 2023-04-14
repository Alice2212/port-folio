import Head from "next/head";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { SiHashnode } from 'react-icons/si'

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
          <Link href="https://github.com/Alice2212" passHref>
            <a href="https://github.com/Alice2212" target="_blank">
              <SiHashnode />
            </a>
          </Link>
        </div>

        {/* Introduction */}
        
      </section>
    </div>
  );
}
