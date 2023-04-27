import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Head from "next/head";
import { Contacts } from "@/components/Contact";
import About from "@/components/About";

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
      <Footer />
    </div>
  );
}
