import { type PropsWithChildren } from "react";
import { FooterDefault } from "./footer";
import { Navbar } from "./navbar";

export const Layout = (props: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-cream">
        {props.children}
      </main>
      <FooterDefault />
    </>
  );
};
