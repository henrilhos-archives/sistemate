import { ptBR } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";
import { type AppType } from "next/app";
import Head from "next/head";
import "~/styles/globals.css";
import { api } from "~/utils/api";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider
      localization={ptBR}
      appearance={{ elements: { footer: "hidden" } }}
      {...pageProps}
    >
      <Head>
        <title>Sistemate</title>
      </Head>

      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
