import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
} from "@apollo/client";
const client = new ApolloClient({
	uri: "https://bluehappyface.net/api",
//	uri: "http://localhost:8081/api",
	cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
  	<ApolloProvider client={client}>
			<Component {...pageProps} />
  	</ApolloProvider>
  )
}

export default MyApp
