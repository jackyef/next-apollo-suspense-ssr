import '~/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { createApolloClient } from '~/lib/apollo'

const apolloClient = createApolloClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
