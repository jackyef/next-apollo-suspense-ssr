import { useSuspenseQuery } from "@apollo/client"
import { Suspense } from "react"
import { query, PokemonQueryResponseType, PokemonQueryVariablesType } from "./query"

const _Loader = () => <div>Loading...</div>
const _Content = () => {
  const { data } = useSuspenseQuery<PokemonQueryResponseType, PokemonQueryVariablesType>(query, {
    variables: {
      limit: 3
    },
    fetchPolicy: 'network-only'
  })

  return (
    data?.pokemon_v2_pokemon.map((pokemon) => (
      <div key={pokemon.id}>
        <div>{pokemon.name}</div>
      </div>
    ))
  )
}

type Props = {
  children?: React.ReactNode
}

export const SuspenseQueryComponent = ({ children }: Props) => {
  return (
    <Suspense fallback={<_Loader />}>
      <div>
        <_Content />

        {Boolean(children) && (
          <div className="mt-2 pl-4">
            <span className="font-bold">Nested children:</span>
            <div>{children}</div>
          </div>
        )}
      </div>
    </Suspense>
  )
}
