import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { api } from "~/utils/api";
import { ptBR } from "@clerk/localizations";
import "~/styles/globals.css";
import Head from "next/head";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      localization={ptBR}
      {...pageProps}
      appearance={{
        elements: {
          footer: "hidden",
        },
      }}
    >
      <Head>
        <title>Sitemate</title>
        <link rel="icon" href="/sistemate_favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
