import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Head from "next/head";
// import { Contacts } from "@/components/Contact";
import About from "@/components/About";
import { Skill } from "@/components/Skills";
import Project from "@/components/Project";
import { Contacts } from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alice Oyekale</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contacts />
      <Footer />
    </div>
  );
}
