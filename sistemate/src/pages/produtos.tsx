import Head from "next/head";
import { FooterDefault } from "~/components/footer";

import { Navbar } from "~/components/navbar";

export default function Produtos() {
  return (
    <>
      <Head>
        <title>Produtos</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/sistemate_favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-[#FFF8F3]"></main>
      <FooterDefault />
    </>
  );
}
