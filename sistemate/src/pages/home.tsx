import { Card } from "flowbite-react";
import Head from "next/head";
import { FooterDefault } from "~/components/footer";
import { Navbar } from "~/components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/sistemate_favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-white">
        <Navbar />
        <div className="m-auto flex items-center justify-center">
          <div className="m-5 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="row-span-3 h-auto max-w-full">
              <Card className=" mx-auto h-full w-full" href="/clientes">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>Cadastro de Ficha de Consumo</p>
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Cadastre uma ficha dos produtos que o cliente irá consumir.
                </p>
              </Card>
            </div>
            <div className="col-span-2 h-auto max-w-full">
              <Card className="mx-auto w-full" href="/clientes">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>Consulta de Clientes</p>
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Consulte os clientes cadastrados no sistema.
                </p>
              </Card>
            </div>
            <div className="row-span-2 h-auto max-w-full">
              <Card className="mx-auto h-full w-full" href="/Produtos">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>Gerencie os Produtos</p>
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Altere os produtos que são utilizados pela loja.
                </p>
              </Card>
            </div>
            <div className="h-auto max-w-full">
              <Card className="mx-auto w-full" href="/clientes">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>Cadastro de Clientes</p>
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Cadastre novos clientes que irão utilizar a ficha como forma
                  de pagamento posterior.
                </p>
              </Card>
            </div>
            <div className="h-auto max-w-full">
              <Card className="mx-auto w-full" href="/relatorios">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>Relatórios</p>
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Clique para saber as informações úteis para o gerenciamento da
                  loja.
                </p>
              </Card>
            </div>
          </div>
        </div>
        <div className="mt-auto">
          <FooterDefault />
        </div>
      </main>
    </>
  );
}
