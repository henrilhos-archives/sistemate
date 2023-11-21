import type { db as prismaDB } from "~/server/db";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { NewClientSchema } from "~/pages/clientes/novo";
import { TRPCError } from "@trpc/server";

const findClientByCpfOrRg = (
  cpf: string,
  rg: string,
  db: typeof prismaDB,
) => db.cliente.findFirst({
  where: {
    OR: [
      {
        cpf: { equals: cpf, mode: "insensitive" },
      },
      { rg: { equals: rg, mode: "insensitive" } },
    ]
  }
});

export const clientRouter = createTRPCRouter({
  create: protectedProcedure
    .meta({ description: "Create a new client" })
    .input(NewClientSchema)
    .mutation(async ({ ctx, input }) => {
      const exists = await findClientByCpfOrRg(input.cpf, input.rg, ctx.db);

      if (exists) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "Esse Cliente já foi cadastrado",
        });
      }

      const newClient = await ctx.db.cliente.create({
        data: NewClientSchema.parse(input),
      });
      
      return newClient;
      }
    )
});