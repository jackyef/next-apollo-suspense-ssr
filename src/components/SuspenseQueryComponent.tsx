import { useSuspenseQuery } from "@apollo/client"
import { Suspense } from "react"
import { query, PokemonQueryResponseType, PokemonQueryVariablesType } from "./query"

const _Loader = () => <div>Loading...</div>
const _Content = ({ limit }: { limit: number }) => {
  const { data } = useSuspenseQuery<PokemonQueryResponseType, PokemonQueryVariablesType>(query, {
    variables: {
      limit
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
  limit: number
}

export const SuspenseQueryComponent = ({ children, limit}: Props) => {
  console.log('render SuspenseQueryComponent')
  return (
    <Suspense fallback={<_Loader />}>
      <div>
        <_Content limit={limit} />

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
