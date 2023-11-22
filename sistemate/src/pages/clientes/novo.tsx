import { zodResolver } from "@hookform/resolvers/zod";
import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Layout } from "~/components/layout";
import { api } from "~/utils/api";

export const NewCustomerSchema = z.object({
  name: z.string(),
  cpf: z.string(),
  rg: z.string(),
  phone: z.string(),
  motherName: z.string().optional(),
  fatherName: z.string().optional(),
  address: z.string(),
  addressNumber: z.string(),
  addressComplement: z.string().optional(),
  neighborhood: z.string(),
  zipCode: z.string(),
});

type NewClient = z.infer<typeof NewCustomerSchema>;

const NewClientPage: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm<NewClient>({
    resolver: zodResolver(NewCustomerSchema),
  });

  const { mutateAsync: createCustomer } = api.customer.create.useMutation();

  const onSubmit = form.handleSubmit(async (data) => {
    setLoading(true);

    try {
      await createCustomer(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  });

  return (
    <>
      <Head>
        <title>Sistemate - Novo Cliente</title>
      </Head>
      <Layout>
        <div className="mx-auto flex min-h-screen flex-col pt-10">
          <div className="bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <div className="flex items-center justify-center pt-2 text-2xl">
              Cadastro de Cliente
            </div>
            <form
              onSubmit={onSubmit}
              className="mx-auto flex max-w-xl flex-col gap-2 px-4 py-6 "
            >
              <div className="grid grid-cols-3 gap-x-8 gap-y-6 sm:grid-cols-3">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    {form.formState.errors.name && (
                      <p className="text-red-500">
                        {form.formState.errors.name.message}
                      </p>
                    )}
                  </label>
                  <div className="grid-row-3 mt-2.5">
                    <input
                      id="name"
                      placeholder="Nome completo"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                      {...form.register("name")}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="cpf"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  ></label>
                  <div className="mt-2.5">
                    <input
                      id="cpf"
                      placeholder="CPF"
                      {...form.register("cpf")}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="rg"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  ></label>
                  <div className="mt-2.5">
                    <input
                      id="rg"
                      placeholder="RG"
                      {...form.register("rg")}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  ></label>
                  <div className="mt-2.5">
                    <input
                      type="number"
                      id="phone"
                      placeholder="Telefone"
                      {...form.register("phone")}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="motherName"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  ></label>
                  <div className="mt-2.5">
                    <input
                      id="motherName"
                      placeholder="Nome da Mãe"
                      {...form.register("motherName")}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="fatherName"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  ></label>
                  <div className="mt-2.5">
                    <input
                      id="fatherName"
                      placeholder="Nome do Pai"
                      {...form.register("fatherName")}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  ></label>
                  <div className="mt-2.5">
                    <input
                      id="address"
                      placeholder="Endereço Residencial"
                      {...form.register("address")}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="addressNumber"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  ></label>
                  <div className="mt-2.5">
                    <input
                      type="number"
                      id="addressNumber"
                      placeholder="Número da Residência"
                      {...form.register("addressNumber")}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="addressComplement"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  ></label>
                  <div className="mt-2.5">
                    <input
                      id="addressComplement"
                      placeholder="Complemento"
                      {...form.register("addressComplement")}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="neighborhood"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  ></label>
                  <div className="mt-2.5">
                    <input
                      id="neighborhood"
                      placeholder="Bairro"
                      {...form.register("neighborhood")}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="zipCode"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  ></label>
                  <div className="mt-2.5">
                    <input
                      id="zipCode"
                      placeholder="CEP"
                      {...form.register("zipCode")}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center pt-5">
                <button type="submit" disabled={loading}>
                  {loading ? "Criando..." : "Criar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NewClientPage;
