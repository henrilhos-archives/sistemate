import { Card } from "flowbite-react";
import { Layout } from "~/components/layout";

export default function Page() {
  return (
    <Layout>
      <div className="m-auto flex items-center justify-center">
        <div className="m-5 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="row-span-3 h-auto max-w-full">
            <Card
              className="shadow-[#FFFCFA]-500/40 mx-auto w-full bg-[#FFFCFA] hover:bg-[#E3D6C9]/50 md:h-full"
              href="/fichas/novo"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>Cadastro de Ficha de Consumo</p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Cadastre uma ficha dos produtos que o cliente irá consumir.
              </p>
            </Card>
          </div>
          <div className="h-auto max-w-full md:col-span-2">
            <Card
              className="shadow-[#FFFCFA]-500/40 mx-auto w-full bg-[#FFFCFA] hover:bg-[#E3D6C9]/50"
              href="/clientes"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>Consulta de Clientes</p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Consulte os clientes cadastrados no sistema.
              </p>
            </Card>
          </div>
          <div className="row-span-2 h-auto max-w-full">
            <Card
              className=" shadow-[#FFFCFA]-500/40 mx-auto h-full w-full bg-[#FFFCFA] hover:bg-[#E3D6C9]/50"
              href="/Produtos"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>Gerencie os Produtos</p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Altere os produtos que são utilizados pela loja.
              </p>
            </Card>
          </div>
          <div className="h-auto max-w-full">
            <Card
              className="shadow-[#FFFCFA]-500/40 mx-auto w-full bg-[#FFFCFA] hover:bg-[#E3D6C9]/50"
              href="/clientes/novo"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>Cadastro de Clientes</p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Cadastre novos clientes que irão utilizar a ficha como forma de
                pagamento posterior.
              </p>
            </Card>
          </div>
          <div className="h-auto max-w-full">
            <Card
              className="shadow-[#FFFCFA]-500/40 mx-auto w-full bg-[#FFFCFA] hover:bg-[#E3D6C9]/50"
              href="/relatorios"
            >
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
    </Layout>
  );
}
