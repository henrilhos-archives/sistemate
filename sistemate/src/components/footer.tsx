import { Footer } from "flowbite-react";

export const FooterDefault = () => {
  return (
    <Footer container>
      <Footer.Copyright by="Sistemate™" href="/" year={2022} />
      <Footer.LinkGroup>
        <Footer.Link href="#">Sobre</Footer.Link>
        <Footer.Link href="#">Política de Privacidade</Footer.Link>
        <Footer.Link href="#">Licenciamento</Footer.Link>
        <Footer.Link href="#">Contato</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
};
