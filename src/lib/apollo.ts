import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"

const GRAPHQL_HOST = 'https://beta.pokeapi.co/graphql/v1beta'

export const createApolloClient = (initialState = {}) => {
  const httpLink = createHttpLink({
    uri: GRAPHQL_HOST,
  })

  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(initialState),
  })
}
