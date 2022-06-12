import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider, getSession, useSession } from "next-auth/react";
import type { GetSessionParams } from "next-auth/react";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("pageProps = " + pageProps);
  return (
    <>
      <SessionProvider session={pageProps ? pageProps.session : pageProps}>
        <ChakraProvider>
          {/* <p>Hello {pageProps}</p> */}
          <Component {...pageProps} />
        </ChakraProvider>
      </SessionProvider>
    </>
  );
}

MyApp.getInitialProps = async (ctx: GetSessionParams) => {
  return { props: { session: await getSession(ctx) } };
};

export default MyApp;
