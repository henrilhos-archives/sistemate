import Head from "next/head";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Layout } from "~/components/layout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useState } from "react";
import { api } from "~/utils/api";
import { TRPCError } from "@trpc/server";
import { type NextPage } from "next";

export const NewClientSchema = z.object({
  nome: z.string(),
  cpf: z.string(),
  rg: z.string(),
  telefone: z.string(),
  nome_da_mae: z.string(),
  nome_do_pai: z.string(),
  endereco_residencial: z.string(),
  numero_residencia: z.string(),
  complemento: z.string(),
  bairro: z.string(),
  cep: z.string(),
  facebook: z.string(),
  instagram: z.string(),
  outras_redes_sociais: z.string(),
});

type NewClient = z.infer<typeof NewClientSchema>;

const NewClientPage: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewClient>({
    resolver: zodResolver(NewClientSchema),
  });

  const { mutateAsync: createClient } = api.clients.create.useMutation();

  const onSubmit = useCallback(
    async (data: NewClient) => {
      setLoading(true);
      // Converta o telefone para número aqui
      try {
        await createClient(data);
        // Limpar o formulário ou outras ações após o sucesso
        setLoading(false);
      } catch (err) {
        if (err instanceof TRPCError) {
          const message = err.message ?? "";
          // Tratar erros específicos se necessário, exibindo mensagens na interface
          console.error(message);
        } else {
          console.error(err); // Lidar com outros tipos de erros
        }
        setLoading(false);
      }
    },
    [createClient],
  );
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
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onSubmit={handleSubmit(onSubmit)}
              className="mx-auto flex max-w-xl flex-col gap-2 px-4 px-8 py-6 "
            >
              <div className="grid grid-cols-3 gap-x-8 gap-y-6 sm:grid-cols-3">
                <div>
                  <label
                    htmlFor="nome"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    {errors.nome && (
                      <p className="text-red-500">{errors.nome.message}</p>
                    )}
                  </label>
                  <div className="grid-row-3 mt-2.5">
                    <input
                      id="nome"
                      placeholder="Nome completo"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                      {...register("nome")}
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
                      {...register("cpf")}
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
                      {...register("rg")}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="telefone"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  ></label>
                  <div className="mt-2.5">
                    <input
                      type="number"
                      id="telefone"
                      placeholder="Telefone"
                      {...register("telefone")}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="nome_da_mae"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  ></label>
                  <div className="mt-2.5">
                    <input
                      id="nome_da_mae"
                      placeholder="Nome da Mãe"
                      {...register("nome_da_mae")}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="nome_do_pai"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  ></label>
                  <div className="mt-2.5">
                    <input
                      id="nome_do_pai"
                      placeholder="Nome do Pai"
                      {...register("nome_do_pai")}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="endereco_residencial"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  ></label>
                  <div className="mt-2.5">
                    <input
                      id="endereco_residencial"
                      placeholder="Endereço Residencial"
                      {...register("endereco_residencial")}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="numero_residencia"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  ></label>
                  <div className="mt-2.5">
                    <input
                      type="number"
                      id="numero_residencia"
                      placeholder="Número da Residência"
                      {...register("numero_residencia")}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="complemento"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  ></label>
                  <div className="mt-2.5">
                    <input
                      id="complemento"
                      placeholder="Complemento"
                      {...register("complemento")}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="bairro"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  ></label>
                  <div className="mt-2.5">
                    <input
                      id="bairro"
                      placeholder="Bairro"
                      {...register("bairro")}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="cep"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  ></label>
                  <div className="mt-2.5">
                    <input
                      id="cep"
                      placeholder="CEP"
                      {...register("cep")}
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
              {/* Exibir erros de validação do formulário */}
              {Object.values(errors).map((err, index) => (
                <p key={index} className="text-red-500">
                  {err?.message}
                </p>
              ))}
              {errors.nome && (
                <p className="text-red-500">
                  Erro no campo Nome: {errors.nome.message}
                </p>
              )}
              {errors.telefone && (
                <p className="text-red-500">
                  Erro no campo Telefone: {errors.telefone.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NewClientPage;
