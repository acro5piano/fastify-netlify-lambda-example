import { app } from './app'
import test from 'ava'

const gql = ([a]: any) => a

test('app', async (t) => {
  const res = await app
    .inject()
    .post('/graphql')
    .body({
      query: gql`
        query {
          add(x: 1, y: 2)
        }
      `,
    })
    .end()
  t.deepEqual(res.json(), {
    data: {
      add: 3,
    },
  })
})
