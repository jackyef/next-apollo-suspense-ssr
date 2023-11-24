import { useSuspenseQuery } from "@apollo/client"
import { Suspense } from "react"
import { query, PokemonQueryResponseType, PokemonQueryVariablesType } from "./query"

const _Loader = () => <div>Loading...</div>
const _Content = () => {
  const { data } = useSuspenseQuery<PokemonQueryResponseType, PokemonQueryVariablesType>(query, {
    variables: {
      limit: 3
    }
  })

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


export const SuspenseQueryComponent = () => {
  return (
    <Suspense fallback={<_Loader />}>
      <_Content />
    </Suspense>
  )
}
