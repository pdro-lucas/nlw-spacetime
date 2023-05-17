import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'

const Prisma = new PrismaClient()

const app = fastify()

app.get('/', async (request, reply) => {
  const user = await Prisma.user.findMany()
  return { user }
})

app.listen({ port: 3333 }).then(() => {
  console.log('🚀 Server is running on http://localhost:3333')
})
