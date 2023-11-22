import type { NextApiRequest, NextApiResponse } from "next";
import { renderTrpcPanel } from "trpc-panel";
import { env } from "~/env";
import { appRouter } from "~/server/api/root";
import { getBaseUrl } from "~/utils/api";

const handler = (_: NextApiRequest, res: NextApiResponse) => {
  if (env.NODE_ENV !== "development") {
    res
      .status(403)
      .send({ message: "Playground available only in development mode" });
  }

  res.status(200).send(
    renderTrpcPanel(appRouter, {
      url: `${getBaseUrl()}/api/trpc`,
      transformer: "superjson",
    }),
  );
};
export default handler;
