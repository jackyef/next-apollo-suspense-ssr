import { useQuery } from "@apollo/client"
import { query, PokemonQueryResponseType, PokemonQueryVariablesType } from "./query"

const _Loader = () => <div>Loading...</div>

type Props = {
  children?: React.ReactNode
}

export const QueryComponent = ({ children }: Props) => {
  const { data, loading } = useQuery<PokemonQueryResponseType, PokemonQueryVariablesType>(query, {
    variables: {
      limit: 5
    },
    fetchPolicy: 'network-only'
  })

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
