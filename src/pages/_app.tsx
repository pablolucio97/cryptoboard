import { AppProps } from "next/app";
import { Provider as NextAuthProvider } from "next-auth/client";
import { queryClient } from '../services/queryClient'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../styles/theme";
import { Layout } from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider resetCSS={false} theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </NextAuthProvider>
  )
}

export default MyApp
