import { useQuery } from "@apollo/client"
import { query, PokemonQueryResponseType, PokemonQueryVariablesType } from "./query"

const _Loader = () => <div>Loading...</div>

type Props = {
  children?: React.ReactNode
  limit: number
}

export const QueryComponent = ({ children, limit }: Props) => {
  const { data, loading } = useQuery<PokemonQueryResponseType, PokemonQueryVariablesType>(query, {
    variables: {
      limit
    },
    fetchPolicy: 'network-only'
  })
  console.log('render QueryComponent')

  if (loading) return <_Loader />

  return (
    <div>
      {data?.pokemon_v2_pokemon.map((pokemon) => (
        <div key={pokemon.id}>
          <div>{pokemon.name}</div>
        </div>
      ))}

      {Boolean(children) && (
        <div className="mt-2 pl-4">
          <span className="font-bold">Nested children:</span>
          <div>{children}</div>
        </div>
      )}
    </div>
  )
}
