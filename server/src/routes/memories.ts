import { FastifyInstance } from "fastify";
import z from "zod";
import { Prisma } from "../lib/prisma";

export async function memoriesRoutes(app: FastifyInstance) {
  app.get("/memories", async (request, reply) => {
    const memories = await Prisma.memory.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    return memories.map((memory) => {
      return {
        id: memory.id,
        coverUrl: memory.coverUrl,
        excerpt: memory.content.substring(0, 115).concat("..."),
      };
    });
  });

  app.get("/memories/:id", async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(request.params);

    const memory = await Prisma.memory.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return memory;
  });

  app.post("/memories", async (request, reply) => {
    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string().url(),
      isPublic: z.coerce.boolean().default(false),
    });

    const { content, coverUrl, isPublic } = bodySchema.parse(request.body);

    const memory = await Prisma.memory.create({
      data: {
        content,
        coverUrl,
        isPublic,
        userId: "39791ca9-d9ca-4e92-87ca-8569929705cb",
      },
    });

    return memory;
  });

  app.put("/memories/:id", async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(request.params);

    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string().url(),
      isPublic: z.coerce.boolean().default(false),
    });

    const { content, coverUrl, isPublic } = bodySchema.parse(request.body);

    const memory = await Prisma.memory.update({
      where: {
        id,
      },
      data: {
        content,
        coverUrl,
        isPublic,
        userId: "39791ca9-d9ca-4e92-87ca-8569929705cb",
      },
    });

    return memory;
  });

  app.delete("/memories/:id", async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(request.params);

    await Prisma.memory.delete({
      where: {
        id,
      },
    });
  });
}
