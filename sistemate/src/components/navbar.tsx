import { Navbar as FlowNavbar } from "flowbite-react";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <FlowNavbar fluid={true} rounded={true}>
      <FlowNavbar.Brand href="/home">
        <img
          src="images/sistemate_navbar.png"
          className="mr-4 h-8 sm:h-12"
          alt="Sistemate Logo"
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
