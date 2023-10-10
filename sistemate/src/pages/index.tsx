import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FooterDefault } from "~/components/footer";

import { api } from "~/utils/api";

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
            <AuthShowcase />
          </div>
        </div>
      </main>
      <FooterDefault />
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded bg-black px-10 py-3 font-semibold text-white no-underline transition hover:bg-black/80"
        onClick={() => {
          window.location.href = "/home";
        }}
      >
        {sessionData ? "Sair" : "Entrar"}
      </button>
    </div>
  );
}
