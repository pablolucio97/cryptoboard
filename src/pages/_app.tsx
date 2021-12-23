import { AppProps } from "next/app";
import { Provider as NextAuthProvider } from "next-auth/client";

import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../styles/theme";
import { Layout } from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <ChakraProvider resetCSS={false} theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </NextAuthProvider>
  )
}

export default MyApp
