import "../styles/globals.css";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      {/* <Layout> */}
      <Component {...pageProps} />
      {/* </Layout> */}
    </ChakraProvider>
  );
}

export default MyApp;
