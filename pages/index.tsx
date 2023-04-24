import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alice Oyekale</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <Header />
      <Hero />
    </div>
  );
}
