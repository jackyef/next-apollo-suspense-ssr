import { useQuery } from "@apollo/client"
import { query, PokemonQueryResponseType, PokemonQueryVariablesType } from "./query"

const _Loader = () => <div>Loading...</div>


export const QueryComponent = () => {
  const { data, loading } = useQuery<PokemonQueryResponseType, PokemonQueryVariablesType>(query, {
    variables: {
      limit: 5
    }
  })

  if (loading) return <_Loader />

  return (
    <div>
      {data?.pokemon_v2_pokemon.map((pokemon) => (
        <div key={pokemon.id}>
          <div>{pokemon.name}</div>
        </div>
      ))}
    </div>
  )
}
