import Head from "next/head";
import { FooterDefault } from "~/components/footer";

import { Navbar } from "~/components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/sistemate_favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-white"></main>
      <FooterDefault />
    </>
  );
}
