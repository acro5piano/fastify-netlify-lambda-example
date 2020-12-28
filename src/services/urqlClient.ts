import { createClient } from 'urql'

const host =
  process.env.NODE_ENV === 'production'
    ? 'https://fastify-netlify-lambda-example.netlify.app'
    : 'http://localhost:29754'

export const urqlClient = createClient({
  url: `${host}/.netlify/functions/graphql`,
})
