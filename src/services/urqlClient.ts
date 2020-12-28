import { createClient } from 'urql'

export const urqlClient = createClient({
  url: 'http://localhost:29754/graphql',
})
