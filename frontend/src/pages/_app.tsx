import "../styles/globals.css";
import { NextComponentType, NextPage, NextPageContext } from "next";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider, getSession, useSession } from "next-auth/react";
import React, { ReactNode } from "react";
import AuthGuard from "./protected";

export type NextApplicationPage<P = any, IP = P> = NextPage<P, IP> & {
  noAuth?: boolean;
};

type AppProps = {
  pageProps: any;
  Component: NextApplicationPage;
};

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <ChakraProvider>
          {/* <p>Hello</p> */}
          {Component.noAuth ? (
            <Component {...pageProps} />
          ) : (
            <AuthGuard>
              <Component {...pageProps} />
            </AuthGuard>
          )}
        </ChakraProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
