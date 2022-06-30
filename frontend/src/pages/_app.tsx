import "../styles/globals.css";
import { NextComponentType, NextPage, NextPageContext } from "next";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider, getSession, useSession } from "next-auth/react";
import React, { createContext, ReactNode, useState } from "react";
import AuthGuard from "./protected";
import { EmailProvider } from "./EmailContext";
import Layout from "../components/layout";

export type NextApplicationPage<P = any, IP = P> = NextPage<P, IP> & {
  noAuth?: boolean;
};

type AppProps = {
  pageProps: any;
  Component: NextApplicationPage;
};

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [email, setEmail] = useState<string>("");
  return (
    <>
      <SessionProvider session={session}>
        <ChakraProvider>
          <EmailProvider>
            {Component.noAuth ? (
              <Component {...pageProps} />
            ) : (
              <AuthGuard>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </AuthGuard>
            )}
          </EmailProvider>
        </ChakraProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
