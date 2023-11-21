// Importe o roteador de clientes
import { createTRPCRouter } from "~/server/api/trpc";
import { clientRouter } from "./routers/cliente";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    clients: clientRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
