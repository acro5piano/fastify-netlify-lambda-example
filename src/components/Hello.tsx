import { gql, useQuery } from 'urql'

const QUERY = gql`
  query Hello {
    add(x: 1, y: 2)
  }
`

export function Hello() {
  const [{ data }] = useQuery({
    query: QUERY,
  })

  return <div>{JSON.stringify(data)}</div>
}
