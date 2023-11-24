import { gql } from "@apollo/client"

export const query = gql`
  query PokemonsQuery ($limit: Int!){
    pokemon_v2_pokemon(limit: $limit) {
      height
      id
      name
      order
      pokemon_species_id
    }
  }
`

export type PokemonQueryResponseType = {
  pokemon_v2_pokemon: Array<{
    height: number
    id: number
    name: string
    order: number
    pokemon_species_id: number
  }>
}

export type PokemonQueryVariablesType = {
  limit: number
}
