import { SignIn, SignInButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/router";
import { FooterDefault } from "~/components/footer";

export default function Page() {
  const { user } = useUser();
  const router = useRouter();

  if (user) {
    void router.push("/home");
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-cream">
        <div className="container flex flex-col items-center justify-center gap-12 bg-cream px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
            <Image
              src="/images/sistemate2.svg"
              alt="Sistemate"
              width={800}
              height={500}
            />
          </h1>
          <div className="flex flex-col items-center gap-2">
            <div className="mb-2 mr-2 rounded-lg bg-gray-800 px-6 py-3 text-base font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
              <SignInButton>Entrar</SignInButton>
            </div>

            <SignIn signUpUrl="/sign-up" path="/sign-up" routing="path" />
          </div>
        </div>
      </main>
      <FooterDefault />
    </>
  );
}
