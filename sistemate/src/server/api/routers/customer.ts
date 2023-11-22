import { NewCustomerSchema } from "~/pages/clientes/novo";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";

const findCustomer = ({ cpf, rg }: { cpf: string; rg: string }) =>
  db.customer.findFirst({
    where: {
      OR: [
        { cpf: { equals: cpf, mode: "insensitive" } },
        { rg: { equals: rg, mode: "insensitive" } },
      ],
    },
  });

export const customerRouter = createTRPCRouter({
  create: publicProcedure
    .input(NewCustomerSchema)
    .mutation(async ({ ctx, input }) => {
      const exists = await findCustomer({ cpf: input.cpf, rg: input.rg });

      if (exists) {
        return { message: "Cliente já cadastrado" };
      }

      const customer = await ctx.db.customer.create({ data: input });

      return { message: "Cliente cadastrado com sucesso", data: customer };
    }),
});
