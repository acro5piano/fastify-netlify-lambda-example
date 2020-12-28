import Fastify from 'fastify'
import mercurius from 'mercurius'
import fastifyCors from 'fastify-cors'

const schema = `
  type Query {
    add(x: Int, y: Int): Int
  }
`

const resolvers = {
  Query: {
    add: async (_: any, { x, y }: { x: number; y: number }) => x + y,
  },
}

export const app = Fastify({ logger: true })

app.register(fastifyCors)
app.register(mercurius, {
  prefix: '/.netlify/functions',
  schema,
  resolvers,
})

if (require.main === module) {
  // called directly i.e. "ts-node server/app.js"
  app.listen(29754)
}
