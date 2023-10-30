import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { api } from "~/utils/api";
import { ptBR } from "@clerk/localizations";
import "~/styles/globals.css";

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
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
