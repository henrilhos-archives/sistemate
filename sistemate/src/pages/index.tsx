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
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#FFF8F3]">
        <div className="container flex flex-col items-center justify-center gap-12 bg-[#FFF8F3] px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
            <Image
              src="/images/sistemate2.svg" // Caminho para a imagem dentro da pasta "public"
              alt="logo"
              width={800} // Largura da imagem
              height={500} // Altura da imagem
            />
          </h1>
          <div className="flex flex-col items-center gap-2">
            <button
              type="button"
              className="mb-2 mr-2 rounded-lg bg-gray-800 px-6 py-3 text-base font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <SignInButton>Entrar</SignInButton>
            </button>
            <SignIn signUpUrl="/sign-up" path="/sign-up" routing="path" />
          </div>
        </div>
      </main>
      <FooterDefault />
    </>
  );
}
