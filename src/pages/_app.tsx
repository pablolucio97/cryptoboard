import { Provider as NextAuthProvider } from "next-auth/client";
import { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";

import { Layout } from "../components/Layout";
import { DrawerProvider } from "../context/SidebarDrawerContext";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <ChakraProvider resetCSS={false} theme={theme}>
        <DrawerProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </DrawerProvider>
      </ChakraProvider>
    </NextAuthProvider>
  )
}

export default MyApp
