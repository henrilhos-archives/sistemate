import { SignIn } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import Head from "next/head";
import Image from "next/image";

import { FooterDefault } from "~/components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sistemate</title>
        <meta name="description" content="Sistemate" />
        <link rel="icon" href="/sistemate_favicon.ico" />
      </Head>
      <main className="bg-gray flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 bg-white px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
            <Image
              src="/images/sistemate2.png" // Caminho para a imagem dentro da pasta "public"
              alt="logo"
              width={800} // Largura da imagem
              height={500} // Altura da imagem
            />
          </h1>
          <div className="flex flex-col items-center gap-2">
            <div>
              <SignInButton />
            </div>
            <SignIn signUpUrl="/sign-up" path="/sign-up" routing="path" />
          </div>
        </div>
      </main>
      <FooterDefault />
    </>
  );
}
