import { Navbar as FlowNavbar } from "flowbite-react";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <FlowNavbar fluid={true} rounded={true}>
      <FlowNavbar.Brand href="/home">
        <Image
          src="images/sistemate_navbar.svg"
          className="mr-3 h-6 sm:h-12"
          alt="Sistemate Logo"
          width={140}
          height={30}
        />

        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
      </FlowNavbar.Brand>
      <FlowNavbar.Toggle />
      <FlowNavbar.Collapse>
        <FlowNavbar.Link
          href="/home"
          active={pathname === "/home" ? true : false}
        >
          Home
        </FlowNavbar.Link>
        <FlowNavbar.Link
          href="/clientes"
          active={pathname === "/clientes" ? true : false}
        >
          Clientes
        </FlowNavbar.Link>
        <FlowNavbar.Link
          href="/produtos"
          active={pathname === "/produtos" ? true : false}
        >
          Produtos
        </FlowNavbar.Link>
        <FlowNavbar.Link
          href="/relatorios"
          active={pathname === "/relatorios" ? true : false}
        >
          Relatórios
        </FlowNavbar.Link>
        <UserButton afterSignOutUrl="/" />
      </FlowNavbar.Collapse>
    </FlowNavbar>
  );
};
