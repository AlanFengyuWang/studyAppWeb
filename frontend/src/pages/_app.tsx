import "../styles/globals.css";
import { NextComponentType, NextPage, NextPageContext } from "next";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider, getSession, useSession } from "next-auth/react";
import React, { ReactNode } from "react";
import AuthGuard from "./protected";

// export type NextApplicationPage<P = any, IP = P> = NextPage<P, IP> & {
//   requireAuth?: boolean;
// };

// function MyApp(props: AppProps) {
//   const {
//     Component,
//     pageProps,
//   }: { Component: NextApplicationPage; pageProps: any } = props;

//   return (
//     <>
//       <SessionProvider>
//         <ChakraProvider>
//           {/* if requireAuth property is present - protect the page */}
//           {/* {Component.requireAuth ? ()} */}
//           <AuthGuard>
//             <Component {...pageProps} />
//           </AuthGuard>
//         </ChakraProvider>
//       </SessionProvider>
//     </>
//   );
// }

// type AppProps = {
//   pageProps: any;
//   Component: NextComponentType<NextPageContext, any, {}> & { auth: boolean };
// };

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

// function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
//   console.log("component");
//   console.log("Component.auth = " + Component.auth);

//   return (
//     <>
//       <SessionProvider session={session}>
//         <ChakraProvider>
//           {/* <p>Hello</p> */}
//           {Component.auth ? (
//             <AuthGuard>
//               <Component {...pageProps} />
//             </AuthGuard>
//           ) : (
//             <Component {...pageProps} />
//           )}
//         </ChakraProvider>
//       </SessionProvider>
//     </>
//   );
// }

// MyApp.getInitialProps = async (
//   appContext: AppContext,
//   ctx: GetSessionParams
// ) => {
//   const appProps = await App.getInitialProps(appContext);
//   appProps.pageProps.session = await getSession(ctx);

//   return { props: { ...appProps } };
// };

export default MyApp;
