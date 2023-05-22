import "dotenv/config";

import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import fastify from "fastify";
import { authRoutes } from "./routes/auth";
import { memoriesRoutes } from "./routes/memories";

const app = fastify();

app.register(cors, { origin: true });
app.register(jwt, {
  secret: "uysdfvgdsyifbdelsifhuofhuweihfuiwhr9y2893re7329u",
});
app.register(memoriesRoutes);
app.register(authRoutes);

app.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
  console.log("🚀 Server is running on http://localhost:3333");
});
