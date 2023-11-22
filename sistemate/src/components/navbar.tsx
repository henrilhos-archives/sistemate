import { Navbar as FlowNavbar } from "flowbite-react";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

const links = [
  { path: "/home", name: "Home" },
  { path: "/fichas", name: "Cadastro de Fichas" },
  { path: "/clientes", name: "Clientes" },
  { path: "/produtos", name: "Produtos" },
  { path: "/relatorios", name: "Relatórios" },
];

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <FlowNavbar
      className="sticky left-0 top-0 w-full bg-cream"
      fluid={true}
      rounded={true}
    >
      <FlowNavbar.Brand href="/home">
        <Image
          src="/images/sistemate_nopadding.svg"
          className="mr-3 h-6 sm:h-12"
          alt="Sistemate Logo"
          width={140}
          height={30}
          priority={true}
        />

        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
      </FlowNavbar.Brand>
      <FlowNavbar.Toggle className="text-black" />
      <FlowNavbar.Collapse>
        <div className="flex flex-row items-center justify-center space-x-7 text-lg">
          {links.map(({ path, name }) => (
            <FlowNavbar.Link key={path} href={path} active={pathname === path}>
              {name}
            </FlowNavbar.Link>
          ))}
        </div>
        <UserButton afterSignOutUrl="/" />
      </FlowNavbar.Collapse>
    </FlowNavbar>
  );
};
